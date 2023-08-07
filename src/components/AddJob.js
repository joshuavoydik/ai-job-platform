import React, { useState } from 'react';

function AddJob() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    // This is where you'd handle the form submission,
    // e.g., send the job data to the backend API.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input type="text" name="title" value={job.title} onChange={handleChange} />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={job.company} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={job.location} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={job.category} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={job.description} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddJob;

