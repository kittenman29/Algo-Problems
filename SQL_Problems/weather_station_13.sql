-- Query the sum of Northern Latitudes (LAT_N) from STATION having values greater than  and less than . Truncate your answer to  decimal places.

-- Input Format

-- The STATION table is described as follows:

-- Station.jpg

-- where LAT_N is the northern latitude and LONG_W is the western longitude.


SELECT CAST(SUM(LAT_N) As DECIMAL(18,4)) FROM STATION
WHERE LAT_N BETWEEN 38.7880 and 137.2345