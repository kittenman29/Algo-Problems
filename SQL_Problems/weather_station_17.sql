-- Query the Western Longitude (LONG_W)where the smallest Northern Latitude (LAT_N) in STATION is greater than . Round your answer to  decimal places.

-- Input Format

-- The STATION table is described as follows:

-- Station.jpg

-- where LAT_N is the northern latitude and LONG_W is the western longitude.



SELECT TOP 1 CAST(LONG_W AS DECIMAL(18,4)) FROM STATION
WHERE LAT_N > 38.7780
ORDER BY LAT_N