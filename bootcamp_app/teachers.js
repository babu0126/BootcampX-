const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = args[2] || 'JUL02';
const values = [`%${cohort}%`];


const queryString = `SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;`;


pool.query(queryString, values)
.then(res => {
  res.rows.forEach((user) => {
    console.log(`${user.cohort}: ${user.teacher}`);
  });
}).catch(err => console.error('query error', err.stack));