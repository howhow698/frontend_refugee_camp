"use strict";

// 4
function debounce(func, delay, isImmediate = false) {
  let timer;
  let firstTimeInvoke = true;
  return function () {
    let context = this;
    if (firstTimeInvoke && isImmediate) {
      func.apply(context, arguments);
      firstTimeInvoke = false;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, arguments);
        firstTimeInvoke = true;
      }, delay);
    }
  };
}

// 1
// function fire(bullet) {
//   console.log("擊發子彈", bullet);
// }

function fire(shellFired) {
  console.log("坦克砲彈存量：", this.shell);
  console.log("擊發砲彈數：", shellFired);
  this.shell -= shellFired;
  console.log("坦克砲彈剩餘存量：", this.shell);
}

// 1
const debouncedFire = debounce(fire, 3000);

class Tank {
  constructor() {
    this.shell = 60;
    this.fire = debounce(fire, 3000, true);
  }
}

const tank = new Tank();
console.log("tank : ", tank);
