-- SQL schema for jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  job_title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  job_type VARCHAR(50) NOT NULL,
  salary_min INTEGER,
  salary_max INTEGER,
  application_deadline DATE,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
); 