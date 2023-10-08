--------------------- GENERAL ---------------------
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

CREATE TABLE state(
  stateId INT CHECK (stateId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(100) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE availability(
  availabilityId INT CHECK (availabilityId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(100) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE brand(
  brandId INT CHECK (brandId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE model(
  modelId INT CHECK (modelId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  brandId INT CHECK (brandId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (brandId) REFERENCES brand(brandId),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

--------------------- PRINTERS ---------------------
CREATE TABLE supervisor(
  supervisorId INT CHECK (supervisorId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

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

CREATE TABLE printer(
  printerId INT CHECK (printerId > 0) IDENTITY(1,1) PRIMARY KEY,
  serialNumber VARCHAR(100) UNIQUE,
  cnftLabel VARCHAR(100) UNIQUE,
  sbdName VARCHAR(100) NOT NULL,
  sbdCode VARCHAR(10) NOT NULL,
  sbdRoute VARCHAR(10) NOT NULL,
  observations VARCHAR(500),
  damages VARCHAR(500),
  vacantRoute VARCHAR(500),
  movements VARCHAR(500),

  categoryId INT,
  subcategoryId INT CHECK (subcategoryId > 0),
  brandId INT CHECK (brandId > 0),
  modelId INT CHECK (modelId > 0),
  supervisorId INT, 
  availabilityId INT CHECK (availabilityId > 0),
  stateId INT CHECK (stateId > 0),
  placeId INT CHECK (placeId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId),
  FOREIGN KEY (categoryId) REFERENCES category(categoryId),
  FOREIGN KEY (supervisorId) REFERENCES supervisor(supervisorId),
  FOREIGN KEY (brandId) REFERENCES brand(brandId),
  FOREIGN KEY (modelId) REFERENCES model(modelId),
  FOREIGN KEY (placeId) REFERENCES place(placeId),
  FOREIGN KEY (subcategoryId) REFERENCES subcategory(subcategoryId),
  FOREIGN KEY (availabilityId) REFERENCES availability(availabilityId), 
  FOREIGN KEY (stateId) REFERENCES state(stateId)
);

CREATE TABLE printer_certificate(
  certificateId INT CHECK (certificateId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  printerId INT CHECK (printerId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (printerId) REFERENCES printer(printerId),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE printer_image(
  imageId INT CHECK (imageId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  printerId INT CHECK (printerId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (printerId) REFERENCES printer(printerId),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

------------------------ COMPUTADORES --------------------------
CREATE TABLE department(
  departmentId INT CHECK (departmentId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE operating_system(
  systemId INT CHECK (systemId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE proccesor(
  proccesorId INT CHECK (proccesorId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE ram_capacity(
  ramId INT CHECK (ramId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE storage_capacity(
  storageId INT CHECK (storageId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);


CREATE TABLE office(
  officeId INT CHECK (officeId > 0) IDENTITY(1,1) PRIMARY KEY,
  description VARCHAR(50) NOT NULL,
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE computer(
  computerId INT CHECK (computerId > 0) IDENTITY(1,1) PRIMARY KEY,
  serialNumber VARCHAR(100) UNIQUE,
  cnftLabel VARCHAR(100) UNIQUE,
  city VARCHAR(100) NOT NULL,
  lastUser VARCHAR(10) NOT NULL,
  actualUser VARCHAR(10) NOT NULL,
  hostname VARCHAR(500),
  observations VARCHAR(500),
  diskType VARCHAR(500),
  accquisitionDate DATE,
  damages VARCHAR(500),
  officeLicence VARCHAR(100),

  categoryId INT,
  subcategoryId INT,
  departmentId INT,
  brandId INT,
  modelId INT,
  systemId INT,
  proccesorId INT,
  ramId INT,
  storageId INT,
  officeId INT,
  availabilityId INT,
  stateId INT CHECK (stateId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId),
  FOREIGN KEY (categoryId) REFERENCES category(categoryId),
  FOREIGN KEY (subcategoryId) REFERENCES subcategory(subcategoryId),
  FOREIGN KEY (departmentId) REFERENCES department(departmentId),
  FOREIGN KEY (brandId) REFERENCES brand(brandId),
  FOREIGN KEY (modelId) REFERENCES model(modelId),
  FOREIGN KEY (systemId) REFERENCES operating_system(systemId),
  FOREIGN KEY (proccesorId) REFERENCES proccesor(proccesorId),
  FOREIGN KEY (ramId) REFERENCES ram_capacity(ramId),
  FOREIGN KEY (storageId) REFERENCES storage_capacity(storageId),
  FOREIGN KEY (officeId) REFERENCES office(officeId),
  FOREIGN KEY (availabilityId) REFERENCES availability(availabilityId), 
  FOREIGN KEY (stateId) REFERENCES state(stateId)
);


CREATE TABLE computer_certificate(
  certificateId INT CHECK (certificateId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  computerId INT CHECK (computerId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (computerId) REFERENCES computer(computerId),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

CREATE TABLE computer_image(
  imageId INT CHECK (imageId > 0) IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  computerId INT CHECK (computerId > 0),
  createdAt DATETIME2(0) DEFAULT GETDATE(),
  createdBy VARCHAR(10) NOT NULL,
  modifiedBy VARCHAR(10),
  FOREIGN KEY (computerId) REFERENCES computer(computerId),
  FOREIGN KEY (createdBy) REFERENCES users(userId),
  FOREIGN KEY (modifiedBy) REFERENCES users(userId)
);

----------------- INSERT VALUES ----------------------------
insert into rol (name) values ('administrator');
insert into users (userId, name, idRol, password) values ('1002290987', 'Jose', 1, '230300EJ');
insert into users (userId, name, idRol, password) values ('1726789025', 'Javi', 1, '230300EJ');