var isDocOpen = 0,
	thepid = "temp",
	isUserinfoOpen = 0,
	isMenubtngroupOpen = 0;

function createAndDownloadFile(fileName, content) {
	var aTag = document.createElement('a');
	var blob = new Blob([content]);
	aTag.download = fileName;
	aTag.href = URL.createObjectURL(blob);
	aTag.click();
	URL.revokeObjectURL(blob);
}

function cusnotify(type, size, icon, delay, msg, closebtn) {
	Lobibox.notify(type, {
		size: size,
		icon: icon,
		delay: delay,
		msg: msg,
		closeButton: closebtn
	});
}
$("switchButton").click(function() {
	cusnotify('info', 'mini', true, 2500, "开发中，敬请期待", false)
});

$("#downloadButton").click(function() {
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		cusnotify('warning', 'mini', true, 2500, MSG['WorkspaceIsEmpty'], false);
		//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "失败", "downloadButton"]);
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
			if(type === 'ok') {
				if(lobibox.$input[0].value == "") {
					var randomfilename = Math.random().toString(36).substr(2);
					createAndDownloadFile(randomfilename + ".xml", desxml);
					cusnotify('success', 'mini', true, 5000, MSG['DownloadFileSuccessful'] + randomfilename, false);
					//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "成功-" +randomfilename + ".xml", "downloadButton"]);
				} else {
					createAndDownloadFile(lobibox.$input[0].value + ".xml", desxml);
					cusnotify('success', 'mini', true, 5000, MSG['DownloadFileSuccessful'] + lobibox.$input[0].value, false);
					//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "成功-" + lobibox.$input[0].value + ".xml", "downloadButton"]);
				}
			} else if(type === 'cancel') {
				cusnotify('info', 'mini', true, 2000, MSG['OperatingCancel'], false);
				//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "取消", "downloadButton"]);
			}
		}
	});
	//createAndDownloadFile(Math.random().toString(36).substr(2) + ".xml",desxml);
	//解密：des ("a", desxml, 0)
});

$('#loadButton').click(function() {
	$('#loadcqwpk').click();
	//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr,"按钮按下", "loadButton"]);
});

