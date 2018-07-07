/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 22:48:51
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
    ].forEach((number) => {
      assert.ok(!RegExps.number.test(number));
    });
  });

  it('匹配邮箱', () => {
    // 用例来自https://en.wikipedia.org/wiki/Email_address
    [
      '12345@qq.com',
      'simple@example.com',
      'very.common@example.com',
      'disposable.style.email.with+symbol@example.com',
      'other.email-with-hyphen@example.com',
      'fully-qualified-domain@example.com',
      'user.name+tag+sorting@example.com',
      'x@example.com',
      '\"very.(),:;<>[]\\\".VERY.\\\"very@\\\\ \\\"very\\\".unusual"@strange.example.com',
      'example-indeed@strange-example.com',
      'admin@mailserver1',
      '#!$%&\'*+-/=?^_`{}|~@example.org',
      '\"()<>[]:,;@\\\\\\\"!#$%&\'-/=?^_`{}| ~.a\"@example.org',
      'example@s.example',
      '\" \"@example.org'
    ].forEach((value) => {
      assert.ok(RegExps.email.test(value));
    });
    [
      '12345#qq.com',
      'Abc.example.com',
      'A@b@c@example.com',
      'a\"b(c)d,e:f;g<h>i[j\k]l@example.com',
      'just"not"right@example.com',
      'this is"not\\allowed@example.com',
      'this\\ still\\\"not\\\\allowed@example.com',
      '1234567890123456789012345678901234567890123456789012345678901234+x@example.com',
      'john.doe@example..com'
    ].forEach((value) => {
      assert.ok(!RegExps.email.test(value));
    });
  });

  it('匹配 url', () => {
    [
      'https://www.qq.com',
      'http://www.myownpersonaldomain.org/2008/category/name-of-blog-post/',
      'http://examplepetstore.com/dogs/food.php',
    ].forEach((value) => {
      assert.ok(RegExps.url.test(value));
    });
    [
      'http//www.qq.com',
      'http:/www.qq.com',
      'http://qqcom',
      'ahttp://qqcom'
    ].forEach((value) => {
      assert.ok(!RegExps.url.test(value));
    });
  });

  it('匹配 IPv4', () => {
    [
      '127.0.0.1',
      '0.0.0.0',
      '27.0.0.1'
    ].forEach((value) => {
      assert.ok(RegExps.ipv4.test(value));
    });
    [
      '256.0.0.0',
      '256.256.0.1',
      '256.256.256.256',
      '.256.256.256',
      '256.256.256',
      'a255.255.255.255'
    ].forEach((value) => {
      assert.ok(!RegExps.ipv4.test(value));
    });
  });

  it('匹配身份证号码', () => {
    [
      '350301198906180060',
      '33112119750227704X',
      '13018519910629801X',
      '141029199211129054',
      '120107198311032274',
      '110200199311299431',
      '130428198204220421',
      '640201198612122547',
    ].forEach((value) => {
      assert.ok(RegExps.idcard.test(value));
    });
    [
      '350301298906180060',
      '350301298906310060',
      '35030129890618006Y',
      '3503012989061800666',
    ].forEach((value) => {
      assert.ok(!RegExps.idcard.test(value));
    });
  });

});
