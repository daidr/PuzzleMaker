'use strict';

goog.provide('Blockly.JavaScript.json');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.json_createJson = function(b) {
	var a = "{}";
	return [a, Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.json_getLength = function(c) {
	var a = Blockly.JavaScript.valueToCode(c, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
	var b = "Object.keys(" + a + ").length";
	return [b, Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.json_setKey = function(e) {
	var d = Blockly.JavaScript.valueToCode(e, "VAR", Blockly.JavaScript.ORDER_ATOMIC);
	var a = Blockly.JavaScript.valueToCode(e, "propertyName", Blockly.JavaScript.ORDER_ATOMIC);
	var c = Blockly.JavaScript.valueToCode(e, "valueName", Blockly.JavaScript.ORDER_ATOMIC);
	var b = d + "[" + a + "] = " + c + ";\n";
	return b
};

Blockly.JavaScript.json_deleteKey = function(d) {
	var c = Blockly.JavaScript.valueToCode(d, "VAR", Blockly.JavaScript.ORDER_ATOMIC);
	var a = Blockly.JavaScript.valueToCode(d, "propertyName", Blockly.JavaScript.ORDER_ATOMIC);
	var b = "delete " + c + "[" + a + "];\n";
	return b
};

Blockly.JavaScript.json_getKey = function(d) {
	var c = Blockly.JavaScript.valueToCode(d, "VAR", Blockly.JavaScript.ORDER_ATOMIC);
	var a = Blockly.JavaScript.valueToCode(d, "propertyName", Blockly.JavaScript.ORDER_ATOMIC);
	var b = c + "[" + a + "]";
	return [b, Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.json_stringify = function(d) {
	var c = Blockly.JavaScript.valueToCode(d, "text", Blockly.JavaScript.ORDER_ATOMIC);
	if (c == "" || c == null) {
		c = "[]"
	}
	var b = "JSON.stringify(" + c + ")";
	return [b, Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript.json_parse = function(b) {
	var c = Blockly.JavaScript.valueToCode(b, "content", Blockly.JavaScript.ORDER_ATOMIC);
	var a = "JSON.parse(" + c + ")";
	return [a, Blockly.JavaScript.ORDER_ATOMIC]
};