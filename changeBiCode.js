var path = require('path');
var fs=require("fs");

var projectRoot = path.resolve(__dirname, '../');

var indexData = fs.readFileSync(projectRoot+"/dist/index.html","utf-8");
var aspxData = fs.readFileSync("../Default.aspx","utf-8");
var aspxHead = aspxData.match(/^(.|\n|\r)+(?=<!DOCTYPE html>)/);

var newDefaultData = aspxHead[0] + indexData;

var biReg = /<script src="bicode.js"><\/script>/;
var htmlEnd = /<\/body><\/html>/;
var biStr = '<script src="bicode.js"></script>';

newDefaultData = newDefaultData.replace(biReg,'');
newDefaultData = newDefaultData.replace(htmlEnd,biStr + '</body></html>');

fs.writeFileSync("../Default.aspx", newDefaultData);
