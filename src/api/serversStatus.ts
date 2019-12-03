import cp from 'child_process'
import express from 'express'
import environment from '../helpers/environment'
import util from 'util'

const statusRouter = express.Router()
const exec = util.promisify(cp.exec)
const { isProduction } = environment

statusRouter.get('/', async (req, res) => {
  try {
    if (isProduction()) {
      const data = await exec('su - myproxy -c "pm2 jlist"')
      res.json(
        JSON.parse(data.stdout).reduce((statusObj, el) => ({
          [el.name]: el.pm2_env.status
        }))
      )
    } else {
      res.json({})
    }
  } catch (err) {
    res.status(500).send({ err })
  }
})

export default statusRouter