$("#loadcqwpk").change(function() {
	var objFile = document.getElementById("loadcqwpk");
	console.log(objFile.files[0].size); // 文件字节数
	var files = $('#loadcqwpk').prop('files'); //获取到文件列表
	if(files.length == 0) {

	} else {
		var reader = new FileReader(); //新建一个FileReader
		reader.readAsText(files[0], "UTF-8"); //读取文件 
		reader.onload = function(evt) { //读取完文件之后会回来这里
			var fileString = evt.target.result; // 读取文件内容
			var fileLength = objFile.files[0].size;
			/*if (fileLength > 900000){
				if (fileLength < 1200000){
					cusnotify('warning','mini',true,5000,MSG['LoadFileWarning'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "文件过大", "loadButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['LoadFileError'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "文件过大(超大)", "loadButton"]);
				}
			}*/
			Code.workspace.clear();
			Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(fileString), Code.workspace);
			if(Code.workspace.getAllBlocks().length < 1000) {
				cusnotify('success', 'mini', true, 3000, MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
				//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "成功", "loadButton"]);
			} else if(Code.workspace.getAllBlocks().length > 1000) {
				if(Code.workspace.getAllBlocks().length < 1500) {
					cusnotify('success', 'mini', true, 3000, MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('warning','mini',true,5000,MSG['AllPuzzleWarning'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "拼图过多", "loadButton"]);
				} else {
					cusnotify('success', 'mini', true, 3000, MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('error','mini',true,5000,MSG['AllPuzzleError'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "拼图过多(超多)", "loadButton"]);
				}
			}
		}
	}
});

$('#addButton').click(function() {
	$('#addcqwpk').click();
	//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"按钮按下", "addButton"]);
});

$("#addcqwpk").change(function() {
	var objFile = document.getElementById("addcqwpk");
	console.log(objFile.files[0].size); // 文件字节数
	var files = $('#addcqwpk').prop('files'); //获取到文件列表
	if(files.length == 0) {

	} else {
		var reader = new FileReader(); //新建一个FileReader
		reader.readAsText(files[0], "UTF-8"); //读取文件 
		reader.onload = function(evt) { //读取完文件之后会回来这里
			var fileString = evt.target.result; // 读取文件内容
			var fileLength = objFile.files[0].size;
			/*if (fileLength > 900000){
				if (fileLength < 1200000){
					cusnotify('warning','mini',true,5000,MSG['LoadFileWarning'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"文件过大", "addButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['LoadFileError'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"文件过大(超大)", "addButton"]);
				}
			}*/
			Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(fileString), Code.workspace);
			if(Code.workspace.getAllBlocks().length < 1000) {
				cusnotify('success', 'mini', true, 3000, MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
				//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"成功", "addButton"]);
			} else if(Code.workspace.getAllBlocks().length > 1000) {
				if(Code.workspace.getAllBlocks().length < 1500) {
					cusnotify('success', 'mini', true, 3000, MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('warning','mini',true,5000,MSG['AllPuzzleWarning'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"拼图过多", "addButton"]);
				} else {
					cusnotify('success', 'mini', true, 3000, MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('error','mini',true,5000,MSG['AllPuzzleError'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"拼图过多(超多)", "addButton"]);
				}
			}
		}
	}
});

$('#temporaryButton').click(function() {
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		cusnotify('warning', 'mini', true, 2500, MSG['WorkspaceIsEmpty'], false);
		//_czc.push(["_trackEvent", "菜单", "缓存拼图", user.idstr, "失败", "temporaryButton"]);
		return;
	} else {
		//var desxml = des("a", xmlcontent, 1, 0);
		var desxml = xmlcontent;
		window.localStorage.setItem("puzzleTemporary", desxml);
		cusnotify('success', 'mini', true, 3000, MSG['SaveTemporarySuccessful'].replace('%1', desxml.replace(/[^\x00-\xff]/gi, "--").length), false);
		//_czc.push(["_trackEvent", "菜单", "缓存拼图", user.idstr, "成功", "temporaryButton"]);
	}
});

function autoSave() {
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		return;
	} else {
		//var desxml = des("a", xmlcontent, 1, 0);
		var desxml = xmlcontent;
		window.localStorage.setItem("puzzleTemporary", desxml);
		cusnotify('success', 'mini', true, 5000, MSG['AutoSaveTemporarySuccessful'].replace('%1', desxml.replace(/[^\x00-\xff]/gi, "--").length), false);
	}
}

function readTemporary() {
	var xmlcontent = window.localStorage.getItem("puzzleTemporary");
	if(xmlcontent == null) {
		return;
	} else {
		//var desxml = des ("a", xmlcontent, 0);
		var desxml = xmlcontent;
		Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(desxml), Code.workspace);
		cusnotify('success', 'mini', true, 3000, MSG['ReadTemporarySuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
	}
}

$(document).ready(function() {
	if(getCookie("hooktoken") == "") {
		setCookie("hooktoken", "", 365);
	}
	if(getCookie("hookip") == "") {
		setCookie("hookip", "", 365);
	}
	loadHelp();
	$("#content_doc").mCustomScrollbar({
		theme: "dark",
		autoHideScrollbar: true
	});
	setTimeout("readTemporary();", 500);
	$(".projectid").change(function() {
		var pid = $(".projectid").val();
		if(pid == "temp") {
			Code.workspace.clear();
			readTemporary();
			return;
		}

	});

	if(getCookie("access_token") != null) {
		$.post(serverpath + "showuser.php", {
			uid: getCookie("uid")
		}, function(result) {
			console.log(JSON.parse(result));
			user = JSON.parse(result);
			if(user.error_code) {
				cusnotify('info', 'mini', true, 3000, MSG['LoginError'], false);
				return;
			}
			user.login = "1";
			$(".userinfobtn").css("display", "inline-block");
			$(".username").attr("href", "http://weibo.com/u/" + user.idstr);
			$(".username").html(user.screen_name);
			$(".bindingcode").html(user.idstr);
			$(".login").remove();
			$.post(serverpath + "score.php", {
				id: user.idstr
			}, function(result) {
				$(".score").html(result);
			});
			cusnotify('success', 'mini', true, 5000, MSG['LoginSuccessful'].replace('%1', user.screen_name), false);
			$(".projectid").append("<option value=\"1\">代码槽位 1</option><option value=\"2\">代码槽位 2</option><option value=\"3\">代码槽位 3</option><option value=\"4\">代码槽位 4</option><option value=\"5\">代码槽位 5</option>");
		});
	} else {
		if(GetQueryString("code") != null) {
			var oauthcode = GetQueryString("code");
			$.post(serverpath + "oauthcodetoatoken.php", {
				code: oauthcode
			}, function(result) {
				if(result == "error") {
					cusnotify('warning', 'mini', true, 3000, "登录失败，请重新登录", false);
					return;
				}
				var res_a = result.split("|||||");
				var atoken = res_a[0];
				var uid = res_a[1];
				var expires_in = res_a[2];
				if(uid == undefined) {
					cusnotify('info', 'mini', true, 3000, MSG['LoginError'], false);
					return;
				}
				setCookie("uid", uid, 100);
				setCookie("access_token", atoken, expires_in * 0.0000116);
				$.post(serverpath + "showuser.php", {
					uid: getCookie("uid")
				}, function(result) {
					user = JSON.parse(result);
					location.href = "http://cqpm.daidr.me";
				});
			});
		} else {
			cusnotify('info', 'mini', true, 3000, MSG['LoginError'], false);
			return;
		}

	}
	
	//_czc.push(["_trackEvent", "页面", "被打开", "","", ""]);
});

//window.setInterval("autoSave()",60000);

$('#docButton').click(function() {
	if(IsPC() == true) {
		var content_blocks_width = "55%";
		var content_doc_width = "45%";
	} else {
		var content_blocks_width = "0px";
		var content_doc_width = "100%";
	}
	if(isDocOpen == 0) {
		isDocOpen = 1;
		$(".viewproblem").fadeOut();
		$("#content_blocks").animate({
			width: content_blocks_width
		});
		$("#content_doc").animate({
			width: content_doc_width
		});
		setTimeout("SVGResizeFun()", 400);
		setTimeout("DOCINResizeFun()", 400);
	} else {
		isDocOpen = 0;
		$(".viewproblem").fadeIn();
		$("#content_blocks").animate({
			width: "100%"
		});
		$("#content_doc").animate({
			width: "0px"
		});
		setTimeout("SVGResizeFun()", 400);
	}
	//_czc.push(["_trackEvent", "菜单", "帮助文档", "被单击",user.idstr, "docButton"]);
});

function SVGResizeFun() {
	Blockly.svgResize(Code.workspace);
}

function DOCINResizeFun() {
	$("#content_doc_in").css("width", $("#content_doc").width() + "px")
}

$("#content_blocks").resize(function() {
	Blockly.svgResize(Code.workspace);
});

function loadHelp() {
	$("#content_doc_in").load("help/index.html", function() {
		$('#content_doc_in').animate({
			opacity: '1'
		}, 200);
		$(".linklist").click(function() {
			$("#content_doc_in").animate({
				opacity: '0'
			}, 200);
			var docpage = $(this).attr("docpage");
			setTimeout(function() {
				loadhelp2(docpage);
			}, 210);
		});
	});
}

function loadhelp2(page) {
	console.log(page)
	$("#content_doc_in").load("help/pages/" + page + ".html", function() {
		$('#content_doc_in').animate({
			opacity: '1'
		}, 200);
		$(".docback").click(function() {
			$("#content_doc_in").animate({
				opacity: '0'
			}, 200);
			setTimeout("loadHelp();", 210);
		});
	});
}

$(".score").click(function() {
	cusnotify('info', 'mini', true, 4000, '积分机制还在策划当中...<br/><br/>你可以通过 捐助 获得积分', false);
});

$("#saveButton").click(function() {
	if(user.login == "1") {
		//登录
		if(thepid == "temp") {
			cusnotify('info', 'mini', true, 4000, MSG['ChooseFirst'], false);
			return;
		}
		var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
		var codecontent = Blockly.JavaScript.workspaceToCode(Code.workspace);
		if(xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
			cusnotify('error', 'mini', true, 3000, MSG['WorkspaceIsEmpty'], false);
			return;
		} else {
			if(checkCode() == false) {
				return;
			}
			var basexml = doEncode(xmlcontent);
			var basecode = doEncode(codecontent);
			cusnotify('info', 'mini', true, 3000, MSG['Uploading'], false);
			setCookie("cqpm_uid", user.idstr, 0.0001000);
			$.post(serverpath + "upcode.php", {
				code: basecode,
				style: basexml,
				uid: user.idstr,
				pid: thepid
			}, function(result) {
				if(result == "ok") {
					cusnotify('success', 'mini', true, 0, MSG['UploadSuccessful'].replace('%1', user.idstr), false);
					//_czc.push(["_trackEvent", "菜单", "上传代码", user.idstr,"槽位"+thepid, "saveButton"]);
				} else if(result == "error") {
					cusnotify('error', 'mini', true, 4000, MSG['UploadFail'], false);
				} else if(result == "nopid") {
					cusnotify('error', 'mini', true, 4000, MSG['NoPid'], false);
				} else if(result == "exceed") {
					cusnotify('error', 'mini', true, 4000, MSG['PidExceed'], false);
				}
			});
		}

	} else {
		//未登录
		cusnotify('error', 'mini', true, 3000, MSG['NotLoggedIn'], false);
		//_czc.push(["_trackEvent", "菜单", "上传代码", "未登录","", "saveButton"]);
	}
});

$("#pullButton").click(function() {
	if(user.login == "1") {
		//登录
		if(thepid == "temp") {
			cusnotify('info', 'mini', true, 4000, MSG['ChooseFirst'], false);
			return;
		}
		var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
		var codecontent = Blockly.JavaScript.workspaceToCode(Code.workspace);
		var basexml = doEncode(xmlcontent);
		var basecode = doEncode(codecontent);
		cusnotify('info', 'mini', true, 3000, MSG['pulling'], false);
		setCookie("cqpm_uid", user.idstr, 0.0000579);
		$.post(serverpath + "pullcode.php", {
			uid: user.idstr,
			pid: thepid
		}, function(result) {
			if(result == "error") {
				cusnotify('error', 'mini', true, 4000, MSG['pullError'], false);
			} else if(result == "nopid") {
				cusnotify('error', 'mini', true, 4000, MSG['NoPid'], false);
			} else if(result == "empty") {
				cusnotify('error', 'mini', true, 4000, MSG['pullEmpty'], false);
			} else if(result != "") {
				Code.workspace.clear();
				Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(doDecode(result)), Code.workspace);
				cusnotify('success', 'mini', true, 5000, MSG['pullSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
				//_czc.push(["_trackEvent", "菜单", "拉取代码", user.idstr,"槽位"+thepid, "pullButton"]);
			}
		});

	} else {
		//未登录
		cusnotify('error', 'mini', true, 3000, MSG['NotLoggedIn'], false);
		//_czc.push(["_trackEvent", "菜单", "拉取代码", "未登录","", "pullButton"]);
	}
});

function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

function getNonFunctions(c) {
	var e = c.getTopBlocks();
	var a = [];
	for(var b = 0; b < e.length; b++) {
		var d = e[b];
		if(d.type != "procedures_defreturn" && d.type != "procedures_defnoreturn" && d.type != "cqevent_allevent") {
			a.push(d)
		}
	}
	return a
}

function clearBlockMarkers() {
	$(".viewproblem").fadeOut(200);
	$(".viewproblem").attr("delete", "true");
	setTimeout(function() {
		$(".viewproblem[delete='true']").remove()
	}, 200);
}

function appendBlockMarker(b) {
	if(!b.getParent()) {
		var a = $("<div hidden>priority_high</div>").addClass("viewproblem").addClass("material-icons").css("left", (b.getRelativeToSurfaceXY().x + b.workspace.scrollX) + 60).css("top", (b.getRelativeToSurfaceXY().y + b.workspace.scrollY) + 45).fadeIn(250).fadeOut(250).fadeIn(250);
		//var a = $("<div hidden>priority_high</div>").addClass("viewproblem").addClass("material-icons").css("left", (b.getRelativeToSurfaceXY().x + b.workspace.scrollX) + 60).css("top", (b.getRelativeToSurfaceXY().y + b.workspace.scrollY) + 45).fadeIn(250).fadeOut(250).fadeIn(250);

		$("body").append(a)
	}
}

function appendBlockMarkers(b) {
	var a = 0;
	b.forEach(function(c) {
		if(!c.disabled) {
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

$("body").mouseup(function() {
	setTimeout(function() {
		checkForStrayBlocks()
	}, 10)
});

function checkCode() {
	//是否有CQ事件
	var hasCQEvents = 0;
	for(var i = 0; i < Code.workspace.getTopBlocks().length; i++) {
		var block = Code.workspace.getTopBlocks()[i];
		if(block.type == "cqevent_allevent") {
			hasCQEvents = hasCQEvents + 1;
		}
	}
	if(hasCQEvents == 0) {
		cusnotify('warning', 'mini', true, 3000, MSG['NoCQEvent'], false);
		return true;
	}

	//代码是否有错误
	var jsCode = Blockly.JavaScript.workspaceToCode(Code.workspace);
	var has_error = false;
	try {
		eval(jsCode)
	} catch(e) {
		if(e != "") {
			has_error = true
		}
	}
	if(has_error) {
		cusnotify('warning', 'mini', true, 3000, MSG['CodehasMistake'], false);
		return true;
	}

	//是否有散落拼图
	var blocks = getNonFunctions(Code.workspace);
	var redsanjiao = false;
	blocks.forEach(function(block) {
		if(!block.disabled) {
			redsanjiao = true
		}
	});
	if(redsanjiao) {
		cusnotify('error', 'mini', true, 3000, MSG['redsanjiao'], false);
		return false;
	}

}

$(".projectid").change(function() {
	thepid = $(".projectid").val();
	if(thepid == "temp") {
		cusnotify('info', 'mini', true, 4000, MSG['slotTEMP'], false);
		$("#pullButton").fadeOut(200);
		$("#saveButton").fadeOut(200);
		$(".nobr").fadeOut(200);
	} else {
		cusnotify('info', 'mini', true, 4000, MSG['slotNoTEMP'].replace('%1', thepid), false);
		$("#pullButton").fadeIn(200);
		$("#saveButton").fadeIn(200);
		$(".nobr").fadeIn(200);
	}
});

$(".tologin").click(function() {
	location.href = "https://api.weibo.com/oauth2/authorize?client_id=4031974087&redirect_uri=http://cqpm.daidr.me&response_type=code";
});

$(".userinfobtn").click(function() {
	$(".userinfo").slideToggle();
	if(isUserinfoOpen == 0) {
		isUserinfoOpen = 1;
		$(".userinfomark").css("display", "block");
	} else {
		isUserinfoOpen = 0;
		$(".userinfomark").css("display", "none");
	}
	if(isMenubtngroupOpen == 1) {
		isMenubtngroupOpen = 0;
		$(".menubtngroupmark").css("display", "none");
		$(".menubtngroup").slideToggle();
	}
});

$(".menubtngroupbtn").click(function() {
	$(".menubtngroup").slideToggle();
	if(isMenubtngroupOpen == 0) {
		isMenubtngroupOpen = 1;
		$(".menubtngroupmark").css("display", "block");
	} else {
		isMenubtngroupOpen = 0;
		$(".menubtngroupmark").css("display", "none");
	}
	if(isUserinfoOpen == 1) {
		isUserinfoOpen = 0;
		$(".userinfomark").css("display", "none");
		$(".userinfo").slideToggle();
	}
});

$(".loginout").click(function() {
	$.post(serverpath + "loginout.php", {
		access_token: getCookie("access_token")
	}, function(result) {
		//delCookie("uid");
		//delCookie("access_token");
		clearCookies();
		cusnotify('success', 'mini', true, 5000, MSG['LoginoutSuccessful'], false);
		$(".userinfo").remove();
		$(".userinfobtn").remove();
		$(".projectid").html("<option value=\"temp\">浏览器本地缓存</option>");
		setTimeout(function() {
			location.href = "http://cqpm.daidr.me";
		}, 1000);
	});
});

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function clearCookies() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if(keys) {
		for(var i = keys.length; i--;)
			document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
	}
}

function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPod"
	];
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

$(".userinfomark").click(function() {
	isUserinfoOpen = 0;
	$(".userinfomark").css("display", "none");
	$(".userinfo").slideToggle();
});

$(".menubtngroupmark").click(function() {
	isMenubtngroupOpen = 0;
	$(".menubtngroupmark").css("display", "none");
	$(".menubtngroup").slideToggle();
});

function autoSize_blocklyToolboxDiv(){
	$("#toolboxNav").css("left",$(".blocklyToolboxDiv").width() + "px");
	$(".blocklyToolboxDiv").resize(function(){
		$("#toolboxNav").css("left",$(".blocklyToolboxDiv").width() + "px");
	});
}

$("#toolboxUpBtn").click(function() {
	Code.scrolledPos = Code.scrolledPos - 50;
	if (Code.scrolledPos < 0) {
		Code.scrolledPos = 0
	}
	$(".blocklyToolboxDiv").animate({
		scrollTop: Code.scrolledPos
	})
});

$("#toolboxDownBtn").click(function() {
	Code.scrolledPos = Code.scrolledPos + 50;
	if (Code.scrolledPos >= $(".blocklyToolboxDiv").height()) {
		Code.scrolledPos = $(".blocklyToolboxDiv").height()
	}
	$(".blocklyToolboxDiv").animate({
		scrollTop: Code.scrolledPos
	})
});

$(".searchSwitch").click(function(){
	if($(".searchSwitch").html() == "search"){
		$(".searchSwitch").html("close");
		$("#searchBlockInput").show("slide", { direction : "left"}, 100,function(){});
	} else {
		$(".searchSwitch").html("search");
		$("#searchBlockInput").hide("slide", { direction : "left"}, 100,function(){});
	}
});


(function() {
	$(document).ready(function() {
		
	})
})();