USE booklist;

DROP TABLE IF EXISTS books;
CREATE TABLE books

(
    id          int unsigned NOT NULL auto_increment,   # Unique ID for the record
    title       varchar(255) NOT NULL,                  # Title of books
    author      varchar(255) NOT NULL,                  # Authot of books
    price       decimal(10,2) NOT NULL,                 # price of book
    
    PRIMARY KEY (id)
);