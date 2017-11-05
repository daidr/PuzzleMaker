'use strict';
var thisBlock,isTTSC;

goog.provide('Blockly.Blocks.voiceera');  // Deprecated
goog.provide('Blockly.Constants.voiceera');

goog.require('Blockly.Blocks');

Blockly.Constants.voiceera.HUE = Blockly.Msg["VOICEERA_HUE"];
Blockly.Blocks.voiceera.HUE = Blockly.Constants.voiceera.HUE;

Blockly.Blocks['ve_gettts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("语音时代_语音合成");
    this.appendValueInput("content")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("合成内容");
    this.appendValueInput("ttsgroup")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outtts"],["内置","intts"]],function(value) {
		  var newTTSC = (value == 'outtts');
			var block = this.sourceBlock_;
			block.updateAt_(newTTSC);
			block.setFieldValue(value, 'ttstype');
		  return null;
		}), "ttstype")
        .appendField("音源");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.voiceera.HUE);
 this.setTooltip("合成成功返回音频文件名。合成失败返回-1。本拼图需要安装「语音时代」。\n自定义声源为「bin/VoiceDB」目录下的音源文件");
 this.setHelpUrl("");
 thisBlock = this;
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    isTTSC = thisBlock.getFieldValue('ttstype') == 'outtts';
    container.setAttribute('ttstype', isTTSC);
	if(isTTSC == false) {
	this.updateAt_(isTTSC);
	}
    return container;
  },
  domToMutation: function(xmlElement) {
    isTTSC = (xmlElement.getAttribute('ttstype') != 'outtts');
    this.updateAt_(isTTSC);
  },
  updateAt_: function(isTTSC) {
    this.removeInput('ttsgroup');
    if (isTTSC) {
      this.setTooltip("合成成功返回音频文件名。合成失败返回-1。本拼图需要安装「语音时代」。\n自定义声源为「bin/VoiceDB」目录下的音源文件");
      this.appendValueInput("ttsgroup")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outtts"],["内置","intts"]],function(value) {
		  var newTTSC = (value == 'outtts');
			var block = this.sourceBlock_;
			block.updateAt_(newTTSC);
			block.setFieldValue('outtts', 'ttstype');
		  return null;
		}), "ttstype")
        .appendField("音源");
    } else {
      this.setTooltip("合成成功返回音频文件名。合成失败返回-1。本拼图需要安装「语音时代」。\n内置音源不需要「bin/VoiceDB」目录下含有音源文件");
	  this.appendDummyInput("ttsgroup")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outtts"],["内置","intts"]],function(value) {
		  var newTTSC = (value == 'outtts');
			var block = this.sourceBlock_;
			block.updateAt_(newTTSC);
			block.setFieldValue('intts', 'ttstype');
		  return null;
		}), "ttstype")
        .appendField("音源")
        .appendField(new Blockly.FieldDropdown([["度娘","百度语音"], ["度丫丫","度丫丫"], ["糖糖","糖糖"]]), "tts");
	}
  }
};