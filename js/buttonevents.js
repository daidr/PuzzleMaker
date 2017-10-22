var isDocOpen = 0,thepid = "temp";
function createAndDownloadFile(fileName, content) {
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
}

function cusnotify(type,size,icon,delay,msg,closebtn){
	Lobibox.notify(type, {
		size: size,
		icon: icon,
		delay: delay,
		msg: msg,
		closeButton:closebtn
	});
}
$("switchButton").click(function(){
	cusnotify('info','mini',true,2500,"开发中，敬请期待",false)
});


$("#downloadButton").click(function(){
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		cusnotify('warning','mini',true,2500,MSG['WorkspaceIsEmpty'],false);
		_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "失败", "downloadButton"]);
		return;
	}
	//var desxml = des("a", xmlcontent, 1, 0);
	var desxml = xmlcontent;
	Lobibox.prompt('text', {
		title: MSG['DownloadFileTitle'],
		attrs: {
			placeholder: 'MyCqPlugin'
		},
		buttons: {
			ok: {
				text: '完成',
				closeOnClick: true
			},
			cancel: {
				text: '取消',
				closeOnClick: true
			}
		},
		callback: function(lobibox, type) {
			var btnType;
			if (type === 'ok') {
				if(lobibox.$input[0].value == ""){
					var randomfilename = Math.random().toString(36).substr(2);
					createAndDownloadFile(randomfilename + ".xml",desxml);
					cusnotify('success','mini',true,5000,MSG['DownloadFileSuccessful'] + randomfilename,false);
					_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "成功-" +randomfilename + ".xml", "downloadButton"]);
				} else {
					createAndDownloadFile(lobibox.$input[0].value + ".xml",desxml);
					cusnotify('success','mini',true,5000,MSG['DownloadFileSuccessful'] + lobibox.$input[0].value,false);
					_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "成功-" + lobibox.$input[0].value + ".xml", "downloadButton"]);
				}
			} else if (type === 'cancel') {
				cusnotify('info','mini',true,2000,MSG['OperatingCancel'],false);
				_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "取消", "downloadButton"]);
			}
		}
	});
	//createAndDownloadFile(Math.random().toString(36).substr(2) + ".xml",desxml);
	//解密：des ("a", desxml, 0)
});

$('#loadButton').click(function() {
   $('#loadcqwpk').click();
   _czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr,"按钮按下", "loadButton"]);
});

$("#loadcqwpk").change(function(){
	var objFile = document.getElementById("loadcqwpk");
	console.log(objFile.files[0].size); // 文件字节数
	var files = $('#loadcqwpk').prop('files');//获取到文件列表
	if(files.length == 0){
		 
	}else{
		var reader = new FileReader();//新建一个FileReader
		reader.readAsText(files[0], "UTF-8");//读取文件 
		reader.onload = function(evt){ //读取完文件之后会回来这里
			var fileString = evt.target.result; // 读取文件内容
			var fileLength = objFile.files[0].size;
			if (fileLength > 900000){
				if (fileLength < 1200000){
					cusnotify('warning','mini',true,5000,MSG['LoadFileWarning'].replace('%1', fileLength),false);
					_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "文件过大", "loadButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['LoadFileError'].replace('%1', fileLength),false);
					_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "文件过大(超大)", "loadButton"]);
				}
			}
			Code.workspace.clear();
			Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(fileString), Code.workspace);
			if (Code.workspace.getAllBlocks().length < 1000){
				cusnotify('success','mini',true,3000,MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length),false);
				_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "成功", "loadButton"]);
			} else if (Code.workspace.getAllBlocks().length > 1000){
				if (Code.workspace.getAllBlocks().length < 1500) {
					cusnotify('warning','mini',true,5000,MSG['AllPuzzleWarning'].replace('%1', Code.workspace.getAllBlocks().length),false);
					_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "拼图过多", "loadButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['AllPuzzleError'].replace('%1', Code.workspace.getAllBlocks().length),false);
					_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "拼图过多(超多)", "loadButton"]);
				}
			}
		}
	}
});

$('#addButton').click(function() {
   $('#addcqwpk').click();
   _czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"按钮按下", "addButton"]);
});

