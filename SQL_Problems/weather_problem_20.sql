-- A median is defined as a number separating the higher half of a data set from the lower half. Query the median of the Northern Latitudes (LAT_N) from STATION and round your answer to  decimal places.

-- Input Format

-- The STATION table is described as follows:

-- Station.jpg

-- where LAT_N is the northern latitude and LONG_W is the western longitude.






SELECT CAST (ROUND( 
    ( 
        (SELECT MAX(LAT_N) FROM 
            (SELECT TOP 50 PERCENT LAT_N FROM STATION ORDER BY LAT_N) AS BottomHalf) 
        + 
        (SELECT MIN(LAT_N) FROM 
            (SELECT TOP 50 PERCENT LAT_N FROM STATION ORDER BY LAT_N DESC) AS TopHalf) 
    ) / 2 ,4) AS NUMERIC (12,4)
)
