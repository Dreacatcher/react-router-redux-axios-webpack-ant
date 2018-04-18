/*
 * @Author: lcm 
 * @Date: 2018-04-13 22:37:05 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-04-18 14:55:37
 */
import axios from 'axios'
import qs from 'qs'

// ******************************* Setting接口协议 ***********************************/
/* eslint-disable  */
let appid = 'BAS5-22222-0001'
let appkey = '32323222232323'
let siteid = '520133300'
// ******************************* Setting接口协议 ***********************************/
class Fetch {
  /**
   * 将字符串含有https或http的绝对路径，根据当前访问的地址进行替换。
   * @param strData
   * @returns {*}
   */
  switchProtocol(strData) {
    /* eslint-disable  */
    let protocol = window.location.protocol;
    try {
      if (protocol == 'http:') {
        strData = strData.replace(/https:/g, 'http:')
        // strData=strData.replace(/http:/g, 'https:');
      } else if (protocol == 'https:') {
        strData = strData.replace(/http:/g, 'https:')
      }
    } catch (e) {}
    return strData
  }
  /**
   * 重组接口地址
   * @param {*} url 
   */
  urlJoint(host, url) {
    let _url = ''
    _url = host + url
    return _url
  }
  /**
   * 接口加密
   * @param {*} param 
   */
  packageParamBase(param) {
    return qs.stringify(param)
  }
  /**
   * post请求 UTF-8格式
   * @param {*} url 
   * @param {*} data 
   * @param {*} callback 
   */
  httpRequestPosth(host, url, data, callback) {
    // POST
    let _data = this.dataEncode(data)
    let _requestParam = this.packageParamBase(_data)
    url = this.urlJoint(host, url)
    url = url + '?appCode=' + window.__INITIAL_STATE__.appCode + '&_t=' + (new Date().getTime())
    // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    console.log(axios.defaults.headers)
    axios
      .post(url, _requestParam)
      .then((response) => {
        callback(response)
      })
      .catch((error) => {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        console.log(error)
      })
  }
  httpRequestGet(host, url, data, callback) {
    // GET
    data = this.dataEncode(data)
    url = this.urlJoint(host, url)
    // data.appCode = window.__INITIAL_STATE__.appCode;
    // data._t = new Date().getTime();
    axios
      .get(url, {
        params: data
      })
      .then((response) => {
        callback(response)
      })
      .catch((error) => {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        console.log(error)
      })
  }
  // ---------------XSS--------------//
  htmlEncode(str) {
    let s = ''
    if (str.length === 0) return ''
    // s = str.replace(/ /g, "&nbsp;");
    // s = str.replace(/&/g, "&amp;");
    s = str.replace(/</g, '%26lt%3B')
    s = s.replace(/%3C/g, '%26lt%3B')
    s = s.replace(/%3c/g, '%26lt%3B')
    s = s.replace(/>/g, '%26gt%3B')
    s = s.replace(/%3E/g, '%26gt%3B')
    s = s.replace(/%3e/g, '%26gt%3B')
    // s = s.replace(/\'/g, "&#39;");
    // s = s.replace(/\"/g, "&quot;");
    // s = s.replace(/\n/g, "<br>");
    return s
  }
  dataEncode(data) {
    // Encode
    let rel = data
    let source = ''
    if (typeof rel === 'object') {
      source = this.htmlEncode(JSON.stringify(rel))
      source = JSON.parse(source)
      rel = source
    } else if (typeof rel === 'string') {
      source = this.htmlEncode(rel)
      rel = source
    }
    return rel
  }
}
export default new Fetch()