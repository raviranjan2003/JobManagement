import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const {
    jobTitle,
    company,
    location,
    jobType,
    salaryMin,
    salaryMax,
    applicationDeadline,
    description,
  } = data;

  try {
    const result = await pool.query(
      `INSERT INTO jobs
        (job_title, company, location, job_type, salary_min, salary_max, application_deadline, description)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [
        jobTitle,
        company,
        location,
        jobType,
        salaryMin,
        salaryMax,
        applicationDeadline,
        description,
      ]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create job', details: err }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  let query = 'SELECT * FROM jobs WHERE 1=1';
  const params: any[] = [];
  let idx = 1;

  const filters = [
    { key: 'location', column: 'location' },
    { key: 'jobType', column: 'job_type' },
    { key: 'company', column: 'company', ilike: true },
    { key: 'minSalary', column: 'salary_min', op: '>=' },
    { key: 'maxSalary', column: 'salary_max', op: '<=' },
    { key: 'search', column: 'job_title', ilike: true, or: 'description' },
  ];

  filters.forEach(f => {
    const value = searchParams.get(f.key);
    if (value) {
      if (f.key === 'search') {
        query += ` AND (job_title ILIKE $${idx} OR description ILIKE $${idx})`;
        params.push(`%${value}%`);
        idx++;
      } else if (f.ilike) {
        query += ` AND ${f.column} ILIKE $${idx}`;
        params.push(`%${value}%`);
        idx++;
      } else if (f.op) {
        query += ` AND ${f.column} ${f.op} $${idx}`;
        params.push(value);
        idx++;
      } else {
        query += ` AND ${f.column} = $${idx}`;
        params.push(value);
        idx++;
      }
    }
  });

  query += ' ORDER BY created_at DESC';

  try {
    const result = await pool.query(query, params);
    return NextResponse.json(result.rows);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch jobs', details: err }, { status: 500 });
  }
} 