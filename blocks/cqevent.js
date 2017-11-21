'use strict';

goog.provide('Blockly.Blocks.cqevent');  // Deprecated
goog.provide('Blockly.Constants.cqevent');

goog.require('Blockly.Blocks');


Blockly.defineBlocksWithJsonArray([{
  "type": "cqevent_allevent",
  "lastDummyAlign0": "RIGHT",
  "message0": "创建CQ事件 响应 %1 %2 将消息 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "eventTypeInput",
      "check": "eventType"
    },
    {
      "type": "input_statement",
      "name": "action",
      "check": "Action"
    },
    {
      "type": "field_dropdown",
      "name": "dispose",
      "options": [
        [
          "拦截",
          "1"
        ],
        [
          "忽略",
          "0"
        ]
      ]
    }
  ],
  "colour": "%{BKY_CQEVENT_HUE}",
  "tooltip": "酷Q收到群消息会调用本函数",
  "helpUrl": ""
}
]);


//申明动态变量

Blockly.Blocks.fromgroup_group = {
	init: function() {
		this.appendDummyInput().appendField("消息来源的群");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群消息事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_GROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQGroupMsg"]
};

Blockly.Blocks.fromdiscuss_discuss = {
	init: function() {
		this.appendDummyInput().appendField("消息来源的讨论组");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q讨论组消息事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_DISCUSS_WARNING);
		}
	},
	EVENT_TYPES: ["CQDiscussMsg"]
};

Blockly.Blocks.from_person = {
	init: function() {
		this.appendDummyInput().appendField("发送消息的人");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q消息事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_MSG_WARNING);
		}
	},
	EVENT_TYPES: ["CQGroupMsg", "CQFriendMsg", "CQDiscussMsg"]
};

Blockly.Blocks.from_time = {
	init: function() {
		this.appendDummyInput().appendField("发送消息的时间(时间戳)");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q消息事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_MSG_WARNING);
		}
	},
	EVENT_TYPES: ["CQGroupMsg", "CQFriendMsg", "CQDiscussMsg"]
};

Blockly.Blocks.msg_id = {
	init: function() {
		this.appendDummyInput().appendField("消息的唯一ID");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q消息事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_MSG_WARNING);
		}
	},
	EVENT_TYPES: ["CQGroupMsg", "CQFriendMsg", "CQDiscussMsg"]
};

Blockly.Blocks.from_msg = {
	init: function() {
		this.appendDummyInput().appendField("收到的消息内容");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q消息事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_MSG_WARNING);
		}
	},
	EVENT_TYPES: ["CQGroupMsg", "CQFriendMsg", "CQDiscussMsg"]
};


//群添加事件的参数拼图申明

Blockly.Blocks.subtype_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求的类型");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群添加事件内部（1/他人申请入群 2/自己受邀入群）")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQAddGroup"]
};

Blockly.Blocks.fromtime_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("发送消息的时间(时间戳)");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQAddGroup"]
};

Blockly.Blocks.fromgroup_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求来源的群");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQAddGroup"]
};

Blockly.Blocks.fromqq_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求来源的QQ");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQAddGroup"]
};

Blockly.Blocks.responseFlag_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求的唯一标识");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQAddGroup"]
};

Blockly.Blocks.msg_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求的附加消息");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在酷Q群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["CQAddGroup"]
};



Blockly.Blocks.event_cqsys = {
	init: function() {
		this.appendDummyInput().appendField("酷Q").appendField(new Blockly.FieldDropdown([
			["收到群消息", "CQGroupMsg"],
			["收到私聊消息", "CQFriendMsg"],
			["收到讨论组消息", "CQDiscussMsg"],
			["收到群添加事件", "CQAddGroup"]
		]), "event_type");
		this.setOutput(true, "eventType");
		this.setColour(210);
		this.setTooltip("酷Q相关的事件");
	}
};