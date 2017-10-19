
DROP TABLE IF EXISTS Shelf;
DROP TABLE IF EXISTS Bin;

CREATE TABLE Shelf (
    ShelfId Serial,
    ShelfName Text NOT NULL
);

CREATE TABLE Bin (
    BinId Serial,
    BinName Text NOT NULL,
    ShelfId Integer NOT NULL,
    BinItemName  Text NULL,
    BinItemPrice Integer NULL
);


INSERT INTO Shelf(ShelfName)
VALUES
    ('Shelf A'),
    ('Shelf B'),
    ('Shelf C'),
    ('Shelf D');

INSERT INTO Bin(BinName, ShelfId)
VALUES
    ('Bin 1', 1),
    ('Bin 2', 1),
    ('Bin 3', 1),
    ('Bin 4', 1),
    ('Bin 5', 1),
    
    ('Bin 1', 2),
    ('Bin 2', 2),
    ('Bin 3', 2),
    ('Bin 4', 2),
    ('Bin 5', 2),  
    
    ('Bin 1', 3),
    ('Bin 2', 3),
    ('Bin 3', 3),
    ('Bin 4', 3),
    ('Bin 5', 3),

    ('Bin 1', 4),
    ('Bin 2', 4),
    ('Bin 3', 4),
    ('Bin 4', 4),
    ('Bin 5', 4),
    ('Bin 6', 4),
    ('Bin 7', 4);
  


