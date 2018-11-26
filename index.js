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
  // the regex used in type=”email” from W3C
  email: /^[a-zA-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/,
  // RFC 2396, 既不考虑port，也不考虑trasport
  // The Internet standards (Requests for Comments) for protocols mandate that component hostname labels may contain only the ASCII letters 'a' through 'z' (in a case-insensitive manner), the digits '0' through '9', and the minus sign ('-').
  url: /^[a-zA-Z][a-zA-Z0-9+-.]*:\/\/[a-zA-Z0-9-.]+$/,
  ipv4: /^(([01]?[0-9]?[0-9]|2[0-5][0-5]).){3}([01]?[0-9]?[0-9]|2[0-5][0-5])$/,
  // 国标【GB 11643-1999】
  idcard: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])([0-2][1-9]|10|20|30|31)\d{3}[0-9Xx]$/,
};
