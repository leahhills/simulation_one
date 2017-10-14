SELECT * FROM Items 
WHERE lower(SUBSTRING (itemlocation,1,1)) = lower($1);