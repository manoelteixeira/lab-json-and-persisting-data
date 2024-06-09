const {
  generateProfile,
  profileFactory,
} = require("../src/generate-profile.js");

describe("gnerate-profile.js", () => {
  describe("generateProfile()", () => {
    it("should return an profile object", () => {
      const actual = generateProfile();
      const keys = ["id", "username", "quote", "isActive", "dob", "joinedAt"];
      for (key of keys) {
        expect(actual).toHaveProperty(key);
      }
      expect(typeof actual.id).toBe("string");
      expect(typeof actual.username).toBe("string");
      expect(typeof actual.quote).toBe("string");
      expect(typeof actual.isActive).toBe("boolean");
      expect(actual).toHaveProperty("joinedAt");
    });
  });
  describe("profileFactory()", () => {
    it("should throw an error when no parameter is given", () => {
      expect(() => profileFactory()).toThrow("No quantity was provided.");
    });
    it("should throw an error when given a negative quantity", () => {
      expect(() => profileFactory(-10)).toThrow("Invalid quantity");
    });
    it("should return an empty array when given a negative quantity", () => {
      const actual = profileFactory(0);
      expect(actual.length).toBe(0);
    });
    it(
      "should retunr an array containing the amount of " +
        "profiles objects specified by the quantity parameter",
      () => {
        const actual = profileFactory(5);

        expect(actual.length).toBe(5);

        const keys = ["id", "username", "quote", "isActive", "dob", "joinedAt"];
        for (profile of actual) {
          for (key of keys) {
            expect(profile).toHaveProperty(key);
          }
        }
      }
    );
  });
});
