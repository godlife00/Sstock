// JavaScript Document

/*검색창*/
function toggleId(id){
 var obj = document.getElementById(id);
 obj.style.display = (obj.style.display=="none" ?"block":"none");
}



/*메인네비게이션*/
$(function () {
	$(window).scroll(function (event) {
	  // what the y position of the scroll is
	  var y = $(this).scrollTop();
	  
	  // whether that's below the form
	  if (y > 0) {
		// if so, ad the fixed class
		$('#top').addClass('fixed');
	  } else {
		// otherwise remove it
		$('#top').removeClass('fixed');
	  }
	});
});


/* 기사본문 공유버튼 */
function toggleId(id){
 var obj = document.getElementById(id);
 obj.style.display = (obj.style.display=="none" ?"block":"none");
}

/*
|--------------------------------------------------------------------------
위로 바로가기
|--------------------------------------------------------------------------
*/
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
    			text: 'To Top',
    			min: 200,
    			inDelay:600,
    			outDelay:400,
      			containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;
		
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
					
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).fadeIn(settings.inDelay);
			else 
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
};
})(jQuery);

/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

$(document).ready(function() {
			/*
			var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			*/
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
		});
		
		
		
		
		
		
		
		
	//본문 폰트사이즈 조절, 기본사이즈=1em
	font = 1.3;
	line = 19;
	function resize(f){
		if(f==1.3) font = 1.3;
		else font += f;
		document.getElementById("article").style.fontSize = font + 'em';
		document.getElementById("article").style.lineHeight = parseInt(font*15)+'pt';
	}
	
	//이미지확대
	function imgToggle(num, src)
	{
		var imgObj=document.getElementById("IMG_"+num);
		var classObj=document.getElementById("CLAS_"+num);

		if(classObj.className=="bt_z")
		{
			var newImage = new Image();
			newImage.src = src;
			if( newImage.width < 200 )
				newImage.width = 200;
			strWidth = "100%";
			if( newImage.width < 400 )
				strWidth = newImage.width + "px";
			classObj.className="bt_z zo";
			imgObj.style.width=strWidth;
		}
		else if(classObj.className=="bt_z zo")
		{
			classObj.className="bt_z";
			imgObj.style.width="200px";
		}
	}
	function pushStockCode ( itemCode ) {
	if ( window.MTSPremiumNews != null ) {
			   MTSPremiumNews.returnItemCode ( itemCode );
	} else {
			   self.location.href="iPhone:returnItemCode=".concat(itemCode);
			   }
	}




/*롤링업*/
/*
* vertical news ticker
* Tadas Juozapaitis ( kasp3rito@gmail.com )
* http://plugins.jquery.com/project/vTicker
*/
(function(a){a.fn.vTicker=function(b){var c={speed:700,pause:4000,showItems:3,animation:"",mousePause:true,isPaused:false,direction:"up",height:0};var b=a.extend(c,b);moveUp=function(g,d,e){if(e.isPaused){return}var f=g.children("ul");var h=f.children("li:first").clone(true);if(e.height>0){d=f.children("li:first").height()}f.animate({top:"-="+d+"px"},e.speed,function(){a(this).children("li:first").remove();a(this).css("top","0px")});if(e.animation=="fade"){f.children("li:first").fadeOut(e.speed);if(e.height==0){f.children("li:eq("+e.showItems+")").hide().fadeIn(e.speed)}}h.appendTo(f)};moveDown=function(g,d,e){if(e.isPaused){return}var f=g.children("ul");var h=f.children("li:last").clone(true);if(e.height>0){d=f.children("li:first").height()}f.css("top","-"+d+"px").prepend(h);f.animate({top:0},e.speed,function(){a(this).children("li:last").remove()});if(e.animation=="fade"){if(e.height==0){f.children("li:eq("+e.showItems+")").fadeOut(e.speed)}f.children("li:first").hide().fadeIn(e.speed)}};return this.each(function(){var f=a(this);var e=0;f.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:0,padding:0});if(b.height==0){f.children("ul").children("li").each(function(){if(a(this).height()>e){e=a(this).height()}});f.children("ul").children("li").each(function(){a(this).height(e)});f.height(e*b.showItems)}else{f.height(b.height)}var d=setInterval(function(){if(b.direction=="up"){moveUp(f,e,b)}else{moveDown(f,e,b)}},b.pause);if(b.mousePause){f.bind("mouseenter",function(){b.isPaused=true}).bind("mouseleave",function(){b.isPaused=false})}})}})(jQuery);