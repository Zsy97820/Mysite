/*这里是Section2的Js代码
 * 
 */

$().ready(function(){

	$(".tab").click(function(){//TAB按钮点击事件
		var i = $(this).index();
		$(this).addClass("focustab").siblings().removeClass("focustab");//修改按钮样式
		$(".contdiv").eq(i).addClass("showdiv").siblings("div").removeClass("showdiv");//修改显示的div
	})
})
