/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^[\w.-]+@[\w.-]*?[\w.-]+\.[a-z]+$/,
  url: /^https?:\/\/[\w.-]*?[\w.-]+\.[a-z]+$/,
  ipv4: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2})\.*?){4}$/,
  // 非严格检验, 校验的年份为 1900-2018
  idcard: /^\d{6}(19[0-9]{2}|20[01][0-8])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[01])\d{3}([0-9]|[xX])$/,
  // 严格校验
  isIdCard: function (val) {
    let regexCheck = /^\d{15}$/.test(val) ||
      /^\d{18}$/.test(val) ||
      /^\d{17}[xX]$/.test(val)
    if (!regexCheck) {
      return false
    }

    if (val.length === 15) {
      // 6位地区编码，2位年，2位月，2位日，3位序号。
      // let year = val.substr(6, 2)
      let month = parseInt(val.substr(8, 2))
      let day = parseInt(val.substr(10, 2))
      if (month < 1 || month > 12) {
        return false
      }
      if (day < 1 || day > 31) {
        return false
      }
      return true
    } else if (val.length === 18) {
      // 6位地区编码，4位年，2位月，2位日，3位序号，1位校验号。
      // 年
      let year = parseInt(val.substr(6, 4))
      if (year < 1900 || year > new Date().getFullYear()) {
        return false
      }

      // 月
      let month = parseInt(val.substr(10, 2))
      if (month < 1 || month > 12) {
        return false
      }

      // 日
      let day = parseInt(val.substr(12, 2))
      if (day < 1 || day > 31) {
        return false
      }

      const ratio = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const mark = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2']
      let calculate = 0
      for (var i = 0; i < val.length - 1; i++) {
        calculate += parseInt(val[i]) * ratio[i]
      }
      let mod = calculate % 11
      return val[val.length - 1].toLowerCase() === mark[mod]
    }

    return false
  }
};

