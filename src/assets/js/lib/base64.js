/*
 * @Author: lucm 
 * @Date: 2017-06-05 17:19:59 
 * @Last Modified by:   lucm 
 * @Last Modified time: 2017-06-05 17:19:59 
 */

let _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
class Base64 {
  encode (r) {
    let e
    let t
    let a
    let h
    let c
    let n
    let o
    let f = ''
    let i = 0
    r = utf8Encode(r)
    for (; i < r.length;) {
      e = r.charCodeAt(i++)
      t = r.charCodeAt(i++)
      a = r.charCodeAt(i++)
      h = e >> 2
      c = ((3 & e) << 4) | (t >> 4)
      n = ((15 & t) << 2) | (a >> 6)
      o = 63 & a
      isNaN(t) ? (n = o = 64) : isNaN(a) && (o = 64)
      f =
        f +
        _keyStr.charAt(h) +
        _keyStr.charAt(c) +
        _keyStr.charAt(n) +
        _keyStr.charAt(o)
    }
    return f
  }
  decode (r) {
    let e
    let t
    let a
    let h
    let c
    let n
    let o
    let f = ''
    let i = 0
    for (r = r.replace(/[^A-Za-z0-9"+""/""="]/g, ''); i < r.length;) {
      h = _keyStr.indexOf(r.charAt(i++))
      c = _keyStr.indexOf(r.charAt(i++))

      n = _keyStr.indexOf(r.charAt(i++))

      o = _keyStr.indexOf(r.charAt(i++))
      e = (h << 2) | (c >> 4)
      t = ((15 & c) << 4) | (n >> 2)
      a = ((3 & n) << 6) | o
      f += String.fromCharCode(e)
      n !== 64 && (f += String.fromCharCode(t))
      o !== 64 && (f += String.fromCharCode(a))
    }
    f = utf8Decode(f)
    return f
  }
}
function utf8Encode (r) {
  r = r.replace(/\r\n/g, '\n')
  for (var e = '', t = 0; t < r.length; t++) {
    var a = r.charCodeAt(t)
    a < 128
      ? (e += String.fromCharCode(a))
      : a > 127 && a < 2048
          ? ((e += String.fromCharCode(
              192 | (a >> 6)
            )), (e += String.fromCharCode(128 | (63 & a))))
          : ((e += String.fromCharCode(
              224 | (a >> 12)
            )), (e += String.fromCharCode(
              128 | (63 & (a >> 6))
            )), (e += String.fromCharCode(128 | (63 & a))))
  }
  return e
}
function utf8Decode (r) {
  var c3
  for (var e = '', t = 0, c2 = 0, c1 = c2, a = c1; t < r.length;) {
    a = r.charCodeAt(t)
    a < 128
      ? ((e += String.fromCharCode(a)), t++)
      : a > 191 && a < 224
          ? ((c2 = r.charCodeAt(t + 1)), (e += String.fromCharCode(
              ((31 & a) << 6) | (63 & c2)
            )), (t += 2))
          : ((c2 = r.charCodeAt(t + 1)), (c3 = r.charCodeAt(
              t + 2
            )), (e += String.fromCharCode(
              ((15 & a) << 12) | ((63 & c2) << 6) | (63 & c3)
            )), (t += 3))
  }
  return e
}
export default new Base64()
