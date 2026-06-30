const test = require("node:test");
const assert = require("node:assert/strict");

const { buildTables, getFixtures, getHeadToHeadStats, getStatus, getThirds, isGuaranteedFirstPlace } = require("./script.js");

function orderedTeams(results) {
  return buildTables(results).A.map((team) => team.team);
}

function addCompleteGroupWithBetterThird(results, groupKey) {
  const fixtures = getFixtures(groupKey);
  Object.assign(results, {
    [fixtures[0].id]: { home: 1, away: 0 },
    [fixtures[1].id]: { home: 1, away: 0 },
    [fixtures[2].id]: { home: 1, away: 0 },
    [fixtures[3].id]: { home: 1, away: 0 },
    [fixtures[4].id]: { home: 0, away: 1 },
    [fixtures[5].id]: { home: 1, away: 0 }
  });
}

function addIncompleteGroupWithLockedBetterThird(results, groupKey) {
  const fixtures = getFixtures(groupKey);
  Object.assign(results, {
    [fixtures[0].id]: { home: 1, away: 0 },
    [fixtures[1].id]: { home: 1, away: 0 },
    [fixtures[2].id]: { home: 0, away: 0 },
    [fixtures[3].id]: { home: 1, away: 0 },
    [fixtures[4].id]: { home: 0, away: 0 }
  });
}

test("two teams tied on points are ordered by their direct match before overall goal difference", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 0, away: 0 },
    "A-2": { home: 0, away: 3 },
    "A-3": { home: 4, away: 5 },
    "A-4": { home: 1, away: 5 },
    "A-5": { home: 5, away: 0 }
  };

  assert.deepEqual(orderedTeams(results).slice(0, 2), ["Mexico", "South Africa"]);
});

test("three teams tied on points are ranked by the mini-table between them", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 0, away: 3 },
    "A-3": { home: 0, away: 1 },
    "A-4": { home: 0, away: 10 },
    "A-5": { home: 2, away: 0 }
  };

  assert.deepEqual(orderedTeams(results).slice(0, 3), ["South Korea", "South Africa", "Mexico"]);
});

test("when head-to-head does not resolve a tie, the next official criterion is overall goal difference", () => {
  const results = {
    "A-0": { home: 1, away: 1 },
    "A-1": { home: 0, away: 3 },
    "A-2": { home: 4, away: 0 },
    "A-3": { home: 3, away: 0 },
    "A-4": { home: 1, away: 0 },
    "A-5": { home: 2, away: 0 }
  };

  assert.deepEqual(orderedTeams(results).slice(1, 3), ["Mexico", "South Africa"]);
});

test("overall goal difference is not used before the FIFA head-to-head criteria", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 0, away: 0 },
    "A-2": { home: 0, away: 3 },
    "A-3": { home: 4, away: 5 },
    "A-4": { home: 1, away: 5 },
    "A-5": { home: 5, away: 0 }
  };
  const table = buildTables(results).A;
  const mexico = table.find((team) => team.team === "Mexico");
  const southAfrica = table.find((team) => team.team === "South Africa");

  assert.equal(southAfrica.goalDifference > mexico.goalDifference, true);
  assert.deepEqual(table.slice(0, 2).map((team) => team.team), ["Mexico", "South Africa"]);
});

test("head-to-head stats are built only from matches among the tied subset", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 0, away: 3 },
    "A-3": { home: 0, away: 1 },
    "A-4": { home: 0, away: 10 },
    "A-5": { home: 2, away: 0 }
  };
  const table = buildTables(results).A;
  const tiedSubset = table.filter((team) => ["Mexico", "South Africa", "South Korea"].includes(team.team));

  assert.deepEqual(getHeadToHeadStats("Mexico", tiedSubset, [
    { id: "A-0", home: "Mexico", away: "South Africa" },
    { id: "A-2", home: "Mexico", away: "South Korea" },
    { id: "A-4", home: "Czechia", away: "Mexico" },
    { id: "A-5", home: "South Africa", away: "South Korea" }
  ], results), {
    points: 3,
    goalsFor: 1,
    goalsAgainst: 3,
    goalDifference: -2
  });
});

test("Canada has a ranking seed for final tiebreakers", () => {
  const results = {
    "B-0": { home: 0, away: 0 },
    "B-1": { home: 0, away: 0 },
    "B-2": { home: 0, away: 0 },
    "B-3": { home: 0, away: 0 },
    "B-4": { home: 0, away: 0 },
    "B-5": { home: 0, away: 0 }
  };

  assert.deepEqual(buildTables(results).B.map((team) => team.team), [
    "Switzerland",
    "Canada",
    "Qatar",
    "Bosnia"
  ]);
});

test("persisted negative scores are ignored as incomplete results", () => {
  const results = {
    "A-0": { home: -1, away: 0 }
  };
  const table = buildTables(results).A;

  assert.equal(table.every((team) => team.played === 0), true);
  assert.equal(table.every((team) => team.points === 0), true);
});

test("first-place badge can be assigned before the whole group is complete when tie-breakers make it certain", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 1, away: 0 },
    "A-3": { home: 1, away: 0 },
    "A-4": { home: 0, away: 1 }
  };
  const table = buildTables(results).A;
  const mexico = table.find((team) => team.team === "Mexico");

  assert.equal(table.every((team) => team.played === 3), false);
  assert.equal(isGuaranteedFirstPlace(mexico, table, results), true);
});

