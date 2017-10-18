DELETE FROM Shelf WHERE shelfid = ($1);
DELETE FROM Bin WHERE shelfId = $1