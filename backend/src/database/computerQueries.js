export const departmentQueries = {
  getDepartments: `
    SELECT 
      department.departmentId as id, 
      department.name,
      department.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM department 
    LEFT JOIN 
      users AS creator ON department.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON department.modifiedBy = modifier.userId
    `,
  postDepartment: `
    INSERT INTO department (name, createdBy) 
    VALUES (@name, @userId)
  `,
  getDepartment: `
    SELECT 
      department.departmentId as id, 
      department.name,
      department.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM department 
    LEFT JOIN 
      users AS creator ON department.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON department.modifiedBy = modifier.userId
    WHERE 
      department.departmentId = @departmentId
    `,
  putDepartment: `
    UPDATE department 
    SET name = @name, modifiedBy = @userId WHERE department.departmentId = @departmentId
  `,
  deleteDepartment: `
    DELETE FROM department 
    WHERE department.departmentId = @departmentId
  `,
};

export const systemQueries = {
  getSystems: `
    SELECT 
      system.systemId as id, 
      system.name,
      system.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM operating_system as system 
    LEFT JOIN 
      users AS creator ON system.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON system.modifiedBy = modifier.userId
    `,
  postSystem: `
    INSERT INTO operating_system (name, createdBy) 
    VALUES (@name, @userId)
  `,
  getSystem: `
    SELECT 
      system.systemId as id, 
      system.name,
      system.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM operating_system as system 
    LEFT JOIN 
      users AS creator ON system.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON system.modifiedBy = modifier.userId
    WHERE 
      system.systemId = @systemId
    `,
  putSystem: `
    UPDATE operating_system 
    SET name = @name, modifiedBy = @userId WHERE operating_system.systemId = @systemId
  `,
  deleteSystem: `
    DELETE FROM operating_system 
    WHERE operating_system.systemId = @systemId
  `,
};

export const proccesorQueries = {
  getProccesors: `
    SELECT 
      proccesor.proccesorId as id, 
      proccesor.name,
      proccesor.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM proccesor 
    LEFT JOIN 
      users AS creator ON proccesor.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON proccesor.modifiedBy = modifier.userId
    `,
  postProccesor: `
    INSERT INTO proccesor (name, createdBy) 
    VALUES (@name, @userId)
  `,
  getProccesor: `
    SELECT 
      proccesor.proccesorId as id, 
      proccesor.name,
      proccesor.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM proccesor 
    LEFT JOIN 
      users AS creator ON proccesor.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON proccesor.modifiedBy = modifier.userId
    WHERE 
      proccesor.proccesorId = @proccesorId
    `,
  putProccesor: `
    UPDATE proccesor 
    SET name = @name, modifiedBy = @userId WHERE proccesor.proccesorId = @proccesorId
  `,
  deleteProccesor: `
    DELETE FROM proccesor 
    WHERE proccesor.proccesorId = @proccesorId
  `,
};

export const ramQueries = {
  getRams: `
    SELECT 
      ram.ramId as id, 
      ram.description,
      ram.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM ram_capacity as ram 
     LEFT JOIN 
      users AS creator ON ram.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON ram.modifiedBy = modifier.userId
    `,
  postRam: `
    INSERT INTO ram_capacity (description, createdBy) 
    VALUES (@description, @userId)
  `,
  getRam: `
    SELECT 
      ram.ramId as id, 
      ram.description,
      ram.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM ram_capacity as ram 
    LEFT JOIN 
      users AS creator ON ram.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON ram.modifiedBy = modifier.userId
    WHERE 
      ram.ramId = @ramId
    `,
  putRam: `
    UPDATE ram_capacity 
    SET description = @description, modifiedBy = @userId WHERE ram_capacity.ramId = @ramId
  `,
  deleteRam: `
    DELETE FROM ram_capacity 
    WHERE ram_capacity.ramId = @ramId
  `,
};

