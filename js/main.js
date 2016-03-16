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
	})
});