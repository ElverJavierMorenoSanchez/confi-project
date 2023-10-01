export const supervisorQueries = {
  getSupervisors: `
    SELECT 
      supervisor.supervisorId, 
      supervisor.name,
      supervisor.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM supervisor 
    LEFT JOIN 
      users AS creator ON supervisor.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON supervisor.modifiedBy = modifier.userId
    `,
  postSupervisor: `
    INSERT INTO supervisor (name, createdBy) 
    VALUES (@name, @userId)
  `,
  getSupervisor: `
    SELECT 
      supervisor.supervisorId, 
      supervisor.name,
      supervisor.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM supervisor 
    LEFT JOIN 
      users AS creator ON supervisor.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON supervisor.modifiedBy = modifier.userId
    WHERE 
      supervisor.supervisorId = @supervisorId
    `,
  putSupervisor: `
    UPDATE supervisor 
    SET name = @name, modifiedBy = @userId WHERE supervisor.supervisorId = @supervisorId
  `,
  deleteSupervisor: `
    DELETE FROM supervisor 
    WHERE supervisor.supervisorId = @supervisorId
  `,
};

export const placeQueries = {
  getPlaces: `
    SELECT 
      place.placeId, 
      place.name,
      place.supervisorId,
      supervisor.name as supervisorName,
      place.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM place
    LEFT JOIN 
      supervisor ON place.supervisorId = supervisor.supervisorId
    LEFT JOIN 
      users AS creator ON place.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON place.modifiedBy = modifier.userId
    `,
  postPlace: `
    INSERT INTO place (name, supervisorId,createdBy) 
    VALUES (@name, @supervisorId, @userId)
  `,
  getPlace: `
    SELECT 
      place.placeId, 
      place.name,
      place.supervisorId,
      supervisor.name as supervisorName,
      place.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM place
    LEFT JOIN 
      supervisor ON place.supervisorId = supervisor.supervisorId
    LEFT JOIN 
      users AS creator ON place.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON place.modifiedBy = modifier.userId
    WHERE 
      place.placeId = @placeId
    `,
  putPlace: `
    UPDATE place 
    SET name = @name, supervisorId = @supervisorId, modifiedBy = @userId WHERE place.placeId = @placeId
  `,
  deletePlace: `
    DELETE FROM place 
    WHERE place.placeId = @placeId
  `,
};

export const subcategoryQueries = {
  getSubcategories: `
    SELECT 
      subcategory.subcategoryId, 
      subcategory.name,
      subcategory.categoryId,
      category.name as categoryName,
      subcategory.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM subcategory
    LEFT JOIN 
      category ON subcategory.categoryId = category.categoryId
    LEFT JOIN 
      users AS creator ON subcategory.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON subcategory.modifiedBy = modifier.userId
    `,
  postSubcategory: `
    INSERT INTO subcategory (name, categoryId,createdBy) 
    VALUES (@name, @categoryId, @userId)
  `,
  getSubcategory: `
    SELECT 
      subcategory.subcategoryId, 
      subcategory.name,
      subcategory.categoryId,
      category.name as categoryName,
      subcategory.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM subcategory
    LEFT JOIN 
      category ON subcategory.categoryId = category.categoryId
    LEFT JOIN 
      users AS creator ON subcategory.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON subcategory.modifiedBy = modifier.userId
    WHERE 
      subcategory.subcategoryId = @subcategoryId
    `,
  putSubcategory: `
    UPDATE subcategory 
    SET name = @name, categoryId = @categoryId, modifiedBy = @userId 
    WHERE subcategory.subcategoryId = @subcategoryId
  `,
  deleteSubcategory: `
    DELETE FROM subcategory 
    WHERE subcategory.subcategoryId = @subcategoryId
  `,
};

