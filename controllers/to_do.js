const express = require('express')

const router = express.Router()

router.get('/', function(req, res){
    res.send('GET')
})

router.post('/', function(req, res, next){
    res.send('POST')
})

router.delete('/:id', function(req, res, next){
    res.send('DELETE')
})

module.exports = router;