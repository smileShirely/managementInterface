/**
 * Created by cmy on 2016/3/16.
 */
$(function() {
	var opera = $('#operation');
	var menu = $('#info ul');
	$(opera).click(function() {
		$(menu).toggle();
	});
	//
	//弹出新建队列的表单
	$('#new').click(function() {
		$('#addForm').css({'display':'block'});
	});
  //添加
	$('#add').click(function() {
		 insertRow(infoData.rows.length);
	});
	//取消
	$('.cancel').click(function() {
		$('#addForm').css({'display':'none'});
	});
	///* 拖动div */
	$(function() {
		$('.box').draggable();
	});

/* 弹出查看信息的表单*/

	$('#check').click(function() {
		$('#infoForm').css({'display':'block'});
	});

	$('#close').click(function() {
		$('#infoForm').css({'display':'none'});
	});

/* 弹出删除信息 */
	$('#delete').click(function() {
		$('#delForm').css({'display':'block'});
	});

	$('#del,.save').click(function() {
		$('#delForm').css({'display':'none'});
	});

/*弹出修改信息*/
	$('#change').click(function() {
		$('#changeForm').css({'display':'block'});
	});

	$('#save, .cancel').click(function() {
		$('#changeForm').css({'display':'none'});
	});
	/*图表*/
	var myChart = echarts.init(document.getElementById('main'));
	option1 = {
		title : {
			text : '统计数据图',
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
			data : ['series1']
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
				name: '1',
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
							new Date(2014, 9, 1, 0, len * 3800),
							(Math.random()*30).toFixed(2) - 0,
							(Math.random()*100).toFixed(2) - 0
						]);
					}
					return d;
				})()
			}
		]
	};
	option2 = {
		title : {
			text : '统计数据图',
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
			data : ['series1']
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
				name: '1',
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
							new Date(2014, 9, 1, 0, len * 3800),
							(Math.random()*40).toFixed(2) - 0,
							(Math.random()*100).toFixed(2) - 0
						]);
					}
					return d;
				})()
			}
		]
	};

	myChart.setOption(option1);
	/*var table = $('infoData');
	table.addEventListener("click", function() {
		myChart.setOption(option2);
		myChart.setOption(option1);
	},false);
*/
	/*搜索框中的内容*/
	$(document).ready(function() {
		$(".search").keyup(function () {
			var searchTerm = $(".search").val();
			var listItem = $('.results tbody').children('tr');
			var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

			$.extend($.expr[':'], {'containsi': function(elem, i, match, array){
				return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
			}
			});

			$(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
				$(this).attr('visible','false');
			});

			$(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
				$(this).attr('visible','true');
			});

			var jobCount = $('.results tbody tr[visible="true"]').length;
			$('.counter').text(jobCount + ' item');

			if(jobCount == '0') {$('.no-result').show();}
			else {$('.no-result').hide();}
		});
	});

	/*添加数据*/
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
});