/**
 * Created by cmy on 2016/3/19.
 */

var tbody = document.getElementById('tBody');
/*var tbodyRows = tbody.rows.length;*/
var intRowIndex = 0;
//在表格底部再插入一行
function insertRow(tbIndex) {
	var objRow = document.getElementById('infoData').insertRow(tbIndex);
	table.appendChild(objRow);
	var objCel1 = objRow.insertCell(0);
	objCel1.innerHTML = '<input type="checkbox">';
	objCel1.parentNode.addEventListener("click", getChecked(), false);
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
}



function getIndex(tbIndex) {
	intRowIndex = event.srcElement.parentElement.rowIndex;
	console.log(insertRow);
}

var rowIndex;
var checkboxs = document.getElementsByName("checks");
/*var tbody = document.getElementsByTagName("tbody");*/
var table = document.getElementById("infoData");
//获取行号
function getChecked(){
	var myChart = echarts.init(document.getElementById('main'));
	option2 = {
		title : {
			text : '数据统计图'
		},
		tooltip : {
			trigger: 'item',
			formatter : function (params) {
				var date = new Date(params.value[0]);
				data = date.getFullYear() + '-'
				  + (date.getMonth() + 1) + '-'
				  + date.getDate() + ' '
				  + date.getHours() + ':'
				  + date.getMinutes();
				return data + '<br/>'
				  + params.value[1] + ', '
				  + params.value[2];
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		dataZoom: {
			show: true,
			start : 70
		},
		legend : {
			data : []
		},
		grid: {
			y2: 80
		},
		xAxis : [
			{
				type : 'time',
				splitNumber:10
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		series : [
			{
				name: 1,
				type: 'line',
				showAllSymbol: true,
				symbolSize: function (value){
					return Math.round(value[2]/10) + 2;
				},
				data: (function () {
					var d = [];
					var len = 0;
					var now = new Date();
					var value;
					while (len++ < 200) {
						d.push([
							new Date(2016, 1, 1, 0, len * 1000),
							(Math.random()*200).toFixed(2) - 0,
							(Math.random()*100).toFixed(2) - 0
						]);
					}
					return d;
				})()
			}
		]
	};

	myChart.setOption(option2);
	for (var i= 0, len= checkboxs.length;i<len; i++) {
			if (checkboxs[i].checked == true) {
				var sTr = checkboxs[i].parentNode.parentNode;
				rowIndex = i+1;
				option1.legend.data[i+1]= i.toString();
				option1.series[1+i]={
					name: i.toString(),
					type: 'line',
					showAllSymbol: true,
					symbolSize: function (value){
						return Math.round(value[2]/10) + 2;
					},
					data: (function () {
						var d = [];
						var len = 0;
						var now = new Date();
						var value;
						while (len++ < 200) {
							d.push([
								new Date(2016, 1, 1, 0, len * 1000),
								(Math.random()*200).toFixed(2) - 0,
								(Math.random()*100).toFixed(2) - 0
							]);
						}
						return d;
					})()
				};
				myChart.setOption(option1);
				/*console.log("行号：" + rowIndex + "内容:" + table.rows[rowIndex].cells[2].innerText);*/

			}
		}
/*	console.log(rowIndex);*/
}




