/*
 * @Author: lcm 
 * @Date: 2018-04-13 22:36:58 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-04-13 22:43:37
 */

import B from '../lib/base.js'
let expireValueKeySuffix = '__expire'
/**
 * 设置本地存储数据
 * @class Storage
 */
class Storage {
  constructor() {
    if (window.localStorage) {
      try {
        this.ls = window.localStorage
        this.ls.setItem('dc.storage.test.key', '')
        this.ls.removeItem('dc.storage.test.key')
        this.isLocalStorage = true
      } catch (e) {
        console.log(e)
      }
    }
  }
  get(key, reset) {
    if (this.isLocalStorage) {
      var value = this.ls.getItem(key)
      return value ?
        this._findExpireValue(this.ls, key, value, reset) :
        undefined
    }
    return undefined
  }
  set(key, value, expire) {
    if (this.isLocalStorage) {
      this.remove(key)
      expire && this._addExpireValue(this.ls, key, expire)
      return this._setValue(this.ls, key, value)
    }
    return false
  }
  pop(key) {
    var value
    if (this.isLocalStorage) {
      value = this.ls.getItem(key)
      value = value ? this._findExpireValue(this.ls, key, value) : undefined
      if (value) {
        this._delExpireValue(this.ls, key)
        this.ls.removeItem(key)
      }
    }
    return value
  }
  remove(key) {
    if (this.isLocalStorage) {
      this._delExpireValue(this.ls, key)
      this.ls.removeItem(key)
      return true
    }
    return false
  }
  clear() {
    if (this.isLocalStorage) {
      this.ls.clear()
      return true
    }
    return false
  }
  _findExpireValue(ls, key, value, reset) {
    if (this._isExpire(ls, key)) {
      ls.removeItem(key)
      return undefined
    }

    if (reset === true) {
      this._modExpireValue(ls, key)
    }

    if (
      (value.charAt(0) === '{' && value.charAt(value.length - 1) === '}') ||
      (value.charAt(0) === '[' && value.charAt(value.length - 1) === ']')
    ) {
      return B.fromJson(value)
    }
    return value
  }
  _setValue(ls, key, value) {
    try {
      var string_ = Object.prototype.toString.apply(value)
      if (string_ === '[object Object]' || string_ === '[object Array]') {
        value = B.toJson(value)
      }

      ls.setItem(key, value)
      return true
    } catch (e) {
      return false
    }
  }
  _modExpireValue(ls, key) {
    var expireObj = ls.getItem(key + expireValueKeySuffix)
    if (!expireObj) {
      return
    }
    expireObj = B.fromJson(expireObj)
    expireObj.deadline = +new Date() + expireObj.expire * 1000
    ls.removeItem(key + expireValueKeySuffix)
    ls.setItem(key + expireValueKeySuffix, B.toJson(expireObj))
  }

  _delExpireValue(ls, key) {
    ls.removeItem(key + expireValueKeySuffix)
  }

  _isExpire(ls, key) {
    var expireObj = ls.getItem(key + expireValueKeySuffix)
    if (!expireObj) {
      return false
    }
  }
  _addExpireValue(ls, key, expire) {
    if (Object.prototype.toString.apply(expire) === '[object Number]') {
      var expireObj = {}
      expireObj.deadline = +new Date() + expire * 1000
      expireObj.expire = expire

      ls.removeItem(key + expireValueKeySuffix)
      ls.setItem(key + expireValueKeySuffix, B.toJson(expireObj))
    }
  }
}
export default new Storage()