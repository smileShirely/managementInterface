/**
 * Created by cmy on 2016/3/16.
 */
$(function() {
	var opera = $('#operation');
	var menu = $('#info ul');
	$(opera).click(function() {
		if (rowIndex == null) {
			$('#error').css({'display':'block'});
		} else {
			$(menu).toggle();
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
		 insertRow(infoData.rows.length);
	});
	//取消
	$('#cancel,#add').click(function() {
		$('#addForm').css({'display':'none'});
	});
	///* 拖动div */
	$(function() {
		$('.box').draggable();
	});

/* 弹出查看信息的表单*/

	$('#check').click(function() {
		$(menu).toggle();
		$('#infoForm').css({'display':'block'});
		var infoForm = document.getElementById('infoForm');
		for (var i = 0; i <= 4; i++) {
			infoForm.elements[i].value = table.rows[rowIndex].cells[i+1].innerText;
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
			delForm.elements[i].value = table.rows[rowIndex].cells[i+1].innerText;
		}
	});

	$('#save,#del').click(function() {
		$('#delForm').css({'display':'none'});
	});
	$('#del').click(function() {
		$('#delForm').css({'display':'none'});
		table.deleteRow(rowIndex);
	});

/*弹出修改信息*/
	$('#change').click(function() {
		$(menu).toggle();
		$('#changeForm').css({'display':'block'});
		var changeForm = document.getElementById('changeForm');
		for (var i = 0; i <= 4; i++) {
			changeForm.elements[i].value = table.rows[rowIndex].cells[i+1].innerText;
		}
	});

	$('#save2,.cancel').click(function() {
		$('#changeForm').css({'display':'none'});
	});
	$('#save2').click(function() {
		var changeForm = document.getElementById('changeForm');
		for (var i = 0; i <= 4; i++) {
			table.rows[rowIndex].cells[i+1].innerText = changeForm.elements[i].value;
		}
	});
	/*图表*/
	var myChart = echarts.init(document.getElementById('main'));
	option1 = {
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
			data : ['1']
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
				type: 'line',
				showAllSymbol: true,
				symbolSize: function (value){
					return Math.round(value[2]/10) + 2;
				}

			}
		]
	};

	myChart.setOption(option1);

	/*点击增加*/
	/*for (i =0, len=checkboxs.length; i<len;i++) {
		console.log(i);
			checkboxs[i].addEventListener("click",function() {
				console.log(i);
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
			},false);
	}*/



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
});
