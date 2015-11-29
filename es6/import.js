
'use strict'

import {a, b, c} from "testModule.js";

import { d as test_d } from "testModule.js";

//导入其它库
import _ from "lodash";

import * as _ from "lodash";

import { each, map } from "lodash";

console.log( a() );
console.log( b() );
console.log( c() );
console.log( test_d() );


var obj = {};

export {obj as default};

import {default as obj} from "xxx.js";



