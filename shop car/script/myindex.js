
	window.onload = function(){                        //页面载入时运行函数
		var aData = [{"imgUrl":"images/img01.jpg","proName":"小米移动电源10000mAh","proPrice":"79","proComm":"18"},
					 {"imgUrl":"images/img02.jpg","proName":"小米移动电源10000mAh 高配版","proPrice":"149","proComm":"1.4"},
					 {"imgUrl":"images/img03.jpg","proName":"小米圈铁耳机","proPrice":"99","proComm":"4.2"},
					 {"imgUrl":"images/img04.jpg","proName":"小米活塞耳机 基础版","proPrice":"29","proComm":"3.6"},
					 ];                               //以数组的形式将网页内容输入变量aDate中
		var oBox = document.getElementById("box");    //获取id为box的元素的值
		var oCar = document.getElementById("car");    //获取id为car的元素的值
		var oUl = document.getElementsByTagName("ul")[0]; //获取下标为0的ul标签中的值
		for(var i=0; i<aData.length; i++){               //使用for循环 获取aDate的字符串长度
			var oLi = document.createElement("li");
			var data = aData[i];
			oLi.innerHTML += '<div class="pro_img"><img src="'+data["imgUrl"]+'" width="150" height="150"></div>';
			oLi.innerHTML += '<h3 class="pro_name"><a href="#">'+data["proName"]+'</a></h3>';
			oLi.innerHTML += '<p class="pro_price">'+data["proPrice"]+'元</p>';
			oLi.innerHTML += '<p class="pro_rank">'+data["proComm"]+'万人评价</p>';
			oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
			oUl.appendChild(oLi);
		}  
	}
	$(function(){
		$("div.add_btn").click(function(){       //触发按钮的点击事件
			$("#car").append('<div class="row hid"><div class="img left"><img src="'+$(this).parent().find("img").attr("src")+'" height="80" width="80"></div><div class="name left"><span>'+$(this).parent().find("a").html()+'</span></div><div class="price left"><span>'+$(this).parent().find("p").html()+'</span></div><div id="delete" class="ctrl left"><a href="javascript:;">×</a></div></div>');
			$(".ctrl>a").click(function(){
				$(this).parent().parent().remove();
			});
		});
	});                               
//		var aBtn = getClass(oBox,"add_btn");          //调用函数getClass
//		for(var i=0; i<aBtn.length; i++){             //获取点击的按钮的下标
//			aBtn[i].index = i;
//			aBtn[i].onclick = function(){             //为按钮创建一个点击事件
//				var oDiv = document.createElement("div");
//				var data = aData[this.index];
//				oDiv.className = "row hid";
//				oDiv.innerHTML += '<div class="img left"><img src="'+data["imgUrl"]+'" width="80" height="80"></div>';
//				oDiv.innerHTML += '<div class="name left"><span>'+data["proName"]+'</span></div>';
//				oDiv.innerHTML += '<div class="price left"><span>'+data["proPrice"]+'元</span></div>';
//				oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;">×</a></div>';
//				oCar.appendChild(oDiv);                  //点击按钮时添加一个div并且包含相对于齐按钮下标的数据
//				var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];  //获取div里最后一个子的第一个a标签
//				delBtn.onclick=function(){
//					oCar.removeChild(oDiv);                     //点击按钮时删除这个div
//				}
//			}
//		}
//		function getClass(oBox,tagname){
//			var aTag = oBox.getElementsByTagName("*");
//			var aBox = [];
//			for(var i=0; i<aTag.length; i++){
//				if(aTag[i].className == tagname){
//					aBox.push(aTag[i]);
//				}
//			}
//			return aBox               
//		}
	