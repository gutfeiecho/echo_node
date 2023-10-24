const assert = require("node:assert");
const test = require("node:test");

// ExperimentalWarning: The test runner is an experimental feature. This feature could change at any time.
test("mocks setTimeout to be executed synchronously without having to actually wait for it", (context) => {
  const fn = context.mock.fn();
  // Optionally choose what to mock
  context.mock.timers.enable(["setTimeout"]);
  const nineSecs = 9000;
  setTimeout(fn, nineSecs);

  const threeSeconds = 3000;
  context.mock.timers.tick(threeSeconds);
  context.mock.timers.tick(threeSeconds);
  context.mock.timers.tick(threeSeconds);

  assert.strictEqual(fn.mock.callCount(), 1);
});
