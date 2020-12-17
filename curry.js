var binaryAdd = function (a, b) {
  return a+b;
}


var callAndApply = {
    caller: function (object, method, name, age, tShirtSize) {
      method.call(object, name, age, tShirtSize)
    },
    applier: function (object, method, arguments) {
      method.apply(object, arguments);
    }
  };


  function curried(...args) {
     if (args.length >= func.length) { // (1)
      return func.apply(this, args);
    } else {
      return function pass(...args2) { // (2)
        return curried.apply(this, args.concat(args2));
      }
    }
  };



    
var secondInvoc = function (a) {
    return function(b) {
      return a + b;
    }
  }
  



  var identity = function (a) {
    return a;
  }

  
  var total = 0;
var Invocation = function (a) {
  if (a === undefined) {
    var result = total;
    total = null;
    return result;
  } else {
    total = total + a;
    return Invocation;
  }
};
  
var total = 0;
var delayInvocation = function (a) {
  if (a === undefined) {
    var result = total;
    total = null;
    return result;
  } else {
    total = total + a;
    return delayInvocation;
  }
};