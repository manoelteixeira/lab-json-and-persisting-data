const { faker } = require("@faker-js/faker");

/**
 * Generate username
 * @returns - String
 */
function generateUsername() {
  const element = faker.science.chemicalElement().name.toLowerCase();
  const animal = faker.animal.type();
  return `${element}${animal[0].toUpperCase() + animal.slice(1)}`;
}

/**
 * Generate Hacker Profile
 * @returns {Object} - contains id, username, dob, joinAt and, quote keys
 */
function generateProfile() {
  return {
    id: faker.string.uuid(),
    username: generateUsername(),
    quote: faker.hacker.phrase(),
    isActive: faker.datatype.boolean(),
    dob: faker.date.birthdate({ min: 15, max: 40, mode: "age" }),
    joinedAt: faker.date.past({ years: 5 }),
  };
}

/**
 * Generate multiple Hacker Profiles
 * @param {Number} quantity - Number of profiles
 * @returns {Array} - Array of profiles
 */
function profileFactory(quantity) {
  if (quantity == undefined) {
    throw new Error("No quantity was provided.");
  } else if (quantity < 0) {
    throw new Error("Invalid quantity");
  }
  output = [];
  for (let index = 0; index < quantity; index++) {
    output.push(generateProfile());
  }
  return output;
}

module.exports = { generateProfile, profileFactory };
