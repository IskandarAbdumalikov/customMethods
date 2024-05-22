let arr = [4, 2, 6, 8, 1];
console.log("Berilgan array", arr);

Array.prototype.customMap = function (callBackFunction) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callBackFunction(this[i], i, this));
  }
  return resultArray;
};

console.log(
  "CustomMap>> arraydagi har bitta sonni 2 ga ko`paytirib chiqaryabdi",
  arr.customMap((el) => el * 2)
);

Array.prototype.customFilter = function (callBackFunction) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    let check = callBackFunction(this[i]);
    if (check) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
console.log(
  "CustomFilter>> arraydagi har 4 dan katta sonlarni chiqaryabdi",
  arr.customFilter((el) => el > 4)
);

Array.prototype.customForeach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
};

function callBack(element) {
  console.log("custom forEach", element);
}

arr.customForeach(callBack);

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

const allEven = arr.customEvery((el) => el % 2 === 0);
console.log(
  "custom Every bu arraydagi hamma sonlar juft ligini tekshiryabdi",
  allEven
);

Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

const anyEven = arr.customSome((el) => el % 2 === 0);
console.log(
  "custom Some bu arraydagi hech bo`lganda 1ta son juft eknligini tekshiryabdi juft ligini tekshiryabdi",
  anyEven
);

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

const firstEven = arr.customFind((el) => el % 2 === 0);
console.log(
  "custom Find bu arraydagi eng birinchi juft sonni chiaradi agar juft son bo`lmasa undefined qaytaradi",
  firstEven
);

Array.prototype.customFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const firstEvenIndex = arr.customFindIndex((el) => el > 5);
console.log(
  "custom Find index bu berilgan arreydagi 5 dan katta bo`lgan birinchi sonni indexini chiqaradi",
  firstEvenIndex
);

Array.prototype.customReduce = function (callback, initialValue) {
  let startedValue = initialValue;
  let firstIndex = 0;
  if (startedValue === undefined) {
    if (this.length === 0) {
      throw new TypeError("Siz malumot kiritmadingiz");
    }
    startedValue = this[0];
    firstIndex = 1;
  }
  for (let i = firstIndex; i < this.length; i++) {
    startedValue = callback(startedValue, this[i], i, this);
  }
  return startedValue;
};

const sum = arr.customReduce((ac, el) => ac + el, 0);
console.log(
  "custom Reduce bu berilgan arreydagi sonlarni yig`indisini chiqaryabid >>>",
  sum
);

Array.prototype.customRightReduce = function (callback, initialValue) {
  let startedValue = initialValue;
  let firstIndex = this.length - 1;
  if (startedValue === undefined) {
    if (this.length === 0) {
      throw new TypeError("Siz malumot kiritmadingiz");
    }
    startedValue = this[this.length - 1];
    firstIndex = this.length - 2;
  }

  for (let i = firstIndex; i >= 0; i--) {
    startedValue = callback(startedValue, this[i], i, this);
  }

  return startedValue;
};

const sumRight = arr.customRightReduce((ac, el) => ac + el, 0);
console.log(
  "custom Reduce right berilgan arraydagi sonlar yig`indisini chiqaryabid>>>",
  sumRight
);

Array.prototype.customSort = function (compareFunction) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (compareFunction(this[j], this[j + 1]) > 0) {
        const change = this[j];
        this[j] = this[j + 1];
        this[j + 1] = change;
      }
    }
  }
  return this;
};

console.log(
  "Custom Sort bu berilgan arrayni o`sish tartibida chiqarib beradi",
  arr.customSort((a, b) => a - b)
);

console.log(
  "Custom Sort bu berilgan arrayni kamayish tartibida chiqarib beradi",
  arr.customSort((a, b) => b - a)
);
