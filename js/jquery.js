
(function(){
	$(".nav_show").hover(function() {
	  if($(this).find("div").length > 0){
	  	 $(this).css('background','#fff');
	     $(this).children("div").slideDown(100);
	     $(this).find(".trangle_down_gray").removeClass().addClass('trangle_up');
	  }
	},function() {
		 $(this).css('background','');
	     $(this).children("div").slideUp(100);
	     $(this).find('.trangle_up').removeClass().addClass('trangle_down_gray');
	});

})();

(function(){

	$('#so_hg').hover(function(){
		$('#so_lt').css('display','block');
	},function(){
		$('#so_lt').css('display','none');
	});

})();

(function(){
	$('#nav_btn_li').hover(function(){
		$('#nav_btn_ul').slideDown(400);
	},function(){
		$('#nav_btn_ul').css('display','none');
	});

	$('#nav_btn_ul').children('li').hover(function(e){
		var index = $(this).index();

	$('.nav_btn_div').eq(index).css('display','block');
	},function(){
		$('.nav_btn_div').css('display','none');
	});
})();

(function(){

	var $car = $('#carousel');
	var $car_clk = $('#car_clk');
	var $ul = $('#car_ul1');
	var $li = $ul.find('li');
	$li.on('click',function(){
		$(this).find('a').addClass('active').siblings().removeClass();
	});



	$car.hover(function(){
		$car_clk.css('display','block');
	},function(){
		$car_clk.css('display','none');
	})
})();