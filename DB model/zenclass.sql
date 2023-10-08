
    CREATE DATABASE guvi zen class;

    use guvi zen class

CREATE TABLE Classes (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    duration INT NOT NULL, 
    capacity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table to store information about users
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table to represent the relationship between users and classes (enrollments)
CREATE TABLE UserClassEnrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    class_id INT NOT NULL,
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (class_id) REFERENCES Classes(class_id)
);

