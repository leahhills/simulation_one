UPDATE Items 
SET itemname=$2, itemprice=$3 
WHERE lower(itemlocation) = lower($1);