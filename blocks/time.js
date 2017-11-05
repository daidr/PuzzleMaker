'use strict';

goog.provide('Blockly.Blocks.time');  // Deprecated
goog.provide('Blockly.Constants.time');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([{
  "type": "cq_timestamptostr",
  "message0": "10位时间戳转时间 %1 时间戳 %2",
  "args0": [
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "timestamp",
      "check": [
        "Number",
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "将10位数的时间戳转为文本。输出格式为“2017-11-01 11:11:11”",
  "helpUrl": ""
}
]);