export const storageQueries = {
  getStorages: `
    SELECT 
      storage.storageId as id, 
      storage.description,
      storage.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM storage_capacity as storage 
    LEFT JOIN 
      users AS creator ON storage.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON storage.modifiedBy = modifier.userId
    `,
  postStorage: `
    INSERT INTO storage_capacity (description, createdBy) 
    VALUES (@description, @userId)
  `,
  getStorage: `
    SELECT 
      storage.storageId as id, 
      storage.description,
      storage.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM storage_capacity as storage 
    LEFT JOIN 
      users AS creator ON storage.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON storage.modifiedBy = modifier.userId
    WHERE 
      storage.storageId = @storageId
    `,
  putStorage: `
    UPDATE storage_capacity 
    SET description = @description, modifiedBy = @userId WHERE storage_capacity.storageId = @storageId
  `,
  deleteStorage: `
    DELETE FROM storage_capacity 
    WHERE storage_capacity.storageId = @storageId
  `,
};

export const officeQueries = {
  getOffices: `
    SELECT 
      office.officeId as id, 
      office.description,
      office.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM office 
    LEFT JOIN 
      users AS creator ON office.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON office.modifiedBy = modifier.userId
    `,
  postOffice: `
    INSERT INTO office (description, createdBy) 
    VALUES (@description, @userId)
  `,
  getOffice: `
    SELECT 
      office.officeId as id, 
      office.description,
      office.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM office 
    LEFT JOIN 
      users AS creator ON office.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON office.modifiedBy = modifier.userId
    WHERE 
      office.officeId = @officeId
    `,
  putOffice: `
    UPDATE office 
    SET description = @description, modifiedBy = @userId WHERE office.officeId = @officeId
  `,
  deleteOffice: `
    DELETE FROM office 
    WHERE office.officeId = @officeId
  `,
};

