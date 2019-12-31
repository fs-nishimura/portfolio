/**
 * DOM取得
 * @param [string] name 取得したいDOM
 * @return [object] 取得したDOMを返す
 */
export function getDOM(name) {
  let el

  if (!name.match(/\s|\[|\]|\,/g)) {
    if (name.match(/^#/)) {
      el = document.getElementById(name.replace(/#/, ''))
    } else if (name.match(/^\./)) {
      el = document.getElementsByClassName(name.replace(/\./, ''))
    } else if (name.match(/\b/)) {
      el = document.getElementsByTagName(name)
    } else {
      el = document.querySelectorAll(name)
    }
  } else {
    el = document.querySelectorAll(name)
  }

  return el
}

/**
 * console
 */
export function _log(arg, self) {
  if (DEBUG && typeof 'console' !== 'undefined') {
    if (self) {
      console.log(`${self.constructor.name}: ${arg}`)
    } else {
      console.log(`${arg}`)
    }
    window._DEBUG_TRACE += '\n' + arg
  }
}

/**
 * 数値の桁数をチェック
 * @param {number} num  チェックしたい数値
 * @param {number} base 基数
 * @return {number}     桁数を返す
 */
export function getDigits(num, base = 10) {
  return (Math.log(num) / Math.log(base) + 1) | 0
}

/**
 * GET値の取得
 * @return {object} GET値をオブジェクト型で返す
 */
export function getUrlVars() {
  let i, key, keySearch, val

  const vars = {}
  const param = location.search.substring(1).split('&')
  i = 0

  while (i < param.length) {
    keySearch = param[i].search(RegExp('='))
    key = ''

    if (keySearch !== -1) {
      key = param[i].slice(0, keySearch)
    }

    val = param[i].slice(param[i].indexOf('=', 0) + 1)

    if (key !== '') {
      vars[key] = decodeURI(val)
    }
    i++
  }

  return vars
}

/**
 * UNIXTIME取得
 * @return {number} 時間を返す
 */
export function getUnixTime() {
  return parseInt(new Date() / 1000)
}

/**
 * wheelイベント内で使用し、スクロールした方向を取得
 * @return {string} 方向を返す
 */
export function scrollDirection(event) {
  let delta

  if (event.deltaY) {
    delta = -event.deltaY
  } else if (event.wheelDelta) {
    delta = event.wheelDelta
  } else {
    delta = -event.detail
  }

  if (delta < 0) {
    return 'down'
  } else if (delta > 0) {
    return 'up'
  }
}

/**
 * クラスの追加
 * @param {object} el   HTML Element
 * @param {string} name 追加したいクラス名
 */
export function addClass(el, name) {
  const src = ' ' + el.className.replace(/[\t\r\n\f]/g, ' ') + ' '
  if (src.indexOf(' ' + name + ' ') >= 0) {
    return false
  }
  el.className += ' ' + name
  return true
}

/**
 * クラスの削除
 * @param {object} el   HTML Element
 * @param {string} name 削除したいクラス名
 */
export function removeClass(el, name) {
  const src = ' ' + el.className.replace(/[\t\r\n\f]/g, ' ') + ' '
  const dst = src.replace(' ' + name + ' ', ' ')
  el.className = dst.replace(/^\s+/, '').replace(/\s+$/, '')
  return src !== dst
}

/**
 * クラスの存在判定
 * @param {object} el   HTML Element
 * @param {string} name 判定したいクラス名
 * @return {boolean}    クラスが存在するかを返す
 */
export function hasClass(el, name) {
  const className = ' ' + name + ' '
  if (
    (' ' + el.className + ' ').replace(/[\t\r\n\f]/g, ' ').indexOf(className) >=
    0
  ) {
    return true
  }
  return false
}

/**
 * 属性の取得
 * @param {object} el   HTML Element
 * @param {string} attr 取得したい属性の名前
 * @return {string}     取得する属性の値を返す
 */
export function getAttr(el, attr) {
  return el.getAttribute(attr)
}

/**
 * 属性の設定
 * @param {object} el   HTML Element
 * @param {string} attr 設定したい属性の名前
 * @param {string} val  設定したい属性のプロパティ名
 */
export function setAttr(el, attr, val) {
  el.setAttribute(attr, val)
}

/**
 * 要素の横幅の取得
 * @param [object]  el  DOM要素
 * @return [number] 横幅を返す
 */
export function getWidth(el) {
  let width

  if (el === window || el === document) {
    width = document.documentElement.clientWidth || window.innerWidth
  } else {
    width = el.style.width
  }

  return parseInt(width)
}

/**
 * 要素の高さの取得
 * @param [object]  el  DOM要素
 * @return [number] 高さを返す
 */
export function getHeight(el) {
  let height

  if (el === window || el === document) {
    height = document.documentElement.clientHeight || window.innerHeight
  } else {
    height = el.clientHeight
  }

  return parseInt(height)
}

export function getScroll() {
  return {
    top: document.documentElement.scrollTop || document.body.scrollTop,
    left: document.documentElement.scrollLeft || document.body.scrollLeft,
  }
}

/**
 *
 */
export function requestAnimationFrame() {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame
  window.requestAnimationFrame = requestAnimationFrame
}

/**
 *
 */
export function cancelAnimationFrame() {
  const cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozcancelAnimationFrame ||
    window.webkitcancelAnimationFrame ||
    window.mscancelAnimationFrame
  window.cancelAnimationFrame = cancelAnimationFrame
}

/**
 * 要素の高さをそろえる
 * @param [object]  el  DOM要素
 */
export function heightLine(el) {
  let i

  const array = []
  i = 0
  const len = el.length

  for (; i < len; i++) {
    array.push(getHeight(el[i]))
  }
  height = Math.max.apply(null, array)
  i = 0

  for (; i < len; i++) {
    el[i].style.height = height + 'px'
  }
}

/**
 * jsonpを読む
 * @param [object]
 */

export function loadJSONP(url, callback, context) {
  // INIT
  var unique = 0
  var name = '_jsonp_' + unique++
  if (url.match(/\?/)) url += '&callback=' + name
  else url += '?callback=' + name
  // Create script
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  // Setup handler
  window[name] = function(data) {
    callback.call(context || window, data)
    document.getElementsByTagName('head')[0].removeChild(script)
    script = null
    delete window[name]
  }
  // Load JSON
  document.getElementsByTagName('head')[0].appendChild(script)
}
