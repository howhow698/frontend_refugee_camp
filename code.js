// 1
// function debounce(func, delay) {
//   return function () {
//     setTimeout(() => {
//       func();
//     }, delay);
//   };
// }

// 1
// function fire() {
//   console.log("擊發子彈");
// }

// 1
// const debouncedFire = debounce(fire, 3000);

// 2
// function debounce(func, delay) {
//   let timer;
//   return function () {
//     console.log("舊計數器 id：", timer);
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//     console.log("新計數器 id：", timer);
//   };
// }

// 3
// function debounce(func, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...arguments);
//     }, delay);
//   };
// }

// 3
// function debounce(func, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, arguments);
//     }, delay);
//   };
// }

// 4
// function debounce(func, delay, isImmediate = false) {
//   let timer;
//   let firstTimeInvoke = true;
//   return function () {
//     let context = this;
//     if (firstTimeInvoke && isImmediate) {
//       func.apply(context, arguments);
//       firstTimeInvoke = false;
//     } else {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         func.apply(context, arguments);
//         firstTimeInvoke = true;
//       }, delay);
//     }
//   };
// }

// 1
// function print() {
//   console.log('debounce 成功！')
// }

// 2
// const debouncedFire = debounce(fire, 3000);

// 3
// function fire(bullet) {
//   console.log("擊發子彈數：", bullet);
// }

// 3
// const debouncedFire = debounce(fire, 3000);

// function fire(shellFired) {
//   console.log("坦克砲彈存量：", this.shell);
//   console.log("擊發砲彈數：", shellFired);
//   this.shell -= shellFired;
//   console.log("坦克砲彈剩餘存量：", this.shell);
// }

// class Tank {
//   constructor() {
//     this.shell = 60;
//     this.fire = debounce(fire, 3000);
//   }
// }

// const tank = new Tank();
// console.log("tank : ", tank);
