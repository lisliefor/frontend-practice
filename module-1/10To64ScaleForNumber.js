function floatTo64System(number) {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split(
      ""
    );
  const numberAry = number.toString().split(".");

  // 整数部门
  let intPart = Number(numberAry[0]);
  //小数部分
  let decPart = number - intPart;

  // 处理整数部分
  const intAry = [];
  while (intPart > 0) {
    const mod = intPart % 64;
    intAry.unshift(chars[mod]);
    intPart = (intPart - mod) / 64;
  }

  // 处理小数部分
  const decAry = [];
  if (decPart > 0) {
    let count = 52;
    let flag = false;
    while (count > 0) {
      decPart = decPart * 64;
      const pro = parseInt(decPart, 10);
      if (pro !== 0) flag = true;
      decAry.push(chars[pro]);
      decPart = decPart - pro;
      count--;
      if (flag && decPart === 0) count = 0;
    }
  }

  const rst = `${intAry.join("")}.${decAry.join("")}`;
  console.log(rst);
  return rst;
}

// 测试
floatTo64System(15414.00495525);

// 输出结果: 3MS.0ki/jb8