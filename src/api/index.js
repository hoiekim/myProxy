import express from 'express'
//const express = require('express')
const router = express.Router()
const adminRouter = require('./admin')
console.log('adminRouter', adminRouter)
router.use('/admin', adminRouter)

module.exports = router;
