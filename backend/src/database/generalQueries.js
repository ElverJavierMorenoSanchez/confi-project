export const availabilityQueries = {
  getAvailabilities: `
    SELECT 
      availability.availabilityId, 
      availability.description,
      availability.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM availability 
    LEFT JOIN 
      users AS creator ON availability.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON availability.modifiedBy = modifier.userId
    `,
  postAvailability: `
    INSERT INTO availability (description, createdBy) 
    VALUES (@description, @userId)
  `,
  getAvailability: `
    SELECT 
      availability.availabilityId, 
      availability.description,
      availability.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM availability 
    LEFT JOIN 
      users AS creator ON availability.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON availability.modifiedBy = modifier.userId
    WHERE 
      availability.availabilityId = @availabilityId
    `,
  putAvailability: `
    UPDATE availability 
    SET description = @description, modifiedBy = @userId WHERE availability.availabilityId = @availabilityId
  `,
  deleteAvailability: `
    DELETE FROM availability 
    WHERE availability.availabilityId = @availabilityId
  `,
};

export const categoriesQueries = {
  getCategories: `
    SELECT 
      category.categoryId, 
      category.name,
      category.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM category 
    LEFT JOIN 
      users AS creator ON category.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON category.modifiedBy = modifier.userId
    `,
  postCategory: `
    INSERT INTO category (name, createdBy) 
    VALUES (@name, @userId)
  `,
  getCategory: `
    SELECT 
      category.categoryId, 
      category.name,
      category.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM category 
    LEFT JOIN 
      users AS creator ON category.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON category.modifiedBy = modifier.userId
    WHERE 
      category.categoryId = @categoryId
    `,
  putCategory: `
    UPDATE category 
    SET name = @name, modifiedBy = @userId WHERE category.categoryId = @categoryId
  `,
  deleteCategory: `
    DELETE FROM category 
    WHERE category.categoryId = @categoryId
  `,
};

export const stateQueries = {
  getStates: `
    SELECT 
      state.stateId, 
      state.description,
      state.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM state 
    LEFT JOIN 
      users AS creator ON state.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON state.modifiedBy = modifier.userId
    `,
  postState: `
    INSERT INTO state (description, createdBy) 
    VALUES (@description, @userId)
  `,
  getState: `
    SELECT 
      state.stateId, 
      state.description,
      state.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM state 
    LEFT JOIN 
      users AS creator ON state.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON state.modifiedBy = modifier.userId
    WHERE 
      state.stateId = @stateId
    `,
  putState: `
    UPDATE state 
    SET description = @description, modifiedBy = @userId WHERE state.stateId = @stateId
  `,
  deleteState: `
    DELETE FROM state 
    WHERE state.stateId = @stateId
  `,
};