$("#addcqwpk").change(function(){
	var objFile = document.getElementById("addcqwpk");
	console.log(objFile.files[0].size); // 文件字节数
	var files = $('#addcqwpk').prop('files');//获取到文件列表
	if(files.length == 0){
		 
	}else{
		var reader = new FileReader();//新建一个FileReader
		reader.readAsText(files[0], "UTF-8");//读取文件 
		reader.onload = function(evt){ //读取完文件之后会回来这里
			var fileString = evt.target.result; // 读取文件内容
			var fileLength = objFile.files[0].size;
			if (fileLength > 900000){
				if (fileLength < 1200000){
					cusnotify('warning','mini',true,5000,MSG['LoadFileWarning'].replace('%1', fileLength),false);
					_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"文件过大", "addButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['LoadFileError'].replace('%1', fileLength),false);
					_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"文件过大(超大)", "addButton"]);
				}
			}
			Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(fileString), Code.workspace);
			if (Code.workspace.getAllBlocks().length < 1000){
				cusnotify('success','mini',true,3000,MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length),false);
				_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"成功", "addButton"]);
			} else if (Code.workspace.getAllBlocks().length > 1000){
				if (Code.workspace.getAllBlocks().length < 1500) {
					cusnotify('warning','mini',true,5000,MSG['AllPuzzleWarning'].replace('%1', Code.workspace.getAllBlocks().length),false);
					_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"拼图过多", "addButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['AllPuzzleError'].replace('%1', Code.workspace.getAllBlocks().length),false);
					_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"拼图过多(超多)", "addButton"]);
				}
			}
		}
	}
});

$('#temporaryButton').click(function() {
   var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		cusnotify('warning','mini',true,2500,MSG['WorkspaceIsEmpty'],false);
		_czc.push(["_trackEvent", "菜单", "缓存拼图", user.idstr, "失败", "temporaryButton"]);
		return;
	} else {
		//var desxml = des("a", xmlcontent, 1, 0);
		var desxml = xmlcontent;
		window.localStorage.setItem("puzzleTemporary",desxml);
		cusnotify('success','mini',true,3000,MSG['SaveTemporarySuccessful'].replace('%1', desxml.replace(/[^\x00-\xff]/gi, "--").length),false);
		_czc.push(["_trackEvent", "菜单", "缓存拼图", user.idstr, "成功", "temporaryButton"]);
	}
});

function autoSave(){
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		return;
	} else {
		//var desxml = des("a", xmlcontent, 1, 0);
		var desxml = xmlcontent;
		window.localStorage.setItem("puzzleTemporary",desxml);
		cusnotify('success','mini',true,5000,MSG['AutoSaveTemporarySuccessful'].replace('%1', desxml.replace(/[^\x00-\xff]/gi, "--").length),false);
	}
}

function readTemporary(){
	var xmlcontent = window.localStorage.getItem("puzzleTemporary");
	if(xmlcontent == null) {
		return;
	} else {
		//var desxml = des ("a", xmlcontent, 0);
		var desxml = xmlcontent;
		Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(desxml), Code.workspace);
		cusnotify('success','mini',true,3000,MSG['ReadTemporarySuccessful'].replace('%1', Code.workspace.getAllBlocks().length),false);
	}
}

$(document).ready(function(){
	loadHelp();
	$("#content_doc").mCustomScrollbar({
		theme:"dark",autoHideScrollbar:true
	});
	setTimeout("readTemporary();",500);
	$(".projectid").change(function(){
		var pid = $(".projectid").val();
		if (pid == "temp"){
			Code.workspace.clear();
			readTemporary();
			return;
		}

	});
	_czc.push(["_trackEvent", "页面", "被打开", "","", ""]);
});


//window.setInterval("autoSave()",60000);

$('#docButton').click(function() {
	
   if(isDocOpen == 0) {
	isDocOpen = 1;
	$("#content_blocks").animate({width:"70%"});
	$("#content_doc").animate({width:"30%"});
	setTimeout("SVGResizeFun()",400);
	setTimeout("DOCINResizeFun()",400);
   } else {
	isDocOpen = 0;
	$("#content_blocks").animate({width:"100%"});
	$("#content_doc").animate({width:"0px"});
	setTimeout("SVGResizeFun()",400);
   }
   _czc.push(["_trackEvent", "菜单", "帮助文档", "被单击",user.idstr, "docButton"]);
});