export const computerQueries = {
  getComputers: `
    SELECT
      computer.computerId AS id,   
      computer.serialNumber,
      computer.cnftLabel,
      category.categoryId,
      category.name AS categoryName,
      subcategory.subcategoryId,
      subcategory.name AS subcategoryName,
      computer.actualUser,
      computer.lastUser,
      computer.hostname,
      brand.brandId,
      brand.name AS brandName,
      model.modelId,
      model.name AS modelName,
      operating_system.systemId,
      operating_system.name AS systemName,
      proccesor.proccesorId,
      proccesor.name AS proccesorName,
      computer.diskType,
      storage_capacity.storageId,
      storage_capacity.description AS storageDescription,
      ram_capacity.ramId,
      ram_capacity.description AS ramDescription,
      office.officeId,
      office.description AS officeDescription,
      computer.officeLicence,
      computer.city,
      department.departmentId,
      department.name AS departmentName,
      state.stateId,
      state.description AS stateDescription,
      availability.availabilityId,
      availability.description AS availabilityDescription,
      computer.observations,
      computer.damages,
      computer.accquisitionDate,

      computer.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM computer 
    LEFT JOIN
      category ON computer.categoryId = category.categoryId
    LEFT JOIN
      subcategory ON computer.subcategoryId = subcategory.subcategoryId
    LEFT JOIN
      state ON computer.stateId = state.stateId
    LEFT JOIN
      availability ON computer.availabilityId = availability.availabilityId
    LEFT JOIN
      department ON computer.departmentId = department.departmentId
    LEFT JOIN
      brand ON computer.brandId = brand.brandId
    LEFT JOIN
      model ON computer.modelId = model.modelId
    LEFT JOIN
      operating_system ON computer.systemId = operating_system.systemId
    LEFT JOIN
      proccesor ON computer.proccesorId = proccesor.proccesorId
    LEFT JOIN
      ram_capacity ON computer.ramId = ram_capacity.ramId
    LEFT JOIN
      storage_capacity ON computer.storageId = storage_capacity.storageId
    LEFT JOIN
      office ON computer.officeId = office.officeId
    LEFT JOIN 
      users AS creator ON computer.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON computer.modifiedBy = modifier.userId
    WHERE 
    (
      computer.serialNumber LIKE @serialNumber AND
      (computer.cnftLabel LIKE @cnftLabel OR computer.cnftLabel IS NULL) AND
      (computer.city LIKE @city OR computer.city IS NULL) AND
      (computer.lastUser LIKE @lastUser OR computer.lastUser IS NULL) AND
      (computer.actualUser LIKE @actualUser OR computer.actualUser IS NULL) AND
      (computer.hostname LIKE @hostname OR computer.hostname IS NULL) AND
      (computer.observations LIKE @observations OR computer.observations IS NULL) AND
      (computer.diskType LIKE @diskType OR computer.diskType IS NULL) AND
      (computer.damages LIKE @damages OR computer.damages IS NULL) AND
      (computer.officeLicence LIKE @officeLicence OR computer.officeLicence IS NULL) AND
      computer.createdBy LIKE @userId AND
      computer.brandId = ISNULL(@brandId, computer.brandId) AND
      computer.categoryId = ISNULL(@categoryId, computer.categoryId) AND
      computer.subcategoryId = ISNULL(@subcategoryId, computer.subcategoryId) AND
      computer.stateId = ISNULL(@stateId, computer.stateId) AND
      computer.availabilityId = ISNULL(@availabilityId, computer.availabilityId) AND
      computer.departmentId = ISNULL(@departmentId, computer.departmentId) AND
      computer.modelId = ISNULL(@modelId, computer.modelId) AND
      computer.systemId = ISNULL(@systemId, computer.systemId) AND
      computer.proccesorId = ISNULL(@proccesorId, computer.proccesorId) AND
      computer.ramId = ISNULL(@ramId, computer.ramId) AND
      computer.storageId = ISNULL(@storageId, computer.storageId) AND
      computer.officeId = ISNULL(@officeId, computer.officeId)
    )
    ORDER BY createdAt DESC;
    `,
  postComputer: `
    INSERT INTO computer (
      serialNumber,
      cnftLabel,
      city,
      lastUser,
      actualUser,
      hostname,
      brandId,
      observations,
      diskType,
      accquisitionDate,
      damages,
      categoryId,
      subcategoryId,
      departmentId,
      modelId,
      systemId,
      proccesorId,
      ramId,
      storageId,
      officeId,
      officeLicence,
      availabilityId,
      stateId,
      createdBy
    ) 
    VALUES (
      @serialNumber,
      @cnftLabel,
      @city,
      @lastUser,
      @actualUser,
      @hostname,
      @brandId,
      @observations,
      @diskType,
      @accquisitionDate,
      @damages,
      @categoryId,
      @subcategoryId,
      @departmentId,
      @modelId,
      @systemId,
      @proccesorId,
      @ramId,
      @storageId,
      @officeId,
      @officeLicence,
      @availabilityId,
      @stateId,
      @userId
    )
  `,
  getComputer: `
    SELECT
      computer.computerId AS id,   
      computer.serialNumber,
      computer.cnftLabel,
      computer.city,
      computer.lastUser,
      computer.actualUser,
      computer.hostname,
      computer.observations,
      computer.diskType,
      computer.accquisitionDate,
      computer.damages,
      computer.officeLicence,
      
      category.categoryId,
      category.name AS categoryName,
      subcategory.subcategoryId,
      subcategory.name AS subcategoryName,
      state.stateId,
      state.description AS stateDescription,
      availability.availabilityId,
      availability.description AS availabilityDescription,
      department.departmentId,
      department.name AS departmentName,
      brand.brandId,
      brand.name AS brandName,
      model.modelId,
      model.name AS modelName,
      operating_system.systemId,
      operating_system.name AS systemName,
      proccesor.proccesorId,
      proccesor.name AS proccesorName,
      ram_capacity.ramId,
      ram_capacity.description AS ramDescription,
      storage_capacity.storageId,
      storage_capacity.description AS storageDescription,
      office.officeId,
      office.description AS officeDescription,
      computer.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM computer 
    LEFT JOIN
      category ON computer.categoryId = category.categoryId
    LEFT JOIN
      subcategory ON computer.subcategoryId = subcategory.subcategoryId
    LEFT JOIN
      state ON computer.stateId = state.stateId
    LEFT JOIN
      availability ON computer.availabilityId = availability.availabilityId
    LEFT JOIN
      department ON computer.departmentId = department.departmentId
    LEFT JOIN
      brand ON computer.brandId = brand.brandId
    LEFT JOIN
      model ON computer.modelId = model.modelId
    LEFT JOIN
      operating_system ON computer.systemId = operating_system.systemId
    LEFT JOIN
      proccesor ON computer.proccesorId = proccesor.proccesorId
    LEFT JOIN
      ram_capacity ON computer.ramId = ram_capacity.ramId
    LEFT JOIN
      storage_capacity ON computer.storageId = storage_capacity.storageId
    LEFT JOIN
      office ON computer.officeId = office.officeId
    LEFT JOIN 
      users AS creator ON computer.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON computer.modifiedBy = modifier.userId
    WHERE 
      computer.computerId = @computerId
    `,
  putComputer: `
    UPDATE computer 
    SET 
      serialNumber = @serialNumber,
      cnftLabel = @cnftLabel,
      city = @city,
      lastUser = @lastUser,
      actualUser = @actualUser,
      hostname = @hostname,
      observations = @observations,
      diskType = @diskType,
      accquisitionDate = @accquisitionDate,
      damages = @damages,
      categoryId = @categoryId,
      subcategoryId = @subcategoryId,
      departmentId = @departmentId,
      brandId = @brandId,
      modelId = @modelId,
      systemId = @systemId,
      proccesorId = @proccesorId,
      ramId = @ramId,
      storageId = @storageId,
      officeId = @officeId,
      officeLicence = @officeLicence,
      availabilityId = @availabilityId,
      stateId = @stateId,
      modifiedBy = @userId
    WHERE computer.computerId = @computerId OR computer.serialNumber = @serialNumber
  `,
  deleteComputer: `
    DELETE FROM computer 
    WHERE computer.computerId = @computerId
  `,
};

