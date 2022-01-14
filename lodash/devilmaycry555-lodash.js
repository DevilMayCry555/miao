var devilmaycry555 = {
  // 数组每size个分一组
  chunk: function (array, size) {
    var l = array.length
    var newone = []
    var i = 0
    while (i < l) {
      var a = []
      for (j = i; i + size < l ? j < i + size : j < l; j++){
        a.push(array[j])
      }
      newone.push(a)
      i+=size
    }
    return newone
  },
  // 去除无意义项
  compact: function (array) {
    var a = []
    for (var n of array) {
      if (n) a.push(n);
    }
    return a
  },
  // 丢掉前n项
  drop: function (array, n = 1) {
    var l = array.length
    if (n >= l) return [];
    var a = []
    for (i = n; i < l; i++){
      a.push(array[i])
    }
    return a
  },
  // 从后往前丢
  dropRight: function (array, n = 1) {
    var l = array.length
    if (n >= l) return [];
    var a = []
    for (i = 0; i < l - n; i++){
      a.push(array[i])
    }
    return a
  },
  dropRightWhile: function (array, size) {
  },
  dropWhile: function (array, size) {
  },
  // 数组从start到end都用value表示
  fill: function (array, value, start = 0, end = array.length) {
    for (i = start; i < end; i++){
      array[i] = value
    }
    return array
  },
  // 返回符合条件的对象的下标
  findIndex: function (array, predicate, fromIndex = 0) {
    for (i = fromIndex; i < array.length; i++) {
      if (typeof predicate == 'function') {
        if(predicate(array[i])) return i
      } else if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] == predicate[1]) return i;
      } else if (typeof predicate == 'object') {
        var every = true
        for (var key in predicate) {
          if(array[i][key] !== predicate[key]) every = false
        }
        if (every) return i;
      } else if(typeof predicate == 'string'){
        if (array[i][predicate]) return i;
      } else {
        if (array[i] == predicate) return i;
      }
    }
    return -1
  },
  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    for (i = fromIndex; i >= 0; i--) {
      if (typeof predicate == 'function') {
        if(predicate(array[i])) return i
      } else if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] == predicate[1]) return i;
      } else if (typeof predicate == 'object') {
        var every = true
        for (var key in predicate) {
          if(array[i][key] !== predicate[key]) every = false
        }
        if (every) return i;
      } else if(typeof predicate == 'string'){
        if (array[i][predicate]) return i;
      } else {
        if (array[i] == predicate) return i;
      }
    }
    return -1
  },
  forEach: function (array, loop) {
    for (i = 0; i < array.length; i++){
      loop(array[i])
    }
  },
  map: function (array, transform) {
    var mapped = []
    for (i = 0; i < array.length; i++){
      mapped.push(transform(array[i]))
    }
    return mapped
  },
  filter: function (array, test) {
    if (typeof test == 'function') {
      var passed = []
      for (i = 0; i < array.length; i++){
        if (test(array[i])) passed.push(array[i]);
      }
      return passed
    }
    if (typeof test == 'object') {
      var passed = []
      for (i = 0; i < array.length; i++){
        var allin = true
        for (var key in test) {
          if (!key in array[i] || test[key] !== array[i][key]) allin = false;
        }
        if (allin) passed.push(array[i]);
      }
      return passed
    }
  },
  reduce: function (ary_obj, combine, start = 0) {
    var current = start
    if (Array.isArray(ary_obj)) {
      for (i = 0; i < ary_obj.length; i++){
        current = combine(current, ary_obj[i])
      }
    } else if (typeof ary_obj == 'object') {
      for (var k in ary_obj) {
        current = combine(current, ary_obj[k], k)
      }
    }
    return current
  },
  // 数组内部层级-1
  // var a = []
  // this.forEach(array, function (n) {
  //   a = a.concat(n)
  // })
  // return a
  // 一句话reduce
  // return reduce(array, (a,b) => a.concat(b), [])
  // 用flattenDepth表示
  flatten: function (array) {
    return this.flattenDepth(array, 1);
  },
  // 数组内部层级递减到底
  flattenDeep: function (array) {
    return this.flattenDepth(array, Infinity);
  },
  //数组按给定次数削减层数
  //递归    与数组方法array.flat()实现方式一样
  //n = 1时等价于flatten，n = inifinity时，等价于flattenDeep
  flattenDepth: function (array, n = 1) {
    if (n == 0) return array.slice();
    var a = []
    for (var ary of array) {
      if (Array.isArray(ary)) {
        a = a.concat(this.flattenDepth(ary, n-1))
      } else {
        a = a.concat(ary)
      }
    }
    return a
  },
  // 将数组形式的对象转成真正的对象形式
  fromPairs: function (array) {
    var a = {}
    for (var n of array) {
      a[n[0]] = n[1]
    }
    return a
  },
  // 将数组里面的第一个元素提取出来
  head: function (array) {
    if (array[0] == undefined) return undefined;
    if (array[0].length == undefined) return array[0];
    if (array[0].length >= 1) return this.head(array[0]);
  },
  // 获取寻找值的index
  IndexOf: function (array, value, fromIndex = 0) {
    for (i = fromIndex; i < array.length; i++){
      if (array[i] == value) return i;
    }
  },
  // 去掉数组的尾项
  initial: function (array) {
    if (array.length >= 1) array.length -= 1;
    return array
  },
  // 用所选符号将数组拼接成字符串
  join: function (array, separator = ',') {
    var a = array[0]
    for (i = 1; i < array.length; i++){
      a += '' + separator + array[i]
    }
    return a
  },
  // 获取数组的最后一个元素
  last: function (array) {
    var l = array.length
    if (array[l - 1].length == undefined) return array[l - 1];
    if (array[l-1].length >= 1) return this.last(array[l - 1]);
  },
  // 倒序找到所选的值的index
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (i = fromIndex; i >= 0; i--){
      if (array[i] == value) return i;
    }
    return -1
  },
  // 数组反转
  reverse: function (array) {
    var l = array.length - 1
    for (i = 0; i*2 < l; i++){
      var p = array[i]
      array[i] = array[l - i]
      array[l - i] = p
    }
    return array
  },
  // 去掉重复值
  uniq: function (array) {
    var a = []
    var map = {}
    for (var n of array) {
      if (!map[n]) {
        map[n] = 1
        a.push(n)
      }
    }
    return a
  },
  uniqBy: function (array, size) {
  },
  // 去掉数组中所输入的值
  without: function (array, ...values) {
    var a = []
    for (var n of array) {
      var only = false
      for (var m of values) {
        if (n == m) only = true;
      }
      if (!only) a.push(n);
    }
    return a
  },
  // 数组里面子数组相同index的值放入一个新数组，所有新数组组合成新的母项
  zip: function (...array) {
    var a = []
    for (i = 0; i < array[0].length; i++){
      var m = []
      for (var s of array) {
        m.push(s[i])
      }
      a.push(m)
    }
    return a
  },
  // 根据条件将数组分类计数
  countBy: function (array, iteratee) {
    var counted = {}
    array.forEach(function (ary) {
      if (typeof iteratee == 'function') {
        var silters = iteratee(ary)
      } else if (typeof iteratee == 'string') {
        var silters = ary[iteratee]
      }
      if (!counted[silters]) {
        counted[silters] = 1
      } else {
        counted[silters] ++
      }
    })
    return counted
  },
  // 给定的条件在数组里各个元素都满足，才返回真
  // 想对的some方法，是任何一个元素能满足就返回真
  every: function (collection, predicate) {
    for (var n of collection) {
      if (Array.isArray(predicate)) {
        if (n[predicate[0]] !== predicate[1]) return false;
      } else if (typeof predicate == 'object') {
        for (var key in n) {
          if (!key in predicate) return false;  
        }
      } else if (typeof predicate == 'string') {
        if (!n[predicate]) return false;
      } else {
        if (typeof n !== predicate) return false;
      }
    }
    return true
  },
  find: function (array, predicate, fromIndex = 0) {
    for (i = fromIndex; i < array.length; i++) {
      if (typeof predicate == 'function') {
        if(predicate(array[i])) return array[i]
      } else if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] && array[i][predicate[0]] == predicate[1]) return array[i];
      } else if (typeof predicate == 'object') {
        var every = true
        for (var key in predicate) {
          if(array[i][key] !== predicate[key]) every = false
        }
        if (every) return array[i];
      } else if(typeof predicate == 'string'){
        if (array[i][predicate]) return array[i];
      } else {
        if (array[i] == predicate) return array[i];
      }
    }
    return undefined
  },
  groupBy: function (array, iteratee) {
    var grouped = {}
    array.forEach(function (ary) {
      if (typeof iteratee == 'function') {
        var silters = iteratee(ary)
      } else if (typeof iteratee == 'string') {
        var silters = ary[iteratee]
      }
      if (!grouped[silters]) {
        grouped[silters] = [ary]
      } else {
        grouped[silters].push(ary)
      }
    })
    return grouped
  },
  keyBy: function (array, iteratee) {
    var keyed = {}
    array.forEach(function (ary) {
      if (typeof iteratee == 'function') {
        var silters = iteratee(ary)
      } else if (typeof iteratee == 'string') {
        var silters = ary[iteratee]
      }
        keyed[silters] = ary
    })
    return keyed
  },
  partition: function (array, predicate) {
  },
}

