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