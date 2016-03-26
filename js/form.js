/**
 * Created by cmy on 2016/3/19.
 */

var tbody = document.getElementById('tBody');
var table = document.getElementById("infoData");
var currentIndex;
var current;
//在表格底部再插入一行
function insertRow(tbIndex) {
	var objRow = document.getElementById('tBody').insertRow(tbIndex);
	tbody.appendChild(objRow);
	var objCel1 = objRow.insertCell(0);
	objCel1.innerHTML = '<input type="checkbox" name="checks" onclick="getChecked()">';
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
	/*objRow.addEventListener("load", save, false);*/

	$( document ).on( "tablesawcreate", function( e, Tablesaw, colstart ){
		if( Tablesaw.mode === 'stack' ){
			var table = new Stack( Tablesaw.table );
			table.init( colstart );
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){

		if( Tablesaw.mode === 'stack' ){
			$( Tablesaw.table ).data( data.obj ).destroy();
		}

	} );
}

//获取行号
function getChecked() {
	var myChart = echarts.init(document.getElementById('main'));//初始化图表
	current = event.srcElement;//获取当前点击的元素
	currentIndex = current.parentNode.parentNode.rowIndex;//获取当前元素所在表格的行号
	if (current.checked == true) {//判断复选框是否被选中
		option1.legend.data[currentIndex - 2] = (currentIndex - 1).toString();
		option1.series[currentIndex - 2] = {
			name: (currentIndex - 1).toString(),
			type: 'line',
			showAllSymbol: true,
			symbolSize: function (value) {
				return Math.round(value[2] / 10) + 2;
			},
			data: (function () {
				var d = [];
				var len = 0;
				var now = new Date();
				var value;
				while (len++ < 200) {
					d.push([
						new Date(2016, 1, 1, 0, len * 1000),
						(Math.random() * 200).toFixed(2) - 0,
						(Math.random() * 100).toFixed(2) - 0
					]);
				}
				return d;
			})()
		};
		myChart.setOption(option1);
	} else {//当复选框没有被选中
		//将图表中的的没有选中复选框的线删除掉
		option1.legend.data.splice(currentIndex-2, 1);
		option1.series.splice(currentIndex-2, 1);
		myChart.setOption(option1);
		currentIndex = null;//将当前的行号索引标记
	}
}

/*localStorage*/
if(!localStorage.getItem('test')) {
	populateStorage();
} else {
	setStyles();
}

function populateStorage() {
	localStorage.setItem('td', document.getElementById('test').value);

	setStyles();
}

function setStyles() {
	var currentTd = localStorage.getItem('test');

	document.getElementById('test').value = currentTd;
	test.vaue = currentTd;
}
tbody.onchange = populateStorage;
//保存数据
var dataInfo = new Array();
function save() {
	for (var i=0, len=tbody.rows.length; i<len; i++) {
		for (var n=1; n<=5; n++) {
			var elementArray = tbody.rows[i].cells[n].innerText;
			dataInfo.push(elementArray);
		}
	}
}


var opera = $('#operation');
var menu = $('#info ul');
$(opera).click(function() {
	if (currentIndex == null) {//如果没有复选框被选中就弹出错误提示框
		$('#error').css({'display':'block'});
	} else {
		$(menu).toggle();//展开队列操作的列表
	}
});
//关闭错误提示框
$('#answer').click(function() {
	$('#error').css({'display':'none'});
});
//弹出新建队列的表单
$('#new').click(function() {
	$('#addForm').css({'display':'block'});
});
//添加
$('#add').click(function() {
	$('#addForm').css({'display':'none'});
	insertRow(tbody.rows.length);
	save();
	console.log(dataInfo);
});
//取消
$('#cancel').click(function() {
	$('#addForm').css({'display':'none'});
});
///* 拖动弹出的表单*/
$(function() {
	$('.box').draggable();
});

/* 弹出查看信息的表单*/
$('#check').click(function() {
	$(menu).toggle();
	$('#infoForm').css({'display':'block'});
	var infoForm = document.getElementById('infoForm');
	for (var i = 0; i <= 4; i++) {
		infoForm.elements[i].value = table.rows[currentIndex].cells[i+1].innerText;
	}
});
$('#close').click(function() {
	$('#infoForm').css({'display':'none'});
});
/* 弹出删除信息 */
$('#delete').click(function() {
	$(menu).toggle();
	$('#delForm').css({'display':'block'});
	var delForm = document.getElementById('delForm');
	for (var i = 0; i <= 4; i++) {
		delForm.elements[i].value = table.rows[currentIndex].cells[i+1].innerText;
	}
	option1.legend.data.splice(currentIndex-2, 1);
	option1.series.splice(currentIndex-2, 1);
});

$('#save,#del').click(function() {
	$('#delForm').css({'display':'none'});
});
$('#del').click(function() {
	var myChart = echarts.init(document.getElementById('main'));
	$('#delForm').css({'display':'none'});
	table.deleteRow(currentIndex);
	save();
	console.log(dataInfo);
	myChart.setOption(option1);
});

/*弹出修改信息*/
$('#change').click(function() {
	$(menu).toggle();
	$('#changeForm').css({'display':'block'});
	var changeForm = document.getElementById('changeForm');
	for (var i = 0; i <= 4; i++) {
		changeForm.elements[i].value = table.rows[currentIndex].cells[i+1].innerText;
	}
});

$('#save2,.cancel').click(function() {
	$('#changeForm').css({'display':'none'});
});
$('#save2').click(function() {
	var changeForm = document.getElementById('changeForm');
	for (var i = 0; i <= 4; i++) {
		table.rows[currentIndex].cells[i+1].innerText = changeForm.elements[i].value;
	}
	save();
	console.log(dataInfo);
});






