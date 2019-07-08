const getYoungestCommonAncestor = require("./getYoungestCommonAncestor");

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }

  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

const ancestralTrees = {};
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
for (const letter of ALPHABET) {
  ancestralTrees[letter] = new AncestralTree(letter);
}
ancestralTrees.A.addAsAncestor([
  ancestralTrees.B,
  ancestralTrees.C,
  ancestralTrees.D,
  ancestralTrees.E,
  ancestralTrees.F
]);
ancestralTrees.B.addAsAncestor([
  ancestralTrees.G,
  ancestralTrees.H,
  ancestralTrees.I
]);
ancestralTrees.C.addAsAncestor([ancestralTrees.J]);
ancestralTrees.D.addAsAncestor([ancestralTrees.K, ancestralTrees.L]);
ancestralTrees.F.addAsAncestor([ancestralTrees.M, ancestralTrees.N]);
ancestralTrees.H.addAsAncestor([
  ancestralTrees.O,
  ancestralTrees.P,
  ancestralTrees.Q,
  ancestralTrees.R
]);
ancestralTrees.K.addAsAncestor([ancestralTrees.S]);
ancestralTrees.P.addAsAncestor([ancestralTrees.T, ancestralTrees.U]);
ancestralTrees.R.addAsAncestor([ancestralTrees.V]);
ancestralTrees.V.addAsAncestor([
  ancestralTrees.W,
  ancestralTrees.X,
  ancestralTrees.Y
]);
ancestralTrees.X.addAsAncestor([ancestralTrees.Z]);

it("Test Case #1", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.A,
    ancestralTrees.B
  );
  expect(yca).toEqual(ancestralTrees.A);
});

it("Test Case #2", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.B,
    ancestralTrees.F
  );
  expect(yca).toEqual(ancestralTrees.A);
});

it("Test Case #3", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.G,
    ancestralTrees.M
  );
  expect(yca).toEqual(ancestralTrees.A);
});

it("Test Case #4", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.U,
    ancestralTrees.S
  );
  expect(yca).toEqual(ancestralTrees.A);
});

it("Test Case #5", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.Z,
    ancestralTrees.M
  );
  expect(yca).toEqual(ancestralTrees.A);
});

it("Test Case #6", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.O,
    ancestralTrees.I
  );
  expect(yca).toEqual(ancestralTrees.B);
});

it("Test Case #7", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.T,
    ancestralTrees.Z
  );
  expect(yca).toEqual(ancestralTrees.H);
});

it("Test Case #8", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.T,
    ancestralTrees.V
  );
  expect(yca).toEqual(ancestralTrees.H);
});

it("Test Case #9", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.T,
    ancestralTrees.H
  );
  expect(yca).toEqual(ancestralTrees.H);
});

it("Test Case #10", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.W,
    ancestralTrees.V
  );
  expect(yca).toEqual(ancestralTrees.V);
});

it("Test Case #11", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.Z,
    ancestralTrees.B
  );
  expect(yca).toEqual(ancestralTrees.B);
});

it("Test Case #12", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.Q,
    ancestralTrees.W
  );
  expect(yca).toEqual(ancestralTrees.H);
});

it("Test Case #13", function() {
  const yca = getYoungestCommonAncestor(
    ancestralTrees.A,
    ancestralTrees.A,
    ancestralTrees.Z
  );
  expect(yca).toEqual(ancestralTrees.A);
});
