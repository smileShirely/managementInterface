/**
 * Created by cmy on 2016/3/16.
 */
$(function() {
	var opera = $('#operation');
	var menu = $('#info ul');
	var name = $('#name').value;
	var URL = $('#URL').value;
	var usable = $('#usable').value;
	var transferInfo = $('#transferInfo').value;
	var createTime = $('#createTime').value;
	$(opera).click(function() {
		$(menu).toggle();
	});

	//弹出新建队列的表单
	$('#new').click(function() {
		$('#info_form').css({'display':'block'});
	});
	//提交后将表单元素添加到表格中去
	$('#info_form .submit').click(function() {
		$('#info_form').css({'display':'none'});
		/*新建队列*/
		var intRowIndex = $('#infoData').rows.length;
		function insertRow(tbIndex){
			var objRow = infoData.insertRow(tbIndex);
			var blank = objRow.insertCell(0);

			var name = objRow.insertCell(1);
			name.innerText = document.info_form.name.value;
			var URL = objRow.insertCell(2);
			URL.innerText = document.info_form.URL.value;
			var usable = objRow.insertCell(3);
			usable.innerText = document.info_form.usable.value;
			var transferInfo = objRow.insertCell(4);
			transferInfo.innerText = document.info_form.transferInfo.value;
			var createTime = objRow.insertCell(5);
			createTime.innerText = document.info_form.createTime.value;
			objRow.attachEvent("onclick", getIndex);
		}
	});



/*画图表*/
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var lineChartData = {
		labels : ["","1","2","3","4","5","6"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
				label: "My Second dataset",
				fillColor : "rgba(151,187,205,0.2)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}
	window.onload = function() {
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
	}
});