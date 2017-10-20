'use strict';

goog.provide('Blockly.JavaScript.cqfunc');

goog.require('Blockly.JavaScript');

Blockly.defineBlocksWithJsonArray([
{
  "type": "cq_sendmsg",
  "message0": "发送 %1 消息 %2 号码 %3 消息内容 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "群",
          "group"
        ],
        [
          "私聊",
          "private"
        ],
        [
          "讨论组",
          "discuss"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "idnumber",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "msg",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_CQFUNC_HUE}",
  "tooltip": "发送各类酷Q消息",
  "helpUrl": ""
}
,
{
  "type": "cq_sendlike",
  "message0": "发送赞 %1 号码 %2 次数 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "idnumber",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "times",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_CQFUNC_HUE}",
  "tooltip": "向指定QQ发送赞，最多10次",
  "helpUrl": ""
}
,
{
  "type": "cq_addlog",
  "message0": "输出 %1 日志 %2 日志内容 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "信息",
          "info"
        ],
        [
          "调试",
          "debug"
        ],
        [
          "警告",
          "warning"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "content",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_CQFUNC_HUE}",
  "tooltip": "输出各类型的日志，方便调试",
  "helpUrl": ""
}
]);