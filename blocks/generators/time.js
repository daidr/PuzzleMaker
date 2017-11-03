'use strict';

goog.provide('Blockly.JavaScript.time');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['cq_timestamptostr'] = function(block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'timestampToStr('+value_timestamp+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