test("a team with first place mathematically secured is marked green before the group is complete", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 1, away: 0 },
    "A-3": { home: 1, away: 0 },
    "A-4": { home: 0, away: 1 }
  };
  const tables = buildTables(results);
  const table = tables.A;
  const mexico = table.find((team) => team.team === "Mexico");
  const qualifyingThirds = [];
  const playedMatches = Object.values(results).length;

  assert.equal(isGuaranteedFirstPlace(mexico, table, results), true);
  assert.equal(getStatus(mexico, table, qualifyingThirds, tables, playedMatches, results), "green");
});

test("a team already qualified from the group is marked green even when its final position is unknown", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 0, away: 1 },
    "A-2": { home: 1, away: 0 },
    "A-3": { home: 0, away: 0 }
  };
  const tables = buildTables(results);
  const table = tables.A;
  const mexico = table.find((team) => team.team === "Mexico");
  const qualifyingThirds = [];
  const playedMatches = Object.values(results).length;

  assert.equal(isGuaranteedFirstPlace(mexico, table, results), false);
  assert.equal(getStatus(mexico, table, qualifyingThirds, tables, playedMatches, results), "green");
});

test("first-place badge is withheld when a pending match can still change the official tie-breaker", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 1, away: 0 },
    "A-3": { home: 1, away: 0 }
  };
  const table = buildTables(results).A;
  const mexico = table.find((team) => team.team === "Mexico");

  assert.equal(isGuaranteedFirstPlace(mexico, table, results), false);
});

test("first-place badge is assigned with more than two pending matches when no team can catch first", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-2": { home: 1, away: 0 },
    "A-4": { home: 0, away: 1 }
  };
  const table = buildTables(results).A;
  const mexico = table.find((team) => team.team === "Mexico");

  assert.equal(table.filter((team) => team.played < 3).length, 3);
  assert.equal(isGuaranteedFirstPlace(mexico, table, results), true);
});

test("a team that cannot reach the best-third cut is marked red before every group is complete", () => {
  const results = {
    "A-0": { home: 0, away: 3 },
    "A-1": { home: 3, away: 0 },
    "A-2": { home: 0, away: 3 },
    "A-3": { home: 0, away: 3 },
    "A-4": { home: 0, away: 1 },
    "A-5": { home: 0, away: 1 }
  };
  ["B", "C", "D", "E", "F", "G", "H", "I"].forEach((groupKey) => {
    addCompleteGroupWithBetterThird(results, groupKey);
  });
  const tables = buildTables(results);
  const thirds = getThirds(tables);
  const qualifyingThirds = thirds.slice(0, 8);
  const mexico = tables.A.find((team) => team.team === "Mexico");
  const playedMatches = Object.values(results).length;

  assert.equal(tables.A[2].team, "Mexico");
  assert.equal(mexico.points, 3);
  assert.equal(Object.values(tables).every((table) => table.every((team) => team.played === 3)), false);
  assert.equal(qualifyingThirds.some((team) => team.team === "Mexico"), false);
  assert.equal(getStatus(mexico, tables.A, qualifyingThirds, tables, playedMatches, results), "red");
});

test("a team is marked red when eight incomplete groups already have unreachable thirds", () => {
  const results = {
    "A-0": { home: 0, away: 1 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 0, away: 1 },
    "A-3": { home: 0, away: 1 }
  };
  ["B", "C", "D", "E", "F", "G", "H", "I"].forEach((groupKey) => {
    addIncompleteGroupWithLockedBetterThird(results, groupKey);
  });
  const tables = buildTables(results);
  const thirds = getThirds(tables);
  const qualifyingThirds = thirds.slice(0, 8);
  const mexico = tables.A.find((team) => team.team === "Mexico");
  const playedMatches = Object.values(results).length;

  assert.equal(mexico.maxPoints, 3);
  assert.equal(Object.values(tables).every((table) => table.every((team) => team.played === 3)), false);
  assert.equal(getStatus(mexico, tables.A, qualifyingThirds, tables, playedMatches, results), "red");
});

test("a fourth-place team with a remaining path to third is not marked red", () => {
  const results = {
    "A-0": { home: 0, away: 1 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 0, away: 1 },
    "A-3": { home: 0, away: 0 }
  };
  const tables = buildTables(results);
  const mexico = tables.A.find((team) => team.team === "Mexico");
  const playedMatches = Object.values(results).length;

  assert.equal(tables.A[3].team, "Mexico");
  assert.equal(mexico.maxPoints, 3);
  assert.equal(getStatus(mexico, tables.A, [], tables, playedMatches, results), "yellow");
});

test("a fourth-place team is marked red when head-to-head tie-breakers prevent it from reaching third", () => {
  const results = {
    "A-0": { home: 1, away: 0 },
    "A-1": { home: 1, away: 0 },
    "A-2": { home: 1, away: 0 },
    "A-3": { home: 0, away: 1 }
  };
  const tables = buildTables(results);
  const czechia = tables.A.find((team) => team.team === "Czechia");
  const playedMatches = Object.values(results).length;

  assert.equal(tables.A[3].team, "Czechia");
  assert.equal(czechia.maxPoints, 3);
  assert.equal(getStatus(czechia, tables.A, [], tables, playedMatches, results), "red");
});
