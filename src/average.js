function rateFunc() {
  var accumObj = {
    count: 0,
    sum: 0
  }
  return function(rate) {
    accumObj.count += 1;
    accumObj.sum += rate;
    const average = Math.round(accumObj.sum / accumObj.count);
    const count = accumObj.count;
    return 
    // `average: ${Math.round(accumObj.sum / accumObj.count)}, count: ${accumObj.count}`;
  }
}
var setRate = rateFunc();
 
setRate(5); // 5
setRate(3); // 4
setRate(4); // 4
setRate(0); // 3