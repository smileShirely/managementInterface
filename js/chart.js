/**
 * Created by cmy on 2016/3/23.
 */
// 基于准备好的dom，初始化echarts实例
window.onload = function() {
	var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
	option1 = {
		title : {//标题组件，包含主标题和副标题
			text : '统计图',
			show : true
		},
		tooltip : {//提示框组件
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
		toolbox: {//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		dataZoom: {//用于对数据进行区域缩放，从而能自由关注细节的数据信息，或者概览数据整体
			show: true,
			start : 70
		},
		legend : {//图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
			data : ['series1'],
			z : 1
		},
		grid: {//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）
			y2: 80
		},
		xAxis : [//直角坐标系grid中的x轴，单个 grid 组件最多只能放上下两个 x 轴
			{
				type : 'time',
				splitNumber:10
			}
		],
		yAxis : [//直角坐标系 grid 中的 y 轴，单个 grid 组件最多只能放左右两个 y 轴
			{
				type : 'value'
			}
		],
		series : [//系列列表。每个系列通过 type 决定自己的图表类型
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
			},
			{
				name: '2',
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
							(Math.random()*90).toFixed(2) - 0,
							(Math.random()*100).toFixed(2) - 0
						]);
					}
					return d;
				})()
			}
		]
	};

	myChart.setOption(option1);
	document.getElementById("btn").addEventListener("click",function() {
		option1.series[2]={
			name: '2',
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
						(Math.random()*90).toFixed(2) - 0,
						(Math.random()*100).toFixed(2) - 0
					]);
				}
				return d;
			})()
		};
		myChart.setOption(option1);
	},false);
}
