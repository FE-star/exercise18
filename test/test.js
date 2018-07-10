/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: zelda.zhangze
 * @Last Modified time: 2018-07-10 13:30:54
 */

const assert = require('assert');
const RegExps = require('..');

describe('正则表达式', () => {

  it('匹配手机号码', () => {
    [
      '13800000000',
      '14712341234',
      '15012341234',
    ].forEach((mobile) => {
      assert.ok(RegExps.mobile.test(mobile));
    });
    [
      '23800000000',
      '1471234l234',
      '147000000000',
      '150-123-41234',
      '150-1234-1234',
      '13491231234',
      ''
    ].forEach((mobile) => {
      assert.ok(!RegExps.mobile.test(mobile));
    });
  });

  it('匹配 QQ 号', () => {
    [
      '10000',
      '987654321',
      '12345678900',
    ].forEach((qq) => {
      assert.ok(RegExps.qq.test(qq));
    });
    [
      '1000',
      '0987654321',
      '123456789000',
      ''
    ].forEach((qq) => {
      assert.ok(!RegExps.qq.test(qq));
    });
  });

  it('匹配数字', () => {
    [
      '5',
      '+5',
      '-5',
      '.5',
      '0.5',
      '1.5',
      '-.5',
      '+.5',
      '10000',
      '10000.',
      '100.00',
    ].forEach((number) => {
      assert.ok(RegExps.number.test(number));
    });
    [
      '.5.5',
      '1.5.5',
      '',
      '.',
      '+',
      '-',
      '+.',
      '-.'
    ].forEach((number) => {
      assert.ok(!RegExps.number.test(number));
    });
  });

  it('匹配邮箱', () => {
    [
      '12345@qq.com',
      'a_z@qq.com'
    ].forEach((value) => {
      assert.ok(RegExps.email.test(value));
    });
    [
      '12345#qq.com',
      '12',
      '@1.com',
      '',
      'a-z@qq.com',
      '-12@qq.com'
    ].forEach((value) => {
      assert.ok(!RegExps.email.test(value));
    });
  });

  it('匹配 url', () => {
    [
      'https://www.qq.com',
      'qq.com'
    ].forEach((value) => {
      assert.ok(RegExps.url.test(value));
    });
    [
      'http//www.qq.com',
      ''
    ].forEach((value) => {
      assert.ok(!RegExps.url.test(value));
    });
  });

  it('匹配 IPv4', () => {
    [
      '127.0.0.1',
    ].forEach((value) => {
      assert.ok(RegExps.ipv4.test(value));
    });
    [
      '256.0.0.0',
      ''
    ].forEach((value) => {
      assert.ok(!RegExps.ipv4.test(value));
    });
  });

  it('匹配身份证号码', () => {
    [
      '350301198906180060',
      '350301890618006' // 15位
    ].forEach((value) => {
      assert.ok(RegExps.idcard.test(value));
    });
    [
      '350301298906180060',
      '350301298906310060',
      '35030129890618006Y',
      '3503012989061800666',
      '350301199331311234',
      ''
    ].forEach((value) => {
      assert.ok(!RegExps.idcard.test(value));
    });
  });

});
