'use strict'

var test = require('tape')
var access = require('./')

test(function (t) {
  t.equal(access('window', 'foo'), "window['foo']")
  t.equal(access('window', 'foo-bar'), "window['foo-bar']")
  t.equal(access('window', 'foo.bar'), "window['foo']['bar']")
  t.equal(access('window', 'foo\\.bar'), "window['foo.bar']")
  t.end()
})
