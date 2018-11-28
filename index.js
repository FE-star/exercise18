/**
 ** ********************************************************
 ** @file index.js
 ** @author jinxuan_lin <jinxuan_lin@kingdee.com>
 ** @date 2018-11-27 15:44:40
 ** @last_modified_by jinxuan_lin <jinxuan_lin@kingdee.com>
 ** @last_modified_date 2018-11-28 14:18:09
 ** @copyright (c) 2018 @yfe/homework7
 ** ********************************************************
 */

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
  email: /^\w+@[0-9a-zA-Z]+\.[a-z]{2,6}$/,
  url: /^https?\:\/\/[a-zA-Z.]+$/,
  ipv4: /^(?:(?:[1-9]?\d|1\d{2}|2[0-5]{2})\.?){4}$/, // 32位二进制转换成4段十进制，每段范围都是0~255
  idcard: /^\d{6}(?:19\d{2}|20(?:0\d|1[0-8]))(?:0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9X]$/
};
