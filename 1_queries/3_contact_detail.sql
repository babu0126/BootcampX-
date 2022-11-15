SELECT name, id
FROM students
WHERE email IS NULL OR cohort_id IS NULL;