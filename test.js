'use strict'

var test = require('tape')
var access = require('./')

test('accessors', function (t) {
  t.equal(access('window', 'foo'), "window['foo']")
  t.equal(access('window', 'foo-bar'), "window['foo-bar']")
  t.equal(access('window', 'foo.bar'), "window['foo']['bar']")
  t.equal(access('window', 'foo\\.bar'), "window['foo.bar']")
  t.end()
})

test('calls', function (t) {
  t.equal(access('window', 'foo()'), "window['foo']()")
  t.equal(access('window', 'foo(bar)'), "window['foo'](bar)")
  t.equal(access('window', "foo('bar')"), "window['foo']('bar')")
  t.equal(access('window', 'foo\()'), "window['foo()']")
  t.equal(access('window', 'foo(bar).baz'), "window['foo'](bar)['baz']")
  t.end()
})
