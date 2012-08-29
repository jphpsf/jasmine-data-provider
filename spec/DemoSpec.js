// A first simple test to demonstrate the data provider pattern

describe("username validation", function() {
  using("valid values", ["abc", "longusername", "john_doe"], function(value){
    it("should return true for valid usernames", function() {
      expect(validateUserName(value)).toBeTruthy();
    })
  })

  using("invalid values", ["ab", "name_too_long", "no spaces", "inv*alid"], function(value){
    it("should return false for invalid usernames", function() {
      expect(validateUserName(value)).toBeFalsy();
    })
  })
})


// A second example using multiple values

describe("camel case converter", function() {
  using("dashes", [ ["foo", "Foo"], ["foo-bar", "FooBar"], ["foo-bar-baz", "FooBarBaz"]], function(value, expected){
    it("should return camel case string", function() {
      expect(dashToCamelCase(value)).toEqual(expected);
    })
  })

  using("camel case", [ ["Foo", "foo"], ["FooBar", "foo-bar"], ["FooBarBaz", "foo-bar-baz"]], function(value, expected){
    it("should return dashed string", function() {
      expect(camelCaseToDash(value)).toEqual(expected);
    })
  })
})

