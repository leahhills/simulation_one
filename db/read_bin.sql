SELECT * FROM Items
WHERE lower(ItemLocation) = lower($1);