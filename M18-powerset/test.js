const powerset = require("./powerset");

it("Test Case #1", function() {
  let out = powerset([]);
  out = out.map(function(item) {
    item.sort();
    return item.join(",");
  });
  expect(out.length === 1).toBeTruthy();
  expect(out).toEqual(expect.arrayContaining(""));
});

it("Test Case #2", function() {
  let out = powerset([1]);
  out = out.map(function(item) {
    item.sort();
    return item.join(",");
  });
  expect(out.length === 2).toBeTruthy();
  expect(out).toEqual(expect.arrayContaining(""));
  expect(out).toEqual(expect.arrayContaining("1"));
});

it("Test Case #3", function() {
  let out = powerset([1, 2]);
  out = out.map(function(item) {
    item.sort();
    return item.join(",");
  });
  expect(out.length === 4).toBeTruthy();
  expect(out).toEqual(expect.arrayContaining(""));
  expect(out).toEqual(expect.arrayContaining("1"));
  expect(out).toEqual(expect.arrayContaining("2"));
  expect(out).toEqual(expect.arrayContaining("1,2"));
});

it("Test Case #4", function() {
  let out = powerset([1, 2, 3]);
  out = out.map(function(item) {
    item.sort();
    return item.join(",");
  });
  expect(out.length === 8).toBeTruthy();
  expect(out).toEqual(expect.arrayContaining(""));
  expect(out).toEqual(expect.arrayContaining("1"));
  expect(out).toEqual(expect.arrayContaining("2"));
  expect(out).toEqual(expect.arrayContaining("1,2"));
  expect(out).toEqual(expect.arrayContaining("3"));
  expect(out).toEqual(expect.arrayContaining("1,3"));
  expect(out).toEqual(expect.arrayContaining("2,3"));
  expect(out).toEqual(expect.arrayContaining("1,2,3"));
});

it("Test Case #5", function() {
  let out = powerset([1, 2, 3, 4]);
  out = out.map(function(item) {
    item.sort();
    return item.join(",");
  });
  expect(out.length === 16).toBeTruthy();
  expect(out).toEqual(expect.arrayContaining(""));
  expect(out).toEqual(expect.arrayContaining("1"));
  expect(out).toEqual(expect.arrayContaining("2"));
  expect(out).toEqual(expect.arrayContaining("1,2"));
  expect(out).toEqual(expect.arrayContaining("3"));
  expect(out).toEqual(expect.arrayContaining("1,3"));
  expect(out).toEqual(expect.arrayContaining("2,3"));
  expect(out).toEqual(expect.arrayContaining("1,2,3"));
  expect(out).toEqual(expect.arrayContaining("4"));
  expect(out).toEqual(expect.arrayContaining("1,4"));
  expect(out).toEqual(expect.arrayContaining("2,4"));
  expect(out).toEqual(expect.arrayContaining("1,2,4"));
  expect(out).toEqual(expect.arrayContaining("3,4"));
  expect(out).toEqual(expect.arrayContaining("1,3,4"));
  expect(out).toEqual(expect.arrayContaining("2,3,4"));
  expect(out).toEqual(expect.arrayContaining("1,2,3,4"));
});
