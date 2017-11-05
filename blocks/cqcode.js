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
  "tooltip": "输出at指定QQ的CQ码",
  "helpUrl": ""
}, {
	"type": "cqcode_shake",
	"message0": "窗口抖动(戳一戳)",
	"output": "String",
	"colour": "%{BKY_CQCODE_HUE}",
	"tooltip": "输出抖动(戳一戳)CQ码",
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
  "tooltip": "输出名片CQ码",
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
	"tooltip": "输出emoji表情CQ码",
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
	"tooltip": "输出emoji表情CQ码",
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
	"tooltip": "输出qq表情CQ码",
	"helpUrl": ""
},
{
  "type": "cqcode_record",
  "message0": "发送语音 %1 %2 音频文件名 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "magic",
      "options": [
        [
          "添加「变声」标记",
          "true"
        ],
        [
          "不添加「变声」标记",
          "false"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "filename",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "output": "String",
  "colour": "%{BKY_CQCODE_HUE}",
  "tooltip": "输出发送语音的CQ码，「音频文件名」需存放在酷Q目录的「data\\record\\」下。",
  "helpUrl": ""
}

]);