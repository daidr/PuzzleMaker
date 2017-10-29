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
	var demoname = sel.attr("demofile");
	sel.after("<div class=\"demo_workspace_copy\" demofile=\"" + demoname + "\"><p>导入到编辑器</p></div>")
	var filePath = "help/demos/" + demoname + ".demo";
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
$(".demo_workspace_copy").click(function (){
	var demoname = $(this).attr("demofile");
	var filePath = "help/demos/" + demoname + ".demo";
	cusnotify('info','mini',true,4000,MSG['addingDemo'].replace('%1', MSG['demo_' + demoname]),false);
	$.get(filePath,function(result){
		Code.workspace.clear();
		var xml = Blockly.Xml.textToDom(doDecode(result));
		Blockly.Xml.domToWorkspace(xml, Code.workspace);
		cusnotify('success','mini',true,4000,MSG['addDemoSuccessful'].replace('%1', MSG['demo_' + demoname]),false);
	});
	
});