var  devil = {
  
}
var  devil = {
  
}
var  devil = {
  reduceRight: function (array, size) {
  }
}
var  devil = {
  reject: function (array, size) {
  }
}
var  devil = {
  sample: function (array, size) {
  }
}
var  devil = {
  shuffle: function (array, size) {
  }
}
var  devil = {
  size: function (array, size) {
  }
}
var  devil = {
  some: function (array, size) {
  }
}
var  devil = {
  isBoolean: function (array, size) {
  }
}
var  devil = {
  isEmpty: function (array, size) {
  }
}
var  devil = {
  isEqual: function (array, size) {
  }
}
var  devil = {
  isNaN: function (array, size) {
  }
}
var  devil = {
  isNil: function (array, size) {
  }
}
var  devil = {
  isNull: function (array, size) {
  }
}
var  devil = {
  isNumber: function (array, size) {
  }
}
var  devil = {
  toArray: function (array, size) {
  }
}
var  devil = {
  ceil: function (array, size) {
  }
}
var  devil = {
  max: function (array, size) {
  }
}
var  devil = {
  maxBy: function (array, size) {
  }
}
var  devil = {
  sumBy: function (array, size) {
  }
}
var  devil = {
  repeat: function (array, size) {
  }
}
var  devil = {
  range: function (array, size) {
  }
}
var  devil = {
  cloneDeep: function (array, size) {
  }
}