function SVGResizeFun(){
	Blockly.svgResize(Code.workspace);
}
function DOCINResizeFun(){
	$("#content_doc_in").css("width",$("#content_doc").width()+"px")
}
$("#content_blocks").resize(function(){
	Blockly.svgResize(Code.workspace);
});

function loadHelp(){
	$("#content_doc_in").load("help/index.html",function(){
		$('#content_doc_in').animate({opacity:'1'},200);
		$(".linklist").click(function(){
			$("#content_doc_in").animate({opacity:'0'},200);
			var docpage = $(this).attr("docpage");
			setTimeout(function(){loadhelp2(docpage);},210);
		});
	});
}

function loadhelp2(page){
	console.log(page)
	$("#content_doc_in").load("help/pages/" + page + ".html",function(){
		$('#content_doc_in').animate({opacity:'1'},200);
		$(".docback").click(function(){
			$("#content_doc_in").animate({opacity:'0'},200);
			setTimeout("loadHelp();",210);
		});
	});
}

$(".score").click(function(){
	cusnotify('info','mini',true,4000,'积分机制还在策划当中...<br/><br/>你可以通过 捐助 获得积分',false);
});

$("#saveButton").click(function(){
	if(WB2.checkLogin()){
		//登录
		if (thepid == "temp"){cusnotify('info','mini',true,4000,MSG['ChooseFirst'],false);return;}
		var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
		var codecontent = Blockly.JavaScript.workspaceToCode(Code.workspace);
		if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
			cusnotify('error','mini',true,3000,MSG['WorkspaceIsEmpty'],false);
			return;
		} else {
			if (checkCode() == false){
				return;
			}
			var basexml = doEncode(xmlcontent);
			var basecode = doEncode(codecontent);
			cusnotify('info','mini',true,3000,MSG['Uploading'],false);
			setCookie("cqpm_uid",user.idstr,0.0000579);
			$.post(serverpath + "upcode.php",{code:basecode,style:basexml,uid:user.idstr,pid:thepid},function(result){
				if(result == "ok"){
					cusnotify('success','mini',true,0,MSG['UploadSuccessful'].replace('%1', user.idstr),false);
					_czc.push(["_trackEvent", "菜单", "上传代码", user.idstr,"槽位"+thepid, "saveButton"]);
				} else if(result == "error"){
					cusnotify('error','mini',true,4000,MSG['UploadFail'],false);
				} else if(result == "nopid"){
					cusnotify('error','mini',true,4000,MSG['NoPid'],false);
				} else if(result == "exceed"){
					cusnotify('error','mini',true,4000,MSG['PidExceed'],false);
				}
			});
		}
		
	} else {
		//未登录
		cusnotify('error','mini',true,3000,MSG['NotLoggedIn'],false);
		_czc.push(["_trackEvent", "菜单", "上传代码", "未登录","", "saveButton"]);
	}
});


$("#pullButton").click(function(){
	if(WB2.checkLogin()){
		//登录
		if (thepid == "temp"){cusnotify('info','mini',true,4000,MSG['ChooseFirst'],false);return;}
		var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
		var codecontent = Blockly.JavaScript.workspaceToCode(Code.workspace);
			var basexml = doEncode(xmlcontent);
			var basecode = doEncode(codecontent);
			cusnotify('info','mini',true,3000,MSG['pulling'],false);
			setCookie("cqpm_uid",user.idstr,0.0000579);
			$.post(serverpath + "pullcode.php",{uid:user.idstr,pid:thepid},function(result){
				if(result == "error"){
					cusnotify('error','mini',true,4000,MSG['pullError'],false);
				} else if(result == "nopid"){
					cusnotify('error','mini',true,4000,MSG['NoPid'],false);
				} else if(result == "empty"){
					cusnotify('error','mini',true,4000,MSG['pullEmpty'],false);
				}else if(result != ""){
					Code.workspace.clear();
					Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(doDecode(result)), Code.workspace);
					cusnotify('success','mini',true,5000,MSG['pullSuccessful'].replace('%1', Code.workspace.getAllBlocks().length),false);
					_czc.push(["_trackEvent", "菜单", "拉取代码", user.idstr,"槽位"+thepid, "pullButton"]);
				}
			});
		
	} else {
		//未登录
		cusnotify('error','mini',true,3000,MSG['NotLoggedIn'],false);
		_czc.push(["_trackEvent", "菜单", "拉取代码", "未登录","", "pullButton"]);
	}
});

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getNonFunctions(c) {
	var e = c.getTopBlocks();
	var a = [];
	for (var b = 0; b < e.length; b++) {
		var d = e[b];
		if (d.type != "procedures_defreturn" && d.type != "procedures_defnoreturn" && d.type != "cqevent_allevent") {
			a.push(d)
		}
	}
	return a
}

