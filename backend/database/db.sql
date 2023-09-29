
CREATE TABLE rol(
  idRol INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE()
);

CREATE TABLE users(
  userId VARCHAR(10) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(300) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  idRol INT CHECK (idRol > 0),
  FOREIGN KEY (idRol) REFERENCES rol(idRol)
);

CREATE TABLE category(
  categoryId INT CHECK (categoryId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE subcategory(
  subcategoryId INT CHECK (subcategoryId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  categoryId INT CHECK (categoryId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId),
  FOREIGN KEY (categoryId) REFERENCES category(categoryId)
);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE state(
  stateId INT CHECK (stateId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(100) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE availability(
  availabilityId INT CHECK (availabilityId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(100) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE supervisor(
  supervisorId INT CHECK (supervisorId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE place(
  placeId INT CHECK (placeId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  supervisorId INT CHECK (supervisorId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId),
  FOREIGN KEY (supervisorId) REFERENCES supervisor(supervisorId)
);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE printer(
  printerId INT CHECK (printerId > 0) IDENTITY(1,1) PRIMARY KEY,
  serialNumber VARCHAR(100) NOT NULL,
  confiLabel VARCHAR(100) NOT NULL,
  sbdName VARCHAR(100) NOT NULL,
  sbdCode VARCHAR(10) NOT NULL,
  sbdStore VARCHAR(10) NOT NULL,
  observations VARCHAR(100),

  subcategoryId INT CHECK (subcategoryId > 0),
  availabilityId INT CHECK (availabilityId > 0),
  stateId INT CHECK (stateId > 0),
  placeId INT CHECK (placeId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId),
  FOREIGN KEY (placeId) REFERENCES place(placeId),
  FOREIGN KEY (subcategoryId) REFERENCES subcategory(subcategoryId),
  FOREIGN KEY (availabilityId) REFERENCES availability(availabilityId), 
  FOREIGN KEY (stateId) REFERENCES state(stateId)
);