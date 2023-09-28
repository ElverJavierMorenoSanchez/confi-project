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
