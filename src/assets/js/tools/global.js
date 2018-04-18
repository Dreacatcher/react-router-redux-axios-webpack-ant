/*
 * @Author: lcm 
 * @Date: 2018-04-13 22:37:19 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-04-18 14:51:06
 */

class Tool {
  /**
   * 判斷是否是数组
   * @param {any} oNum
   * @returns
   * @memberof Tool
   */
  isNumber(oNum) {
    if (!oNum) {
      return false
    }
    var strP = /^\d+(\.\d+)?$/
    if (!strP.test(oNum)) {
      return false
    }
    try {
      if (window.parseInt(oNum) !== oNum || window.parseInt(oNum) === 0) {
        return false
      }
    } catch (ex) {
      return false
    }
    return true
  }
  /**
   * 数组去重
   * @param arr 要去重的数组
   * @returns {Array} 去重后的数组
   */
  unique(arr) {
    var ret = []
    var hash = {}

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i]
      var key = typeof item + item
      if (hash[key] !== 1) {
        ret.push(item)
        hash[key] = 1
      }
    }
    return ret
  }
  /**
   * 将datetime数字转换为指定日期格式的字符串。
   * @param dateStr datetime数字
   * @param format 日期格式，y - 年, M - 月，d - 日, h - 时, m - 分, s - 秒, S - 毫秒。
   * eg：formatDate("2014-2-2 00:12:00","yyyy/MM/dd")   输出："2014/02/02"
   * @return 格式化后的日期格式字符串。
   */
  formatDate(dateStr, format) {
    if (!dateStr) {
      return null
    }
    var date = new Date(dateStr)

    var o = {
      'M+': date.getMonth() + 1, // month
      'd+': date.getDate(), // day
      'h+': date.getHours(), // hour
      'm+': date.getMinutes(), // minute
      's+': date.getSeconds(), // second
      'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
      S: date.getMilliseconds()

      // millisecond
    }

    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ?
          o[k] :
          ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return format
  }
  /**
   * 去两端空格
   * @return 字符串
   */
  trim() {
    return this.replace(/(^\s*)|(\s*$)/g, '')
  }

  /**
   * 获取url中的字符串，支持中文
   * @return 字符串
   */
  queryString(str, key) {
    if (str && str != '') {
      var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
      var result = str.substr(1).match(reg)
      return result ? decodeURIComponent(result[2]) : null
    }
  }

  /**
   * 获取滚动区域的位置信息
   * @param {any} element
   * @returns
   * @memberof Tool
   */
  setScrollTop(element, val) {
    if (element) {
      element.scrollTop = val
    }
  }
  /**
   * 设置滚动区域的位置信息
   * @param {any} element
   * @returns
   * @memberof Tool
   */
  getScrollTop(element) {
    if (element) {
      return element.scrollTop
    } else {
      return document.documentElement.scrollTop
    }
  }
  /**
   * 获取可视区域的高度
   * @param {any} element
   * @returns
   * @memberof Tool
   */
  getVisibleHeight(element) {
    if (element) {
      return element.offsetHeight
    } else {
      return document.documentElement.scrooffsetHeightllTop
    }
  }
  /**
   * 获取滚动区域高度
   * @param {any} element
   * @returns
   * @memberof Tool
   */
  getScrollHeight(element) {
    if (element) {
      return element.scrollHeight
    } else {
      return document.documentElement.scrollHeight
    }
  }
}
export default new Tool()