var  devilmaycry555 = {
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
  compact: function (array) {
    var a = []
    for (var n of array) {
      if (n) a.push(n);
    }
    return a
  },
  drop: function (array, n = 1) {
    var l = array.length
    if (n >= l) return [];
    var a = []
    for (i = n; i < l; i++){
      a.push(array[i])
    }
    return a
  },
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
  fill: function (array, value, [start = 0], [end = array.length]) {
    var l = array.length
    for (i = start; i < end; i++){
      array[i] = value
    }
    return array
  },
  findIndex: function (array, [predicate = _.identity], [fromIndex = 0]) {
  },
  findLastIndex: function (array, [predicate = _.identity], [fromIndex = array.length - 1]) {
  },
  flatten: function (array) {
  },
  flattenDeep: function (array, size) {
  },
  flattenDepth: function (array, size) {
  },
  fromPairs: function (array) {
    var a = {}
    for (var n of array) {
      a[n[0]] = n[1]
    }
    return a
  },
  head: function (array) {
    if (array[0].length >= 1) return this.head(array[0]);
    if (!array[0].length) return array[0];
  },
  IndexOf: function (array, value, [fromIndex = 0]) {
    for (i = fromIndex; i < array.length; i++){
      if (array[i] == value) return i;
    }
  },
  initial: function (array) {
    if (!array.length) array.length -= 1;
    return array
  },
  join: function (array, [separator = ',']) {
    var a = array[0]
    for (i = 1; i < length; i++){
      a += separator + array[i]
    }
    return a
  },
  last: function (array) {
    var l = array.length
    if (array[l-1].length >= 1) return this.last(array[l - 1]);
    if(!array[l-1].length) return array[l-1]
  },
  lastIndexOf: function (array, value, [fromIndex = array.length - 1]) {
    for (i = fromIndex; i >= 0; i--){
      if (array[i] == value) return i;
    }
  },
  reverse: function (array) {
    var l = array.length - 1
    for (i = 0; i*2 < l; i++){
      var p = array[i]
      array[i] = array[l - i]
      array[l - i] = p
    }
    return array
  },
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
  zip: function (array) {
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
  countBy: function (array, size) {
  },
}

var  devilmaycry555 = {
  every: function (collection, [predicate = _.identity]) {
    if (collection.length == undefined) { //对象
      if ([predicate = _.identity].length) {
        
      }
    }
  }
}
var  devil = {
  filter: function (array, size) {
  }
}
var  devil = {
  find: function (array, size) {
  }
}
var  devil = {
  forEach: function (array, size) {
  }
}
var  devil = {
  groupBy: function (array, size) {
  }
}
var  devil = {
  keyBy: function (array, size) {
  }
}
var  devil = {
  map: function (array, size) {
  }
}
var  devil = {
  partition: function (array, size) {
  }
}
var  devil = {
  reduce: function (array, size) {
  }
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
var  devilmaycry555 = {
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