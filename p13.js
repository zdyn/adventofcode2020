#!/usr/bin/env node

const p1 = (me, buses) => {
  let bus = null;
  let wait = null;
  buses.filter((b) => b !== "x").forEach((b) => {
    const w = b - me % b;
    if (wait != null && wait < w) return;
    bus = b;
    wait = w;
  });
  return bus * wait;
};

const p2 = (buses) => {
  buses = buses.reduce((agg, ts, idx) => {
    if (ts === "x") return agg;
    return agg.concat({ ts, idx });
  }, []);

  let result = buses[0].ts;
  let mult = 1;

  buses.forEach(({ ts, idx }) => {
    while ((result + idx) % ts !== 0) {
      result += mult;
    }
    mult *= ts;
  });

  return result;
};

const input = getInput().split(/\n/g).filter((s) => s.trim());
const me = Number(input[0]);
const buses = input[1].split(",").map((ts) => ts === "x" ? ts : Number(ts));

console.log("p1:", p1(me, buses));
console.log("p2:", p2(buses));

function getInput() {
  /*
  return `
939
7,13,x,x,59,x,31,19
  `;
  */
  return `
1000511
29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,409,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,13,19,x,x,x,23,x,x,x,x,x,x,x,353,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41
  `;
}
