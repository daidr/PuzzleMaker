'use strict';

goog.provide('Blockly.JavaScript.sysdisk');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['sysdisk_getlocalpath'] = function(block) {
  var code = "getLocalpath()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_writefile'] = function(block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filecontent = Blockly.JavaScript.valueToCode(block, 'filecontent', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "writeFile(" + value_filepath + "," + value_filecontent + ");\n";
  return code;
};

Blockly.JavaScript['sysdisk_readfile'] = function(block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "readFile(" + value_filepath + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};