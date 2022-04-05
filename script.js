$(document).ready(function(){
		  var slideBtn = $('#slide_btn>ul>li:not(:first-child)');
		  var slideBtnStop = $('#slide_btn>ul>li:first-child');
		  var newTop = $('#new>ul>li>p').offset();
		  var ticketTop = $('#ticket_btn').offset();
		  var funTop = $('#fun_box>ul>li').offset();
		  var informationTop = $('#today_smart_bottom').offset();
		  var editorTop = $('#clip_btn').offset();
		  $(window).scroll(function(){
			 let sc = $('html, body').scrollTop()
			 let newsc = $('#new_box').offset().top
			 let ticketsc = $('#ticket_promotion').offset().top
			 let funsc = $('#fun').offset().top
			 let informationsc = $('#information').offset().top
			 let editorsc = $('#editor').offset().top
			 $('#sc').html(sc)
			 $('#sc2').html(ticketsc)
			 if(0<sc && sc<newsc){$('#new_side_box').css({'position':'absolute','top':'1000px','right':'20px'})}
			if(newsc<=sc && sc<ticketsc){$('#new_slide>li:nth-child(1)').css({'background-color':'rgb(255, 94, 0)','color':'#fff'}).siblings('li').css({'background-color':'#eee','color':'#000'})
				$('#new_side_box').css({'position':'fixed','top':'100px','right':'20px'})}
			if(ticketsc<=sc && sc<funsc){
				$('#new_slide>li:nth-child(2)').css({'background-color':'rgb(255, 94, 0)','color':'#fff'}).siblings('li').css({'background-color':'#eee','color':'#000'})
				 $('#new_side_box').css({'position':'fixed','top':'100px','right':'20px'})
			}
			if(funsc<=sc && sc<informationsc){
				$('#new_slide>li:nth-child(3)').css({'background-color':'rgb(255, 94, 0)','color':'#fff'}).siblings('li').css({'background-color':'#eee','color':'#000'})
				 $('#new_side_box').css({'position':'fixed','top':'100px','right':'20px'})
			}
			if(informationsc<=sc && sc<editorsc){
				$('#new_slide>li:nth-child(4)').css({'background-color':'rgb(255, 94, 0)','color':'#fff'}).siblings('li').css({'background-color':'#eee','color':'#000'})
				 $('#new_side_box').css({'position':'fixed','top':'100px','right':'20px'})
			}
			if(editorsc<=sc){
				$('#new_slide>li:nth-child(5)').css({'background-color':'rgb(255, 94, 0)','color':'#fff'}).siblings('li').css({'background-color':'#eee','color':'#000'})
				 $('#new_side_box').css({'position':'fixed','top':'100px','right':'20px'})
			}
			 
		  })
		  $('#new_slide>li:nth-child(1)').click(function(){
			$("html, body").animate({scrollTop: newTop.top + 200},500);
		  })
		  $('#new_slide>li:nth-child(2)').click(function(){
			$("html, body").animate({scrollTop: ticketTop.top},500);
		  })
		  $('#new_slide>li:nth-child(3)').click(function(){
			$("html, body").animate({scrollTop: funTop.top+200},500);
		  })
		  $('#new_slide>li:nth-child(4)').click(function(){
			$("html, body").animate({scrollTop: informationTop.top},500);
		  })
		  $('#new_slide>li:nth-child(5)').click(function(){
			$("html, body").animate({scrollTop: editorTop.top + 100},500);
		  })
		  $('#header3_box>ul').mouseenter(function(){
			  $('.nav_hidden,#nav_bg').show()
		  })
		  $('#header3_box>ul').mouseleave(function(){
			$('.nav_hidden,#nav_bg').hide()
		})
		$('#slide_btn>ul>li:not(#slide_btn>ul>li:first-child)').click(function(){
			$('#slide_box').animate({'left':$(this).index()*-100+'%'})
		})
		  slideBtn.click(function(){
			$(this).css({'background-color':'red'});
			$(this).siblings().css({'background-color':'rgba(255,255,255,0.3)'})
			slideBtnStop.click(function(){
				$(this).css({'transform':'transformX(20px)'})
				
			})
		  })
		  let num = 0;
		  let speed = 100;
		  let stop = 0;
		  setInterval(function(){
			  num = num - speed
			  if(num <= -800){num=0}
			$('#slide_box').stop().animate({'left':+num+'%'})
			$('#slide_btn>ul>li:nth-child('+((num*-0.01)+2)+')').stop().css({'background-color':'red'}).siblings().css({'background-color':'rgba(255,255,255,0.3)'})
		  },3000)
		  $('#footer_top_image1').click(function(){
			  $('#footer_top_hover_list_left').toggle();
		  })
		  $('#footer_top_image2').click(function(){
			  $('#footer_top_hover_list_right').toggle();
		  })
		  $('#pop_close').click(function(){
			  $('#pop_hidden_box').slideUp();
		  })
		  $('#header3_box>ul').mouseenter(function(){
			  $('.nav_hidden').stop().css({'display':'block'})
		  })
		  $('#header3_box>ul').mouseleave(function(){
			  $('.nav_hidden').stop().css({'display':'none'})
		  })
		  $('#slide_btn_stop').click(function(){
			 if(stop == 0){stop = 1; speed = 0;}
			 else if(stop == 1){stop = 0; speed = 100;}
		  })
	  })
  