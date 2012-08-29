# Jasmine data provider demo

## Background

This project is a demo for the data provider pattern applied to Jasmine.

It allows to DRY up Jasmine tests that needs to be executed with multiple values. 

Imagine you have some validation code that must verify a username. A correct username matches the following requirement:

 - Must be alphanumeric or underscore
 - Minimum of 3 characters
 - No more than 12 characters

Positive and negative test cases could look like this:

```javascript
describe("username validation", function() {
  it("should return true for valid usernames", function() {
    expect(validateUserName("abc")).toBeTruthy();
    expect(validateUserName("longusername")).toBeTruthy();
    expect(validateUserName("john_doe")).toBeTruthy();
  })

  it("should return false for invalid usernames", function() {
    expect(validateUserName("ab")).toBeFalsy();
    expect(validateUserName("name_too_long")).toBeFalsy();
    expect(validateUserName("no spaces")).toBeFalsy();
    expect(validateUserName("inv*alid")).toBeFalsy();
  })
})
```

I don't really like to repeat many expectations within one test block. With the data provider pattern it would look like this:

```javascript
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
```

## Code

The following can be added to your spec helper to make this work:

```javascript
function using(name, values, func){
  for (var i = 0, count = values.length; i < count; i++) {
    if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
      values[i] = [values[i]];
    }
    func.apply(this, values[i]);
    jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
  }
}
```
## Demo

See [demo hosted on GitHub](http://jphpsf.github.com/jasmine-data-provider/)

## License

WTFPL