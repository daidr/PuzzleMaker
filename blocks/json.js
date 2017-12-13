'use strict';

goog.provide('Blockly.Blocks.json');  // Deprecated
goog.provide('Blockly.Constants.json');

goog.require('Blockly.Blocks');

Blockly.Constants.json.HUE = Blockly.Msg["JSON_HUE"];
Blockly.Blocks.json.HUE = Blockly.Constants.json.HUE;

Blockly.Blocks.json_getKey = {
	init: function() {
		this.appendDummyInput().appendField("取出json");
		this.appendValueInput("VAR");
		this.appendValueInput("propertyName").setCheck("String").appendField("中");
		this.appendDummyInput().appendField("的值");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("获取键值");
		this.setHelpUrl(null);
		this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
	}
};

Blockly.Blocks.json_deleteKey = {
	init: function() {
		this.appendDummyInput().appendField("删除json");
		this.appendValueInput("VAR");
		this.appendValueInput("propertyName").setCheck("String").appendField("中  键值（key）为");
		this.appendDummyInput().appendField("的记录");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("删除键值");
		this.setHelpUrl(null);
		this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
	}
};

Blockly.Blocks.json_setKey = {
	init: function() {
		this.appendDummyInput().appendField("设置json");
		this.appendValueInput("VAR");
		this.appendValueInput("propertyName").setCheck("String").appendField("中");
		this.appendDummyInput().appendField("的值");
		this.appendValueInput("valueName").appendField("等于");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("设置键值");
		this.setHelpUrl(null);
		this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
	}
};


Blockly.Blocks.json_getLength = {
	init: function() {
		this.appendValueInput("NAME").setCheck("json").appendField("json");
		this.appendDummyInput().appendField("的长度");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("返回json的长度");
		this.setHelpUrl(null)
	}
};

Blockly.Blocks.json_createJson = {
	init: function() {
		this.appendDummyInput().appendField("创建一个空json");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("创建一个空json");
		this.setHelpUrl(null)
	}
};

Blockly.Blocks.json_stringify = {
	init: function() {
		this.appendValueInput("text").setCheck("Array").appendField("将js对象");
		this.appendDummyInput().appendField("反解析为json文本");
		this.setOutput(true, "String");
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("将js对象反解析为json文本");
		this.setHelpUrl(null)
	}
};

Blockly.Blocks.json_parse = {
	init: function() {
		this.appendValueInput("content").setCheck("String").appendField("将JSON");
		this.appendDummyInput().appendField("解析为js对象");
		this.setOutput(true);
		this.setColour(Blockly.Blocks.json.HUE);
		this.setTooltip("将JSON解析为js对象");
		this.setHelpUrl(null)
	}
};