export const certificateQueries = {
  getCertificates: `
    SELECT 
      certificate.certificateId, 
      certificate.name,
      certificate.computerId,
      certificate.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM computer_certificate as certificate
    LEFT JOIN 
      computer ON certificate.computerId = computer.computerId
    LEFT JOIN 
      users AS creator ON certificate.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON certificate.modifiedBy = modifier.userId
    WHERE 
      certificate.computerId = @computerId
    `,
  postCertificate: `
    INSERT INTO computer_certificate (name, computerId, createdBy) 
    VALUES (@name, @computerId, @userId)
  `,
  getCertificate: `
    SELECT 
      certificate.certificateId, 
      certificate.name,
      certificate.computerId,
      certificate.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM computer_certificate as certificate
    LEFT JOIN 
      computer ON certificate.computerId = computer.computerId
    LEFT JOIN 
      users AS creator ON certificate.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON certificate.modifiedBy = modifier.userId
    WHERE 
      certificate.certificateId = @certificateId
    `,
  deleteCertificate: `
    DELETE FROM computer_certificate
    WHERE computer_certificate.certificateId = @certificateId
  `,
};

export const imageQueries = {
  getImages: `
    SELECT 
      image.imageId, 
      image.name,
      image.computerId,
      image.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM computer_image as image
    LEFT JOIN 
      computer ON image.computerId = computer.computerId
    LEFT JOIN 
      users AS creator ON image.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON image.modifiedBy = modifier.userId
    WHERE 
      image.computerId = @computerId
    `,
  postImage: `
    INSERT INTO computer_image (name, computerId,createdBy) 
    VALUES (@name, @computerId, @userId)
  `,
  getImage: `
    SELECT 
      image.imageId, 
      image.name,
      image.computerId,
      image.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM computer_image as image
    LEFT JOIN 
      computer ON image.computerId = computer.computerId
    LEFT JOIN 
      users AS creator ON image.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON image.modifiedBy = modifier.userId
    WHERE 
      image.imageId = @imageId
    `,
  deleteImage: `
    DELETE FROM computer_image
    WHERE computer_image.imageId = @imageId
  `,
};
