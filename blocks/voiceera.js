'use strict';

goog.provide('Blockly.Blocks.voiceera');  // Deprecated
goog.provide('Blockly.Constants.voiceera');

goog.require('Blockly.Blocks');

Blockly.Constants.voiceera.HUE = Blockly.Msg["VOICEERA_HUE"];
Blockly.Blocks.voiceera.HUE = Blockly.Constants.voiceera.HUE;

Blockly.Blocks['ve_gettts'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/voiceera.png", 25, 20, "*"))
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
		  if (newTTSC != isTTSC) {
			var block = this.sourceBlock_;
			block.updateAt_(newTTSC);
			block.setFieldValue(value, 'ttstype');
		  }
		  return null;
		}), "ttstype")
        .appendField("音源");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.voiceera.HUE);
 this.setTooltip("合成成功返回音频文件名。合成失败返回-1。本拼图需要安装「语音时代」。\n自定义声源为「bin/VoiceDB」目录下的音源文件");
 this.setHelpUrl("");
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isTTSC = this.getFieldValue('ttstype') == "outtts";
    container.setAttribute('ttstype', isTTSC);
    return container;
  },
  domToMutation: function(xmlElement) {
    var isTTSC = (xmlElement.getAttribute('ttstype') != 'false');
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
			if (newTTSC != isTTSC) {
				var block = this.sourceBlock_;
				block.updateAt_(newTTSC);
				block.setFieldValue(value, 'ttstype');
			}
		  return null;
		}), "ttstype")
        .appendField("音源");
    } else {
      this.setTooltip("合成成功返回音频文件名。合成失败返回-1。本拼图需要安装「语音时代」。\n内置音源不需要「bin/VoiceDB」目录下含有音源文件");
	  this.appendDummyInput("ttsgroup")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outtts"],["内置","intts"]],function(value) {
		    var newTTSC = (value == 'outtts');
			if (newTTSC != isTTSC) {
				var block = this.sourceBlock_;
				block.updateAt_(newTTSC);
				block.setFieldValue(value, 'ttstype');
			}
		  return null;
		}), "ttstype")
        .appendField("音源")
        .appendField(new Blockly.FieldDropdown([["度娘","百度语音"], ["度丫丫","度丫丫"], ["糖糖","糖糖"]]), "tts");
	}
  },
   customContextMenu: function(options) {
	var name = "了解「语音时代」";
    var option = {enabled: true};
    option.text = name;
    var learnVoiceEra = function(){window.open("https://cqp.cc/t/33196");};
    option.callback = learnVoiceEra;
    options.push(option);
  }
};

Blockly.Blocks['ve_getos'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("media/voiceera.png", 25, 20, "*"))
        .appendField("语音时代_词库交互");
    this.appendValueInput("content")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("交互内容");
    this.appendValueInput("osgroup")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outos"],["内置","inos"]],function(value) {
		  var newTTSC = (value == 'outos');
		  if (newTTSC != isTTSC) {
			var block = this.sourceBlock_;
			block.updateAt_(newTTSC);
			block.setFieldValue(value, 'ostype');
		  }
		  return null;
		}), "ostype")
        .appendField("词库");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.voiceera.HUE);
 this.setTooltip("交互成功返回交互内容。交互失败返回-1。本拼图需要安装「语音时代」。\n自定义词库为「bin/VoiceOS」目录下的词库文件");
 this.setHelpUrl("");
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isTTSC = this.getFieldValue('ostype') == "outos";
    container.setAttribute('ostype', isTTSC);
    return container;
  },
  domToMutation: function(xmlElement) {
    var isTTSC = (xmlElement.getAttribute('ostype') != 'false');
    this.updateAt_(isTTSC);
  },
  updateAt_: function(isTTSC) {
    this.removeInput('osgroup');
    if (isTTSC) {
      this.setTooltip("交互成功返回交互内容。交互失败返回-1。本拼图需要安装「语音时代」。\n自定义词库为「bin/VoiceOS」目录下的词库文件");
      this.appendValueInput("osgroup")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outos"],["内置","inos"]],function(value) {
		    var newTTSC = (value == 'outos');
			if (newTTSC != isTTSC) {
				var block = this.sourceBlock_;
				block.updateAt_(newTTSC);
				block.setFieldValue(value, 'ostype');
			}
		  return null;
		}), "ostype")
        .appendField("词库");
    } else {
      this.setTooltip("交互成功返回交互内容。交互失败返回-1。本拼图需要安装「语音时代」。\n内置词库不需要「bin/VoiceOS」目录下含有词库文件");
	  this.appendDummyInput("osgroup")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["自定义","outos"],["内置","inos"]],function(value) {
		    var newTTSC = (value == 'outos');
			if (newTTSC != isTTSC) {
				var block = this.sourceBlock_;
				block.updateAt_(newTTSC);
				block.setFieldValue(value, 'ostype');
			}
		  return null;
		}), "ostype")
        .appendField("词库")
        .appendField(new Blockly.FieldDropdown([["图灵机器人","图灵机器人"], ["青云客","青云客"], ["本地词库","本地词库"]]), "os");
	}
  },
   customContextMenu: function(options) {
	var name = "了解「语音时代」";
    var option = {enabled: true};
    option.text = name;
    var learnVoiceEra = function(){window.open("https://cqp.cc/t/33196");};
    option.callback = learnVoiceEra;
    options.push(option);
  }
};