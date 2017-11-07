'use strict';

goog.provide('Blockly.JavaScript.voiceera');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['ve_gettts'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_ttstype = block.getFieldValue('ttstype');

  if(dropdown_ttstype == "intts"){
	var dropdown_tts = block.getFieldValue('tts');
	var code = 'VE_GetTTS('+value_content+',\''+dropdown_tts+'\')';
  } else {
    var value_ttsgroup = Blockly.JavaScript.valueToCode(block, 'ttsgroup', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'VE_GetTTS('+value_content+','+value_ttsgroup+')';
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ve_getos'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_ostype = block.getFieldValue('ostype');

  if(dropdown_ostype == "inos"){
	var dropdown_os = block.getFieldValue('os');
	var code = 'VE_GetOS('+value_content+',\''+dropdown_os+'\')';
  } else {
    var value_osgroup = Blockly.JavaScript.valueToCode(block, 'ttsos', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'VE_GetOS('+value_content+','+value_osgroup+')';
  }

  return [code, Blockly.JavaScript.ORDER_NONE];
};