export const availabilityQueries = {
  getAvailabilities: `
    SELECT 
      availability.availabilityId as id, 
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
      availability.availabilityId as id, 
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
      category.categoryId as id, 
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
      category.categoryId as id, 
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

export const subcategoryQueries = {
  getSubcategories: `
    SELECT 
      subcategory.subcategoryId as id, 
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
      subcategory.subcategoryId as id, 
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

export const brandQueries = {
  getBrands: `
    SELECT 
      brand.brandId as id, 
      brand.name,
      brand.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM brand 
    LEFT JOIN 
      users AS creator ON brand.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON brand.modifiedBy = modifier.userId
    `,
  postBrand: `
    INSERT INTO brand (name, createdBy) 
    VALUES (@name, @userId)
  `,
  getBrand: `
    SELECT 
      brand.brandId as id, 
      brand.name,
      brand.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM brand 
    LEFT JOIN 
      users AS creator ON brand.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON brand.modifiedBy = modifier.userId
    WHERE 
      brand.brandId = @brandId
    `,
  putBrand: `
    UPDATE brand 
    SET name = @name, modifiedBy = @userId WHERE brand.brandId = @brandId
  `,
  deleteBrand: `
    DELETE FROM brand 
    WHERE brand.brandId = @brandId
  `,
};

export const modelQueries = {
  getModels: `
    SELECT 
      model.modelId as id, 
      model.name,
      brand.brandId,
      brand.name as brandName,
      model.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM model 
    LEFT JOIN
      brand ON model.brandId = brand.brandId
    LEFT JOIN 
      users AS creator ON model.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON model.modifiedBy = modifier.userId
    `,
  getModelsByBrand: `
    SELECT 
      model.modelId as id, 
      model.name,
      brand.brandId,
      brand.name as brandName,
      model.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM model 
    LEFT JOIN
      brand ON model.brandId = brand.brandId
    LEFT JOIN 
      users AS creator ON model.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON model.modifiedBy = modifier.userId
    WHERE
      brand.brandId = @brandId
    `,
  postModel: `
    INSERT INTO model (name,brandId, createdBy) 
    VALUES (@name, @brandId, @userId)
  `,
  getModel: `
    SELECT 
      model.modelId as id, 
      model.name,
      brand.brandId,
      brand.name as brandName,
      model.createdAt,
      creator.name AS createdBy,
      creator.userId as creatorId,
      modifier.name AS modifiedBy, 
      modifier.userId as modifierId
    FROM model 
    LEFT JOIN
      brand ON model.brandId = brand.brandId
    LEFT JOIN 
      users AS creator ON model.createdBy = creator.userId 
    LEFT JOIN 
      users AS modifier ON model.modifiedBy = modifier.userId
    WHERE 
      model.modelId = @modelId
    `,
  putModel: `
    UPDATE model 
    SET name = @name, brandId = @brandId, modifiedBy = @userId 
    WHERE model.modelId = @modelId
  `,
  deleteModel: `
    DELETE FROM model 
    WHERE model.modelId = @modelId
  `,
};

export const stateQueries = {
  getStates: `
    SELECT 
      state.stateId as id, 
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
      state.stateId as id, 
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
