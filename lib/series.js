'use strict';

function Series(nums){
  this.digits = nums.toString(10).split("").map(Number);
};

Series.prototype.slices = function (num) {
  if (num <= this.digits.length){
    var a = [];
    for (var i = 0; i < this.digits.length-(num-1); i++) {
      a.push(this.digits.slice(i,i+num));
    }
    return a;
  }else{
    throw new Error('Slice size is too big.');
  }
};
