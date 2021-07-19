/**
 * 获得1~100000内的随机整数
 * @returns 随机整数
 */
function getRandomInteger() {
  const pros = [10, 100, 1000, 10000, 100000];
  const randomIndex = parseInt((Math.random() * 10) % 5, 10);

  return parseInt(Math.random() * pros[randomIndex], 10);
}

/**
 * 生成传入长度的整数数组
 * @param {*} length - 数组长度
 * @returns 定长数组
 */
function generateIntegerArray(length) {
  const rst = [];

  let i = 0;
  while (i < length) {
    rst.push(getRandomInteger());
    i++;
  }

  return rst;
}

/**
 * 拆半查找，找到传入元素在升序数组中的下标
 * @param {*} array
 * @param {*} int
 */
function getMyIndex(array, int) {
  let max = array.length - 1;
  let min = 0;
  let mid;

  if (array.length === 1) return array[0] > int ? 0 : 1;

  while (min <= max) {
    mid = (min + max) >> 1;

    if (int > array[mid]) {
      min = mid + 1;
    } else if (int < array[mid]) {
      max = mid - 1;
    } else return mid;
  }
  return min;
}

// 参数定义
const K = 1000;
const LENGTH = 5000;
let k_array = [];

// 生成数组
const rst = generateIntegerArray(LENGTH);

/**
 * 解法一：遍历原始数组，不断构建一个有序的K长度的数组，直到原始数组遍历结束
 */
k_array.push(rst[0]);
const startTime = Date.now();
for (let i = 1; i < rst.length; i++) {
  const idx = getMyIndex(k_array, rst[i]);
  // 避免重复元素
  if (k_array.indexOf(rst[i]) === -1) {
    if (idx < k_array.length) k_array.splice(idx, false, rst[i]);
    else if (k_array.length < K) k_array.push(rst[i]);
  }

  // 超过长度，切掉
  if (k_array.length > K) k_array = k_array.slice(0, K);
}
const endTime = Date.now();

console.log(`It takes about ${((endTime - startTime) / 1000).toFixed(6)}s.`);
console.log(`The ${K}th integer is ${k_array[k_array.length - 1]}.`);
// 输出
// It takes about 0.009000s.
// The 1000th integer is 3526.