const quizData = [
            {
                question: "Which SQL command is used to retrieve data from a database?",
                options: {
                    A: "INSERT",
                    B: "DELETE", 
                    C: "SELECT",
                    D: "UPDATE"
                },
                correct: "C",
                explanation: "The SELECT command is used to retrieve data from one or more tables in a database."
            },
            {
                question: "Which SQL statement is used to remove a table from the database?",
                options: {
                    A: "DELETE TABLE",
                    B: "DROP TABLE",
                    C: "REMOVE TABLE",
                    D: "CLEAR TABLE"
                },
                correct: "B",
                explanation: "The DROP TABLE statement is used to delete an existing table from the database."
            },
            {
                question: "Which keyword is used to sort the result set in ascending order?",
                options: {
                    A: "SORT",
                    B: "ORDER",
                    C: "ORDER BY",
                    D: "SORT BY"
                },
                correct: "C",
                explanation: "The ORDER BY keyword is used in SQL to sort the result set in ascending or descending order."
            },
            {
                question: "How can you fetch unique values from a column?",
                options: {
                    A: "UNIQUE",
                    B: "DISTINCT",
                    C: "SINGLE",
                    D: "UNO"
                },
                correct: "B",
                explanation: "The DISTINCT keyword is used to fetch unique values from a column in a table."
            },
            {
                question: "Which of the following SQL commands will delete all records from a table named customers but retain the table structure?",
                options: {
                    A: "DROP TABLE customers;",
                    B: "TRUNCATE TABLE customers;",
                    C: "DELETE TABLE customers;",
                    D: "REMOVE ALL FROM customers;"
                },
                correct: "B",
                explanation: "The TRUNCATE TABLE command removes all records from a table but retains its structure for future use."
            },
            {
                question: "In which SQL command would you use the WHERE clause?",
                options: {
                    A: "INSERT",
                    B: "UPDATE",
                    C: "CREATE",
                    D: "ALTER"
                },
                correct: "B",
                explanation: "The WHERE clause is commonly used in UPDATE (and SELECT and DELETE) to filter records based on a condition."
            },
            {
                question: "What is the default sort order of the ORDER BY clause?",
                options: {
                    A: "DESC",
                    B: "ASC",
                    C: "RANDOM",
                    D: "NONE"
                },
                correct: "B",
                explanation: "By default, the ORDER BY clause sorts the records in ascending order."
            },
            {
                question: "Which SQL command is used to add a new column to an existing table?",
                options: {
                    A: "ADD COLUMN",
                    B: "NEW COLUMN",
                    C: "INSERT COLUMN",
                    D: "ALTER TABLE"
                },
                correct: "D",
                explanation: "The ALTER TABLE command is used to add, delete, or modify columns in an existing table."
            },
            {
                question: "Which data type is used to store text values in MySQL?",
                options: {
                    A: "CHAR",
                    B: "INT",
                    C: "FLOAT",
                    D: "BOOL"
                },
                correct: "A",
                explanation: "In MySQL, the CHAR and VARCHAR data types are used to store text values."
            },
            {
                question: "Which keyword is used to join two tables in SQL?",
                options: {
                    A: "CONNECT",
                    B: "LINK",
                    C: "JOIN",
                    D: "COMBINE"
                },
                correct: "C",
                explanation: "The JOIN keyword is used in SQL to combine rows from two or more tables based on a related column."
            },
            {
                question: "Which MySQL function returns the current date and time?",
                options: {
                    A: "NOW()",
                    B: "DATE()",
                    C: "TODAY()",
                    D: "TIMESTAMP()"
                },
                correct: "A",
                explanation: "The NOW() function returns the current date and time."
            },
            {
                question: "What does SQL stand for?",
                options: {
                    A: "Structured Quality Language",
                    B: "Simple Query Logic",
                    C: "Structured Query Language",
                    D: "System Query Language"
                },
                correct: "C",
                explanation: "SQL stands for Structured Query Language, used to communicate with databases."
            },
            {
                question: "Which command is used to create a new database in MySQL?",
                options: {
                    A: "CREATE NEW DATABASE",
                    B: "ADD DATABASE",
                    C: "NEW DATABASE",
                    D: "CREATE DATABASE"
                },
                correct: "D",
                explanation: "The CREATE DATABASE command is used to create a new database."
            },
            {
                question: "Which operator is used to compare if two values are not equal?",
                options: {
                    A: "!=",
                    B: "<>",
                    C: "><",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "In SQL, both != and <> operators are used to indicate not equal."
            },
            {
                question: "Which MySQL data type is used to store large blocks of text?",
                options: {
                    A: "TEXT",
                    B: "CHAR",
                    C: "BIGCHAR",
                    D: "LARGETEXT"
                },
                correct: "A",
                explanation: "The TEXT data type in MySQL is used to store large blocks of text."
            },
            {
                question: "Which SQL clause is used to filter the results returned by a query?",
                options: {
                    A: "SORT BY",
                    B: "FILTER BY",
                    C: "WHERE",
                    D: "HAVING"
                },
                correct: "C",
                explanation: "The WHERE clause is used to filter query results based on specified conditions."
            },
            {
                question: "Which command is used to back up a MySQL database?",
                options: {
                    A: "BACKUP DATABASE",
                    B: "SAVE DATABASE",
                    C: "mysqldump",
                    D: "mysqlsave"
                },
                correct: "C",
                explanation: "mysqldump is a command-line utility to take backups of MySQL databases."
            },
            {
                question: "Which SQL statement is used to insert a new record in a table?",
                options: {
                    A: "ADD RECORD",
                    B: "INSERT NEW",
                    C: "INSERT INTO",
                    D: "ADD INTO"
                },
                correct: "C",
                explanation: "The INSERT INTO statement is used to add a new record to a table."
            },
            {
                question: "What type of JOIN returns only rows when there is at least one match in both tables?",
                options: {
                    A: "LEFT JOIN",
                    B: "RIGHT JOIN",
                    C: "INNER JOIN",
                    D: "FULL JOIN"
                },
                correct: "C",
                explanation: "An INNER JOIN fetches rows when there is at least one match in both tables."
            },
            {
                question: "Which MySQL function can be used to return the length of a string?",
                options: {
                    A: "LENGTH()",
                    B: "SIZE()",
                    C: "STRLEN()",
                    D: "COUNT()"
                },
                correct: "A",
                explanation: "The LENGTH() function is used to obtain the length of a string in MySQL."
            },
            {
                question: "Which keyword can be used to specify a unique constraint for a table column?",
                options: {
                    A: "UNIQUE",
                    B: "DISTINCT",
                    C: "SINGLE",
                    D: "RARE"
                },
                correct: "A",
                explanation: "The UNIQUE keyword ensures that all values in a column are distinct."
            },
            {
                question: "In MySQL, which command is used to return the version of the MySQL server?",
                options: {
                    A: "SELECT VERSION();",
                    B: "GET VERSION();",
                    C: "SELECT MYSQLVERSION();",
                    D: "SELECT SERVER();"
                },
                correct: "A",
                explanation: "SELECT VERSION(); returns the version of the MySQL server."
            },
            {
                question: "Which SQL statement is used to update data in a database?",
                options: {
                    A: "REFRESH",
                    B: "MODIFY",
                    C: "REPLACE",
                    D: "UPDATE"
                },
                correct: "D",
                explanation: "The UPDATE statement is used to modify existing records in a table."
            },
            {
                question: "Which of the following is not a valid SQL data type?",
                options: {
                    A: "FLOAT",
                    B: "CHAR",
                    C: "SINGLE",
                    D: "DECIMAL"
                },
                correct: "C",
                explanation: "SINGLE is not a valid SQL data type."
            },
            {
                question: "Which clause is used with the GROUP BY clause to filter grouped results in SQL?",
                options: {
                    A: "WHERE",
                    B: "ORDER BY",
                    C: "HAVING",
                    D: "LIKE"
                },
                correct: "C",
                explanation: "The HAVING clause is used to filter results after data has been grouped with the GROUP BY clause."
            },
            {
                question: "Which of the following is used to make a column's value automatically increase for each new record?",
                options: {
                    A: "AUTOINCREMENT",
                    B: "AUTOADD",
                    C: "INCREMENTAL",
                    D: "ADDAUTO"
                },
                correct: "A",
                explanation: "The AUTOINCREMENT attribute automatically increases the value of the column for each new record."
            },
            {
                question: "How do you select all columns from a table named 'students'?",
                options: {
                    A: "SELECT * INTO students;",
                    B: "SELECT students.*;",
                    C: "SELECT ALL FROM students;",
                    D: "SELECT * FROM students;"
                },
                correct: "D",
                explanation: "The SELECT * FROM statement retrieves all columns from the specified table."
            },
            {
                question: "What would be the result of the following SQL query: SELECT UPPER('mysql');?",
                options: {
                    A: "mysql",
                    B: "MYSQL",
                    C: "UPPER",
                    D: "None of the above"
                },
                correct: "B",
                explanation: "The UPPER() function converts all characters of a string to uppercase."
            },
            {
                question: "Which SQL function is used to round a number?",
                options: {
                    A: "ROUND",
                    B: "RND",
                    C: "CIRCLE",
                    D: "LOOP"
                },
                correct: "A",
                explanation: "The ROUND() function is used to round a number to the nearest whole number or to a specified number of decimals."
            },
            {
                question: "Which of the following is not an SQL aggregate function?",
                options: {
                    A: "COUNT()",
                    B: "MAX()",
                    C: "CONCAT()",
                    D: "SUM()"
                },
                correct: "C",
                explanation: "CONCAT() is a string function used to concatenate two or more strings, whereas the others are aggregate functions."
            },
            {
                question: "Which command is used to remove a specific row from a table?",
                options: {
                    A: "REMOVE",
                    B: "DELETE",
                    C: "DROP",
                    D: "CLEAR"
                },
                correct: "B",
                explanation: "The DELETE command is used to remove specific rows from a table based on conditions."
            },
            {
                question: "What does MySQL primarily function as?",
                options: {
                    A: "A web server",
                    B: "A database management system",
                    C: "A programming language",
                    D: "A browser"
                },
                correct: "B",
                explanation: "MySQL is primarily a relational database management system (RDBMS) used for storing and managing data."
            },
            {
                question: "Which SQL statement is used to remove data from a MySQL database?",
                options: {
                    A: "DELETE",
                    B: "REMOVE",
                    C: "CLEAR",
                    D: "ERASE"
                },
                correct: "A",
                explanation: "The DELETE statement is used to remove data from a MySQL database."
            },
            {
                question: "Which command is used to access a MySQL database via command line?",
                options: {
                    A: "mysql -u user -p",
                    B: "ssh database",
                    C: "connect to mysql",
                    D: "open mysql"
                },
                correct: "A",
                explanation: "The command 'mysql -u user -p' is used to access a MySQL database via the command line, where -u specifies the username and -p prompts for the password."
            },
            {
                question: "MySQL belongs to which category of database management systems?",
                options: {
                    A: "Hierarchical DBMS",
                    B: "Network DBMS",
                    C: "Relational DBMS",
                    D: "Object-oriented DBMS"
                },
                correct: "C",
                explanation: "MySQL is a relational database management system (RDBMS) that organizes data into tables with relationships between them."
            },
            {
                question: "In MySQL, what does the AUTO_INCREMENT attribute automatically add to a column?",
                options: {
                    A: "Random numbers",
                    B: "A timestamp",
                    C: "Unique identifiers incrementally",
                    D: "Fixed numbers"
                },
                correct: "C",
                explanation: "The AUTO_INCREMENT attribute automatically generates unique numeric values for a column, incrementing by 1 for each new record."
            },
            {
                question: "What does the following MySQL command do? CREATE DATABASE SampleDB;",
                options: {
                    A: "Creates a new table named SampleDB",
                    B: "Creates a new schema named SampleDB",
                    C: "Creates a new database named SampleDB",
                    D: "Deletes the database SampleDB"
                },
                correct: "C",
                explanation: "The CREATE DATABASE SampleDB command creates a new database named SampleDB in MySQL."
            },
            {
                question: "Identify the issue in the following SQL statement: SELECT FROM users WHERE username='admin';",
                options: {
                    A: "SELECT clause is incomplete",
                    B: "WHERE clause is incorrect",
                    C: "Syntax is correct",
                    D: "Missing semicolon"
                },
                correct: "A",
                explanation: "The SELECT clause is incomplete because it doesn't specify which columns to retrieve. It should be something like 'SELECT * FROM users' or 'SELECT username FROM users'."
            },
            {
                question: "Which SQL clause is used to filter the records returned from a SQL query?",
                options: {
                    A: "FROM",
                    B: "WHERE",
                    C: "SELECT",
                    D: "ORDER BY"
                },
                correct: "B",
                explanation: "The WHERE clause is used to filter records based on specified conditions in a SQL query."
            },
            {
                question: "SQL keywords are case sensitive.",
                options: {
                    A: "All keywords are sensitive",
                    B: "Some are sensitive",
                    C: "None are sensitive",
                    D: "Depends on version"
                },
                correct: "C",
                explanation: "SQL keywords are not case sensitive. SELECT, select, and Select are all treated the same way."
            },
            {
                question: "What does the DISTINCT keyword do in a SQL query?",
                options: {
                    A: "Removes duplicates from results",
                    B: "Creates a distinct file",
                    C: "Orders results",
                    D: "Counts rows"
                },
                correct: "A",
                explanation: "The DISTINCT keyword is used to return only distinct (different) values, removing duplicates from the result set."
            },
            {
                question: "What type of SQL statement is used to add new data into a database?",
                options: {
                    A: "CREATE",
                    B: "SELECT",
                    C: "INSERT",
                    D: "UPDATE"
                },
                correct: "C",
                explanation: "The INSERT statement is used to add new data (rows) into a database table."
            },
            {
                question: "What does the GROUP BY statement do in a SQL query?",
                options: {
                    A: "Groups data based on one or more columns",
                    B: "Sorts the output",
                    C: "Deletes groups of data",
                    D: "Modifies data in a group"
                },
                correct: "A",
                explanation: "The GROUP BY statement groups rows that have the same values in specified columns into summary rows."
            },
            {
                question: "Which SQL statement is used to change data in an existing row?",
                options: {
                    A: "INSERT",
                    B: "UPDATE",
                    C: "ALTER",
                    D: "CREATE"
                },
                correct: "B",
                explanation: "The UPDATE statement is used to modify existing data in rows of a table."
            },
            {
                question: "What is the default sort order of the ORDER BY statement in SQL?",
                options: {
                    A: "Ascending",
                    B: "Descending",
                    C: "Random",
                    D: "Fixed"
                },
                correct: "A",
                explanation: "The default sort order for ORDER BY is ascending (ASC). You must explicitly specify DESC for descending order."
            },
            {
                question: "What is the result of the following SQL query? SELECT 15 + 25;",
                options: {
                    A: "40",
                    B: "'15 + 25'",
                    C: "15",
                    D: "25"
                },
                correct: "A",
                explanation: "The query performs arithmetic addition and returns the result 40."
            },
            {
                question: "Consider the following SQL command: DELETE FROM Customers WHERE CustomerID = 3; What does it do?",
                options: {
                    A: "Deletes the customer record with CustomerID 3",
                    B: "Deletes all records from Customers",
                    C: "Updates CustomerID to 3",
                    D: "None of the above"
                },
                correct: "A",
                explanation: "This command deletes only the specific customer record where CustomerID equals 3, not all records."
            },
            {
                question: "What does the following SQL command achieve? UPDATE Products SET Price = Price * 1.1 WHERE Category = 'Electronics';",
                options: {
                    A: "Increases the price of all products by 10%",
                    B: "Decreases the price of all products by 10%",
                    C: "Increases the price of electronics products by 10%",
                    D: "None of the above"
                },
                correct: "C",
                explanation: "This command increases the price by 10% (multiplies by 1.1) only for products in the 'Electronics' category."
            },
            {
                question: "Identify the error in this SQL statement: INSERT INTO Order (ID, Product) VALUES (101, 'Laptop');",
                options: {
                    A: "Table name should be Orders",
                    B: "Syntax is correct",
                    C: "Missing semicolon at the end",
                    D: "The Product column does not exist"
                },
                correct: "A",
                explanation: "'Order' is a reserved SQL keyword. When used as a table name, it should be enclosed in backticks or the name should be changed to something like 'Orders'."
            },
            {
                question: "Which data type in MySQL is used to store boolean values?",
                options: {
                    A: "TINYINT",
                    B: "SMALLINT",
                    C: "VARCHAR",
                    D: "BOOLEAN"
                },
                correct: "D",
                explanation: "MySQL has a BOOLEAN data type, which is a synonym for TINYINT(1), where 1 represents TRUE and 0 represents FALSE."
            },
            {
                question: "What is the purpose of the VARCHAR data type in MySQL?",
                options: {
                    A: "To store fixed-length strings",
                    B: "To store variable-length strings",
                    C: "To store large text objects",
                    D: "To store integers"
                },
                correct: "B",
                explanation: "VARCHAR is used to store variable-length strings, meaning it only uses as much space as needed for the actual data."
            },
            {
                question: "Which data type would be best for storing an email address?",
                options: {
                    A: "CHAR(50)",
                    B: "VARCHAR(100)",
                    C: "TEXT",
                    D: "BLOB"
                },
                correct: "B",
                explanation: "VARCHAR(100) is ideal for email addresses as it allows variable length up to 100 characters, which is sufficient for most email addresses."
            },
            {
                question: "What is the main difference between CHAR and VARCHAR data types in MySQL?",
                options: {
                    A: "CHAR stores binary data, VARCHAR does not",
                    B: "CHAR has unlimited length, VARCHAR is limited",
                    C: "CHAR is variable-length, VARCHAR is fixed-length",
                    D: "CHAR is fixed-length, VARCHAR is variable-length"
                },
                correct: "D",
                explanation: "CHAR is fixed-length and always uses the specified length, while VARCHAR is variable-length and only uses the space needed for the actual data."
            },
            {
                question: "In MySQL, which data type is most appropriate for storing monetary values?",
                options: {
                    A: "DECIMAL",
                    B: "FLOAT",
                    C: "DOUBLE",
                    D: "INTEGER"
                },
                correct: "A",
                explanation: "DECIMAL is the best choice for monetary values because it provides exact precision, avoiding floating-point rounding errors."
            },
            {
                question: "What is the primary use of the ENUM data type in MySQL?",
                options: {
                    A: "To store arrays",
                    B: "To limit input to a list of possible values",
                    C: "To create a queue structure",
                    D: "To log changes"
                },
                correct: "B",
                explanation: "ENUM is used to define a column that can only contain one value from a predefined list of possible values."
            },
            {
                question: "Which SQL statement correctly creates a table with a column for storing binary data?",
                options: {
                    A: "CREATE TABLE Files (Data CHAR(64));",
                    B: "CREATE TABLE Files (Data BINARY(64));",
                    C: "CREATE TABLE Files (Data TEXT);",
                    D: "CREATE TABLE Files (Data BLOB);"
                },
                correct: "D",
                explanation: "BLOB (Binary Large Object) is the correct data type for storing binary data in MySQL. BINARY is for fixed-length binary strings, while BLOB is for variable-length binary data."
            },
            {
                question: "Consider the following SQL statement: ALTER TABLE Employees ADD COLUMN Birthdate DATE; What does this statement do?",
                options: {
                    A: "Adds a new row called Birthdate",
                    B: "Changes the data type of Birthdate",
                    C: "Adds a new column Birthdate to store dates",
                    D: "Deletes the Birthdate column"
                },
                correct: "C",
                explanation: "This ALTER TABLE statement adds a new column named 'Birthdate' with the DATE data type to the Employees table."
            },
            {
                question: "What does the following SQL command achieve? CREATE TABLE Orders (OrderID INT, OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP);",
                options: {
                    A: "Creates a table with two columns without defaults",
                    B: "Creates a table and sets a default timestamp for OrderDate",
                    C: "Creates a table and makes OrderDate a primary key",
                    D: "None of the above"
                },
                correct: "B",
                explanation: "This command creates a table where OrderDate will automatically be set to the current timestamp if no value is provided during insertion."
            },
            {
                question: "What is incorrect in the following SQL statement? CREATE TABLE Users (ID INT, Name CHAR(20), Email VARHCAR(100));",
                options: {
                    A: "Spelling mistake in data type for Email",
                    B: "ID should be VARCHAR",
                    C: "Name should be TEXT",
                    D: "Syntax is correct"
                },
                correct: "A",
                explanation: "There's a spelling mistake in 'VARHCAR' - it should be 'VARCHAR'."
            },
            {
                question: "Identify the error in this SQL command: CREATE TABLE Products (ProductID INT, Price DECIMAL(5));",
                options: {
                    A: "DECIMAL definition is incomplete",
                    B: "Price should be an INTEGER",
                    C: "ProductID should be a TEXT",
                    D: "No error"
                },
                correct: "A",
                explanation: "DECIMAL requires two parameters: precision and scale. It should be something like DECIMAL(10,2) meaning 10 total digits with 2 decimal places."
            },
            {
                question: "Which SQL statement is used to read data from a database?",
                options: {
                    A: "SELECT",
                    B: "INSERT",
                    C: "UPDATE",
                    D: "DELETE"
                },
                correct: "A",
                explanation: "The SELECT statement is used to retrieve and read data from a database."
            },
            {
                question: "What is the purpose of the PRIMARY KEY constraint in MySQL?",
                options: {
                    A: "To allow duplicate values",
                    B: "To uniquely identify each record",
                    C: "To create indexes automatically",
                    D: "To improve query performance"
                },
                correct: "B",
                explanation: "The PRIMARY KEY constraint uniquely identifies each record in a table and must contain unique values, and cannot contain NULL values."
            },
            {
                question: "Which SQL operator is used to search for a specified pattern in a column?",
                options: {
                    A: "=",
                    B: "LIKE",
                    C: "IN",
                    D: "BETWEEN"
                },
                correct: "B",
                explanation: "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column, often with wildcard characters % and _."
            },
            {
                question: "What does the following SQL query return? SELECT COUNT(*) FROM users;",
                options: {
                    A: "All records from users table",
                    B: "Number of records in users table",
                    C: "Sum of all values in users table",
                    D: "Average number of records"
                },
                correct: "B",
                explanation: "COUNT(*) returns the total number of records (rows) in the users table."
            },
            {
                question: "Which SQL clause is used to limit the number of rows returned?",
                options: {
                    A: "TOP",
                    B: "LIMIT",
                    C: "FETCH",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both TOP (used in SQL Server) and LIMIT (used in MySQL/PostgreSQL) are used to limit the number of rows returned by a query."
            },
            {
                question: "What is the purpose of the FOREIGN KEY constraint?",
                options: {
                    A: "To link two tables together",
                    B: "To create primary keys",
                    C: "To improve performance",
                    D: "To allow NULL values"
                },
                correct: "A",
                explanation: "A FOREIGN KEY is a key used to link two tables together, referencing the PRIMARY KEY of another table."
            },
            {
                question: "Which MySQL function returns the average value of a numeric column?",
                options: {
                    A: "SUM()",
                    B: "AVG()",
                    C: "MEAN()",
                    D: "MEDIAN()"
                },
                correct: "B",
                explanation: "The AVG() function returns the average value of a numeric column."
            },
            {
                question: "What does the following SQL statement do? CREATE INDEX idx_name ON users (name);",
                options: {
                    A: "Creates a new table named idx_name",
                    B: "Creates an index on the name column",
                    C: "Creates a primary key",
                    D: "Creates a foreign key"
                },
                correct: "B",
                explanation: "This statement creates an index named 'idx_name' on the 'name' column of the 'users' table to improve query performance."
            },
            {
                question: "Which SQL statement is used to modify an existing table?",
                options: {
                    A: "MODIFY TABLE",
                    B: "CHANGE TABLE",
                    C: "ALTER TABLE",
                    D: "UPDATE TABLE"
                },
                correct: "C",
                explanation: "The ALTER TABLE statement is used to add, delete, or modify columns in an existing table."
            },
            {
                question: "What is the result of NULL + 5 in MySQL?",
                options: {
                    A: "5",
                    B: "0",
                    C: "NULL",
                    D: "Error"
                },
                correct: "C",
                explanation: "Any arithmetic operation involving NULL results in NULL in MySQL."
            },
            {
                question: "Which MySQL function returns the current date?",
                options: {
                    A: "NOW()",
                    B: "CURDATE()",
                    C: "CURRENT_DATE()",
                    D: "Both B and C"
                },
                correct: "D",
                explanation: "Both CURDATE() and CURRENT_DATE() return the current date without the time component."
            },
            {
                question: "What does the following SQL query do? SELECT name FROM users ORDER BY name DESC;",
                options: {
                    A: "Selects names in ascending order",
                    B: "Selects names in descending order",
                    C: "Selects all columns from users",
                    D: "Deletes names from users"
                },
                correct: "B",
                explanation: "This query selects the 'name' column from the 'users' table and sorts the results in descending order (DESC)."
            },
            {
                question: "Which SQL statement is used to create a view?",
                options: {
                    A: "CREATE VIEW",
                    B: "MAKE VIEW",
                    C: "NEW VIEW",
                    D: "SHOW VIEW"
                },
                correct: "A",
                explanation: "The CREATE VIEW statement is used to create a virtual table based on the result set of a SQL statement."
            },
            {
                question: "What is the purpose of the CHECK constraint?",
                options: {
                    A: "To ensure data integrity",
                    B: "To limit values in a column",
                    C: "To validate data before insertion",
                    D: "All of the above"
                },
                correct: "D",
                explanation: "The CHECK constraint is used to limit the value range that can be placed in a column, ensuring data integrity and validating data before insertion."
            },
            {
                question: "Which MySQL function concatenates two or more strings?",
                options: {
                    A: "JOIN()",
                    B: "CONCAT()",
                    C: "MERGE()",
                    D: "COMBINE()"
                },
                correct: "B",
                explanation: "The CONCAT() function is used to concatenate two or more strings together."
            },
            {
                question: "What does the following SQL statement do? GRANT SELECT ON database.* TO 'user'@'localhost';",
                options: {
                    A: "Creates a new user",
                    B: "Grants SELECT permission on all tables",
                    C: "Revokes permissions",
                    D: "Creates a new database"
                },
                correct: "B",
                explanation: "This statement grants SELECT permission on all tables in the specified database to the user 'user' connecting from 'localhost'."
            },
            {
                question: "Which SQL statement is used to remove an index?",
                options: {
                    A: "DROP INDEX",
                    B: "DELETE INDEX",
                    C: "REMOVE INDEX",
                    D: "ALTER INDEX"
                },
                correct: "A",
                explanation: "The DROP INDEX statement is used to remove an existing index from a table."
            },
            {
                question: "What is the purpose of the HAVING clause?",
                options: {
                    A: "To filter rows before grouping",
                    B: "To filter groups after grouping",
                    C: "To sort the results",
                    D: "To join tables"
                },
                correct: "B",
                explanation: "The HAVING clause is used to filter groups after the GROUP BY clause has been applied, unlike WHERE which filters rows before grouping."
            },
            {
                question: "Which MySQL function returns the number of characters in a string?",
                options: {
                    A: "LENGTH()",
                    B: "CHAR_LENGTH()",
                    C: "SIZE()",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both LENGTH() and CHAR_LENGTH() return the number of characters in a string, though LENGTH() returns bytes for multi-byte characters."
            },
            {
                question: "What does the following SQL query return? SELECT DISTINCT department FROM employees;",
                options: {
                    A: "All employees",
                    B: "Unique department names",
                    C: "First employee from each department",
                    D: "Count of departments"
                },
                correct: "B",
                explanation: "The DISTINCT keyword ensures that only unique (different) department names are returned, eliminating duplicates."
            },
            {
                question: "Which SQL statement is used to create a stored procedure?",
                options: {
                    A: "CREATE PROCEDURE",
                    B: "MAKE PROCEDURE",
                    C: "NEW PROCEDURE",
                    D: "ADD PROCEDURE"
                },
                correct: "A",
                explanation: "The CREATE PROCEDURE statement is used to create a stored procedure in MySQL."
            },
            {
                question: "What is the purpose of the COMMIT statement?",
                options: {
                    A: "To start a transaction",
                    B: "To save changes permanently",
                    C: "To undo changes",
                    D: "To create a backup"
                },
                correct: "B",
                explanation: "The COMMIT statement is used to save all changes made during the current transaction permanently to the database."
            },
            {
                question: "Which MySQL function returns the largest value from a set of values?",
                options: {
                    A: "MAX()",
                    B: "MIN()",
                    C: "LARGEST()",
                    D: "BIGGEST()"
                },
                correct: "A",
                explanation: "The MAX() function returns the largest value from a set of values in a specified column."
            },
            {
                question: "What does the following SQL statement do? ROLLBACK;",
                options: {
                    A: "Saves changes",
                    B: "Undoes changes",
                    C: "Starts a new transaction",
                    D: "Creates a savepoint"
                },
                correct: "B",
                explanation: "The ROLLBACK statement is used to undo all changes made during the current transaction and restore the database to its previous state."
            },
            {
                question: "Which SQL statement is used to create a trigger?",
                options: {
                    A: "CREATE TRIGGER",
                    B: "MAKE TRIGGER",
                    C: "NEW TRIGGER",
                    D: "ADD TRIGGER"
                },
                correct: "A",
                explanation: "The CREATE TRIGGER statement is used to create a trigger that automatically executes when a specific event occurs."
            },
            {
                question: "What is the purpose of the UNIQUE constraint?",
                options: {
                    A: "To ensure all values are unique",
                    B: "To create primary keys",
                    C: "To improve performance",
                    D: "To allow NULL values"
                },
                correct: "A",
                explanation: "The UNIQUE constraint ensures that all values in a column are different from each other, though it allows NULL values."
            },
            {
                question: "Which MySQL function returns the smallest value from a set of values?",
                options: {
                    A: "MAX()",
                    B: "MIN()",
                    C: "SMALLEST()",
                    D: "LOWEST()"
                },
                correct: "B",
                explanation: "The MIN() function returns the smallest value from a set of values in a specified column."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE age BETWEEN 18 AND 25;",
                options: {
                    A: "Selects users with age 18 or 25",
                    B: "Selects users with age between 18 and 25 inclusive",
                    C: "Selects users with age greater than 25",
                    D: "Selects users with age less than 18"
                },
                correct: "B",
                explanation: "The BETWEEN operator selects values within a range, inclusive of the boundary values (18 and 25 in this case)."
            },
            {
                question: "Which SQL statement is used to revoke permissions?",
                options: {
                    A: "REVOKE",
                    B: "DENY",
                    C: "REMOVE",
                    D: "DELETE"
                },
                correct: "A",
                explanation: "The REVOKE statement is used to remove previously granted permissions from a user or role."
            },
            {
                question: "What is the purpose of the DEFAULT constraint?",
                options: {
                    A: "To set a default value for a column",
                    B: "To create default indexes",
                    C: "To set default permissions",
                    D: "To create default tables"
                },
                correct: "A",
                explanation: "The DEFAULT constraint is used to provide a default value for a column when no value is specified during INSERT."
            },
            {
                question: "Which MySQL function returns the current time?",
                options: {
                    A: "NOW()",
                    B: "CURTIME()",
                    C: "CURRENT_TIME()",
                    D: "Both B and C"
                },
                correct: "D",
                explanation: "Both CURTIME() and CURRENT_TIME() return the current time without the date component."
            },
            {
                question: "What does the following SQL statement do? START TRANSACTION;",
                options: {
                    A: "Commits changes",
                    B: "Begins a new transaction",
                    C: "Rolls back changes",
                    D: "Creates a savepoint"
                },
                correct: "B",
                explanation: "The START TRANSACTION statement begins a new transaction, allowing multiple SQL statements to be executed as a single unit."
            },
            {
                question: "Which SQL statement is used to create a function?",
                options: {
                    A: "CREATE FUNCTION",
                    B: "MAKE FUNCTION",
                    C: "NEW FUNCTION",
                    D: "ADD FUNCTION"
                },
                correct: "A",
                explanation: "The CREATE FUNCTION statement is used to create a user-defined function in MySQL."
            },
            {
                question: "What is the purpose of the NOT NULL constraint?",
                options: {
                    A: "To allow NULL values",
                    B: "To prevent NULL values",
                    C: "To create unique values",
                    D: "To improve performance"
                },
                correct: "B",
                explanation: "The NOT NULL constraint ensures that a column cannot have NULL values, requiring that a value must be provided."
            },
            {
                question: "Which MySQL function returns the sum of values in a numeric column?",
                options: {
                    A: "SUM()",
                    B: "TOTAL()",
                    C: "ADD()",
                    D: "PLUS()"
                },
                correct: "A",
                explanation: "The SUM() function returns the total sum of all values in a specified numeric column."
            },
            {
                question: "What does the following SQL query do? SELECT name FROM users WHERE name LIKE 'A%';",
                options: {
                    A: "Selects names ending with 'A'",
                    B: "Selects names starting with 'A'",
                    C: "Selects names containing 'A'",
                    D: "Selects names exactly 'A'"
                },
                correct: "B",
                explanation: "The LIKE operator with 'A%' selects names that start with 'A', where '%' is a wildcard representing any sequence of characters."
            },
            {
                question: "Which SQL statement is used to create a savepoint?",
                options: {
                    A: "CREATE SAVEPOINT",
                    B: "SAVEPOINT",
                    C: "MAKE SAVEPOINT",
                    D: "ADD SAVEPOINT"
                },
                correct: "B",
                explanation: "The SAVEPOINT statement creates a point within a transaction to which you can later roll back."
            },
            {
                question: "What is the purpose of the INDEX in MySQL?",
                options: {
                    A: "To speed up data retrieval",
                    B: "To enforce uniqueness",
                    C: "To create relationships",
                    D: "To validate data"
                },
                correct: "A",
                explanation: "Indexes are used to speed up data retrieval operations on database tables at the cost of additional space and decreased write performance."
            },
            {
                question: "Which MySQL function returns the substring from a string?",
                options: {
                    A: "SUBSTRING()",
                    B: "MID()",
                    C: "SUBSTR()",
                    D: "All of the above"
                },
                correct: "D",
                explanation: "SUBSTRING(), MID(), and SUBSTR() are all synonyms in MySQL and can be used to extract a substring from a string."
            },
            {
                question: "What does the following SQL statement do? SET autocommit = 0;",
                options: {
                    A: "Enables autocommit",
                    B: "Disables autocommit",
                    C: "Commits all changes",
                    D: "Rolls back all changes"
                },
                correct: "B",
                explanation: "Setting autocommit to 0 disables autocommit mode, meaning changes are not committed automatically and must be explicitly committed."
            },
            {
                question: "Which SQL statement is used to drop a view?",
                options: {
                    A: "DROP VIEW",
                    B: "DELETE VIEW",
                    C: "REMOVE VIEW",
                    D: "ALTER VIEW"
                },
                correct: "A",
                explanation: "The DROP VIEW statement is used to remove an existing view from the database."
            },
            {
                question: "What is the purpose of the IN operator in SQL?",
                options: {
                    A: "To specify multiple values in a WHERE clause",
                    B: "To check if a value exists",
                    C: "To join tables",
                    D: "To sort results"
                },
                correct: "A",
                explanation: "The IN operator allows you to specify multiple values in a WHERE clause, making it a shorthand for multiple OR conditions."
            },
            {
                question: "Which MySQL function returns the position of a substring in a string?",
                options: {
                    A: "FIND()",
                    B: "LOCATE()",
                    C: "POSITION()",
                    D: "Both B and C"
                },
                correct: "D",
                explanation: "Both LOCATE() and POSITION() return the position of a substring within a string. LOCATE() is more flexible as it allows specifying a starting position."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE age IN (18, 21, 25);",
                options: {
                    A: "Selects users with age between 18 and 25",
                    B: "Selects users with age 18, 21, or 25",
                    C: "Selects users with age not 18, 21, or 25",
                    D: "Selects users with age greater than 25"
                },
                correct: "B",
                explanation: "The IN operator selects users whose age matches any of the values in the list: 18, 21, or 25."
            },
            {
                question: "Which SQL statement is used to drop a stored procedure?",
                options: {
                    A: "DROP PROCEDURE",
                    B: "DELETE PROCEDURE",
                    C: "REMOVE PROCEDURE",
                    D: "ALTER PROCEDURE"
                },
                correct: "A",
                explanation: "The DROP PROCEDURE statement is used to remove an existing stored procedure from the database."
            },
            {
                question: "What is the purpose of the CASE statement in SQL?",
                options: {
                    A: "To create conditional logic",
                    B: "To handle errors",
                    C: "To create loops",
                    D: "To define variables"
                },
                correct: "A",
                explanation: "The CASE statement is used to create conditional logic in SQL queries, similar to IF-THEN-ELSE statements in programming languages."
            },
            {
                question: "Which MySQL function returns the number of rows returned by a query?",
                options: {
                    A: "COUNT()",
                    B: "ROW_COUNT()",
                    C: "NUM_ROWS()",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "COUNT() returns the number of rows in a result set, while ROW_COUNT() returns the number of rows affected by the previous statement."
            },
            {
                question: "What does the following SQL statement do? ANALYZE TABLE users;",
                options: {
                    A: "Deletes the table",
                    B: "Analyzes and stores key distribution",
                    C: "Creates indexes",
                    D: "Optimizes the table"
                },
                correct: "B",
                explanation: "The ANALYZE TABLE statement analyzes and stores the key distribution for a table, which helps the query optimizer make better decisions."
            },
            {
                question: "Which SQL statement is used to drop a trigger?",
                options: {
                    A: "DROP TRIGGER",
                    B: "DELETE TRIGGER",
                    C: "REMOVE TRIGGER",
                    D: "ALTER TRIGGER"
                },
                correct: "A",
                explanation: "The DROP TRIGGER statement is used to remove an existing trigger from the database."
            },
            {
                question: "What is the purpose of the UNION operator in SQL?",
                options: {
                    A: "To combine results from multiple SELECT statements",
                    B: "To join tables",
                    C: "To intersect results",
                    D: "To subtract results"
                },
                correct: "A",
                explanation: "The UNION operator is used to combine the result sets of two or more SELECT statements, removing duplicates."
            },
            {
                question: "Which MySQL function returns the natural logarithm of a number?",
                options: {
                    A: "LOG()",
                    B: "LN()",
                    C: "NATURAL_LOG()",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both LOG() (when called with one argument) and LN() return the natural logarithm of a number."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name IS NULL;",
                options: {
                    A: "Selects users with empty names",
                    B: "Selects users with NULL names",
                    C: "Selects users with non-NULL names",
                    D: "Selects all users"
                },
                correct: "B",
                explanation: "The IS NULL operator is used to test for NULL values, selecting users where the name column contains NULL."
            },
            {
                question: "Which SQL statement is used to drop a function?",
                options: {
                    A: "DROP FUNCTION",
                    B: "DELETE FUNCTION",
                    C: "REMOVE FUNCTION",
                    D: "ALTER FUNCTION"
                },
                correct: "A",
                explanation: "The DROP FUNCTION statement is used to remove an existing user-defined function from the database."
            },
            {
                question: "What is the purpose of the COALESCE function in MySQL?",
                options: {
                    A: "To return the first non-NULL value",
                    B: "To concatenate strings",
                    C: "To convert data types",
                    D: "To calculate averages"
                },
                correct: "A",
                explanation: "The COALESCE function returns the first non-NULL value in a list of expressions, making it useful for handling NULL values."
            },
            {
                question: "Which MySQL function returns the square root of a number?",
                options: {
                    A: "SQRT()",
                    B: "SQUARE_ROOT()",
                    C: "ROOT()",
                    D: "SQ()"
                },
                correct: "A",
                explanation: "The SQRT() function returns the square root of a specified number."
            },
            {
                question: "What does the following SQL statement do? OPTIMIZE TABLE users;",
                options: {
                    A: "Creates indexes",
                    B: "Reorganizes the physical storage",
                    C: "Deletes the table",
                    D: "Analyzes the table"
                },
                correct: "B",
                explanation: "The OPTIMIZE TABLE statement reorganizes the physical storage of table data and associated index data to reduce storage space and improve I/O efficiency."
            },
            {
                question: "Which SQL statement is used to create a database user?",
                options: {
                    A: "CREATE USER",
                    B: "MAKE USER",
                    C: "NEW USER",
                    D: "ADD USER"
                },
                correct: "A",
                explanation: "The CREATE USER statement is used to create a new user account in the MySQL server."
            },
            {
                question: "What is the purpose of the IFNULL function in MySQL?",
                options: {
                    A: "To return the first non-NULL value",
                    B: "To return a specified value if the expression is NULL",
                    C: "To test for NULL values",
                    D: "To convert NULL to zero"
                },
                correct: "B",
                explanation: "The IFNULL function returns a specified value if the expression is NULL, otherwise it returns the expression itself."
            },
            {
                question: "Which MySQL function returns the absolute value of a number?",
                options: {
                    A: "ABS()",
                    B: "ABSOLUTE()",
                    C: "MOD()",
                    D: "POSITIVE()"
                },
                correct: "A",
                explanation: "The ABS() function returns the absolute (positive) value of a specified number."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name LIKE '%john%';",
                options: {
                    A: "Selects names starting with 'john'",
                    B: "Selects names ending with 'john'",
                    C: "Selects names containing 'john'",
                    D: "Selects names exactly 'john'"
                },
                correct: "C",
                explanation: "The LIKE operator with '%john%' selects names that contain 'john' anywhere in the string, where '%' represents any sequence of characters."
            },
            {
                question: "Which SQL statement is used to change a user's password?",
                options: {
                    A: "ALTER USER",
                    B: "CHANGE PASSWORD",
                    C: "UPDATE PASSWORD",
                    D: "SET PASSWORD"
                },
                correct: "A",
                explanation: "The ALTER USER statement is used to modify user account properties, including changing the password."
            },
            {
                question: "What is the purpose of the CONCAT_WS function in MySQL?",
                options: {
                    A: "To concatenate strings with a separator",
                    B: "To concatenate without separator",
                    C: "To split strings",
                    D: "To join tables"
                },
                correct: "A",
                explanation: "CONCAT_WS stands for Concatenate With Separator and joins strings with the specified separator between them."
            },
            {
                question: "Which MySQL function returns the remainder of a division?",
                options: {
                    A: "MOD()",
                    B: "REMAINDER()",
                    C: "DIV()",
                    D: "REST()"
                },
                correct: "A",
                explanation: "The MOD() function returns the remainder (modulo) of a division operation between two numbers."
            },
            {
                question: "What does the following SQL statement do? CHECK TABLE users;",
                options: {
                    A: "Creates a check constraint",
                    B: "Checks the table for errors",
                    C: "Optimizes the table",
                    D: "Analyzes the table"
                },
                correct: "B",
                explanation: "The CHECK TABLE statement checks a table for errors and reports any problems found."
            },
            {
                question: "Which SQL statement is used to drop a database?",
                options: {
                    A: "DROP DATABASE",
                    B: "DELETE DATABASE",
                    C: "REMOVE DATABASE",
                    D: "DESTROY DATABASE"
                },
                correct: "A",
                explanation: "The DROP DATABASE statement is used to delete an existing database and all its objects."
            },
            {
                question: "What is the purpose of the NULLIF function in MySQL?",
                options: {
                    A: "To return NULL if two expressions are equal",
                    B: "To convert NULL to a value",
                    C: "To test for NULL values",
                    D: "To return the first non-NULL value"
                },
                correct: "A",
                explanation: "The NULLIF function returns NULL if the two expressions are equal, otherwise it returns the first expression."
            },
            {
                question: "Which MySQL function returns the current user name?",
                options: {
                    A: "USER()",
                    B: "CURRENT_USER()",
                    C: "SESSION_USER()",
                    D: "All of the above"
                },
                correct: "D",
                explanation: "USER(), CURRENT_USER(), and SESSION_USER() all return the current user name and host name combination."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name LIKE '_ohn';",
                options: {
                    A: "Selects names starting with any character followed by 'ohn'",
                    B: "Selects names ending with 'ohn'",
                    C: "Selects names containing 'ohn'",
                    D: "Selects names exactly 'ohn'"
                },
                correct: "A",
                explanation: "The underscore '_' is a wildcard that matches exactly one character, so this selects names like 'John', 'john', 'Sohn', etc."
            },
            {
                question: "Which SQL statement is used to flush privileges?",
                options: {
                    A: "FLUSH PRIVILEGES",
                    B: "REFRESH PRIVILEGES",
                    C: "RELOAD PRIVILEGES",
                    D: "UPDATE PRIVILEGES"
                },
                correct: "A",
                explanation: "The FLUSH PRIVILEGES statement reloads the grant tables from the mysql database, applying any recent privilege changes."
            },
            {
                question: "What is the purpose of the FORMAT function in MySQL?",
                options: {
                    A: "To format numbers with specified decimals",
                    B: "To format dates",
                    C: "To format strings",
                    D: "To format currency"
                },
                correct: "A",
                explanation: "The FORMAT function formats a number to a format like '#,###,###.##' with the specified number of decimal places."
            },
            {
                question: "Which MySQL function returns the tangent of a number?",
                options: {
                    A: "TAN()",
                    B: "TANGENT()",
                    C: "TG()",
                    D: "TANH()"
                },
                correct: "A",
                explanation: "The TAN() function returns the tangent of a specified number (in radians)."
            },
            {
                question: "What does the following SQL statement do? REPAIR TABLE users;",
                options: {
                    A: "Creates a backup",
                    B: "Repairs a possibly corrupted table",
                    C: "Optimizes the table",
                    D: "Creates indexes"
                },
                correct: "B",
                explanation: "The REPAIR TABLE statement is used to repair a table that may have become corrupted."
            },
            {
                question: "Which SQL statement is used to show the structure of a table?",
                options: {
                    A: "DESCRIBE table",
                    B: "SHOW COLUMNS FROM table",
                    C: "EXPLAIN table",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both DESCRIBE table and SHOW COLUMNS FROM table are used to display the structure of a table, including column names, data types, and constraints."
            },
            {
                question: "What is the purpose of the DATE_FORMAT function in MySQL?",
                options: {
                    A: "To format dates according to a specified format",
                    B: "To convert strings to dates",
                    C: "To extract date parts",
                    D: "To calculate date differences"
                },
                correct: "A",
                explanation: "The DATE_FORMAT function formats a date value according to a specified format string."
            },
            {
                question: "Which MySQL function returns the sine of a number?",
                options: {
                    A: "SIN()",
                    B: "SINE()",
                    C: "SN()",
                    D: "SINH()"
                },
                correct: "A",
                explanation: "The SIN() function returns the sine of a specified number (in radians)."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE age > 18 AND age < 25;",
                options: {
                    A: "Selects users with age 18 or 25",
                    B: "Selects users with age between 18 and 25 exclusive",
                    C: "Selects users with age between 18 and 25 inclusive",
                    D: "Selects users with age greater than 25"
                },
                correct: "B",
                explanation: "This query selects users with age greater than 18 AND less than 25, so ages 19, 20, 21, 22, 23, and 24 (exclusive of 18 and 25)."
            },
            {
                question: "Which SQL statement is used to show all databases?",
                options: {
                    A: "SHOW DATABASES",
                    B: "LIST DATABASES",
                    C: "DISPLAY DATABASES",
                    D: "VIEW DATABASES"
                },
                correct: "A",
                explanation: "The SHOW DATABASES statement is used to list all databases on the MySQL server."
            },
            {
                question: "What is the purpose of the STR_TO_DATE function in MySQL?",
                options: {
                    A: "To convert a string to a date",
                    B: "To convert a date to a string",
                    C: "To format dates",
                    D: "To extract date parts"
                },
                correct: "A",
                explanation: "The STR_TO_DATE function converts a string to a date value based on a specified format."
            },
            {
                question: "Which MySQL function returns the cosine of a number?",
                options: {
                    A: "COS()",
                    B: "COSINE()",
                    C: "CS()",
                    D: "COSH()"
                },
                correct: "A",
                explanation: "The COS() function returns the cosine of a specified number (in radians)."
            },
            {
                question: "What does the following SQL statement do? USE database_name;",
                options: {
                    A: "Creates a database",
                    B: "Selects a database to work with",
                    C: "Deletes a database",
                    D: "Shows database structure"
                },
                correct: "B",
                explanation: "The USE statement selects a database to make it the current (default) database for subsequent statements."
            },
            {
                question: "Which SQL statement is used to show all tables in a database?",
                options: {
                    A: "SHOW TABLES",
                    B: "LIST TABLES",
                    C: "DISPLAY TABLES",
                    D: "VIEW TABLES"
                },
                correct: "A",
                explanation: "The SHOW TABLES statement is used to list all tables in the current database."
            },
            {
                question: "What is the purpose of the EXTRACT function in MySQL?",
                options: {
                    A: "To extract parts from a date",
                    B: "To extract substrings",
                    C: "To extract numbers",
                    D: "To extract table data"
                },
                correct: "A",
                explanation: "The EXTRACT function extracts parts from a date value, such as year, month, day, hour, etc."
            },
            {
                question: "Which MySQL function returns the arc tangent of two numbers?",
                options: {
                    A: "ATAN2()",
                    B: "ARCTAN2()",
                    C: "TAN2()",
                    D: "ATAN()"
                },
                correct: "A",
                explanation: "The ATAN2() function returns the arc tangent of two numbers (x and y coordinates), similar to the mathematical atan2(y, x) function."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE department = 'IT' OR department = 'HR';",
                options: {
                    A: "Selects users in both IT and HR departments",
                    B: "Selects users in either IT or HR departments",
                    C: "Selects users not in IT or HR",
                    D: "Selects users in departments other than IT and HR"
                },
                correct: "B",
                explanation: "The OR operator selects users where the department is either 'IT' OR 'HR'."
            },
            {
                question: "Which SQL statement is used to show the current database?",
                options: {
                    A: "SELECT DATABASE()",
                    B: "SHOW CURRENT DATABASE",
                    C: "DISPLAY DATABASE",
                    D: "CURRENT DATABASE"
                },
                correct: "A",
                explanation: "The SELECT DATABASE() function returns the name of the current (default) database."
            },
            {
                question: "What is the purpose of the TIMESTAMPDIFF function in MySQL?",
                options: {
                    A: "To calculate the difference between two timestamps",
                    B: "To create timestamps",
                    C: "To format timestamps",
                    D: "To convert timestamps"
                },
                correct: "A",
                explanation: "The TIMESTAMPDIFF function returns the difference between two timestamps in the specified unit (year, month, day, etc.)."
            },
            {
                question: "Which MySQL function returns the value of π (pi)?",
                options: {
                    A: "PI()",
                    B: "PI_VALUE()",
                    C: "CONST_PI()",
                    D: "MATH_PI()"
                },
                correct: "A",
                explanation: "The PI() function returns the value of π (approximately 3.141593)."
            },
            {
                question: "What does the following SQL statement do? SET @variable = 10;",
                options: {
                    A: "Creates a column",
                    B: "Declares a session variable",
                    C: "Creates a table",
                    D: "Sets a system variable"
                },
                correct: "B",
                explanation: "This statement declares a user-defined session variable named @variable and assigns it the value 10."
            },
            {
                question: "Which SQL statement is used to show the MySQL server version?",
                options: {
                    A: "SELECT VERSION()",
                    B: "SHOW VERSION",
                    C: "DISPLAY VERSION",
                    D: "MYSQL VERSION"
                },
                correct: "A",
                explanation: "The SELECT VERSION() function returns the MySQL server version information."
            },
            {
                question: "What is the purpose of the DATE_ADD function in MySQL?",
                options: {
                    A: "To add a time interval to a date",
                    B: "To add dates",
                    C: "To create dates",
                    D: "To format dates"
                },
                correct: "A",
                explanation: "The DATE_ADD function adds a specified time interval to a date value."
            },
            {
                question: "Which MySQL function returns the base-10 logarithm of a number?",
                options: {
                    A: "LOG10()",
                    B: "LOG()",
                    C: "LN10()",
                    D: "BASE10_LOG()"
                },
                correct: "A",
                explanation: "The LOG10() function returns the base-10 logarithm of a specified number."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name NOT LIKE 'A%';",
                options: {
                    A: "Selects names starting with 'A'",
                    B: "Selects names not starting with 'A'",
                    C: "Selects names ending with 'A'",
                    D: "Selects names not ending with 'A'"
                },
                correct: "B",
                explanation: "The NOT LIKE operator with 'A%' selects names that do NOT start with 'A'."
            },
            {
                question: "Which SQL statement is used to show the current user?",
                options: {
                    A: "SELECT USER()",
                    B: "SHOW USER",
                    C: "DISPLAY USER",
                    D: "CURRENT USER"
                },
                correct: "A",
                explanation: "The SELECT USER() function returns the current MySQL user name and host name."
            },
            {
                question: "What is the purpose of the DATEDIFF function in MySQL?",
                options: {
                    A: "To calculate the difference between two dates",
                    B: "To add dates",
                    C: "To format dates",
                    D: "To create dates"
                },
                correct: "A",
                explanation: "The DATEDIFF function returns the number of days between two date values."
            },
            {
                question: "Which MySQL function returns the value of e (Euler's number)?",
                options: {
                    A: "EXP(1)",
                    B: "E()",
                    C: "EULER()",
                    D: "CONST_E()"
                },
                correct: "A",
                explanation: "EXP(1) returns the value of e (Euler's number, approximately 2.718282)."
            },
            {
                question: "What does the following SQL statement do? PREPARE stmt FROM 'SELECT * FROM users WHERE id = ?';",
                options: {
                    A: "Creates a stored procedure",
                    B: "Prepares a statement for execution",
                    C: "Creates a view",
                    D: "Creates a trigger"
                },
                correct: "B",
                explanation: "The PREPARE statement prepares a SQL statement for execution, allowing the use of parameter placeholders like '?'."
            },
            {
                question: "Which SQL statement is used to show the status of the MySQL server?",
                options: {
                    A: "SHOW STATUS",
                    B: "DISPLAY STATUS",
                    C: "SERVER STATUS",
                    D: "MYSQL STATUS"
                },
                correct: "A",
                explanation: "The SHOW STATUS statement provides server status information."
            },
            {
                question: "What is the purpose of the LAST_INSERT_ID function in MySQL?",
                options: {
                    A: "To return the last auto-increment value",
                    B: "To return the last inserted row",
                    C: "To return the last query ID",
                    D: "To return the last table ID"
                },
                correct: "A",
                explanation: "The LAST_INSERT_ID() function returns the first automatically generated value that was set for an AUTO_INCREMENT column by the most recent INSERT statement."
            },
            {
                question: "Which MySQL function returns the cotangent of a number?",
                options: {
                    A: "COT()",
                    B: "COTAN()",
                    C: "COTANGENT()",
                    D: "CTG()"
                },
                correct: "A",
                explanation: "The COT() function returns the cotangent of a specified number (in radians)."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name REGEXP '^J';",
                options: {
                    A: "Selects names starting with 'J'",
                    B: "Selects names ending with 'J'",
                    C: "Selects names containing 'J'",
                    D: "Selects names exactly 'J'"
                },
                correct: "A",
                explanation: "The REGEXP operator with '^J' uses a regular expression to select names that start with 'J'."
            },
            {
                question: "Which SQL statement is used to show the variables of the MySQL server?",
                options: {
                    A: "SHOW VARIABLES",
                    B: "DISPLAY VARIABLES",
                    C: "LIST VARIABLES",
                    D: "VIEW VARIABLES"
                },
                correct: "A",
                explanation: "The SHOW VARIABLES statement displays the values of MySQL system variables."
            },
            {
                question: "What is the purpose of the FOUND_ROWS function in MySQL?",
                options: {
                    A: "To return the number of rows without LIMIT",
                    B: "To return the number of rows found",
                    C: "To return the number of rows affected",
                    D: "To return the number of rows inserted"
                },
                correct: "A",
                explanation: "The FOUND_ROWS() function returns the number of rows that would have been returned by a SELECT statement without the LIMIT clause."
            },
            {
                question: "Which MySQL function returns the radians from degrees?",
                options: {
                    A: "RADIANS()",
                    B: "DEG_TO_RAD()",
                    C: "TO_RADIANS()",
                    D: "CONVERT_RAD()"
                },
                correct: "A",
                explanation: "The RADIANS() function converts a degree value to radians."
            },
            {
                question: "What does the following SQL statement do? EXECUTE stmt USING @id;",
                options: {
                    A: "Creates a statement",
                    B: "Executes a prepared statement",
                    C: "Deletes a statement",
                    D: "Modifies a statement"
                },
                correct: "B",
                explanation: "The EXECUTE statement executes a prepared statement using the provided parameter values."
            },
            {
                question: "Which SQL statement is used to show the process list of the MySQL server?",
                options: {
                    A: "SHOW PROCESSLIST",
                    B: "DISPLAY PROCESSLIST",
                    C: "LIST PROCESSES",
                    D: "VIEW PROCESSES"
                },
                correct: "A",
                explanation: "The SHOW PROCESSLIST statement displays information about the threads currently running on the MySQL server."
            },
            {
                question: "What is the purpose of the BENCHMARK function in MySQL?",
                options: {
                    A: "To execute a function multiple times",
                    B: "To test performance",
                    C: "To create benchmarks",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "The BENCHMARK function executes a specified expression multiple times, primarily used for testing performance."
            },
            {
                question: "Which MySQL function returns the degrees from radians?",
                options: {
                    A: "DEGREES()",
                    B: "RAD_TO_DEG()",
                    C: "TO_DEGREES()",
                    D: "CONVERT_DEG()"
                },
                correct: "A",
                explanation: "The DEGREES() function converts a radian value to degrees."
            },
            {
                question: "What does the following SQL statement do? DEALLOCATE PREPARE stmt;",
                options: {
                    A: "Creates a prepared statement",
                    B: "Executes a prepared statement",
                    C: "Releases a prepared statement",
                    D: "Modifies a prepared statement"
                },
                correct: "C",
                explanation: "The DEALLOCATE PREPARE statement releases a prepared statement, freeing up resources."
            },
            {
                question: "Which SQL statement is used to show the grants for a user?",
                options: {
                    A: "SHOW GRANTS FOR user",
                    B: "DISPLAY GRANTS FOR user",
                    C: "LIST GRANTS FOR user",
                    D: "VIEW GRANTS FOR user"
                },
                correct: "A",
                explanation: "The SHOW GRANTS statement displays the privilege grants for a MySQL user account."
            },
            {
                question: "What is the purpose of the SLEEP function in MySQL?",
                options: {
                    A: "To pause execution for specified seconds",
                    B: "To put the server to sleep",
                    C: "To create delays",
                    D: "Both A and C"
                },
                correct: "D",
                explanation: "The SLEEP function pauses execution for the specified number of seconds, often used for testing or creating deliberate delays."
            },
            {
                question: "Which MySQL function returns the power of a number?",
                options: {
                    A: "POWER()",
                    B: "POW()",
                    C: "Both A and B",
                    D: "EXP()"
                },
                correct: "C",
                explanation: "Both POWER() and POW() are synonyms that return the value of a number raised to the power of another number."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name COLLATE utf8_bin = 'John';",
                options: {
                    A: "Selects names with case-sensitive comparison",
                    B: "Selects names with case-insensitive comparison",
                    C: "Selects names with binary comparison",
                    D: "Selects names with UTF-8 encoding"
                },
                correct: "A",
                explanation: "The COLLATE utf8_bin specifies a case-sensitive binary collation, so 'John' and 'john' would be considered different."
            },
            {
                question: "Which SQL statement is used to show the warnings from the last statement?",
                options: {
                    A: "SHOW WARNINGS",
                    B: "DISPLAY WARNINGS",
                    C: "LIST WARNINGS",
                    D: "VIEW WARNINGS"
                },
                correct: "A",
                explanation: "The SHOW WARNINGS statement displays information about errors, warnings, and notes generated by the last statement."
            },
            {
                question: "What is the purpose of the UUID function in MySQL?",
                options: {
                    A: "To generate a unique identifier",
                    B: "To create user IDs",
                    C: "To generate random numbers",
                    D: "To create session IDs"
                },
                correct: "A",
                explanation: "The UUID() function returns a Universal Unique Identifier (UUID) according to RFC 4122."
            },
            {
                question: "Which MySQL function returns the sign of a number?",
                options: {
                    A: "SIGN()",
                    B: "SIGNUM()",
                    C: "SGN()",
                    D: "SIGN_VALUE()"
                },
                correct: "A",
                explanation: "The SIGN() function returns the sign of a number: -1 for negative, 0 for zero, and 1 for positive."
            },
            {
                question: "What does the following SQL statement do? SET @count = (SELECT COUNT(*) FROM users);",
                options: {
                    A: "Creates a table",
                    B: "Assigns the count of users to a variable",
                    C: "Creates a stored procedure",
                    D: "Creates a view"
                },
                correct: "B",
                explanation: "This statement assigns the result of the COUNT(*) query (number of users) to the session variable @count."
            },
            {
                question: "Which SQL statement is used to show the errors from the last statement?",
                options: {
                    A: "SHOW ERRORS",
                    B: "DISPLAY ERRORS",
                    C: "LIST ERRORS",
                    D: "VIEW ERRORS"
                },
                correct: "A",
                explanation: "The SHOW ERRORS statement displays information about errors generated by the last statement."
            },
            {
                question: "What is the purpose of the CHARSET function in MySQL?",
                options: {
                    A: "To return the character set of a string",
                    B: "To set the character set",
                    C: "To convert character sets",
                    D: "To create character sets"
                },
                correct: "A",
                explanation: "The CHARSET function returns the character set of the string argument."
            },
            {
                question: "Which MySQL function returns the ceiling of a number?",
                options: {
                    A: "CEILING()",
                    B: "CEIL()",
                    C: "Both A and B",
                    D: "ROUND_UP()"
                },
                correct: "C",
                explanation: "Both CEILING() and CEIL() are synonyms that return the smallest integer greater than or equal to the specified number."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name = 'John' COLLATE utf8_general_ci;",
                options: {
                    A: "Selects names with case-sensitive comparison",
                    B: "Selects names with case-insensitive comparison",
                    C: "Selects names with binary comparison",
                    D: "Selects names with UTF-8 encoding"
                },
                correct: "B",
                explanation: "The COLLATE utf8_general_ci specifies a case-insensitive collation, so 'John' and 'john' would be considered the same."
            },
            {
                question: "Which SQL statement is used to show the create statement for a table?",
                options: {
                    A: "SHOW CREATE TABLE table",
                    B: "DISPLAY CREATE TABLE table",
                    C: "LIST CREATE TABLE table",
                    D: "VIEW CREATE TABLE table"
                },
                correct: "A",
                explanation: "The SHOW CREATE TABLE statement displays the CREATE TABLE statement that created the specified table."
            },
            {
                question: "What is the purpose of the COERCIBILITY function in MySQL?",
                options: {
                    A: "To return the collation coercibility value",
                    B: "To force data type conversion",
                    C: "To check data types",
                    D: "To validate data"
                },
                correct: "A",
                explanation: "The COERCIBILITY function returns the collation coercibility value of a string argument."
            },
            {
                question: "Which MySQL function returns the floor of a number?",
                options: {
                    A: "FLOOR()",
                    B: "FLOOR_VALUE()",
                    C: "ROUND_DOWN()",
                    D: "INT()"
                },
                correct: "A",
                explanation: "The FLOOR() function returns the largest integer less than or equal to the specified number."
            },
            {
                question: "What does the following SQL statement do? CREATE TEMPORARY TABLE temp_users AS SELECT * FROM users;",
                options: {
                    A: "Creates a permanent table",
                    B: "Creates a temporary table",
                    C: "Creates a view",
                    D: "Creates an index"
                },
                correct: "B",
                explanation: "This statement creates a temporary table named temp_users that exists only for the current session and is automatically dropped when the session ends."
            },
            {
                question: "Which SQL statement is used to show the indexes for a table?",
                options: {
                    A: "SHOW INDEX FROM table",
                    B: "DISPLAY INDEX FROM table",
                    C: "LIST INDEX FROM table",
                    D: "VIEW INDEX FROM table"
                },
                correct: "A",
                explanation: "The SHOW INDEX statement displays index information for a table."
            },
            {
                question: "What is the purpose of the COLLATION function in MySQL?",
                options: {
                    A: "To return the collation of a string",
                    B: "To set the collation",
                    C: "To create collations",
                    D: "To convert collations"
                },
                correct: "A",
                explanation: "The COLLATION function returns the collation of the string argument."
            },
            {
                question: "Which MySQL function returns the number of days in a month?",
                options: {
                    A: "DAYOFMONTH()",
                    B: "DAYS_IN_MONTH()",
                    C: "MONTH_DAYS()",
                    D: "LAST_DAY()"
                },
                correct: "D",
                explanation: "The LAST_DAY() function returns the last day of the month for a given date, which effectively gives the number of days in that month."
            },
            {
                question: "What does the following SQL query do? SELECT * FROM users WHERE name LIKE 'A%' AND name LIKE '%Z';",
                options: {
                    A: "Selects names starting with 'A' or ending with 'Z'",
                    B: "Selects names starting with 'A' and ending with 'Z'",
                    C: "Selects names containing 'A' and 'Z'",
                    D: "Selects names between 'A' and 'Z'"
                },
                correct: "B",
                explanation: "This query selects names that start with 'A' AND end with 'Z' (like 'AdamZ', 'AliceZ', etc.)."
            },
            {
                question: "Which SQL statement is used to show the table status?",
                options: {
                    A: "SHOW TABLE STATUS",
                    B: "DISPLAY TABLE STATUS",
                    C: "LIST TABLE STATUS",
                    D: "VIEW TABLE STATUS"
                },
                correct: "A",
                explanation: "The SHOW TABLE STATUS statement provides information about the tables in the current database."
            },
            {
                question: "What is the purpose of the CONV function in MySQL?",
                options: {
                    A: "To convert numbers between different bases",
                    B: "To convert data types",
                    C: "To convert strings",
                    D: "To convert dates"
                },
                correct: "A",
                explanation: "The CONV function converts numbers between different number bases (e.g., decimal to binary, hex to decimal, etc.)."
            },
            {
                question: "Which MySQL function returns the week number of a date?",
                options: {
                    A: "WEEK()",
                    B: "WEEKOFYEAR()",
                    C: "WEEK_NUMBER()",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both WEEK() and WEEKOFYEAR() return the week number for a given date."
            },
            {
                question: "What does the following SQL statement do? CREATE VIEW user_view AS SELECT id, name FROM users;",
                options: {
                    A: "Creates a table",
                    B: "Creates a view",
                    C: "Creates an index",
                    D: "Creates a stored procedure"
                },
                correct: "B",
                explanation: "This statement creates a view named user_view that shows only the id and name columns from the users table."
            },
            {
                question: "Which SQL statement is used to show the character set?",
                options: {
                    A: "SHOW CHARACTER SET",
                    B: "DISPLAY CHARACTER SET",
                    C: "LIST CHARACTER SET",
                    D: "VIEW CHARACTER SET"
                },
                correct: "A",
                explanation: "The SHOW CHARACTER SET statement displays all available character sets."
            },
            {
                question: "What is the purpose of the INET_ATON function in MySQL?",
                options: {
                    A: "To convert IP address to numeric",
                    B: "To convert numeric to IP address",
                    C: "To validate IP addresses",
                    D: "To create IP addresses"
                },
                correct: "A",
                explanation: "The INET_ATON function converts an IP address to a numeric representation for efficient storage."
            },
            {
                question: "Which MySQL function returns the weekday of a date?",
                options: {
                    A: "WEEKDAY()",
                    B: "DAYOFWEEK()",
                    C: "WEEK_DAY()",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both WEEKDAY() and DAYOFWEEK() return the weekday index for a date, though they use different numbering systems."
            },
            {
                question: "What does the following SQL statement do? DROP VIEW IF EXISTS user_view;",
                options: {
                    A: "Creates a view",
                    B: "Drops a view if it exists",
                    C: "Modifies a view",
                    D: "Shows a view"
                },
                correct: "B",
                explanation: "This statement drops (deletes) the view named user_view if it exists, preventing an error if the view doesn't exist."
            },
            {
                question: "Which SQL statement is used to show the collation?",
                options: {
                    A: "SHOW COLLATION",
                    B: "DISPLAY COLLATION",
                    C: "LIST COLLATION",
                    D: "VIEW COLLATION"
                },
                correct: "A",
                explanation: "The SHOW COLLATION statement displays all available collations."
            },
            {
                question: "What is the purpose of the INET_NTOA function in MySQL?",
                options: {
                    A: "To convert numeric to IP address",
                    B: "To convert IP address to numeric",
                    C: "To validate IP addresses",
                    D: "To create IP addresses"
                },
                correct: "A",
                explanation: "The INET_NTOA function converts a numeric representation back to an IP address string."
            },
            {
                question: "Which MySQL function returns the year of a date?",
                options: {
                    A: "YEAR()",
                    B: "EXTRACT(YEAR FROM date)",
                    C: "Both A and B",
                    D: "GET_YEAR()"
                },
                correct: "C",
                explanation: "Both YEAR() and EXTRACT(YEAR FROM date) return the year part from a date value."
            },
            {
                question: "What does the following SQL statement do? ALTER VIEW user_view AS SELECT id, name, email FROM users;",
                options: {
                    A: "Creates a view",
                    B: "Modifies an existing view",
                    C: "Drops a view",
                    D: "Shows a view"
                },
                correct: "B",
                explanation: "This statement modifies the existing view user_view to include the email column in addition to id and name."
            },
            {
                question: "Which SQL statement is used to show the engines?",
                options: {
                    A: "SHOW ENGINES",
                    B: "DISPLAY ENGINES",
                    C: "LIST ENGINES",
                    D: "VIEW ENGINES"
                },
                correct: "A",
                explanation: "The SHOW ENGINES statement displays storage engine information."
            },
            {
                question: "What is the purpose of the BIT_COUNT function in MySQL?",
                options: {
                    A: "To count the number of set bits",
                    B: "To count bits in a number",
                    C: "To create bit masks",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "The BIT_COUNT function returns the number of bits that are set (equal to 1) in a numeric expression."
            },
            {
                question: "Which MySQL function returns the month of a date?",
                options: {
                    A: "MONTH()",
                    B: "EXTRACT(MONTH FROM date)",
                    C: "Both A and B",
                    D: "GET_MONTH()"
                },
                correct: "C",
                explanation: "Both MONTH() and EXTRACT(MONTH FROM date) return the month part from a date value."
            },
            {
                question: "What does the following SQL statement do? CREATE PROCEDURE simple_proc() BEGIN SELECT 'Hello World'; END;",
                options: {
                    A: "Creates a function",
                    B: "Creates a stored procedure",
                    C: "Creates a trigger",
                    D: "Creates a view"
                },
                correct: "B",
                explanation: "This statement creates a stored procedure named simple_proc that, when called, will return 'Hello World'."
            },
            {
                question: "Which SQL statement is used to show the privileges?",
                options: {
                    A: "SHOW PRIVILEGES",
                    B: "DISPLAY PRIVILEGES",
                    C: "LIST PRIVILEGES",
                    D: "VIEW PRIVILEGES"
                },
                correct: "A",
                explanation: "The SHOW PRIVILEGES statement displays the list of system privileges that the MySQL server supports."
            },
            {
                question: "What is the purpose of the EXPORT_SET function in MySQL?",
                options: {
                    A: "To create a string representation of bits",
                    B: "To export data",
                    C: "To set export flags",
                    D: "To create bit masks"
                },
                correct: "A",
                explanation: "The EXPORT_SET function returns a string representation of the bits in a numeric value, using specified on/off strings."
            },
            {
                question: "Which MySQL function returns the day of a date?",
                options: {
                    A: "DAY()",
                    B: "DAYOFMONTH()",
                    C: "Both A and B",
                    D: "GET_DAY()"
                },
                correct: "C",
                explanation: "Both DAY() and DAYOFMONTH() return the day of the month from a date value."
            },
            {
                question: "What does the following SQL statement do? CALL simple_proc();",
                options: {
                    A: "Creates a procedure",
                    B: "Calls a stored procedure",
                    C: "Deletes a procedure",
                    D: "Modifies a procedure"
                },
                correct: "B",
                explanation: "The CALL statement is used to execute (call) a stored procedure."
            },
            {
                question: "Which SQL statement is used to show the status of storage engines?",
                options: {
                    A: "SHOW ENGINE STATUS",
                    B: "DISPLAY ENGINE STATUS",
                    C: "LIST ENGINE STATUS",
                    D: "VIEW ENGINE STATUS"
                },
                correct: "A",
                explanation: "The SHOW ENGINE STATUS statement displays operational status information about storage engines."
            },
            {
                question: "What is the purpose of the MAKE_SET function in MySQL?",
                options: {
                    A: "To create a set from bits",
                    B: "To create sets",
                    C: "To set variables",
                    D: "To create bit masks"
                },
                correct: "A",
                explanation: "The MAKE_SET function creates a set value (a string containing substrings separated by commas) based on the bits in a numeric value."
            },
            {
                question: "Which MySQL function returns the hour of a time?",
                options: {
                    A: "HOUR()",
                    B: "EXTRACT(HOUR FROM time)",
                    C: "Both A and B",
                    D: "GET_HOUR()"
                },
                correct: "C",
                explanation: "Both HOUR() and EXTRACT(HOUR FROM time) return the hour part from a time value."
            },
            {
                question: "What does the following SQL statement do? DROP PROCEDURE IF EXISTS simple_proc;",
                options: {
                    A: "Creates a procedure",
                    B: "Drops a procedure if it exists",
                    C: "Calls a procedure",
                    D: "Modifies a procedure"
                },
                correct: "B",
                explanation: "This statement drops (deletes) the stored procedure named simple_proc if it exists, preventing an error if the procedure doesn't exist."
            },
            {
                question: "Which SQL statement is used to show the master status?",
                options: {
                    A: "SHOW MASTER STATUS",
                    B: "DISPLAY MASTER STATUS",
                    C: "LIST MASTER STATUS",
                    D: "VIEW MASTER STATUS"
                },
                correct: "A",
                explanation: "The SHOW MASTER STATUS statement provides status information about the binary log on a master server in replication."
            },
            {
                question: "What is the purpose of the GET_LOCK function in MySQL?",
                options: {
                    A: "To acquire a named lock",
                    B: "To get lock status",
                    C: "To create locks",
                    D: "To release locks"
                },
                correct: "A",
                explanation: "The GET_LOCK function attempts to acquire a named lock with the specified timeout."
            },
            {
                question: "Which MySQL function returns the minute of a time?",
                options: {
                    A: "MINUTE()",
                    B: "EXTRACT(MINUTE FROM time)",
                    C: "Both A and B",
                    D: "GET_MINUTE()"
                },
                correct: "C",
                explanation: "Both MINUTE() and EXTRACT(MINUTE FROM time) return the minute part from a time value."
            },
            {
                question: "What does the following SQL statement do? CREATE TRIGGER before_insert_user BEFORE INSERT ON users FOR EACH ROW SET NEW.created_at = NOW();",
                options: {
                    A: "Creates a function",
                    B: "Creates a stored procedure",
                    C: "Creates a trigger",
                    D: "Creates a view"
                },
                correct: "C",
                explanation: "This statement creates a trigger named before_insert_user that automatically sets the created_at field to the current timestamp before any new record is inserted into the users table."
            },
            {
                question: "Which SQL statement is used to show the slave status?",
                options: {
                    A: "SHOW SLAVE STATUS",
                    B: "DISPLAY SLAVE STATUS",
                    C: "LIST SLAVE STATUS",
                    D: "VIEW SLAVE STATUS"
                },
                correct: "A",
                explanation: "The SHOW SLAVE STATUS statement provides status information about replica servers in replication."
            },
            {
                question: "What is the purpose of the RELEASE_LOCK function in MySQL?",
                options: {
                    A: "To release a named lock",
                    B: "To acquire locks",
                    C: "To create locks",
                    D: "To check lock status"
                },
                correct: "A",
                explanation: "The RELEASE_LOCK function releases a named lock that was previously acquired with GET_LOCK."
            },
            {
                question: "Which MySQL function returns the second of a time?",
                options: {
                    A: "SECOND()",
                    B: "EXTRACT(SECOND FROM time)",
                    C: "Both A and B",
                    D: "GET_SECOND()"
                },
                correct: "C",
                explanation: "Both SECOND() and EXTRACT(SECOND FROM time) return the second part from a time value."
            },
            {
                question: "What does the following SQL statement do? DROP TRIGGER IF EXISTS before_insert_user;",
                options: {
                    A: "Creates a trigger",
                    B: "Drops a trigger if it exists",
                    C: "Calls a trigger",
                    D: "Modifies a trigger"
                },
                correct: "B",
                explanation: "This statement drops (deletes) the trigger named before_insert_user if it exists, preventing an error if the trigger doesn't exist."
            },
            {
                question: "Which SQL statement is used to show the binary logs?",
                options: {
                    A: "SHOW BINARY LOGS",
                    B: "DISPLAY BINARY LOGS",
                    C: "LIST BINARY LOGS",
                    D: "VIEW BINARY LOGS"
                },
                correct: "A",
                explanation: "The SHOW BINARY LOGS statement displays the binary log files on the server."
            },
            {
                question: "What is the purpose of the IS_FREE_LOCK function in MySQL?",
                options: {
                    A: "To check if a named lock is free",
                    B: "To create free locks",
                    C: "To release locks",
                    D: "To acquire locks"
                },
                correct: "A",
                explanation: "The IS_FREE_LOCK function checks whether a named lock is free (can be acquired)."
            },
            {
                question: "Which MySQL function returns the microseconds from a time?",
                options: {
                    A: "MICROSECOND()",
                    B: "EXTRACT(MICROSECOND FROM time)",
                    C: "Both A and B",
                    D: "GET_MICROSECOND()"
                },
                correct: "C",
                explanation: "Both MICROSECOND() and EXTRACT(MICROSECOND FROM time) return the microsecond part from a time value."
            },
            {
                question: "What does the following SQL statement do? CREATE FUNCTION simple_func() RETURNS VARCHAR(100) DETERMINISTIC BEGIN RETURN 'Hello Function'; END;",
                options: {
                    A: "Creates a stored procedure",
                    B: "Creates a function",
                    C: "Creates a trigger",
                    D: "Creates a view"
                },
                correct: "B",
                explanation: "This statement creates a user-defined function named simple_func that returns the string 'Hello Function' when called."
            },
            {
                question: "Which SQL statement is used to show the master logs?",
                options: {
                    A: "SHOW MASTER LOGS",
                    B: "DISPLAY MASTER LOGS",
                    C: "LIST MASTER LOGS",
                    D: "VIEW MASTER LOGS"
                },
                correct: "A",
                explanation: "The SHOW MASTER LOGS statement displays the binary log files on the master server."
            },
            {
                question: "What is the purpose of the IS_USED_LOCK function in MySQL?",
                options: {
                    A: "To check if a named lock is in use",
                    B: "To use locks",
                    C: "To create locks",
                    D: "To release locks"
                },
                correct: "A",
                explanation: "The IS_USED_LOCK function checks whether a named lock is in use and returns the connection identifier if it is."
            },
            {
                question: "Which MySQL function returns the quarter of a date?",
                options: {
                    A: "QUARTER()",
                    B: "EXTRACT(QUARTER FROM date)",
                    C: "Both A and B",
                    D: "GET_QUARTER()"
                },
                correct: "C",
                explanation: "Both QUARTER() and EXTRACT(QUARTER FROM date) return the quarter number (1-4) from a date value."
            },
            {
                question: "What does the following SQL statement do? DROP FUNCTION IF EXISTS simple_func;",
                options: {
                    A: "Creates a function",
                    B: "Drops a function if it exists",
                    C: "Calls a function",
                    D: "Modifies a function"
                },
                correct: "B",
                explanation: "This statement drops (deletes) the function named simple_func if it exists, preventing an error if the function doesn't exist."
            },
            {
                question: "Which SQL statement is used to show the events?",
                options: {
                    A: "SHOW EVENTS",
                    B: "DISPLAY EVENTS",
                    C: "LIST EVENTS",
                    D: "VIEW EVENTS"
                },
                correct: "A",
                explanation: "The SHOW EVENTS statement displays information about scheduled events."
            },
            {
                question: "What is the purpose of the PASSWORD function in MySQL?",
                options: {
                    A: "To encrypt passwords",
                    B: "To validate passwords",
                    C: "To hash passwords",
                    D: "Both A and C"
                },
                correct: "D",
                explanation: "The PASSWORD function encrypts/hashes a password string using the MySQL password hashing algorithm."
            },
            {
                question: "Which MySQL function returns the day of the year?",
                options: {
                    A: "DAYOFYEAR()",
                    B: "EXTRACT(DAYOFYEAR FROM date)",
                    C: "Both A and B",
                    D: "GET_DAYOFYEAR()"
                },
                correct: "A",
                explanation: "The DAYOFYEAR() function returns the day of the year (1-366) for a given date."
            },
            {
                question: "What does the following SQL statement do? CREATE EVENT daily_event ON SCHEDULE EVERY 1 DAY DO CALL daily_procedure();",
                options: {
                    A: "Creates a trigger",
                    B: "Creates a scheduled event",
                    C: "Creates a stored procedure",
                    D: "Creates a function"
                },
                correct: "B",
                explanation: "This statement creates a scheduled event named daily_event that executes daily_procedure() every day."
            },
            {
                question: "Which SQL statement is used to show the plugins?",
                options: {
                    A: "SHOW PLUGINS",
                    B: "DISPLAY PLUGINS",
                    C: "LIST PLUGINS",
                    D: "VIEW PLUGINS"
                },
                correct: "A",
                explanation: "The SHOW PLUGINS statement displays information about installed plugins."
            },
            {
                question: "What is the purpose of the OLD_PASSWORD function in MySQL?",
                options: {
                    A: "To encrypt passwords using old algorithm",
                    B: "To get old passwords",
                    C: "To validate old passwords",
                    D: "To change old passwords"
                },
                correct: "A",
                explanation: "The OLD_PASSWORD function encrypts a password using the pre-4.1 MySQL password hashing algorithm."
            },
            {
                question: "Which MySQL function returns the week number where Monday is the first day?",
                options: {
                    A: "WEEK(date, 1)",
                    B: "WEEKOFYEAR(date)",
                    C: "Both A and B",
                    D: "ISO_WEEK(date)"
                },
                correct: "A",
                explanation: "WEEK(date, 1) returns the week number where Monday is considered the first day of the week (mode 1)."
            },
            {
                question: "What does the following SQL statement do? DROP EVENT IF EXISTS daily_event;",
                options: {
                    A: "Creates an event",
                    B: "Drops an event if it exists",
                    C: "Calls an event",
                    D: "Modifies an event"
                },
                correct: "B",
                explanation: "This statement drops (deletes) the event named daily_event if it exists, preventing an error if the event doesn't exist."
            },
            {
                question: "Which SQL statement is used to show the profiles?",
                options: {
                    A: "SHOW PROFILE",
                    B: "DISPLAY PROFILE",
                    C: "LIST PROFILE",
                    D: "VIEW PROFILE"
                },
                correct: "A",
                explanation: "The SHOW PROFILE statement displays resource usage information for statements executed during the current session."
            },
            {
                question: "What is the purpose of the ENCRYPT function in MySQL?",
                options: {
                    A: "To encrypt strings using Unix crypt()",
                    B: "To create encrypted fields",
                    C: "To validate encrypted data",
                    D: "To decrypt strings"
                },
                correct: "A",
                explanation: "The ENCRYPT function encrypts a string using the Unix crypt() system call."
            },
            {
                question: "Which MySQL function returns the ISO week number?",
                options: {
                    A: "WEEK(date, 3)",
                    B: "ISO_WEEK(date)",
                    C: "WEEKOFYEAR(date)",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "Both WEEK(date, 3) and ISO_WEEK(date) return the ISO week number for a given date."
            },
            {
                question: "What does the following SQL statement do? SET profiling = 1;",
                options: {
                    A: "Enables query profiling",
                    B: "Disables query profiling",
                    C: "Shows profile information",
                    D: "Creates a profile"
                },
                correct: "A",
                explanation: "Setting profiling = 1 enables query profiling for the current session, allowing you to analyze query performance."
            },
            {
                question: "Which SQL statement is used to show the relay logs?",
                options: {
                    A: "SHOW RELAYLOG EVENTS",
                    B: "DISPLAY RELAYLOG EVENTS",
                    C: "LIST RELAYLOG EVENTS",
                    D: "VIEW RELAYLOG EVENTS"
                },
                correct: "A",
                explanation: "The SHOW RELAYLOG EVENTS statement displays the events in the relay log of a replica server."
            },
            {
                question: "What is the purpose of the DECODE function in MySQL?",
                options: {
                    A: "To decrypt strings encrypted with ENCODE",
                    B: "To decode strings",
                    C: "To convert encodings",
                    D: "To validate encoded data"
                },
                correct: "A",
                explanation: "The DECODE function decrypts a string that was encrypted using the ENCODE function."
            },
            {
                question: "Which MySQL function returns the year and week number?",
                options: {
                    A: "YEARWEEK()",
                    B: "YEAR_WEEK()",
                    C: "GET_YEARWEEK()",
                    D: "Both A and B"
                },
                correct: "A",
                explanation: "The YEARWEEK() function returns the year and week number for a given date."
            },
            {
                question: "What does the following SQL statement do? SHOW PROFILE FOR QUERY 1;",
                options: {
                    A: "Shows profile for query 1",
                    B: "Creates a profile",
                    C: "Deletes a profile",
                    D: "Modifies a profile"
                },
                correct: "A",
                explanation: "This statement shows the detailed profile information for query 1 when profiling is enabled."
            },
            {
                question: "Which SQL statement is used to show the variables with a specific pattern?",
                options: {
                    A: "SHOW VARIABLES LIKE 'pattern'",
                    B: "DISPLAY VARIABLES LIKE 'pattern'",
                    C: "LIST VARIABLES LIKE 'pattern'",
                    D: "VIEW VARIABLES LIKE 'pattern'"
                },
                correct: "A",
                explanation: "The SHOW VARIABLES LIKE 'pattern' statement displays system variables that match the specified pattern."
            },
            {
                question: "What is the purpose of the MD5 function in MySQL?",
                options: {
                    A: "To calculate MD5 hash",
                    B: "To validate MD5 hashes",
                    C: "To create MD5 passwords",
                    D: "To decrypt MD5 hashes"
                },
                correct: "A",
                explanation: "The MD5 function calculates the MD5 128-bit checksum for a string, commonly used for data integrity verification."
            },
            {
                question: "Which MySQL function returns the time in a specified format?",
                options: {
                    A: "TIME_FORMAT()",
                    B: "DATE_FORMAT()",
                    C: "Both A and B",
                    D: "FORMAT_TIME()"
                },
                correct: "A",
                explanation: "The TIME_FORMAT function formats a time value according to a specified format string."
            },
            {
                question: "What does the following SQL statement do? EXPLAIN SELECT * FROM users WHERE id = 1;",
                options: {
                    A: "Executes the query",
                    B: "Shows the execution plan",
                    C: "Optimizes the query",
                    D: "Creates an index"
                },
                correct: "B",
                explanation: "The EXPLAIN statement shows the execution plan that MySQL would use to execute the query, helping with query optimization."
            },
            {
                question: "Which SQL statement is used to show the status with a specific pattern?",
                options: {
                    A: "SHOW STATUS LIKE 'pattern'",
                    B: "DISPLAY STATUS LIKE 'pattern'",
                    C: "LIST STATUS LIKE 'pattern'",
                    D: "VIEW STATUS LIKE 'pattern'"
                },
                correct: "A",
                explanation: "The SHOW STATUS LIKE 'pattern' statement displays status variables that match the specified pattern."
            },
            {
                question: "What is the purpose of the SHA function in MySQL?",
                options: {
                    A: "To calculate SHA hash",
                    B: "To validate SHA hashes",
                    C: "To create SHA passwords",
                    D: "To decrypt SHA hashes"
                },
                correct: "A",
                explanation: "The SHA function calculates the SHA-1 160-bit checksum for a string, used for cryptographic hashing."
            },
            {
                question: "Which MySQL function returns the difference between two times?",
                options: {
                    A: "TIMEDIFF()",
                    B: "TIME_DIFFERENCE()",
                    C: "DIFF_TIME()",
                    D: "SUBTIME()"
                },
                correct: "A",
                explanation: "The TIMEDIFF function returns the difference between two time values."
            },
            {
                question: "What does the following SQL statement do? ANALYZE FORMAT=JSON SELECT * FROM users WHERE id = 1;",
                options: {
                    A: "Executes the query",
                    B: "Shows the execution plan in JSON format",
                    C: "Optimizes the query",
                    D: "Creates an index"
                },
                correct: "B",
                explanation: "This statement shows the execution plan in JSON format, providing detailed information about how MySQL would execute the query."
            },
            {
                question: "Which SQL statement is used to show the tables with a specific pattern?",
                options: {
                    A: "SHOW TABLES LIKE 'pattern'",
                    B: "DISPLAY TABLES LIKE 'pattern'",
                    C: "LIST TABLES LIKE 'pattern'",
                    D: "VIEW TABLES LIKE 'pattern'"
                },
                correct: "A",
                explanation: "The SHOW TABLES LIKE 'pattern' statement displays tables in the current database that match the specified pattern."
            },
            {
                question: "What is the purpose of the AES_ENCRYPT function in MySQL?",
                options: {
                    A: "To encrypt using AES algorithm",
                    B: "To validate AES encryption",
                    C: "To create AES keys",
                    D: "To decrypt AES data"
                },
                correct: "A",
                explanation: "The AES_ENCRYPT function encrypts data using the AES (Advanced Encryption Standard) algorithm."
            },
            {
                question: "Which MySQL function returns the time difference in a specified unit?",
                options: {
                    A: "TIMESTAMPDIFF()",
                    B: "TIME_DIFF()",
                    C: "DIFF_TIMESTAMP()",
                    D: "TIME_DIFFERENCE()"
                },
                correct: "A",
                explanation: "The TIMESTAMPDIFF function returns the difference between two timestamps in the specified unit (second, minute, hour, etc.)."
            },
            {
                question: "What does the following SQL statement do? KILL CONNECTION 123;",
                options: {
                    A: "Creates a connection",
                    B: "Terminates a connection",
                    C: "Shows connection information",
                    D: "Modifies a connection"
                },
                correct: "B",
                explanation: "The KILL statement terminates the connection with the specified connection ID (123 in this case)."
            },
            {
                question: "Which SQL statement is used to show the databases with a specific pattern?",
                options: {
                    A: "SHOW DATABASES LIKE 'pattern'",
                    B: "DISPLAY DATABASES LIKE 'pattern'",
                    C: "LIST DATABASES LIKE 'pattern'",
                    D: "VIEW DATABASES LIKE 'pattern'"
                },
                correct: "A",
                explanation: "The SHOW DATABASES LIKE 'pattern' statement displays databases that match the specified pattern."
            },
            {
                question: "What is the purpose of the AES_DECRYPT function in MySQL?",
                options: {
                    A: "To decrypt using AES algorithm",
                    B: "To encrypt using AES algorithm",
                    C: "To validate AES encryption",
                    D: "To create AES keys"
                },
                correct: "A",
                explanation: "The AES_DECRYPT function decrypts data that was encrypted using the AES_ENCRYPT function."
            },
            {
                question: "Which MySQL function returns the current timestamp in a specified format?",
                options: {
                    A: "DATE_FORMAT(NOW(), 'format')",
                    B: "TIME_FORMAT(NOW(), 'format')",
                    C: "Both A and B",
                    D: "FORMAT_TIMESTAMP()"
                },
                correct: "A",
                explanation: "DATE_FORMAT(NOW(), 'format') returns the current timestamp formatted according to the specified format string."
            },
            {
                question: "What does the following SQL statement do? SET GLOBAL max_connections = 1000;",
                options: {
                    A: "Sets a session variable",
                    B: "Sets a global system variable",
                    C: "Creates a variable",
                    D: "Shows a variable"
                },
                correct: "B",
                explanation: "This statement sets the global system variable max_connections to 1000, affecting the entire MySQL server."
            },
            {
                question: "Which SQL statement is used to show the columns of a table with a specific pattern?",
                options: {
                    A: "SHOW COLUMNS FROM table LIKE 'pattern'",
                    B: "DISPLAY COLUMNS FROM table LIKE 'pattern'",
                    C: "LIST COLUMNS FROM table LIKE 'pattern'",
                    D: "VIEW COLUMNS FROM table LIKE 'pattern'"
                },
                correct: "A",
                explanation: "The SHOW COLUMNS FROM table LIKE 'pattern' statement displays columns from the specified table that match the pattern."
            },
            {
                question: "What is the purpose of the COMPRESS function in MySQL?",
                options: {
                    A: "To compress a string",
                    B: "To decompress a string",
                    C: "To validate compression",
                    D: "To create compressed files"
                },
                correct: "A",
                explanation: "The COMPRESS function compresses a string and returns the result as a binary string."
            },
            {
                question: "Which MySQL function returns the current date and time in UTC?",
                options: {
                    A: "UTC_TIMESTAMP()",
                    B: "UTC_DATE()",
                    C: "UTC_TIME()",
                    D: "Both A and B"
                },
                correct: "A",
                explanation: "The UTC_TIMESTAMP() function returns the current UTC date and time."
            },
            {
                question: "What does the following SQL statement do? SET SESSION sql_mode = 'STRICT_TRANS_TABLES';",
                options: {
                    A: "Sets a global variable",
                    B: "Sets a session variable",
                    C: "Creates a variable",
                    D: "Shows a variable"
                },
                correct: "B",
                explanation: "This statement sets the session variable sql_mode to 'STRICT_TRANS_TABLES', affecting only the current session."
            },
            {
                question: "Which SQL statement is used to show the indexes of a table with a specific pattern?",
                options: {
                    A: "SHOW INDEX FROM table WHERE Key_name LIKE 'pattern'",
                    B: "DISPLAY INDEX FROM table LIKE 'pattern'",
                    C: "LIST INDEX FROM table LIKE 'pattern'",
                    D: "VIEW INDEX FROM table LIKE 'pattern'"
                },
                correct: "A",
                explanation: "The SHOW INDEX FROM table WHERE Key_name LIKE 'pattern' statement displays indexes from the specified table that match the pattern."
            },
            {
                question: "What is the purpose of the UNCOMPRESS function in MySQL?",
                options: {
                    A: "To decompress a compressed string",
                    B: "To compress a string",
                    C: "To validate compression",
                    D: "To create compressed files"
                },
                correct: "A",
                explanation: "The UNCOMPRESS function decompresses a string that was compressed with the COMPRESS function."
            },
            {
                question: "Which MySQL function returns the compressed length of a string?",
                options: {
                    A: "COMPRESSED_LENGTH()",
                    B: "LENGTH_COMPRESSED()",
                    C: "GET_COMPRESSED_LENGTH()",
                    D: "SIZE_COMPRESSED()"
                },
                correct: "A",
                explanation: "The COMPRESSED_LENGTH function returns the length of a compressed string."
            },
            {
                question: "What does the following SQL statement do? FLUSH TABLES WITH READ LOCK;",
                options: {
                    A: "Flushes tables and releases locks",
                    B: "Flushes tables and acquires read lock",
                    C: "Creates read locks",
                    D: "Releases read locks"
                },
                correct: "B",
                explanation: "This statement flushes tables to disk and acquires a global read lock, preventing writes for backup purposes."
            },
            {
                question: "Which SQL statement is used to show the status of all threads?",
                options: {
                    A: "SHOW FULL PROCESSLIST",
                    B: "DISPLAY FULL PROCESSLIST",
                    C: "LIST FULL PROCESSLIST",
                    D: "VIEW FULL PROCESSLIST"
                },
                correct: "A",
                explanation: "The SHOW FULL PROCESSLIST statement displays full information about all threads running on the MySQL server."
            },
            {
                question: "What is the purpose of the RANDOM_BYTES function in MySQL?",
                options: {
                    A: "To generate random bytes",
                    B: "To create random numbers",
                    C: "To generate random strings",
                    D: "To validate randomness"
                },
                correct: "A",
                explanation: "The RANDOM_BYTES function returns a binary string containing random bytes."
            },
            {
                question: "Which MySQL function returns the current time zone?",
                options: {
                    A: "TIME_ZONE()",
                    B: "CURRENT_TIMEZONE()",
                    C: "GET_TIMEZONE()",
                    D: "@@time_zone"
                },
                correct: "D",
                explanation: "The system variable @@time_zone returns the current time zone setting."
            },
            {
                question: "What does the following SQL statement do? UNLOCK TABLES;",
                options: {
                    A: "Locks tables",
                    B: "Releases table locks",
                    C: "Flushes tables",
                    D: "Creates locks"
                },
                correct: "B",
                explanation: "The UNLOCK TABLES statement releases all table locks that were acquired with LOCK TABLES."
            },
            {
                question: "Which SQL statement is used to show the replication status?",
                options: {
                    A: "SHOW REPLICA STATUS",
                    B: "DISPLAY REPLICA STATUS",
                    C: "LIST REPLICA STATUS",
                    D: "VIEW REPLICA STATUS"
                },
                correct: "A",
                explanation: "The SHOW REPLICA STATUS statement provides status information about replica servers in replication."
            },
            {
                question: "What is the purpose of the TO_SECONDS function in MySQL?",
                options: {
                    A: "To convert date to seconds",
                    B: "To convert time to seconds",
                    C: "To convert datetime to seconds",
                    D: "Both B and C"
                },
                correct: "C",
                explanation: "The TO_SECONDS function converts a date or datetime value to seconds since year 0."
            },
            {
                question: "Which MySQL function returns the time zone offset?",
                options: {
                    A: "TIME_ZONE_OFFSET()",
                    B: "GET_TIMEZONE_OFFSET()",
                    C: "OFFSET_TIMEZONE()",
                    D: "TIMEDIFF(NOW(), UTC_TIMESTAMP)"
                },
                correct: "D",
                explanation: "TIMEDIFF(NOW(), UTC_TIMESTAMP) calculates the difference between local time and UTC, effectively giving the time zone offset."
            },
            {
                question: "What does the following SQL statement do? RESET MASTER;",
                options: {
                    A: "Resets the master server",
                    B: "Deletes all binary log files",
                    C: "Resets replication",
                    D: "Restarts the server"
                },
                correct: "B",
                explanation: "The RESET MASTER statement deletes all binary log files on the master server and creates a new binary log file."
            },
            {
                question: "Which SQL statement is used to show the binary log events?",
                options: {
                    A: "SHOW BINLOG EVENTS",
                    B: "DISPLAY BINLOG EVENTS",
                    C: "LIST BINLOG EVENTS",
                    D: "VIEW BINLOG EVENTS"
                },
                correct: "A",
                explanation: "The SHOW BINLOG EVENTS statement displays the events in the binary log."
            },
            {
                question: "What is the purpose of the FROM_UNIXTIME function in MySQL?",
                options: {
                    A: "To convert Unix timestamp to date",
                    B: "To convert date to Unix timestamp",
                    C: "To get Unix time",
                    D: "To validate Unix timestamps"
                },
                correct: "A",
                explanation: "The FROM_UNIXTIME function converts a Unix timestamp (seconds since 1970-01-01) to a date value."
            },
            {
                question: "Which MySQL function returns the Unix timestamp?",
                options: {
                    A: "UNIX_TIMESTAMP()",
                    B: "GET_UNIX_TIME()",
                    C: "TIMESTAMP_UNIX()",
                    D: "TO_UNIXTIME()"
                },
                correct: "A",
                explanation: "The UNIX_TIMESTAMP function returns the current Unix timestamp (seconds since 1970-01-01 00:00:00 UTC)."
            },
            {
                question: "What does the following SQL statement do? RESET SLAVE;",
                options: {
                    A: "Resets the slave server",
                    B: "Deletes relay log files",
                    C: "Resets replication position",
                    D: "Restarts the slave"
                },
                correct: "C",
                explanation: "The RESET SLAVE statement resets the replication position information on a slave server."
            },
            {
                question: "Which SQL statement is used to show the authors of the binary log?",
                options: {
                    A: "SHOW BINLOG AUTHORS",
                    B: "DISPLAY BINLOG AUTHORS",
                    C: "LIST BINLOG AUTHORS",
                    D: "VIEW BINLOG AUTHORS"
                },
                correct: "A",
                explanation: "The SHOW BINLOG AUTHORS statement displays information about the authors of the binary log."
            },
            {
                question: "What is the purpose of the UNIX_TIMESTAMP function with a date parameter?",
                options: {
                    A: "To convert date to Unix timestamp",
                    B: "To get current Unix timestamp",
                    C: "To validate Unix timestamps",
                    D: "To create Unix timestamps"
                },
                correct: "A",
                explanation: "When called with a date parameter, UNIX_TIMESTAMP converts that date to a Unix timestamp."
            },
            {
                question: "Which MySQL function returns the week number where Sunday is the first day?",
                options: {
                    A: "WEEK(date, 0)",
                    B: "WEEKOFYEAR(date)",
                    C: "SUNDAY_WEEK(date)",
                    D: "WEEK_SUNDAY(date)"
                },
                correct: "A",
                explanation: "WEEK(date, 0) returns the week number where Sunday is considered the first day of the week (mode 0)."
            },
            {
                question: "What does the following SQL statement do? PURGE BINARY LOGS BEFORE '2023-01-01';",
                options: {
                    A: "Creates binary logs",
                    B: "Deletes old binary log files",
                    C: "Shows binary logs",
                    D: "Optimizes binary logs"
                },
                correct: "B",
                explanation: "The PURGE BINARY LOGS statement deletes all binary log files created before the specified date."
            },
            {
                question: "Which SQL statement is used to show the create database statement?",
                options: {
                    A: "SHOW CREATE DATABASE database",
                    B: "DISPLAY CREATE DATABASE database",
                    C: "LIST CREATE DATABASE database",
                    D: "VIEW CREATE DATABASE database"
                },
                correct: "A",
                explanation: "The SHOW CREATE DATABASE statement displays the CREATE DATABASE statement that created the specified database."
            },
            {
                question: "What is the purpose of the TIMESTAMP function in MySQL?",
                options: {
                    A: "To create a timestamp from date parts",
                    B: "To get current timestamp",
                    C: "To format timestamps",
                    D: "To convert timestamps"
                },
                correct: "A",
                explanation: "The TIMESTAMP function creates a timestamp value from specified date and time parts."
            },
            {
                question: "Which MySQL function returns the last day of the month?",
                options: {
                    A: "LAST_DAY()",
                    B: "END_OF_MONTH()",
                    C: "MONTH_END()",
                    D: "FINAL_DAY()"
                },
                correct: "A",
                explanation: "The LAST_DAY function returns the last day of the month for a given date."
            },
            {
                question: "What does the following SQL statement do? CHANGE MASTER TO MASTER_HOST='new_master';",
                options: {
                    A: "Changes the master server configuration",
                    B: "Creates a new master",
                    C: "Shows master information",
                    D: "Resets master configuration"
                },
                correct: "A",
                explanation: "The CHANGE MASTER TO statement changes the parameters that the slave server uses to connect to the master server."
            },
            {
                question: "Which SQL statement is used to show the grants for the current user?",
                options: {
                    A: "SHOW GRANTS",
                    B: "SHOW GRANTS FOR CURRENT_USER()",
                    C: "Both A and B",
                    D: "DISPLAY GRANTS"
                },
                correct: "C",
                explanation: "Both SHOW GRANTS and SHOW GRANTS FOR CURRENT_USER() display the privileges granted to the current user."
            },
            {
                question: "What is the purpose of the MAKEDATE function in MySQL?",
                options: {
                    A: "To create a date from year and day",
                    B: "To make a date current",
                    C: "To format dates",
                    D: "To validate dates"
                },
                correct: "A",
                explanation: "The MAKEDATE function creates a date value from a year number and a day-of-year value."
            },
            {
                question: "Which MySQL function returns the time from a datetime?",
                options: {
                    A: "TIME()",
                    B: "EXTRACT(TIME FROM datetime)",
                    C: "Both A and B",
                    D: "GET_TIME()"
                },
                correct: "A",
                explanation: "The TIME function extracts the time part from a datetime or time value."
            },
            {
                question: "What does the following SQL statement do? START SLAVE;",
                options: {
                    A: "Starts the replication process",
                    B: "Creates a slave server",
                    C: "Shows slave status",
                    D: "Stops replication"
                },
                correct: "A",
                explanation: "The START SLAVE statement starts the replication threads on a slave server."
            },
            {
                question: "Which SQL statement is used to show the create procedure statement?",
                options: {
                    A: "SHOW CREATE PROCEDURE procedure",
                    B: "DISPLAY CREATE PROCEDURE procedure",
                    C: "LIST CREATE PROCEDURE procedure",
                    D: "VIEW CREATE PROCEDURE procedure"
                },
                correct: "A",
                explanation: "The SHOW CREATE PROCEDURE statement displays the CREATE PROCEDURE statement that created the specified stored procedure."
            },
            {
                question: "What is the purpose of the MAKETIME function in MySQL?",
                options: {
                    A: "To create a time from hour, minute, second",
                    B: "To make time current",
                    C: "To format time",
                    D: "To validate time"
                },
                correct: "A",
                explanation: "The MAKETIME function creates a time value from specified hour, minute, and second values."
            },
            {
                question: "Which MySQL function returns the date from a datetime?",
                options: {
                    A: "DATE()",
                    B: "EXTRACT(DATE FROM datetime)",
                    C: "Both A and B",
                    D: "GET_DATE()"
                },
                correct: "A",
                explanation: "The DATE function extracts the date part from a datetime or date value."
            },
            {
                question: "What does the following SQL statement do? STOP SLAVE;",
                options: {
                    A: "Stops the replication process",
                    B: "Creates a slave server",
                    C: "Shows slave status",
                    D: "Starts replication"
                },
                correct: "A",
                explanation: "The STOP SLAVE statement stops the replication threads on a slave server."
            },
            {
                question: "Which SQL statement is used to show the create function statement?",
                options: {
                    A: "SHOW CREATE FUNCTION function",
                    B: "DISPLAY CREATE FUNCTION function",
                    C: "LIST CREATE FUNCTION function",
                    D: "VIEW CREATE FUNCTION function"
                },
                correct: "A",
                explanation: "The SHOW CREATE FUNCTION statement displays the CREATE FUNCTION statement that created the specified function."
            },
            {
                question: "What is the purpose of the PERIOD_ADD function in MySQL?",
                options: {
                    A: "To add months to a period",
                    B: "To add days to a period",
                    C: "To add years to a period",
                    D: "To create periods"
                },
                correct: "A",
                explanation: "The PERIOD_ADD function adds a specified number of months to a period (formatted as YYMM or YYYYMM)."
            },
            {
                question: "Which MySQL function returns the period difference in months?",
                options: {
                    A: "PERIOD_DIFF()",
                    B: "MONTH_DIFF()",
                    C: "PERIOD_MONTH_DIFF()",
                    D: "DIFF_PERIOD()"
                },
                correct: "A",
                explanation: "The PERIOD_DIFF function returns the number of months between two periods (formatted as YYMM or YYYYMM)."
            },
            {
                question: "What does the following SQL statement do? LOAD DATA INFILE 'data.csv' INTO TABLE users;",
                options: {
                    A: "Exports data to a file",
                    B: "Imports data from a file",
                    C: "Creates a file",
                    D: "Shows file contents"
                },
                correct: "B",
                explanation: "The LOAD DATA INFILE statement reads rows from a text file into a table at high speed."
            },
            {
                question: "Which SQL statement is used to show the create trigger statement?",
                options: {
                    A: "SHOW CREATE TRIGGER trigger",
                    B: "DISPLAY CREATE TRIGGER trigger",
                    C: "LIST CREATE TRIGGER trigger",
                    D: "VIEW CREATE TRIGGER trigger"
                },
                correct: "A",
                explanation: "The SHOW CREATE TRIGGER statement displays the CREATE TRIGGER statement that created the specified trigger."
            },
            {
                question: "What is the purpose of the TO_DAYS function in MySQL?",
                options: {
                    A: "To convert date to days",
                    B: "To convert days to date",
                    C: "To get current day",
                    D: "To validate days"
                },
                correct: "A",
                explanation: "The TO_DAYS function converts a date to the number of days since year 0."
            },
            {
                question: "Which MySQL function returns the date after adding a time interval?",
                options: {
                    A: "DATE_ADD()",
                    B: "ADDDATE()",
                    C: "Both A and B",
                    D: "PLUS_DATE()"
                },
                correct: "C",
                explanation: "Both DATE_ADD() and ADDDATE() are synonyms that add a specified time interval to a date."
            },
            {
                question: "What does the following SQL statement do? SELECT * FROM users INTO OUTFILE 'users.csv';",
                options: {
                    A: "Imports data from a file",
                    B: "Exports data to a file",
                    C: "Creates a file",
                    D: "Shows file contents"
                },
                correct: "B",
                explanation: "The SELECT ... INTO OUTFILE statement writes the result set of a query to a file."
            },
            {
                question: "Which SQL statement is used to show the create view statement?",
                options: {
                    A: "SHOW CREATE VIEW view",
                    B: "DISPLAY CREATE VIEW view",
                    C: "LIST CREATE VIEW view",
                    D: "VIEW CREATE VIEW view"
                },
                correct: "A",
                explanation: "The SHOW CREATE VIEW statement displays the CREATE VIEW statement that created the specified view."
            },
            {
                question: "What is the purpose of the FROM_DAYS function in MySQL?",
                options: {
                    A: "To convert days to date",
                    B: "To convert date to days",
                    C: "To get current day",
                    D: "To validate days"
                },
                correct: "A",
                explanation: "The FROM_DAYS function converts a day number (since year 0) back to a date value."
            },
            {
                question: "Which MySQL function returns the date after subtracting a time interval?",
                options: {
                    A: "DATE_SUB()",
                    B: "SUBDATE()",
                    C: "Both A and B",
                    D: "MINUS_DATE()"
                },
                correct: "C",
                explanation: "Both DATE_SUB() and SUBDATE() are synonyms that subtract a specified time interval from a date."
            },
            {
                question: "What does the following SQL statement do? BACKUP DATABASE mydb TO 'backup.sql';",
                options: {
                    A: "Creates a backup of the database",
                    B: "Restores a database from backup",
                    C: "Shows backup information",
                    D: "Deletes a backup"
                },
                correct: "A",
                explanation: "The BACKUP DATABASE statement creates a backup of the specified database to a file."
            },
            {
                question: "Which SQL statement is used to show the create event statement?",
                options: {
                    A: "SHOW CREATE EVENT event",
                    B: "DISPLAY CREATE EVENT event",
                    C: "LIST CREATE EVENT event",
                    D: "VIEW CREATE EVENT event"
                },
                correct: "A",
                explanation: "The SHOW CREATE EVENT statement displays the CREATE EVENT statement that created the specified event."
            },
            {
                question: "What is the purpose of the ADDTIME function in MySQL?",
                options: {
                    A: "To add time to a datetime",
                    B: "To create time",
                    C: "To format time",
                    D: "To validate time"
                },
                correct: "A",
                explanation: "The ADDTIME function adds a time value to a datetime or time expression."
            },
            {
                question: "Which MySQL function returns the date after adding a specified number of days?",
                options: {
                    A: "ADDDATE(date, INTERVAL days DAY)",
                    B: "DATE_ADD(date, INTERVAL days DAY)",
                    C: "Both A and B",
                    D: "PLUS_DAYS(date, days)"
                },
                correct: "C",
                explanation: "Both ADDDATE(date, INTERVAL days DAY) and DATE_ADD(date, INTERVAL days DAY) add the specified number of days to a date."
            },
            {
                question: "What does the following SQL statement do? RESTORE DATABASE mydb FROM 'backup.sql';",
                options: {
                    A: "Creates a backup of the database",
                    B: "Restores a database from backup",
                    C: "Shows backup information",
                    D: "Deletes a backup"
                },
                correct: "B",
                explanation: "The RESTORE DATABASE statement restores a database from a previously created backup file."
            },
            {
                question: "Which SQL statement is used to show the server status?",
                options: {
                    A: "SHOW STATUS LIKE 'Uptime'",
                    B: "DISPLAY SERVER STATUS",
                    C: "LIST SERVER STATUS",
                    D: "VIEW SERVER STATUS"
                },
                correct: "A",
                explanation: "The SHOW STATUS LIKE 'Uptime' statement displays server status information, specifically the uptime in this case."
            },
            {
                question: "What is the purpose of the SUBTIME function in MySQL?",
                options: {
                    A: "To subtract time from a datetime",
                    B: "To create time",
                    C: "To format time",
                    D: "To validate time"
                },
                correct: "A",
                explanation: "The SUBTIME function subtracts a time value from a datetime or time expression."
            },
            {
                question: "Which MySQL function returns the difference between two dates in days?",
                options: {
                    A: "DATEDIFF()",
                    B: "DAY_DIFF()",
                    C: "DIFF_DAYS()",
                    D: "DATE_DIFF()"
                },
                correct: "A",
                explanation: "The DATEDIFF function returns the number of days between two date values."
            },
            {
                question: "What does the following SQL statement do? CHECK TABLE users;",
                options: {
                    A: "Creates a table",
                    B: "Checks a table for errors",
                    C: "Optimizes a table",
                    D: "Repairs a table"
                },
                correct: "B",
                explanation: "The CHECK TABLE statement checks a table for errors and reports any problems found."
            },
            {
                question: "Which SQL statement is used to show the global variables?",
                options: {
                    A: "SHOW GLOBAL VARIABLES",
                    B: "DISPLAY GLOBAL VARIABLES",
                    C: "LIST GLOBAL VARIABLES",
                    D: "VIEW GLOBAL VARIABLES"
                },
                correct: "A",
                explanation: "The SHOW GLOBAL VARIABLES statement displays all global system variables."
            },
            {
                question: "What is the purpose of the TIME_TO_SEC function in MySQL?",
                options: {
                    A: "To convert time to seconds",
                    B: "To convert seconds to time",
                    C: "To get current seconds",
                    D: "To validate time"
                },
                correct: "A",
                explanation: "The TIME_TO_SEC function converts a time value to the equivalent number of seconds."
            },
            {
                question: "Which MySQL function returns the time from seconds?",
                options: {
                    A: "SEC_TO_TIME()",
                    B: "TIME_FROM_SEC()",
                    C: "SEC_TO_TIME_FORMAT()",
                    D: "TIME_SECONDS()"
                },
                correct: "A",
                explanation: "The SEC_TO_TIME function converts seconds to a time value (HH:MM:SS format)."
            },
            {
                question: "What does the following SQL statement do? REPAIR TABLE users;",
                options: {
                    A: "Creates a table",
                    B: "Checks a table for errors",
                    C: "Optimizes a table",
                    D: "Repairs a corrupted table"
                },
                correct: "D",
                explanation: "The REPAIR TABLE statement repairs a possibly corrupted table."
            },
            {
                question: "Which SQL statement is used to show the session variables?",
                options: {
                    A: "SHOW SESSION VARIABLES",
                    B: "DISPLAY SESSION VARIABLES",
                    C: "LIST SESSION VARIABLES",
                    D: "VIEW SESSION VARIABLES"
                },
                correct: "A",
                explanation: "The SHOW SESSION VARIABLES statement displays all session system variables."
            },
            {
                question: "What is the purpose of the MICROSECOND function in MySQL?",
                options: {
                    A: "To return microseconds from a time",
                    B: "To create microseconds",
                    C: "To format microseconds",
                    D: "To validate microseconds"
                },
                correct: "A",
                explanation: "The MICROSECOND function returns the microsecond part from a time or datetime value."
            },
            {
                question: "Which MySQL function returns the current time in seconds since epoch?",
                options: {
                    A: "UNIX_TIMESTAMP()",
                    B: "TIME_TO_SEC(CURRENT_TIME)",
                    C: "EPOCH_SECONDS()",
                    D: "CURRENT_SECONDS()"
                },
                correct: "A",
                explanation: "The UNIX_TIMESTAMP function returns the current time in seconds since the Unix epoch (1970-01-01 00:00:00 UTC)."
            },
            {
                question: "What does the following SQL statement do? OPTIMIZE TABLE users;",
                options: {
                    A: "Creates a table",
                    B: "Checks a table for errors",
                    C: "Optimizes table storage",
                    D: "Repairs a table"
                },
                correct: "C",
                explanation: "The OPTIMIZE TABLE statement reorganizes the physical storage of table data to reduce storage space and improve I/O efficiency."
            },
            {
                question: "Which SQL statement is used to show the character set and collation?",
                options: {
                    A: "SHOW CHARACTER SET AND COLLATION",
                    B: "DISPLAY CHARSET AND COLLATION",
                    C: "LIST CHARSET AND COLLATION",
                    D: "VIEW CHARSET AND COLLATION"
                },
                correct: "A",
                explanation: "The SHOW CHARACTER SET AND COLLATION statement displays information about available character sets and collations."
            },
            {
                question: "What is the purpose of the STR_TO_DATE function in MySQL?",
                options: {
                    A: "To convert string to date",
                    B: "To convert date to string",
                    C: "To format dates",
                    D: "To validate dates"
                },
                correct: "A",
                explanation: "The STR_TO_DATE function converts a string to a date value based on a specified format."
            },
            {
                question: "Which MySQL function returns the week number with Monday as first day?",
                options: {
                    A: "WEEK(date, 1)",
                    B: "WEEK(date, 'MONDAY')",
                    C: "MONDAY_WEEK(date)",
                    D: "ISO_WEEK(date)"
                },
                correct: "A",
                explanation: "WEEK(date, 1) returns the week number where Monday is considered the first day of the week."
            },
            {
                question: "What does the following SQL statement do? ANALYZE TABLE users;",
                options: {
                    A: "Creates a table",
                    B: "Analyzes and stores key distribution",
                    C: "Optimizes a table",
                    D: "Repairs a table"
                },
                correct: "B",
                explanation: "The ANALYZE TABLE statement analyzes and stores the key distribution for a table, which helps the query optimizer."
            },
            {
                question: "Which SQL statement is used to show the storage engines?",
                options: {
                    A: "SHOW STORAGE ENGINES",
                    B: "DISPLAY STORAGE ENGINES",
                    C: "LIST STORAGE ENGINES",
                    D: "VIEW STORAGE ENGINES"
                },
                correct: "A",
                explanation: "The SHOW STORAGE ENGINES statement displays information about available storage engines."
            },
            {
                question: "What is the purpose of the GET_FORMAT function in MySQL?",
                options: {
                    A: "To get a format string",
                    B: "To format data",
                    C: "To create formats",
                    D: "To validate formats"
                },
                correct: "A",
                explanation: "The GET_FORMAT function returns a format string for a specified data type and locale."
            },
            {
                question: "Which MySQL function returns the current database name?",
                options: {
                    A: "DATABASE()",
                    B: "SCHEMA()",
                    C: "Both A and B",
                    D: "CURRENT_DATABASE()"
                },
                correct: "C",
                explanation: "Both DATABASE() and SCHEMA() return the name of the current (default) database."
            },
            {
                question: "What does the following SQL statement do? CHECKSUM TABLE users;",
                options: {
                    A: "Creates a checksum for the table",
                    B: "Calculates and returns a checksum",
                    C: "Validates table checksum",
                    D: "Repairs table checksum"
                },
                correct: "B",
                explanation: "The CHECKSUM TABLE statement calculates and returns a checksum value for the table contents."
            },
            {
                question: "Which SQL statement is used to show the table status for all databases?",
                options: {
                    A: "SHOW TABLE STATUS FROM database",
                    B: "DISPLAY ALL TABLE STATUS",
                    C: "LIST ALL TABLE STATUS",
                    D: "VIEW ALL TABLE STATUS"
                },
                correct: "A",
                explanation: "The SHOW TABLE STATUS FROM database statement displays status information for all tables in the specified database."
            },
            {
                question: "What is the purpose of the DATE function in MySQL?",
                options: {
                    A: "To extract date from datetime",
                    B: "To get current date",
                    C: "To format dates",
                    D: "To validate dates"
                },
                correct: "A",
                explanation: "The DATE function extracts the date part from a datetime or date expression."
            },
            {
                question: "Which MySQL function returns the current user?",
                options: {
                    A: "CURRENT_USER()",
                    B: "USER()",
                    C: "SESSION_USER()",
                    D: "All of the above"
                },
                correct: "D",
                explanation: "All of these functions return information about the current user, though they may return slightly different formats."
            },
            {
                question: "What does the following SQL statement do? LOCK TABLES users READ;",
                options: {
                    A: "Locks the users table for reading",
                    B: "Locks the users table for writing",
                    C: "Unlocks the users table",
                    D: "Shows table locks"
                },
                correct: "A",
                explanation: "The LOCK TABLES users READ statement acquires a read lock on the users table, allowing other sessions to read but not write."
            },
            {
                question: "Which SQL statement is used to show the open tables?",
                options: {
                    A: "SHOW OPEN TABLES",
                    B: "DISPLAY OPEN TABLES",
                    C: "LIST OPEN TABLES",
                    D: "VIEW OPEN TABLES"
                },
                correct: "A",
                explanation: "The SHOW OPEN TABLES statement displays information about tables that are currently open."
            },
            {
                question: "What is the purpose of the TIME function in MySQL?",
                options: {
                    A: "To extract time from datetime",
                    B: "To get current time",
                    C: "To format time",
                    D: "To validate time"
                },
                correct: "A",
                explanation: "The TIME function extracts the time part from a datetime or time expression."
            },
            {
                question: "Which MySQL function returns the last inserted ID?",
                options: {
                    A: "LAST_INSERT_ID()",
                    B: "INSERT_ID()",
                    C: "LAST_ID()",
                    D: "GET_LAST_ID()"
                },
                correct: "A",
                explanation: "The LAST_INSERT_ID function returns the first automatically generated value that was set for an AUTO_INCREMENT column."
            },
            {
                question: "What does the following SQL statement do? UNLOCK TABLES;",
                options: {
                    A: "Locks tables",
                    B: "Unlocks all locked tables",
                    C: "Shows locked tables",
                    D: "Creates table locks"
                },
                correct: "B",
                explanation: "The UNLOCK TABLES statement releases all table locks that were acquired with LOCK TABLES."
            },
            {
                question: "Which SQL statement is used to show the status of InnoDB?",
                options: {
                    A: "SHOW ENGINE INNODB STATUS",
                    B: "DISPLAY INNODB STATUS",
                    C: "LIST INNODB STATUS",
                    D: "VIEW INNODB STATUS"
                },
                correct: "A",
                explanation: "The SHOW ENGINE INNODB STATUS statement displays detailed InnoDB status information."
            },
            {
                question: "What is the purpose of the TIMESTAMP function in MySQL?",
                options: {
                    A: "To get current timestamp",
                    B: "To create timestamp from parts",
                    C: "To format timestamps",
                    D: "Both A and B"
                },
                correct: "D",
                explanation: "The TIMESTAMP function can be used to get the current timestamp or to create a timestamp from date and time parts."
            },
            {
                question: "Which MySQL function returns the connection ID?",
                options: {
                    A: "CONNECTION_ID()",
                    B: "GET_CONNECTION_ID()",
                    C: "CURRENT_CONNECTION()",
                    D: "SESSION_ID()"
                },
                correct: "A",
                explanation: "The CONNECTION_ID function returns the connection ID (thread ID) for the current connection."
            },
            {
                question: "What does the following SQL statement do? FLUSH PRIVILEGES;",
                options: {
                    A: "Reloads grant tables",
                    B: "Flushes user privileges",
                    C: "Shows privileges",
                    D: "Creates privileges"
                },
                correct: "A",
                explanation: "The FLUSH PRIVILEGES statement reloads the grant tables from the mysql database, applying any recent privilege changes."
            },
            {
                question: "Which SQL statement is used to show the master status?",
                options: {
                    A: "SHOW MASTER STATUS",
                    B: "DISPLAY MASTER STATUS",
                    C: "LIST MASTER STATUS",
                    D: "VIEW MASTER STATUS"
                },
                correct: "A",
                explanation: "The SHOW MASTER STATUS statement provides status information about the binary log on a master server."
            },
            {
                question: "What is the purpose of the CURDATE function in MySQL?",
                options: {
                    A: "To get current date",
                    B: "To format current date",
                    C: "To validate current date",
                    D: "To create current date"
                },
                correct: "A",
                explanation: "The CURDATE function returns the current date without the time component."
            },
            {
                question: "Which MySQL function returns the found rows?",
                options: {
                    A: "FOUND_ROWS()",
                    B: "ROW_COUNT()",
                    C: "NUM_ROWS()",
                    D: "GET_FOUND_ROWS()"
                },
                correct: "A",
                explanation: "The FOUND_ROWS function returns the number of rows that would have been returned by a SELECT statement without the LIMIT clause."
            },
            {
                question: "What does the following SQL statement do? RESET QUERY CACHE;",
                options: {
                    A: "Clears the query cache",
                    B: "Enables query cache",
                    C: "Disables query cache",
                    D: "Shows query cache status"
                },
                correct: "A",
                explanation: "The RESET QUERY CACHE statement removes all query results from the query cache."
            },
            {
                question: "Which SQL statement is used to show the query cache status?",
                options: {
                    A: "SHOW STATUS LIKE 'Qcache_%'",
                    B: "DISPLAY QUERY CACHE STATUS",
                    C: "LIST QUERY CACHE STATUS",
                    D: "VIEW QUERY CACHE STATUS"
                },
                correct: "A",
                explanation: "The SHOW STATUS LIKE 'Qcache_%' statement displays various query cache status variables."
            },
            {
                question: "What is the purpose of the CURTIME function in MySQL?",
                options: {
                    A: "To get current time",
                    B: "To format current time",
                    C: "To validate current time",
                    D: "To create current time"
                },
                correct: "A",
                explanation: "The CURTIME function returns the current time without the date component."
            },
            {
                question: "Which MySQL function returns the number of affected rows?",
                options: {
                    A: "ROW_COUNT()",
                    B: "AFFECTED_ROWS()",
                    C: "NUM_AFFECTED_ROWS()",
                    D: "GET_AFFECTED_ROWS()"
                },
                correct: "A",
                explanation: "The ROW_COUNT function returns the number of rows affected by the previous INSERT, UPDATE, DELETE, or REPLACE statement."
            },
            {
                question: "What does the following SQL statement do? SET GLOBAL query_cache_size = 0;",
                options: {
                    A: "Disables query cache",
                    B: "Enables query cache",
                    C: "Shows query cache size",
                    D: "Resets query cache"
                },
                correct: "A",
                explanation: "Setting query_cache_size to 0 effectively disables the query cache."
            },
            {
                question: "Which SQL statement is used to show the global status?",
                options: {
                    A: "SHOW GLOBAL STATUS",
                    B: "DISPLAY GLOBAL STATUS",
                    C: "LIST GLOBAL STATUS",
                    D: "VIEW GLOBAL STATUS"
                },
                correct: "A",
                explanation: "The SHOW GLOBAL STATUS statement displays all global status variables."
            },
            {
                question: "What is the purpose of the NOW function in MySQL?",
                options: {
                    A: "To get current date and time",
                    B: "To format current date and time",
                    C: "To validate current date and time",
                    D: "To create current date and time"
                },
                correct: "A",
                explanation: "The NOW function returns the current date and time."
            },
            {
                question: "Which MySQL function returns the server version?",
                options: {
                    A: "VERSION()",
                    B: "SERVER_VERSION()",
                    C: "MYSQL_VERSION()",
                    D: "GET_VERSION()"
                },
                correct: "A",
                explanation: "The VERSION function returns the MySQL server version information."
            },
            {
                question: "What does the following SQL statement do? FLUSH QUERY CACHE;",
                options: {
                    A: "Defragments the query cache",
                    B: "Clears the query cache",
                    C: "Enables query cache",
                    D: "Shows query cache"
                },
                correct: "A",
                explanation: "The FLUSH QUERY CACHE statement defragments the query cache to better utilize its memory."
            },
            {
                question: "Which SQL statement is used to show the session status?",
                options: {
                    A: "SHOW SESSION STATUS",
                    B: "DISPLAY SESSION STATUS",
                    C: "LIST SESSION STATUS",
                    D: "VIEW SESSION STATUS"
                },
                correct: "A",
                explanation: "The SHOW SESSION STATUS statement displays all session status variables."
            },
            {
                question: "What is the purpose of the SYSDATE function in MySQL?",
                options: {
                    A: "To get current date and time",
                    B: "To get system date and time",
                    C: "To format system date",
                    D: "To validate system date"
                },
                correct: "B",
                explanation: "The SYSDATE function returns the current date and time at the time the function executes."
            },
            {
                question: "Which MySQL function returns the database name?",
                options: {
                    A: "DATABASE()",
                    B: "SCHEMA()",
                    C: "Both A and B",
                    D: "GET_DATABASE()"
                },
                correct: "C",
                explanation: "Both DATABASE() and SCHEMA() return the name of the current database."
            },
            {
                question: "What does the following SQL statement do? SET GLOBAL query_cache_type = OFF;",
                options: {
                    A: "Disables query cache",
                    B: "Enables query cache",
                    C: "Shows query cache type",
                    D: "Resets query cache"
                },
                correct: "A",
                explanation: "Setting query_cache_type to OFF disables the query cache."
            },
            {
                question: "Which SQL statement is used to show the variables for a specific session?",
                options: {
                    A: "SHOW SESSION VARIABLES LIKE 'pattern'",
                    B: "DISPLAY SESSION VARIABLES",
                    C: "LIST SESSION VARIABLES",
                    D: "VIEW SESSION VARIABLES"
                },
                correct: "A",
                explanation: "The SHOW SESSION VARIABLES LIKE 'pattern' statement displays session variables that match the specified pattern."
            },
            {
                question: "What is the purpose of the UTC_DATE function in MySQL?",
                options: {
                    A: "To get current UTC date",
                    B: "To format UTC date",
                    C: "To validate UTC date",
                    D: "To create UTC date"
                },
                correct: "A",
                explanation: "The UTC_DATE function returns the current UTC date."
            },
            {
                question: "Which MySQL function returns the table status?",
                options: {
                    A: "TABLE_STATUS()",
                    B: "GET_TABLE_STATUS()",
                    C: "SHOW TABLE STATUS",
                    D: "No such function exists"
                },
                correct: "D",
                explanation: "There is no TABLE_STATUS function. Table status is obtained using the SHOW TABLE STATUS statement."
            },
            {
                question: "What does the following SQL statement do? SHOW VARIABLES LIKE 'query_cache%';",
                options: {
                    A: "Shows all query cache variables",
                    B: "Shows all variables",
                    C: "Shows session variables",
                    D: "Shows global variables"
                },
                correct: "A",
                explanation: "This statement displays all system variables that start with 'query_cache'."
            },
            {
                question: "Which SQL statement is used to show the process list?",
                options: {
                    A: "SHOW PROCESSLIST",
                    B: "DISPLAY PROCESSLIST",
                    C: "LIST PROCESSLIST",
                    D: "VIEW PROCESSLIST"
                },
                correct: "A",
                explanation: "The SHOW PROCESSLIST statement displays information about the threads currently running on the MySQL server."
            },
            {
                question: "What is the purpose of the UTC_TIME function in MySQL?",
                options: {
                    A: "To get current UTC time",
                    B: "To format UTC time",
                    C: "To validate UTC time",
                    D: "To create UTC time"
                },
                correct: "A",
                explanation: "The UTC_TIME function returns the current UTC time."
            },
            {
                question: "Which MySQL function returns the user name?",
                options: {
                    A: "USER()",
                    B: "CURRENT_USER()",
                    C: "SESSION_USER()",
                    D: "All of the above"
                },
                correct: "D",
                explanation: "All of these functions return user information, though they may return slightly different formats."
            },
            {
                question: "What does the following SQL statement do? KILL 123;",
                options: {
                    A: "Creates a process",
                    B: "Terminates process with ID 123",
                    C: "Shows process 123",
                    D: "Modifies process 123"
                },
                correct: "B",
                explanation: "The KILL statement terminates the thread with the specified thread ID."
            },
            {
                question: "Which SQL statement is used to show the full process list?",
                options: {
                    A: "SHOW FULL PROCESSLIST",
                    B: "DISPLAY FULL PROCESSLIST",
                    C: "LIST FULL PROCESSLIST",
                    D: "VIEW FULL PROCESSLIST"
                },
                correct: "A",
                explanation: "The SHOW FULL PROCESSLIST statement displays full information about all threads running on the MySQL server."
            },
            {
                question: "What is the purpose of the UTC_TIMESTAMP function in MySQL?",
                options: {
                    A: "To get current UTC timestamp",
                    B: "To format UTC timestamp",
                    C: "To validate UTC timestamp",
                    D: "To create UTC timestamp"
                },
                correct: "A",
                explanation: "The UTC_TIMESTAMP function returns the current UTC date and time."
            }
        ];

        // Quiz state
        let currentQuestion = 0;
        let score = 0;
        let userAnswers = [];
        let quizCompleted = false;

        // DOM elements
        const questionCounter = document.getElementById('questionCounter');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const explanation = document.getElementById('explanation');
        const explanationText = document.getElementById('explanationText');
        const progressFill = document.getElementById('progressFill');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const quizContent = document.getElementById('quizContent');
        const quizComplete = document.getElementById('quizComplete');
        const finalScore = document.getElementById('finalScore');
        const performanceMessage = document.getElementById('performanceMessage');

        // Initialize quiz
        function initQuiz() {
            currentQuestion = 0;
            score = 0;
            userAnswers = [];
            quizCompleted = false;
            quizContent.style.display = 'block';
            quizComplete.classList.remove('show');
            loadQuestion();
        }

        // Load current question
        function loadQuestion() {
            const question = quizData[currentQuestion];
            
            questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
            scoreDisplay.textContent = `Score: ${score}`;
            
            const progress = ((currentQuestion + 1) / quizData.length) * 100;
            progressFill.style.width = `${progress}%`;
            
            questionText.textContent = question.question;
            
            optionsContainer.innerHTML = '';
            Object.entries(question.options).forEach(([key, value]) => {
                const option = document.createElement('div');
                option.className = 'option';
                option.dataset.option = key; // Add data-option for easier selection
                option.onclick = () => selectOption(key);
                
                const label = document.createElement('div');
                label.className = 'option-label';
                label.textContent = key;
                
                const text = document.createElement('div');
                text.textContent = value;
                
                option.appendChild(label);
                option.appendChild(text);
                optionsContainer.appendChild(option);
            });
            
            // Restore selected answer and show explanation if already answered
            const userAnswer = userAnswers[currentQuestion];
            if (userAnswer !== undefined) {
                showExplanation();
                highlightCorrectAnswer(); // This function already highlights the correct answer
                
                const selectedOptionDiv = optionsContainer.querySelector(`[data-option="${userAnswer}"]`);
                if (selectedOptionDiv) {
                    // The highlightCorrectAnswer already adds 'correct' class.
                    // We just need to add 'selected' and 'incorrect' if applicable.
                    if (userAnswer !== question.correct) {
                        selectedOptionDiv.classList.add('incorrect');
                    }
                    selectedOptionDiv.classList.add('selected'); // Mark as selected
                }
            } else {
                explanation.classList.remove('show');
            }
            
            prevBtn.disabled = currentQuestion === 0;
            nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next';
            nextBtn.innerHTML = currentQuestion === quizData.length - 1 ? 
                '<i class="fas fa-flag-checkered"></i> Finish Quiz' : 
                'Next <i class="fas fa-chevron-right"></i>';
        }

        // Select an option
        function selectOption(selectedKey) {
            if (userAnswers[currentQuestion] !== undefined) return; // Already answered
            
            const question = quizData[currentQuestion];
            userAnswers[currentQuestion] = selectedKey;
            
            // Clear previous selections and highlight selected option immediately
            const allOptions = optionsContainer.querySelectorAll('.option');
            allOptions.forEach(option => option.classList.remove('selected', 'correct', 'incorrect'));
            
            const selectedOptionDiv = optionsContainer.querySelector(`[data-option="${selectedKey}"]`);
            if (selectedOptionDiv) {
                selectedOptionDiv.classList.add('selected');
            }

            // Show correct/incorrect highlighting and explanation after a short delay
            setTimeout(() => {
                if (selectedKey === question.correct) {
                    score++;
                    scoreDisplay.textContent = `Score: ${score}`;
                    if (selectedOptionDiv) selectedOptionDiv.classList.add('correct');
                } else {
                    if (selectedOptionDiv) selectedOptionDiv.classList.add('incorrect');
                    const correctOptionDiv = optionsContainer.querySelector(`[data-option="${question.correct}"]`);
                    if (correctOptionDiv) correctOptionDiv.classList.add('correct');
                }
                showExplanation();
            }, 500);
        }

        // Show explanation
        function showExplanation() {
            explanationText.textContent = quizData[currentQuestion].explanation;
            explanation.classList.add('show');
        }

        // Highlight correct answer
        function highlightCorrectAnswer() {
            const question = quizData[currentQuestion];
            const options = optionsContainer.children;
            const correctIndex = Object.keys(question.options).indexOf(question.correct);
            options[correctIndex].classList.add('correct');
        }

        // Navigate to previous question
        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
            }
        }

        // Navigate to next question
        function nextQuestion() {
            if (currentQuestion < quizData.length - 1) {
                currentQuestion++;
                loadQuestion();
            } else {
                finishQuiz();
            }
        }

        // Finish quiz
        function finishQuiz() {
            quizCompleted = true;
            quizContent.style.display = 'none';
            quizComplete.classList.add('show');
            
            // Calculate final score
            const answeredQuestions = userAnswers.filter(answer => answer !== undefined).length;
            const percentage = Math.round((score / quizData.length) * 100);
            
            finalScore.textContent = `${score}/${quizData.length}`;
            
            // Performance message
            let message = '';
            if (percentage >= 90) {
                message = '🏆 Outstanding! You\'re a MySQL expert!';
            } else if (percentage >= 80) {
                message = '🌟 Excellent work! You have strong MySQL knowledge!';
            } else if (percentage >= 70) {
                message = '👍 Good job! You know MySQL well!';
            } else if (percentage >= 60) {
                message = '📚 Not bad! Keep practicing to improve!';
            } else {
                message = '💪 Keep studying! Practice makes perfect!';
            }
            
            performanceMessage.textContent = message;
        }

        // Restart quiz
        function restartQuiz() {
            initQuiz();
        }

        // Initialize the quiz when page loads
        window.onload = initQuiz;
   