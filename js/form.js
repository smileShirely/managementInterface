/**
 * Created by cmy on 2016/3/19.
 */
var intRowIndex = 0;
function insertRow(tbIndex) {
	var objRow = document.getElementById('infoData').insertRow(tbIndex);
	var objCel = objRow.insertCell(0);
	objCel.innerHTML = '<a href="#"><input type="checkbox"></a>';
	var objCel = objRow.insertCell(1);
	objCel.innerText = document.addForm.myCell1.value;
	var objCel = objRow.insertCell(2);
	objCel.innerText = document.addForm.myCell2.value;
	var objCel = objRow.insertCell(3);
	objCel.innerText = document.addForm.myCell3.value;
	var objCel = objRow.insertCell(4);
	objCel.innerText = document.addForm.myCell4.value;
	var objCel = objRow.insertCell(5);
	objCel.innerText = document.addForm.myCell15.value;
	var objCel = objRow.insertCell(6);
	objCel.innerHTML = "<a  onclick='javascript:deletRow(this);'></a>";
	objRow.attachEvent("onclick", getIndex);
}
/* 获取信息*/
function trContent(table) {;
	var td = event.srcElement; // 通过event.srcElement 获取激活事件的对象 td
	var rowNum = td.parentElement.rowIndex;//tr的行数
	var tableRow = document.getElementById('table').rows[rowNum];
	for ( var n=1; n<= 5; n++) {
		tableRow.cells[n].innerText = document.infoForm.myCell+n.value;
	}
}

function deletRow(tbIndex) {
	var Row = tbIndex.parentNode;
	while (Row.tagName.toLowerCase()!="tr")
	{
		Row = Row.parentNode;
	}
	Row.parentNode.removeChild(Row);
}

function getIndex(tbIndex) {
	intRowIndex = event.srcElement.parentElement.rowIndex;
	pos.innerText = intRowIndex;
}

/*进行队列操作*/

/*var input = $('infoData').getElementsByTagName("input");*/

/*function inputCheckbox() {
	var td = event.srcElement; // 通过event.srcElement 获取激活事件的对象 td
	var rowNum = td.parentElement.rowIndex;
	return rowNum;
	alert("rowNum"c);
}
$(s).addEventListener(click,inputCheckbox,false);*/

/*没有用到的*/


//弹出确认是否删除的对话框
/*function showDiv() {
 document.getElementById('popDiv').style.display="block";
 document.getElementById('affirmClose-bg').style.display="block";
 }*/
function closeDiv() {
	document.getElementById('popDiv').style.display="none";
	document.getElementById('affirmClose-bg').style.display="none";
}
//获取table中的行号和内容
function doclick() {
	var td = event.srcElement.parentElement; // 通过event.srcElement 获取激活事件的对象 td
	var rowNum = td.parentElement.rowIndex;
	return rowNum;
	/*alert("行号：" + (td.parentElement.rowIndex) + "，内容：" + td.innerText);*/
}