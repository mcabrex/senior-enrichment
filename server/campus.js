const express = require('express');
const router = express.Router();
module.exports = router;
const Campus = require('../db/models/').Campus;
const Student = require('../db/models').Student;

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campus => {
      res.json(campus);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	Campus.findOne({
		include: [{model: Student}],
		where: {
			id: id
		}
	})
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
})

router.post('/',(req,res,next)=>{
  Campus.create(req.body)
  .then(createdStudent => {
    res.json(createdStudent);
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log('DELETED ID', id)
  Student.destroy({
    where: {
      id: id
    }
  })
    .then(() => {
      res.send('deleted');
    })
    .catch(next);
});
