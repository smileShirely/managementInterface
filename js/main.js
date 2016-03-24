/**
 * Created by cmy on 2016/3/16.
 */
$(function() {
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
		insertRow(infoData.rows.length);
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
	});

	$('#save,#del').click(function() {
		$('#delForm').css({'display':'none'});
	});
	$('#del').click(function() {
		$('#delForm').css({'display':'none'});
		table.deleteRow(currentIndex);
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
	});
	/*图表，页面加载完成就出现*/
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
				type: 'line',
				showAllSymbol: true,
				symbolSize: function (value){
					return Math.round(value[2]/10) + 2;
				}

			}
		]
	};
	myChart.setOption(option1);

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
