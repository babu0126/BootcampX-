SELECT day, COUNT(*) AS total_assingments
FROM assignments
GROUP BY day
ORDER BY day;