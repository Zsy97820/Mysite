$().ready(function(){
	$(".preview img").click(function(){//缩略图点击事件
		$(".preview img").removeClass("focusimg")
		$(this).addClass("focusimg");//改变外框颜色
		var src = $(this).attr("src");
		$(".bulr").animate({opacity:"0.5"},function(){$(this).css("backgroundImage","url("+src+")")}).animate({opacity:"1"},200);
		//背景的淡入淡出
		$(".higher").slideUp(300,function(){$(this).css("backgroundImage","url("+src+")")}).slideDown(300)
	})
	
})
