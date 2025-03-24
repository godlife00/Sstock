// JavaScript Document

/*검색창*/
function toggleId(id) {
	var obj = document.getElementById(id);
	obj.style.display = (obj.style.display == "none" ? "block" : "none");
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
function toggleId(id) {
	var obj = document.getElementById(id);
	obj.style.display = (obj.style.display == "none" ? "block" : "none");
}

/*
|--------------------------------------------------------------------------
위로 바로가기
|--------------------------------------------------------------------------
*/
(function ($) {
	$.fn.UItoTop = function (options) {

		var defaults = {
			text: 'To Top',
			min: 200,
			inDelay: 600,
			outDelay: 400,
			containerID: 'toTop',
			containerHoverID: 'toTopHover',
			scrollSpeed: 1200,
			easingType: 'linear'
		},
			settings = $.extend(defaults, options),
			containerIDhash = '#' + settings.containerID,
			containerHoverIDHash = '#' + settings.containerHoverID;

		$('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
		$(containerIDhash).hide().on('click.UItoTop', function () {
			$('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);
			$('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
			.prepend('<span id="' + settings.containerHoverID + '"></span>')
			.hover(function () {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function () {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});

		$(window).scroll(function () {
			var sd = $(window).scrollTop();
			if (typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if (sd > settings.min)
				$(containerIDhash).fadeIn(settings.inDelay);
			else
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
	};
})(jQuery);

/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function ($) {
	$.fn.UItoTop = function (options) {
		var defaults = { text: 'To Top', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 1200, easingType: 'linear' }, settings = $.extend(defaults, options), containerIDhash = '#' + settings.containerID, containerHoverIDHash = '#' + settings.containerHoverID; $('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>'); $(containerIDhash).hide().on('click.UItoTop', function () { $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType); $('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType); return false; }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function () { $(containerHoverIDHash, this).stop().animate({ 'opacity': 1 }, 600, 'linear'); }, function () { $(containerHoverIDHash, this).stop().animate({ 'opacity': 0 }, 700, 'linear'); }); $(window).scroll(function () {
			var sd = $(window).scrollTop(); if (typeof document.body.style.maxHeight === "undefined") { $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 }); }
			if (sd > settings.min)
				$(containerIDhash).fadeIn(settings.inDelay); else
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
	};
})(jQuery);

$(document).ready(function () {
	/*
	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear'
	};
	*/

	$().UItoTop({ easingType: 'easeOutQuart' });

	Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});

	// 실시간 AI주가예측 차트
	// 가상 선차트
	if ($('#sum_topchart_band').length) {
		var sourceData = ai_data;

		var pointFormatValue = is_tooltip = '';
		if (ai_yap == 'Y') {
			pointFormatValue = '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>';
			is_tooltip = true;

		} else {
			pointFormatValue = '<span style="color:{series.color}">{series.name}: <b>**,***</b><br/>';
			is_tooltip = false;
		}

		var chart_linear = new Highcharts.Chart({
			chart: {
				renderTo: 'sum_topchart_band',
				backgroundColor: {
					// linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
				},
				margin: [0, 0, 0, 0],
				events: {
					load: function () {
						setTimeout(() => {
							const series = this.series[0];
							series.update({
								dataLabels: {
									enabled: true
								}
							});
						}, 500); // 1초 후에 하이차트를 랜더링합니다.
					}
				}
			},
			credits: {
				enabled: false
			},

			lang: {
				noData: "해당 데이터가 없습니다",
			},

			exporting: {
				enabled: false
			},

			legend: {
				enabled: false,
			},

			tooltip: {
				// shared: true,
				// crosshairs: true,
				enabled: is_tooltip,
				pointFormat: pointFormatValue
			},

			title: {
				text: null
			},

			credits: {
				enabled: false,
			},

			lang: {
				noData: "해당 데이터가 없습니다",
			},

			colors: ["#ff545b", "#4d6ee4", "#F0CC09"],

			xAxis: [{
				categories: ai_date,
			}],

			yAxis: {
				visible: true,
			},

			series: [{
				type: 'spline',
				name: '예상주가',
				zIndex: 3,
				data: sourceData,
				dataLabels: {
					enabled: false, // 초기에는 데이터 라벨을 숨김
					y: -10,
					formatter: function () {
						if (this.point === this.series.data[this.series.data.length - 1]) {
							return Highcharts.numberFormat(this.y, 0);
						}
						return null;
					}
				}
			}],

			plotOptions: {
				series: {
					marker: {
						enabled: false,
					}
				},
			},
		});

		/* add regression line dynamically */
		chart_linear.addSeries({
			type: 'line',
			name: '주가추세',
			// dashStyle: 'Dot',
			color: "#dbdfed",
			enableMouseTracking: false,
			/* function returns data for trend-line */
			data: (function () {
				return fitOneDimensionalData(sourceData);
			})()
		});

		function fitOneDimensionalData(source_data) {
			var trend_source_data = [];
			for (var i = source_data.length; i-- > 0;) {
				trend_source_data[i] = [i, source_data[i]]
			}
			var regression_data = fitData(trend_source_data).data
			var trend_line_data = [];
			for (var i = regression_data.length; i-- > 0;) {
				trend_line_data[i] = regression_data[i][1];
			}
			return trend_line_data;
		}
	}

	// 기관, 외국인 수급 차트
	function regression(x, y, typ) {
		var type = (typ == null) ? 'linear' : typ;
		var N = x.length;
		var slope;
		var intercept;
		var SX = 0;
		var SY = 0;
		var SXX = 0;
		var SXY = 0;
		var SYY = 0;
		var Y = [];
		var X = [];

		if (type == 'linear') {
			X = x;
			Y = y;
		}
		else if (type == 'exp' || type == 'exponential') {
			for (var i = 0; i < y.length; i++) {
				// ignore points <= 0, log undefined.
				if (y[i] <= 0) {
					N--;
				}
				else {
					X.push(x[i]);
					Y.push(Math.log(y[i]));
				}
			}
		}

		for (var i = 0; i < N; i++) {
			SX = SX + X[i];
			SY = SY + Y[i];
			SXY = SXY + X[i] * Y[i];
			SXX = SXX + X[i] * X[i];
			SYY = SYY + Y[i] * Y[i];
		}

		slope = (N * SXY - SX * SY) / (N * SXX - SX * SX);
		intercept = (SY - slope * SX) / N;

		return [slope, intercept];
	}

	function linearRegression(X, Y) {
		var ret;
		ret = regression(X, Y, 'linear');
		return [ret[0], ret[1]];
	}
	function fitData(data, typ) {
		var type = (typ == null) ? 'linear' : typ;
		var ret;
		var res;
		var x = [];
		var y = [];
		var ypred = [];

		for (i = 0; i < data.length; i++) {
			if (data[i] != null && Object.prototype.toString.call(data[i]) === '[object Array]') {
				if (data[i] != null && data[i][0] != null && data[i][1] != null) {
					x.push(data[i][0]);
					y.push(data[i][1]);
				}
			}
			else if (data[i] != null && typeof data[i] === 'number') {//If type of X axis is category
				x.push(i);
				y.push(data[i]);
			}
			else if (data[i] != null && Object.prototype.toString.call(data[i]) === '[object Object]') {
				if (data[i] != null && data[i].x != null && data[i].y != null) {
					x.push(data[i].x);
					y.push(data[i].y);
				}
			}
		}

		if (type == 'linear') {

			ret = linearRegression(x, y);
			for (var i = 0; i < x.length; i++) {
				res = ret[0] * x[i] + ret[1];
				ypred.push([x[i], res]);
			}

			return {
				data: ypred,
				slope: ret[0],
				intercept: ret[1],
				y: function (x) {
					return (this.slope * x) + this.intercept;
				},
				x: function (y) {
					return (y - this.intercept) / this.slope;
				}
			};
		}
		else if (type == 'exp' || type == 'exponential') {

			ret = expRegression(x, y);
			for (var i = 0; i < x.length; i++) {
				res = ret[1] * Math.pow(ret[0], x[i]);
				ypred.push([x[i], res]);
			}
			ypred.sort();

			return {
				data: ypred,
				base: ret[0],
				coeff: ret[1]
			};
		}
	}

	// 수급분석 차트 스크립트
	var $initialElement = $(".시그널.active");
	var backgroundColors = {
		"매우약함": "#3655D6",
		"약함": "#3655D6",
		"보통": "#58BA62",
		"강함": "#FF545B",
		"매우강함": "#FF545B"
	};
	if (backgroundColors.hasOwnProperty($initialElement.text())) {
		$initialElement.prevAll().andSelf().css("background-color", backgroundColors[$initialElement.text()]);
	}
});
function FiSdChart(obj_id, tt, value) {
	Highcharts.chart(obj_id, {
		chart: {
			renderTo: obj_id,
			chart: {
				type: 'column'
			},
			backgroundColor: {
				// linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
			},
		},
		// 하단 네비게이션 제거
		navigator: {
			enabled: false
		},

		// 스크롤바 제거
		scrollbar: {
			enabled: false
		},

		// 기간범위선택
		rangeSelector: {
			enabled: false,
			// allButtonsEnabled: true,
			// selected: 0,
		},

		legend: {
			enabled: false,
		},

		credits: {
			enabled: false
		},

		lang: {
			noData: "해당 데이터가 없습니다",
		},

		exporting: {
			enabled: false
		},

		tooltip: {
			useHTML: true,
			xDateFormat: '%Y.%m.%d',
			style: {
				fontWeight: 'bold',
				fontSize: '13px',
				color: '#363F4B',
			},
			shadow: false,
			split: false,
			shared: true,
			crosshairs: true,
		},

		rangeSelector: {
			selected: 1
		},

		lang: {
			noData: "해당 데이터가 없습니다",
		},

		title: {
			text: tt,
			align: 'left',
			verticalAlign: 'top',
		},

		lang: {
			noData: "해당 데이터가 없습니다",
		},

		xAxis: {
			type: 'datetime',
			visible: true,
			tickWidth: 0,
			crosshair: true,
			labels: {
				enabled: false,
				// formatter: function () {
				//     return Highcharts.dateFormat('%y.%m.%d', this.value);
				// },
				// style: {
				//     color: '#6a727b',
				//     fontSize: '12px'
				// },
			},
			ordinal: true,
		},

		yAxis: {
			visible: true,
			title: {
				text: null
			},
			gridLineWidth: 0,
			labels: {
				enabled: false
			},
			plotLines: [{
				color: '#DBDFED',
				width: 1,
				value: 0
			}],
		},

		series: [{
			type: 'column',
			data: value,
			tooltip: {
				pointFormat: '거래금액: {point.y} <br> 비율: {point.비율:,.2f}%'
			}
		}],
		plotOptions: {
			series: {
				pointWidth: 32,

			},
			column: {
				minPointLength: 5,
				dataLabels: {
					enabled: true,
					crop: false,
					color: '#939393',
					overflow: 'allow', // 여기를 'allow'로 수정
					//format: '{point.y:,.2f}',
				},
			}
		},
	});
}






//본문 폰트사이즈 조절, 기본사이즈=1em
font = 1.3;
line = 19;
function resize(f) {
	if (f == 1.3) font = 1.3;
	else font += f;
	document.getElementById("article").style.fontSize = font + 'em';
	document.getElementById("article").style.lineHeight = parseInt(font * 15) + 'pt';
}

//이미지확대
function imgToggle(num, src) {
	var imgObj = document.getElementById("IMG_" + num);
	var classObj = document.getElementById("CLAS_" + num);

	if (classObj.className == "bt_z") {
		var newImage = new Image();
		newImage.src = src;
		if (newImage.width < 200)
			newImage.width = 200;
		strWidth = "100%";
		if (newImage.width < 400)
			strWidth = newImage.width + "px";
		classObj.className = "bt_z zo";
		imgObj.style.width = strWidth;
	}
	else if (classObj.className == "bt_z zo") {
		classObj.className = "bt_z";
		imgObj.style.width = "200px";
	}
}
function pushStockCode(itemCode) {
	if (window.MTSPremiumNews != null) {
		MTSPremiumNews.returnItemCode(itemCode);
	} else {
		self.location.href = "iPhone:returnItemCode=".concat(itemCode);
	}
}




/*롤링업*/
/*
* vertical news ticker
* Tadas Juozapaitis ( kasp3rito@gmail.com )
* http://plugins.jquery.com/project/vTicker
*/
(function (a) { a.fn.vTicker = function (b) { var c = { speed: 700, pause: 4000, showItems: 3, animation: "", mousePause: true, isPaused: false, direction: "up", height: 0 }; var b = a.extend(c, b); moveUp = function (g, d, e) { if (e.isPaused) { return } var f = g.children("ul"); var h = f.children("li:first").clone(true); if (e.height > 0) { d = f.children("li:first").height() } f.animate({ top: "-=" + d + "px" }, e.speed, function () { a(this).children("li:first").remove(); a(this).css("top", "0px") }); if (e.animation == "fade") { f.children("li:first").fadeOut(e.speed); if (e.height == 0) { f.children("li:eq(" + e.showItems + ")").hide().fadeIn(e.speed) } } h.appendTo(f) }; moveDown = function (g, d, e) { if (e.isPaused) { return } var f = g.children("ul"); var h = f.children("li:last").clone(true); if (e.height > 0) { d = f.children("li:first").height() } f.css("top", "-" + d + "px").prepend(h); f.animate({ top: 0 }, e.speed, function () { a(this).children("li:last").remove() }); if (e.animation == "fade") { if (e.height == 0) { f.children("li:eq(" + e.showItems + ")").fadeOut(e.speed) } f.children("li:first").hide().fadeIn(e.speed) } }; return this.each(function () { var f = a(this); var e = 0; f.css({ overflow: "hidden", position: "relative" }).children("ul").css({ position: "absolute", margin: 0, padding: 0 }).children("li").css({ margin: 0, padding: 0 }); if (b.height == 0) { f.children("ul").children("li").each(function () { if (a(this).height() > e) { e = a(this).height() } }); f.children("ul").children("li").each(function () { a(this).height(e) }); f.height(e * b.showItems) } else { f.height(b.height) } var d = setInterval(function () { if (b.direction == "up") { moveUp(f, e, b) } else { moveDown(f, e, b) } }, b.pause); if (b.mousePause) { f.bind("mouseenter", function () { b.isPaused = true }).bind("mouseleave", function () { b.isPaused = false }) } }) } })(jQuery);

