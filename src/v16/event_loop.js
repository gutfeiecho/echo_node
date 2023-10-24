/**
 * 测试事件执行的时机
 * 结果：run main thread
        tick task
        promise resolve
        timer task
        tick task in timeout
        tick task in timeout->tick
        promise resolve in timeout
        tick task in timeout promise
        immediate task
        imeediate->tick task
 */
setTimeout(() => {
  Promise.resolve().then(() => {
    // 执行7
    console.log("promise resolve in timeout");
    process.nextTick(() => {
      // 执行8
      console.log("tick task in timeout promise");
    });
  });
  process.nextTick(() => {
    // 执行5
    console.log("tick task in timeout");
    process.nextTick(() => {
      // 执行6
      console.log("tick task in timeout->tick");
    });
  });
  // 执行4
  console.log("timer task");
}, 0);

// check phase
setImmediate(() => {
  process.nextTick(() => {
    // 执行10
    console.log("imeediate->tick task");
  });
  // 执行9
  console.log("immediate task");
});

Promise.resolve().then(() => {
  // 执行3
  console.log("promise resolve");
});

process.nextTick(() => {
  // 执行2
  console.log("tick task");
});

// 执行1
console.log("run main thread");