export const printerQueries = {
  getPrinters: `
    SELECT 
      printer.printerId, 
      printer.serialNumber,
      printer.cnftLabel,
      printer.sbdName,
      printer.sbdCode,
      printer.sbdRoute,
      printer.observations,
      printer.damages,
      printer.vacantRoute,
      printer.movements,
      
      category.categoryId,
      category.name as categoryName,
      supervisor.supervisorId,
      supervisor.name as supervisorName,
      place.placeId,
      place.name as placeName,
      subcategory.subcategoryId,
      subcategory.name as subcategoryName,
      availability.availabilityId,
      availability.description as availabilityDescription,
      state.stateId,
      state.description as stateDescription,

      printer.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM printer
    LEFT JOIN
      category ON printer.categoryId = category.categoryId
    LEFT JOIN
      supervisor ON printer.supervisorId = supervisor.supervisorId
    LEFT JOIN
      place ON printer.placeId = place.placeId
    LEFT JOIN
      subcategory ON printer.subcategoryId = subcategory.subcategoryId
    LEFT JOIN
      availability ON printer.availabilityId = availability.availabilityId
    LEFT JOIN
      state ON printer.stateId = state.stateId
    LEFT JOIN 
      users AS creator ON printer.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON printer.modifiedBy = modifier.userId
    `,
  postPrinter: `
    INSERT INTO printer (
      serialNumber, 
      cnftLabel,
      sbdName,
      sbdCode,
      sbdRoute,
      observations,
      damages,
      vacantRoute,
      movements,
      
      categoryId,
      supervisorId,
      placeId,
      subcategoryId,
      availabilityId,
      stateId,
      createdBy
    ) 
    VALUES (
      @serialNumber, 
      @cnftLabel,
      @sbdName,
      @sbdCode,
      @sbdRoute,
      @observations,
      @damages,
      @vacantRoute,
      @movements,
      
      @categoryId,
      @supervisorId,
      @placeId,
      @subcategoryId,
      @availabilityId,
      @stateId,
      @userId
    )
  `,
  getPrinter: `
    SELECT 
      printer.printerId, 
      printer.serialNumber,
      printer.cnftLabel,
      printer.sbdName,
      printer.sbdCode,
      printer.sbdRoute,
      printer.observations,
      printer.damages,
      printer.vacantRoute,
      printer.movements,
      
      category.categoryId,
      category.name as categoryName,
      supervisor.supervisorId,
      supervisor.name as supervisorName,
      place.placeId,
      place.name as placeName,
      subcategory.subcategoryId,
      subcategory.name as subcategoryName,
      availability.availabilityId,
      availability.description as availabilityDescription,
      state.stateId,
      state.description as stateDescription,

      printer.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM printer
    LEFT JOIN
      category ON printer.categoryId = category.categoryId
    LEFT JOIN
      supervisor ON printer.supervisorId = supervisor.supervisorId
    LEFT JOIN
      place ON printer.placeId = place.placeId
    LEFT JOIN
      subcategory ON printer.subcategoryId = subcategory.subcategoryId
    LEFT JOIN
      availability ON printer.availabilityId = availability.availabilityId
    LEFT JOIN
      state ON printer.stateId = state.stateId
    LEFT JOIN 
      users AS creator ON printer.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON printer.modifiedBy = modifier.userId
    WHERE 
      printer.printerId = @printerId
    `,
  putPrinter: `
    UPDATE printer 
    SET 
      sbdName = @sbdName,
      sbdCode = @sbdCode,
      sbdRoute = @sbdRoute,
      observations = @observations,
      damages = @damages,
      vacantRoute = @vacantRoute,
      movements = @movements,
      
      categoryId = @categoryId,
      supervisorId = @supervisorId,
      placeId = @placeId,
      subcategoryId = @subcategoryId,
      availabilityId = @availabilityId,
      stateId = @stateId,
      modifiedBy = @userId
    WHERE printer.printerId = @printerId
  `,
  deletePrinter: `
    DELETE FROM printer 
    WHERE printer.printerId = @printerId
  `,
};

export const certificateQueries = {
  getCertificates: `
    SELECT 
      certificate.certificateId, 
      certificate.name,
      certificate.printerId,
      certificate.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM printer_certificate as certificate
    LEFT JOIN 
      printer ON certificate.printerId = printer.printerId
    LEFT JOIN 
      users AS creator ON certificate.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON certificate.modifiedBy = modifier.userId
    WHERE 
      certificate.printerId = @printerId
    `,
  postCertificate: `
    INSERT INTO printer_certificate (name, printerId,createdBy) 
    VALUES (@name, @printerId, @userId)
  `,
  getCertificate: `
    SELECT 
      certificate.certificateId, 
      certificate.name,
      certificate.printerId,
      certificate.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM printer_certificate as certificate
    LEFT JOIN 
      printer ON certificate.printerId = printer.printerId
    LEFT JOIN 
      users AS creator ON certificate.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON certificate.modifiedBy = modifier.userId
    WHERE 
      certificate.certificateId = @certificateId
    `,
  deleteCertificate: `
    DELETE FROM printer_certificate
    WHERE printer_certificate.certificateId = @certificateId
  `,
};

export const imageQueries = {
  getImages: `
    SELECT 
      image.imageId, 
      image.name,
      image.printerId,
      image.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM printer_image as image
    LEFT JOIN 
      printer ON image.printerId = printer.printerId
    LEFT JOIN 
      users AS creator ON image.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON image.modifiedBy = modifier.userId
    WHERE 
      image.printerId = @printerId
    `,
  postImage: `
    INSERT INTO printer_image (name, printerId,createdBy) 
    VALUES (@name, @printerId, @userId)
  `,
  getImage: `
    SELECT 
      image.imageId, 
      image.name,
      image.printerId,
      image.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM printer_image as image
    LEFT JOIN 
      printer ON image.printerId = printer.printerId
    LEFT JOIN 
      users AS creator ON image.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON image.modifiedBy = modifier.userId
    WHERE 
      image.imageId = @imageId
    `,
  deleteImage: `
    DELETE FROM printer_image
    WHERE printer_image.imageId = @imageId
  `,
};
