
$().ready(function(){

	$(".pic").click(function(){//绑定.pic的click事件 鼠标点击头像可以 显示或隐藏电邮地址 div
		$(this).siblings(".mail").slideToggle();
	})
	//提交按钮点击事件
	$(".sent").click(function(){
		//对数据进行处理 避免用户输入对页面产生影响
		var inputContext  = $("textarea").val().trim().replace(">","&gt;").replace("<","&lt;").replace('"',"”").replace("'","’");
		var nick          = $(".nickname").val().trim().replace(">","&gt;").replace("<","&lt;").replace('"',"”").replace("'","’");;
		var email         = $(".email").val().trim().replace(">","&gt;").replace("<","&lt;").replace('"',"”").replace("'","’");
		
		if(inputContext.length){//对输入进行判断，如果内容框有内容则对下面信息的进行判断
			if(inputContext.length<=60&&checkMail(email)&&nick.length){//信息判断成功
				var comm  = '<div class="comm">';
					comm +=	'<div class="pic"><img src="img/pic.jpg"/></div>';
					comm +=	'<div class="nick">'+nick+'</div>';
					comm +=	'<div class="mail">'+email+'</div>';
					comm +=	'<div class="words">'+inputContext+'</div>';
					comm += '<div class="time">'+getCurrentDate()+'</div>';
					comm += '</div>' 
				$(".commlist h2").after(comm);//向评论区添加新评论
				
				$(".pic").unbind("click");//解除所有.pic的click属性绑定
				$(".pic").click(function(){//重新绑定.pic的click事件 鼠标点击头像可以 显示或隐藏电邮地址 div
					$(this).siblings(".mail").slideToggle();
				})
				
				$("textarea").val('');//提交成功后清空输入框
				$(".nickname").val('');
				$(".email").val('');
				
				$(".tip2 span").html(60);//恢复输入字数提示
				
			}else if(inputContext.length>60)
				alert("超过字符限制！");
			else if(!checkMail(email))//email检查
				alert("请输入正确的email地址！");
			else if(nick.length===0)//昵称检查
				alert("昵称不能留空!");
		}	
	})
	
	$("textarea").bind('input propertychange', function() {//统计输入的字符数，并同步更新提示
       var len = $("textarea").val().length;
       $(".tip2 span").html(60-len);
    });
    
})

function checkMail(mail) {//邮箱验证
	 var reg  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 if (reg.test(mail))
	 	return true;
	 else 
	 	return false;
}
function getCurrentDate() {//获取当前时间YYYY-MM-DD HH:MM:SS
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}