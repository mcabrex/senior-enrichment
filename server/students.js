const express = require('express');
const router = express.Router();
module.exports = router;
const Student = require('../db/models').Student;
const Campus = require('../db/models/').Campus;

router.get('/',(req,res,next)=>{
  Student.findAll({ include: [{ all: true }] })
    .then(students=>{
      res.json(students)
    })
    .catch(next)
})

router.get('/:id',(req,res,next)=>{
  const id = req.params.id;
  Student.findOne({
    include: [{model: Campus}],
    where: {
      id: id
    }
  })
  .then(campus=>{
    res.json(campus)
  })
  .catch(next)
})
