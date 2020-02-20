-- Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than . Round your answer to  decimal places.

-- Input Format

-- The STATION table is described as follows:

-- Station.jpg

-- where LAT_N is the northern latitude and LONG_W is the western longitude.


SELECT TOP 1 CAST(LONG_W As DECIMAL(18,4)) FROM STATION
WHERE LAT_N < 137.2345
ORDER BY LAT_N DESC