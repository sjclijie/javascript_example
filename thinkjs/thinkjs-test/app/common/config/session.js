'use strict';

/**
 * session configs
 */exports.__esModule = true;exports['default'] = 
{ 
  name: 'thinkjs', 
  type: 'file', 
  secret: '7$Y(32H4', 
  timeout: 24 * 3600, 
  cookie: { // cookie options
    length: 32, 
    httponly: true }, 

  adapter: { 
    file: { 
      path: think.getPath('common', 'runtime') + '/session' } } };module.exports = exports['default'];