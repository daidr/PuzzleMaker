'use strict';

goog.provide('Blockly.JavaScript.cqevent');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['cqevent_allevent'] = function(block) {
  var value_eventtypeinput = Blockly.JavaScript.valueToCode(block, 'eventTypeInput', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  var dropdown_dispose = block.getFieldValue('dispose');
  var code = "function " + value_eventtypeinput + "(event){\nvar eventarray = event.split('|,|,|,|,|');\n" + statements_action;
  code = code + "return \"" + dropdown_dispose + "\";" + "\n}\n";
  return code;
};

Blockly.JavaScript['event_cqsys'] = function(block) {var a = block.getFieldValue("event_type");return [a, Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['fromgroup_group'] = function(b){var a="eventarray[1]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['from_person'] = function(b){var a="eventarray[2]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['from_time'] = function(b){var a="eventarray[0]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['from_msg'] = function(b){var a="eventarray[3]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['fromdiscuss_discuss'] = function(b){var a="eventarray[1]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['msg_id'] = function(b){var a="eventarray[4]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};

Blockly.JavaScript['subtype_addgroup'] = function(b){var a="eventarray[0]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['fromtime_addgroup'] = function(b){var a="eventarray[1]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['fromgroup_addgroup'] = function(b){var a="eventarray[2]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['fromqq_addgroup'] = function(b){var a="eventarray[3]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['responseFlag_addgroup'] = function(b){var a="eventarray[4]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['msg_addgroup'] = function(b){var a="eventarray[5]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};