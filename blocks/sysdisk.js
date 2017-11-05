'use strict';

goog.provide('Blockly.Blocks.sysdisk');  // Deprecated
goog.provide('Blockly.Constants.sysdisk');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([
{
  "type": "sysdisk_getlocalpath",
  "message0": "获取酷Q运行目录",
  "output": null,
  "colour": "%{BKY_SYSDISK_HUE}",
  "tooltip": "输出酷Q目录，末尾不带 /",
  "helpUrl": ""
}
,
{
  "type": "sysdisk_writefile",
  "message0": "磁盘_写文件 %1 完整路径 %2 文件内容 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "filepath",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "filecontent",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SYSDISK_HUE}",
  "tooltip": "将文本写入本地文件",
  "helpUrl": ""
}
,
{
  "type": "sysdisk_readfile",
  "message0": "磁盘_读文件 %1 完整路径 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "filepath",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": "%{BKY_SYSDISK_HUE}",
  "tooltip": "从本地读取文件内容",
  "helpUrl": ""
}
]);