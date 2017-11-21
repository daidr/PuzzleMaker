'use strict';

goog.provide('Blockly.JavaScript.cqfunc');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['cq_sendmsg'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (dropdown_type == "group"){
	var code = "sendGroupMsg(" + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "private"){
	var code = "sendPrivateMsg(" + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "discuss"){
	var code = "sendDiscussMsg(" + value_idnumber + "," + value_msg + ");\n"
  }
  return code;
};

Blockly.JavaScript['cq_sendlike'] = function(block) {
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "sendLike(" + value_idnumber + "," + value_times + ");\n";

  return code;
};

Blockly.JavaScript['cq_addlog'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "addLog(\"" + dropdown_type + "\"," + value_content + ");\n";
  return code;
};

Blockly.JavaScript['cq_jinyan'] = function(block) {
  var value_groupnumber = Blockly.JavaScript.valueToCode(block, 'groupnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "setJinyan(" + value_groupnumber + "," + value_idnumber + "," + value_time + ");\n";
  return code;
};

Blockly.JavaScript['cq_getgrouplist'] = function(block) {
  var code = 'getGroupList()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cq_getusername'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "GetUserName(\"" + dropdown_type + "\"," + value_number + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cq_deleteMsg'] = function(block) {
  var value_msgid = Blockly.JavaScript.valueToCode(block, 'msgid', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'deleteMsg('+ value_msgid +');\n';
  return code;
};