DELETE FROM Shelf WHERE shelfid = ($1);
delete from bin where shelfId = $1