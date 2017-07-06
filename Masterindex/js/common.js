$().ready(function(){
	//DOM准备完毕后初始化部件坐标
	$(".higher").css("left",($(window).width()-$(".higher").width())*0.3);
	$(".preview ul").css("left",($(window).width()-$(".higher").width())*0.3-85)
	$("h1").css("left",($(window).width()-$("h1").width())*0.5);
	$(".nav").css("left",($(window).width()-$(".nav").width())*0.95);
	$("iframe").css("left",($(window).width()-$("iframe").width())*0.95);
	$(".scroll").css("left",($(window).width()-$(".scroll").width())*0.5);
	$(".menu").css("left",($(window).width()-$(".menu").width())*0.5);
	$(".commlist").css("left",($(window).width()-$("text").width())*0.5+150);
	
	
	//锚记箭头动画
	var timer1 = setInterval(function(){
	$(".scroll").animate({top:"-=10"},500).animate({top:"+=10"},500);
	},1000)
	$(".scroll").hover(function(){//鼠标移入 停止动画
			$(".scroll").animate({width:"+=10",height:"+=10"},200);
			clearInterval(timer1);
	},function(){//鼠标移出 播放动画
			$(".scroll").animate({width:"-=10",height:"-=10"},200);
			timer1 = setInterval(function(){
				$(".scroll").animate({top:"-=10"},500).animate({top:"+=10"},500);
			},1000)
	})
	
	//滑动菜单栏特效
	$(".li_o").hover(function(){//滑动菜单栏特效
		$(this).find(".ul_i").slideDown(200);	
	},function(){
		$(this).find(".ul_i").slideUp(200);	
	})
	
	//锚记滚动动画
	$('.scroll').click(function(e) {//锚记滚动 include(jquery.scrollTo-min.js)
		if($(this).parent().index()<2)
		   /*$(window).scrollTop(0)*/ //直接滚动没有动画，故采用其他实现方式。
			$.scrollTo(this.hash || (735*($(this).parent().index()+1)), 500);
		else
			$.scrollTo(this.hash || 0, 500);
		e.preventDefault();
	});
	

 
})
$(window).resize(function(){//窗口大小改变后重置图片坐标
	$(".higher").css("left",($(window).width()-$(".higher").width())*0.3);
	$(".preview ul").css("left",($(window).width()-$(".higher").width())*0.3-85)
	$("h1").css("left",($(window).width()-$("h1").width())*0.5);
	$(".nav").css("left",($(window).width()-$(".nav").width())*0.95);
	$("iframe").css("left",($(window).width()-$("iframe").width())*0.95);
	$(".scroll").css("left",($(window).width()-$(".scroll").width())*0.5);
	$(".menu").css("left",($(window).width()-$(".menu").width())*0.5);
	//$(".text").css("left",($(window).width()-$(".text").width())*0.5);
	$(".commlist").css("left",($(window).width()-$("text").width())*0.5+150);
})

var somewords = "\n*Athor:网15309-代立\n*Github:https://github.com/Tompes\n*Time:2017-6-15\n*Tip:由于没有做自适应所以在1920x1080的显示器上可以得到最好的体验哦！\n";
console.log(somewords)


