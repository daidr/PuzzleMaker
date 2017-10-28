var demoWorkspace = 
	Blockly.inject('demo_workspace',
	{media     : 'media/',
	 readOnly  : true    ,
	 scrollbars: true    ,
	 zoom:
         {controls: false,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2},
	});

function readyDemo(sel){
	var filePath = "help/demos/" + sel.attr("demofile") + ".demo";
	$.get(filePath,function(result){
		demoWorkspace.clear();
		var xml = Blockly.Xml.textToDom(doDecode(result));
		Blockly.Xml.domToWorkspace(xml, demoWorkspace);
	});
}

function addToWorkspace(){
	Code.workspace.clear();
	Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(doDecode(result)), Code.workspace);
}

readyDemo($("#demo_workspace"));