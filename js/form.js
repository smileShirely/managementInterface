/**
 * Created by cmy on 2016/3/19.
 */
var tbody = document.getElementById('tBody');
var tbodyRows = tbody.rows.length;
console.log(tbodyRows);
var intRowIndex = 0;
function insertRow(tbIndex) {
	var objRow = document.getElementById('infoData').insertRow(tbIndex);
	table.appendChild(objRow);
	var objCel1 = objRow.insertCell(0);
	objCel1.innerHTML = '<input type="checkbox">';
	objCel1.parentNode.addEventListener("click", getChecked(),false);
	/*var tdFront = $('tBody').getElementsByTagName("tr").childNodes[1];
	 tdFront.addEventListener("click", getChecked(),false);*/
	var objCel2 = objRow.insertCell(1);
	objCel2.innerText = document.addForm.myCell1.value;
	var objCel3 = objRow.insertCell(2);
	objCel3.innerText = document.addForm.myCell2.value;
	var objCel4 = objRow.insertCell(3);
	objCel4.innerText = document.addForm.myCell3.value;
	var objCel5 = objRow.insertCell(4);
	objCel5.innerText = document.addForm.myCell4.value;
	var objCel6 = objRow.insertCell(5);
	objCel6.innerText = document.addForm.myCell5.value;

	objRow.addEventListener("click", getIndex, false);

	console.log(objRow);
	/*var row = document.createElement("tr");
	tbody.appendChild(row);
	var cell_1 = document.createElement("td");
	cell_1.appendChild(document.createTextNode("document.addForm.myCell1.value"));*/
}

/*
/!* 获取信息*!/
function trContent(table) {;
	var td = event.srcElement; // 通过event.srcElement 获取激活事件的对象 td
	var rowNum = td.parentElement.rowIndex;//tr的行数
	var tableRow = document.getElementById('table').rows[rowNum];
	for ( var n=1; n<= 5; n++) {
		tableRow.cells[n].innerText = document.infoForm.myCell+n.value;
	}
}
*/

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
	console.log(insertRow);
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
/*	var rowNum = td.parentElement.rowIndex;
	return rowNum;*/
	/*alert("行号：" + (td.parentElement.rowIndex) + "，内容：" + td.innerText);*/
}
var rowIndex;
var checkboxs = document.getElementsByName("checks");
var tbody = document.getElementsByTagName("tbody");
var table = document.getElementById("infoData");
function getChecked(){
	for (var i= 0, len= checkboxs.length;i<len; i++) {
			if (checkboxs[i].checked == true) {
				var sTr = checkboxs[i].parentNode.parentNode;
				rowIndex = i+2;
				console.log("行号：" + rowIndex + "内容:" + table.rows[rowIndex].cells[2].innerText);
			}
		}
	console.log(rowIndex);
}
