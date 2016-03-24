/**
 * Created by cmy on 2016/3/19.
 */

var tbody = document.getElementById('tBody');
var rowIndex;
var checkboxs = document.getElementsByName("checks");
var table = document.getElementById("infoData");
var currentIndex;
var current;
//在表格底部再插入一行
function insertRow(tbIndex) {
	var objRow = document.getElementById('infoData').insertRow(tbIndex);
	table.appendChild(objRow);
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
	objRow.addEventListener("click", getIndex, false);
}

//获取行号
function getChecked() {
	var myChart = echarts.init(document.getElementById('main'));//初始化图表
	current = event.srcElement;//获取当前点击的元素
	currentIndex = current.parentNode.parentNode.rowIndex;//获取当前元素所在表格的行号
	if (current.checked == true) {//判断复选框
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
	} else {
		option1.legend.data.splice(currentIndex - 2, 1);
		option1.series.splice(currentIndex - 2, 1);
		myChart.setOption(option1);
		currentIndex = null;
	}
	/*if (current.checked == false) {
		option1.legend.data.splice(currentIndex - 2, 1);
		option1.series.splice(currentIndex - 2, 1);
		myChart.setOption(option1);
		currentIndex = null;
	}*/

	for (var i = 0, len = checkboxs.length; i < len; i++) {
		if (checkboxs[i].checked == true) {
			var sTr = checkboxs[i].parentNode.parentNode.rowIndex;
			rowIndex = i + 2;
		}
	}
}







