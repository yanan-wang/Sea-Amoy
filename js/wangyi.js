// window.onload = function(){
	// carousel
	(function(){
		var oCarl = document.getElementById('carousel');
		var oImg = document.getElementById('imga');
		var oCar = document.getElementById('car_clk');
		var oUl = document.getElementById('car_ul1');
		var oDiv = document.getElementById('carousel');
		var oLi = oUl.getElementsByTagName('li');
		var oA = oUl.getElementsByTagName('a');
		var oParv = document.getElementById('car_parv');
		var oNext = document.getElementById('car_next');

		var arr = ['images/lun.jpg','images/lun2.jpg','images/lun3.jpg','images/lun4.jpg'];
		var timer = null;
		var num = 0;
		var onOff = true;
		oCarl.onmousemove = function(){
			oCar.style.display = 'block';
		}
		oImg.onmouseout = function(){
			oCar.style.display = 'none';
		}


		function fn1(){
			oImg.src = arr[num];
			for (var i = 0; i < oA.length; i++) {
				oA[i].className = '';
			}
			oA[num].className = 'active';
		}
		fn1();


		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onclick = function(){
				num = this.index;
				fn1();
			}
		}

		function auto(){
			timer = setInterval(function(){
			num++;
			num%=arr.length;
			fn1();
		},2000);
		}
		auto();
		oDiv.onmouseover = function(){
			clearInterval(timer);
		};
		oDiv.onmouseout= auto;	


		oParv.onclick = function(){
			num --;
			if (num == -1) {
				num = arr.length-1;
			}
			fn1();
		}
		oNext.onclick = function(){
			num ++;
			if (num == arr.length) {
				num = 0;
			}
			fn1();
		}
	})();
	//list_nav
	(function(){
		var oUl = document.getElementById('lest_ul1');
		var oLi = oUl.getElementsByTagName('li');
		var aLi = oUl.getElementsByClassName('nav_show');
		var oStr1 = oUl.getElementsByTagName('strong');
		var index = null;
		var onOff = true;

		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				this.getElementsByTagName('div')[0].style.display = 'block';
				this.style.background = '#fff';
				oStr1[this.index].className = 'trangle_up';
			}
			aLi[i].onmouseout = function(){
				this.getElementsByTagName('div')[0].style.display = 'none';
				this.style.background = '';
				oStr1[this.index].className = 'trangle_down_gray';
			}
		}
	})();
	// 可下载二维码
	(function(){
		
		function fnApp(id,id1){
			var oSo = document.getElementById(id1);
			var oSot = document.getElementById(id);
			oSo.onmouseover= function(){
				oSot.style.display = 'block';
			}
			oSo.onmouseout= function(){
				oSot.style.display = 'none';
			}
		}
		fnApp('so_lt','so_hg');
		// fnApp('so_lt1','app1');
		
	})();
	// side 边栏分类
	(function(){
		var oLi = document.getElementById('nav_btn_li');
		var aUl = document.getElementById('nav_btn_ul');
		var aLi = aUl.getElementsByTagName('li');
		var aDiv = aUl.getElementsByClassName('nav_btn_div');
		// var aDiv = document.getElementById('nav_btn_div');
		var index = 0;
		oLi.onmouseover = function(){
			aUl.style.display = 'block';
		}
		oLi.onmouseout = function(){
			aUl.style.display = 'none';
		}

		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
					aDiv[this.index].style.display = 'block';
			}
			aLi[i].onmouseout = function(){
					aDiv[this.index].style.display = 'none';
			}
		}
	})();
	// con_hid 
	// (function(){
	// 	var oDiv = document.getElementById('cont_one');
	// 	var aDiv = oDiv.getElementsByTagName('div')[0];
	// 	var rDiv = aDiv.getElementsByTagName('div')[0];

	// 	oDiv.onmouseover = function(){
	// 		rDiv.style.display = 'block';
	// 	}
	// 	oDiv.onmouseout = function(){
	// 		rDiv.style.display = 'none';
	// 	}
	// })();
	(function(){
		var oDiv = document.getElementById('fot_con_ul');
		var oLi = oDiv.getElementsByClassName('fs');
		var oImg = oDiv.getElementsByTagName('img');
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function(){
			 oImg[this.index].style.display = 'block';
			}
			oLi[i].onmouseout = function(){
			 oImg[this.index].style.display = 'none';
			}
		}
	})();
	(function(){
		$(document).ready(function() {
		$("#anchor li a").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 500,
				easing: "swing"
			});
				return false;
			});
		$("#anchor1 li a").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 500,
				easing: "swing"
			});
				return false;
			});
		});

	})();

	
// }

window.onscroll=function(){
	(function(){
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		fna('anchor');
		function fna(id){
			var oDiv = document.getElementById(id);
			if(scrollTop>= 500){
				oDiv.style.display="block";  
			} else{
				oDiv.style.display="none"; 
			}
		}
				
	})();

}
