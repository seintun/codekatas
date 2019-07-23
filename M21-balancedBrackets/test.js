const balancedBrackets = require("./balancedBrackets");

it('Test Case #1', function() {
  expect(balancedBrackets("()[]{}{")).toEqual(false);
});

it('Test Case #2', function() {
  expect(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))")).toEqual(false);
});

it('Test Case #3', function() {
  expect(balancedBrackets("()()[{()})]")).toEqual(false);
});

it('Test Case #4', function() {
  expect(balancedBrackets("(()())((()()()))")).toEqual(true);
});

it('Test Case #5', function() {
  expect(balancedBrackets("{}()")).toEqual(true);
});

it('Test Case #6', function() {
  expect(balancedBrackets("()([])")).toEqual(true);
});

it('Test Case #7', function() {
  expect(balancedBrackets("((){{{{[]}}}})")).toEqual(true);
});

it('Test Case #8', function() {
  expect(balancedBrackets("([])(){}(())()()")).toEqual(true);
});

it('Test Case #9', function() {
  expect(balancedBrackets("((({})()))")).toEqual(true);
});

it('Test Case #10', function() {
  expect(balancedBrackets("(([]()()){})")).toEqual(true);
});

it('Test Case #11', function() {
  expect(balancedBrackets("(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())")).toEqual(true);
});

it('Test Case #12', function() {
  expect(balancedBrackets("{[[[[({(}))]]]]}")).toEqual(false);
});

it('Test Case #13', function() {
  expect(balancedBrackets("[((([])([]){}){}){}([])[]((())")).toEqual(false);
});

it('Test Case #14', function() {
  expect(balancedBrackets(")[]}")).toEqual(false);
});