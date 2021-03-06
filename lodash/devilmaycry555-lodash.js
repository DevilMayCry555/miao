var devilmaycry555 = {
  //array
  //O数组每size个分一组
  chunk: function (array, size) {
    var l = array.length
    var newone = []
    var i = 0
    while (i < l) {
      var a = []
      for (var j = i; i + size < l ? j < i + size : j < l; j++){
        a.push(array[j])
      }
      newone.push(a)
      i+=size
    }
    return newone
  },
  //O去除无意义项
  compact: function (array) {
    var a = []
    for (var n of array) {
      if (n) a.push(n);
    }
    return a
  },
  concat(array, [values]) {
    
  },
  //从array里挑出与value不同的项，组成一个新数组
  difference: function (array, value) {
    return this.differenceBy(...arguments, this.identity)
  },
  differenceBy: function (array, value, m) {
    var method = arguments[arguments.length - 1]
    //如果最后一个参数不是函数，则默认一个穿自己的函数
    if (this.typeSee(method) == 'Array') {
      method = this.identity
      var l = arguments.length
    } else {
      method = this.iteratee(method)
      var l = arguments.length - 1
    }
    for (var i = 1; i < l; i++){
      var val = arguments[i]
      array = array.filter(function (n) {
        for (var j = 0; j < val.length; j++) {
          if (method(val[j]) == method(n)) return false;
        }
        return true
      })
      if (array.length == 0) return array;
    }
    return array
  },
  differenceWith: function (array, value, comparator) {
    return array.filter(function (n) {
      for (var val of value) {
        if (comparator(val, n)) return false;
      }
      return true
    })
  },
  //O丢掉前n项
  drop: function (array, n = 1) {
    var l = array.length
    if (n >= l) return [];
    var a = []
    for (var i = n; i < l; i++){
      a.push(array[i])
    }
    return a
  },
  //O从后往前丢
  dropRight: function (array, n = 1) {
    var l = array.length
    if (n >= l) return [];
    var a = array
    for (var i = 0; i < n; i++){
      a.pop()
    }
    return a
  },
  //从后往前丢，直到遇到false
  dropRightWhile: function (array, predicate) {
    predicate = this.iteratee(predicate)
    var a = array
    while (true) {
      if (predicate(a[a.length-1])) {
        a.pop()
      } else {
        return a
      }
    }
  },
  //从前往后丢，直到遇到false
  dropWhile: function (array, predicate) {
    predicate = this.iteratee(predicate)
    var a = array
    while (true) {
      if (predicate(a[0])) {
        a.shift()
      } else {
        return a
      }
    }
  },
  //O数组从start到end都用value表示
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return array
  },
  //??([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],["active",false])
  findIndex: function (array, predicate, fromIndex = 0) {
    predicate = this.iteratee(predicate)
    for (var i = fromIndex; i < array.length; i++){
      if (predicate(array[i])) return i;
    }
    return -1
  },
  //O
  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    predicate = this.iteratee(predicate)
    for (var i = fromIndex; i >= 0; i--){
      if (predicate(array[i])) return i;
    }
    return -1
  },
  // O数组内部层级减一
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
  //O数组内部层级递减到底
  flattenDeep: function (array) {
    return this.flattenDepth(array, Infinity);
  },
  //O数组按给定次数削减层数
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
  //O将数组形式的对象转成真正的对象形式
  fromPairs: function (array) {
    var a = {}
    for (var n of array) {
      a[n[0]] = n[1]
    }
    return a
  },
  //O将数组里面的第一个元素提取出来
  head: function (array) {
    if (array[0] == undefined) return undefined;
    if (array[0].length == undefined) return array[0];
    if (array[0].length >= 1) return this.head(array[0]);
  },
  // 获取寻找值的index
  IndexOf: function (array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i < array.length; i++){
      if (array[i] == value) return i;
    }
    return -1
  },
  //O去掉数组的尾项
  initial: function (array) {
    if (array.length >= 1) array.length -= 1;
    return array
  },
  //求交集，根据第一个数组返回结果
  //O找不到就返回[]
  intersection: function (arrays) {
    var a = arguments[0]
    for (var i = 1; i < arguments.length; i++){
      var f = arguments[i].filter(function (n) {
        for (var val of a) {
          if (n === val) {
            return true
          } else {
            return false
          }
        }
      })
      a = f //每次对比完 将对比后的结果赋值给a 继续对比 持续对比
      if (a.length == 0) return a; //长度为0，提前结束
    }
    return a
  },
  //O用所选符号将数组拼接成字符串
  join: function (array, separator = ',') {
    var a = array[0]
    for (var i = 1; i < array.length; i++){
      a += '' + separator + array[i]
    }
    return a
  },
  //O获取数组的最后一个元素
  last: function (array) {
    var l = array.length
    if (array[l - 1].length == undefined) return array[l - 1];
    if (array[l-1].length >= 1) return this.last(array[l - 1]);
  },
  //O倒序找到所选的值的index
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--){
      if (array[i] == value) return i;
    }
    return -1
  },
  nth: function (array, n = 0) {
    if (n >= 0) {
      return array[n]
    } else {
      return array[array.length + n]
    }
  },
  //O以第一个数组为基，与后续作比较，将相同元素剔除
  pull: function (array, values) {
    for (var i = 1; i < arguments.length; i++){
      this.remove(array, n => n == arguments[i])
    }
    return array
  },
  //将数组中符合条件的移入新数组并返回，且原数组不再含有这些项
  remove: function (array, predicate) {
    predicate = this.iteratee(predicate)
    var res = []
    for (var i = 0; i < array.length; i++){
      if (predicate(array[i])) {
        res = res.concat(array.splice(i, 1))
        i--
      }
    }
    return res
  },
  //O数组反转
  reverse: function (array) {
    var l = array.length - 1
    for (var i = 0; i*2 < l; i++){
      var p = array[i]
      array[i] = array[l - i]
      array[l - i] = p
    }
    return array
  },
  //将value以最小index插入进有序数组中，返回index
  //用二分法
  sortedIndex: function (array, value) {
    var left = 0
    var right = array.length - 1
    while (right - left > 1) {
      var mid = Math.ceil((right + left)/2)
      if (array[mid] < value) {
        left = mid
      } else {
        right = mid
      }
    }
    return right
  },
  //以第一个数组为基本，一次跟后面数组比较，将自己没有的数push进来
  union: function (...arrays) {
    return this.unionBy(...arguments, this.identity);
  },
  unionBy: function (arrays,iteratee) {
    var iter = arguments[arguments.length - 1]
    var me = arrays
    for (var i = 1; i < arguments.length - 1; i++) {
      me = me.concat(this.differenceBy(arguments[i], me, iter))
    }
    return me
  },
  //O去掉重复值
  uniq: function (array) {
    return this.uniqBy(array, this.identity);
  },
  uniqBy: function (array, iter) {
    iter = this.iteratee(iter)
    var a = []
    var map = {}
    for (var n of array) {
      if (!map[iter(n)]) {
        map[iter(n)] = 1
        a.push(n)
      }
    }
    return a
  },
  //根据第一个数组，相同代号归到一个新数组里
  zip: function (...arrays) {
    return arrays[0].map(function (_, colIndex) {
      return arrays.map(function (row) {
        return row[colIndex]
      })
    })
  },
  unzip: function (array) {
    return this.zip(...array)
  },
  //O去掉数组中所输入的值
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
  xor: function (...arrays) {
    var res = []
    for (var j = 0; j < arrays.length; j++){
      var self = arrays[j].slice()
      for (var i = j+1; i < arrays.length; i++){
        this.pull(self, ...arrays[i]);
        this.pull(arrays[i], ...arrays[j]);
      }
      res = res.concat(self)
    }
    return res
  },



  //collection
  //O根据条件将数组分类计数
  countBy: function (array, iteratee) {
    var counted = {}
    var iter = this.iteratee(iteratee)
    array.forEach(function (ary) {
      var silters = iter(ary)
      if (counted[silters] == null) {
        counted[silters] = 1
      } else {
        counted[silters] ++
      }
    })
    return counted
  },
  //O
  groupBy: function (array, iteratee) {
    var grouped = {}
    var iter = this.iteratee(iteratee)
    array.forEach(function (ary) {
      var silters = iter(ary)
      if (grouped[silters] == null) {
        grouped[silters] = [ary]
      } else {
        grouped[silters].push(ary)
      }
    })
    return grouped
  },
  //O
  keyBy: function (array, iteratee) {
    var keyed = {}
    var iter = this.iteratee(iteratee)
    array.forEach(function (ary) {
      var silters = iter(ary)
      keyed[silters] = ary
    })
    return keyed
  },
  //O给定的条件在数组里各个元素都满足，才返回真
  every: function (collection, predicate) {
    var iter = this.iteratee(predicate)
    for (var n of collection) {
      if (iter(n) == false) return false;
    }
    return true
  },
  // 想对的some方法，是任何一个元素能满足就返回真
  some: function (collection, predicate) {
    var iter = this.iteratee(predicate)
    for (var n of collection) {
      if (iter(n) == true) return true;
    }
    return false
  },
  //筛选语句可能是value，index/key，collection
  //O从fromindex开始，找到符合的即返回，找不到则返回undefined
  find: function (collection, predicate, fromIndex = 0) {
    predicate = this.iteratee(predicate)
    for (var i = fromIndex; i < collection.length; i++){
      if (predicate(collection[i])) return collection[i];
    }
    return undefined
  },
  forEach: function (collection, loop) {
    if (this.typeSee(collection) == 'Array') {
      for (var i = 0; i < collection.length; i++){
        loop(collection[i], i, collection);
      }
    }
    if (this.typeSee(collection) == 'Object') {
      for (var key in collection) {
        loop(collection[key], key, collection);
      }
    }
    return collection
  },
  filter: function (collection, predicate) {
    var temp = collection
    predicate = this.iteratee(predicate)
    for (var i = 0; i < temp.length; i++){
      if (!predicate(temp[i])) {
        temp.splice(i, 1)
        i--
      }
    }
    return temp
  },
  map: function (collection, transform) {
    var mapped = collection
    transform = this.iteratee(transform)
    if (this.typeSee(mapped) == 'Array') {
      for (var i = 0; i < mapped.length; i++){
        mapped[i] = transform(mapped[i],i,mapped)
      }
      return mapped
    }
    if (this.typeSee(mapped) == 'Object') {
      var res = []
      for (var key in mapped){
        res.push(transform(mapped[key],key,mapped))
      }
      return res
    }
  },
  flatMap: function (collection, transform) {
    var needflat = this.map(collection, transform)
    return this.flatten(needflat)
  },
  flatMapDepth: function (collection, transform, depth = 1) {
    var needflat = this.map(collection, transform);
    return this.flattenDepth(needflat, depth);
  },
  //O
  reduce: function (ary_obj, combine, start = 0) {
    var current = start
    if (Array.isArray(ary_obj)) {
      for (var i = 0; i < ary_obj.length; i++){
        current = combine(current, ary_obj[i])
      }
    } else if (typeof ary_obj == 'object') {
      for (var k in ary_obj) {
        current = combine(current, ary_obj[k], k)
      }
    }
    return current
  },
  //对于predicate，返回真的一组，false的一组
  partition: function (collection, predicate) {
    predicate = this.iteratee(predicate)
    var truely = []
    var falsy = []
    if (this.typeSee(collection) == 'Array') {
      for (var i = 0; i < collection.length; i++){
        if (predicate(collection[i])) {
          truely.push(collection[i])
        } else {
          falsy.push(collection[i])
        }
      }
    }
    if (this.typeSee(collection) == 'Object') {
      for (var key in collection) {
        if (predicate(collection[key])) {
          truely.push(collection[key])
        } else {
          falsy.push(collection[key])
        }
      }
    }
    return [truely,falsy]
  },
  //反选
  reject: function (collection, predicate) {
    var temp = collection
    predicate = this.iteratee(predicate)
    for (var i = 0; i < temp.length; i++){
      if (predicate(temp[i])) {
        temp.splice(i, 1)
        i--
      }
    }
    return temp
  },
  //O返回一个随机子项
  sample: function (collection) {
    var l = array.length
    var r = Math.floor(Math.random() * l)
    return array[r]
  },
  //洗牌返回
  shuffle: function (array) {
    var ary = []
    var l = array.length
    while (ary.length < l) {
      var ranidx = Math.floor(Math.random() * l)
      if (array[ranidx] != null) {
        ary.push(array[ranidx])
        array[ranidx] = null
      }
    }
    return ary
  },
  //O返回类长度
  size: function (collection) {
    if (typeof collection == 'object') {
      var count = 0
      for (var key in collection) {
        count++
      }
      return count
    } else {
      return collection.length
    }
  },
  //稳定排序，依次按iters进行排序
  sortBy: function (collection, ...iteratees) {
    return 1
  },




  //Function
  //可以将函数的this绑定为thisArg对象，不绑则为null
  //func参数的绑定，可以跳着绑定
  //返回一个新函数
  bind(func, thisArg, ...partials) {
    return function (...args) {
      var i = 0
      var fixedArgs = partials.slice()
      for (var n of fixedArgs) {
        if (n == window) {
          n = args[i++]
        }
      }
      fixedArgs = fixedArgs.concat(args.slice(i))
      // return func.call(thisArg, ...fixedArgs)
      return func.apply(thisArg, fixedArgs) //apply 需要传数组
    }
  },
  defer: function (func, ...args) {
    
  },
  delay: function (func, wait, ...args) {
    
  },
  negate(predicate) {
    
  },
  once(func) {
    
  },
  spread(func, [start = 0]) {
    
  },
  curry(func, [arity = func.length]) {
    
  },
  memoize(func, [resolver]) {
    
  },




  //lang
  //比较两个值是否完全一致，例如数组，数字，对象，字符串
  //O深度对比
  isEqual: function (value, other) {
    if (value === other) {
      return true
    }
    if (this.typeSee(value) == this.typeSee(other)) {
      if (this.typeSee(value) == 'Array' && value.length == other.length) {
        for (var i = 0; i < value.length; i++){
          if (this.isEqual(value[i], other[i]) == false) return false;
        }
        return true
      }
      if (this.typeSee(value) == 'Object') {
        for (var keyValue in value) {
          if (this.isEqual(value[keyValue], other[keyValue]) == false) return false;
        }
        for (var keyOther in other) {
          if (keyOther in value == false) return false;
        }
        return true
      }
    }
    return false
  },
  //对于给定的对象和来源做一个部分深度对比，若给定的对象所有的属性值，
  //均能匹配上来源里面的一组，返回真，否则返回假
  //对于空数组或者空对象源，匹配任何属性值
  //O为单向的包含关系
  isMatch: function (object, source) {
    if (object === source) {
      return true
    }
    if (this.typeSee(object) == this.typeSee(source)) {
      if (this.typeSee(object) == 'Array' && object.length >= source.length) {
        for (var i = 0; i < source.length; i++){
          if (this.isMatch(object[i], source[i]) == false) return false;
        }
        return true
      }
      if (this.typeSee(object) == 'Object') {
        for (var keySource in source) {
          if (this.isMatch(object[keySource], source[keySource]) == false) return false;
        }
        return true
      }
    }
    return false
  },
  isRegExp: function (value) {
    
  },
  toArray(value) {
    
  },
  cloneDeep(value) {
    
  },



  //Math
  maxBy(array, iteratee = this.identity) {
    
  },
  sumBy(array, iteratee = this.identity) {
    
  },



  //Number
  clamp(number, [lower], upper) {
    
  },
  inRange(number, [start = 0], end) {
    
  },
  random([lower = 0], [upper = 1], [floating]) {
    
  },



  //Object
  assignIn(object, [sources]) {
    
  },
  defaults(object, [sources]) {
    
  },
  findKey(object, [predicate = _.identity]) {
    
  },
  forIn(object, [iteratee = _.identity]) {
    
  },
  forInRight(object, [iteratee = _.identity]) {
    
  },
  forOwn(object, [iteratee = _.identity]) {
    
  },
  forOwnRight(object, [iteratee = _.identity]) {
    
  },
  functions(object) {
    
  },
  //通过路径获取属性值，若值为undefined则返回默认值
  //路径的写法  'a[0].b.c'
  get(object, path, defaultValue = undefined) {
    var b
    if (this.typeSee(path) == 'String') {
      b = this.toPath(path)
    } else {
      b = path
    }
    var a = object
    for (var i = 0; i < b.length; i++){
      a = a[ b[i] ]
      if (a == undefined) return defaultValue;
    }
    return a
  },
  has(object, path) {
    
  },
  invert(object) {
    
  },
  invoke(object, path, [args]) {
    
  },
  keys(object) {
    
  },
  mapKeys(object, [iteratee = _.identity]) {
    
  },
  mapValues(object, [iteratee = _.identity]) {
    
  },
  merge(object, [sources]) {
    
  },
  omit(object, [paths]) {
    
  },
  pick(object, [paths]) {
    
  },
  result(object, path, [defaultValue]) {
    
  },
  set(object, path, value) {
    
  },
  toPairs(object) {
    
  },
  values(object) {
    
  },



  //String
  escape([string = '']) {
    
  },
  pad([string = ''], [length = 0], [chars = ' ']) {
    
  },
  padEnd([string = ''], [length = 0], [chars = ' ']) {
    
  },
  padStart([string = ''], [length = 0], [chars = ' ']) {
    
  },
  repeat([string = ''], [n = 1]) {
    
  },
  unescape([string = '']) {
    
  },



  //Util
  bindAll(object, methodNames) {
    
  },
  range([start = 0], end, [step = 1]) {
    
  },
  mixin([object = lodash], source, [options = {}]) {
    
  },
  times(n, [iteratee = _.identity]) {
    
  },
  uniqueId([prefix = '']) {
    
  },
  constant(value) {
    
  },
  toPath(value) {
    var res = []
    var re = /\w+/g
    var match
    while (match = re.exec(value)) {
      res.push(match[0])
    }
    return res
  },
  //返回首字母大写的类型的英文字符串
  typeSee: function (x) {
    return Object.prototype.toString.call(x).slice(8, -1);
  },
  //O返回收到的第一个参数
  identity: function (value) {
    return arguments[0];
  },
  //创建一个函数，用创建的函数的参数调用func
  //若func为属性名，返回所给元素的属性值
  //若func为数组或者对象，若所给元素含有func相同的属性返回真，否则返回假
  iteratee: function (func) { 
    if (this.typeSee(func) == 'Object') {
      return this.matches(func)
    }
    if (this.typeSee(func) == 'Array') {
      return this.matchesProperty(func[0],func[1])
    }
    if (this.typeSee(func) == 'String') {
      return this.property(func)
    }
    if (this.typeSee(func) == 'Function') {
      return this.identity(func)
    }
  },
  //O返回一个接参函数 与参数对象做深度对比
  //若参数对象与source的属性值相同，则返回true
  matches: function (source) {
    return function (element) {
      if (devilmaycry555.isMatch(element, source) == false) return false;
      return true
    }
  },
  //
  matchesProperty: function (path, srcValue) {
    return function (element) {
      var father = devilmaycry555.property(path)(element)
      if (devilmaycry555.isMatch(father, srcValue) == false) return false;
      return true
    }
  },
  //O根据路径返回value  路径格式为a.b.c
  property: function (path) {
    return function (element) {
      return devilmaycry555.get(element, path)
    }
  },
  propertyOf(object) {
    
  },
}
