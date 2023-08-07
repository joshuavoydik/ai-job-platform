const router = require('express').Router();
let Job = require('../models/job.model');

router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const company = req.body.company;
  const location = req.body.location;
  const category = req.body.category;
  const description = req.body.description;

  const newJob = new Job({
    title,
    company,
    location,
    category,
    description,
  });

  newJob.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
