SELECT day, count(assignments.*) AS total_of_assignments, SUM(assignments.duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;