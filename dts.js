/**
 * antd-extra dts
 * Created by pengj on 2018-5-3.
 */
'use strict';
const rttd = require("react-to-typescript-definitions");
const fs = require("fs");



const path = __dirname +'/src/components/Form/FormLayout';
const str = rttd.generateFromFile('antd-e', path+'.js');
fs.writeFileSync(path+'.d.ts',str)
console.log(str);