function clearBlockMarkers() {
	$(".viewproblem").fadeOut(200);
	$(".viewproblem").attr("delete","true");
	setTimeout(function(){$(".viewproblem[delete='true']").remove()},200);
}
function appendBlockMarker(b) {
	if (!b.getParent()) {
		var a = $("<div hidden>priority_high</div>").addClass("viewproblem").addClass("material-icons").css("left", (b.getRelativeToSurfaceXY().x + b.workspace.scrollX) + 60).css("top", (b.getRelativeToSurfaceXY().y + b.workspace.scrollY) + 45).fadeIn(250).fadeOut(250).fadeIn(250);
		//var a = $("<div hidden>priority_high</div>").addClass("viewproblem").addClass("material-icons").css("left", (b.getRelativeToSurfaceXY().x + b.workspace.scrollX) + 60).css("top", (b.getRelativeToSurfaceXY().y + b.workspace.scrollY) + 45).fadeIn(250).fadeOut(250).fadeIn(250);

		$("body").append(a)
	}
}

function appendBlockMarkers(b) {
	var a = 0;
	b.forEach(function(c) {
		if (!c.disabled) {
			appendBlockMarker(c);
			a++
		}
	})
}

function checkForStrayBlocks() {
	var a = getNonFunctions(Blockly.mainWorkspace);
	clearBlockMarkers();
	appendBlockMarkers(a)
}

$("body").mouseup(function(){
	setTimeout(function(){checkForStrayBlocks()},10)
});

function checkCode() {
	//是否有CQ事件
	var hasCQEvents = 0;
	for (var i = 0; i < Code.workspace.getTopBlocks().length; i++) {
		var block = Code.workspace.getTopBlocks()[i];
		if (block.type == "cqevent_allevent") {
			hasCQEvents = hasCQEvents + 1;
		}
	}
	if (hasCQEvents == 0) {
		cusnotify('warning','mini',true,3000,MSG['NoCQEvent'],false);
		return true;
	}

	//代码是否有错误
	var jsCode = Blockly.JavaScript.workspaceToCode(Code.workspace);
	var has_error = false;
	try {
		eval(jsCode)
	} catch (e) {
		if (e != "") {
			has_error = true
		}
	}
	if (has_error) {
		cusnotify('warning','mini',true,3000,MSG['CodehasMistake'],false);
		return true;
	}

	//是否有散落拼图
	var blocks = getNonFunctions(Code.workspace);
	var redsanjiao = false;
	blocks.forEach(function(block) {
		if (!block.disabled) {
			redsanjiao = true
		}
	});
	if (redsanjiao) {
		cusnotify('error','mini',true,3000,MSG['redsanjiao'],false);
		return false;
	}

	
}

$(".projectid").change(function() {
	thepid = $(".projectid").val();
	if (thepid == "temp"){
		cusnotify('info','mini',true,4000,MSG['slotTEMP'],false);
		$("#pullButton").fadeOut(200);
		$("#saveButton").fadeOut(200);
	} else {
		cusnotify('info','mini',true,4000,MSG['slotNoTEMP'].replace('%1', thepid),false);
		$("#pullButton").fadeIn(200);
		$("#saveButton").fadeIn(200);
	}
});



