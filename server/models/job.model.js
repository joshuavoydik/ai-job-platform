const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
