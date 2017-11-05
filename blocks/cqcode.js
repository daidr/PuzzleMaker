'use strict';

goog.provide('Blockly.Blocks.cqcode');  // Deprecated
goog.provide('Blockly.Constants.cqcode');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([{
  "type": "cqcode_at",
  "message0": "@QQ号为 %1 %2 的人，at后 %3 空格",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "QQID",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "isNoSpace",
      "options": [
        [
          "加",
          "false"
        ],
        [
          "不加",
          "true"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "%{BKY_CQCODE_HUE}",
  "tooltip": "该拼图输出CQ码字符串",
  "helpUrl": ""
}, {
	"type": "cqcode_shake",
	"message0": "窗口抖动(戳一戳)",
	"output": "String",
	"colour": "%{BKY_CQCODE_HUE}",
	"tooltip": "该拼图输出CQ码字符串",
	"helpUrl": ""
}, {
  "type": "cqcode_contact",
  "message0": "分享 %1 为 %2 %3 的名片",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "群号",
          "group"
        ],
        [
          "QQ号",
          "qq"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "number",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "%{BKY_CQCODE_HUE}",
  "tooltip": "该拼图输出CQ码字符串",
  "helpUrl": ""
}, {
	"type": "cqcode_emoji_1",
	"message0": "一部分常用Emoji代码： %1",
	"args0": [{
		"type": "field_dropdown",
		"name": "emojiid",
		"options": [
			["😀", "128512"],
			["😁", "128513"],
			["😂", "128514"],
			["😱", "128561"],
			["😒", "128530"],
			["😎", "128526"],
			["😍", "128525"],
			["🙄", "128580"],
			["🤑", "129297"],
			["😝", "128541"]
		]
	}],
	"output": "String",
	"colour": "%{BKY_CQCODE_HUE}",
	"tooltip": "该拼图输出CQ码字符串",
	"helpUrl": ""
}, {
	"type": "cqcode_emoji_2",
	"message0": "Emoji的Unicode编码： %1",
	"args0": [{
		"type": "field_input",
		"name": "emojiid",
		"text": "128512"
	}],
	"output": "String",
	"colour": "%{BKY_CQCODE_HUE}",
	"tooltip": "该拼图输出CQ码字符串",
	"helpUrl": ""
}, {
	"type": "cqcode_sface_1",
	"message0": "QQ小表情编码： %1",
	"args0": [{
		"type": "field_input",
		"name": "sfaceid",
		"text": "0"
	}],
	"output": "String",
	"colour": "%{BKY_CQCODE_HUE}",
	"tooltip": "该拼图输出CQ码字符串",
	"helpUrl": ""
}

]);