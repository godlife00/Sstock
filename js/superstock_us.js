$(document).ready(function () {

    // 초기화: 모든 탭에서 active 클래스 제거
    $("ul.tabs li").removeClass("active");
    $(".tabsArea .tab_content").hide();
    
    // URL 해시값이 있으면 해당 탭을 보여주고, 없으면 첫 번째 탭을 보여줍니다
    var hash = window.location.hash;
    if (hash) {
        var activeTab = hash.substring(1); // '#' 제거
        $("#" + activeTab).fadeIn();
        $("ul.tabs li[rel='" + activeTab + "']").addClass("active");
    } else {
        $(".tabsArea .tab_content:first").show();
        $("ul.tabs li:first").addClass("active");
    }

    $("ul.tabs li").click(function (e) {
        e.preventDefault();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        window.history.replaceState({}, document.title, window.location.pathname + '#' + activeTab);
    });


    function modalBoxJs() {
        // 모달팝업 - 오늘의 퀀트 UP        
        $('.today_quantUP .today_guide').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.todayQuantUP_pop').show().addClass('slideUp');
        });
        // 모달팝업 - 오늘의 퀀트 UP        
        $('.top_Returns .topReturns_guide').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.topReturns_pop').show().addClass('slideUp');
        });

        // 모달팝업 - 퀀트분석점수        
        $('.adequateArea .listWrap .mid .charm_num').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_pop01').show().addClass('slideUp');
        });
        // 모달팝업 - 증권사 투자의견
        $('.mainBox.inve_opinion .signal_guide, .mainBox.inve_opinion .c_title').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_pop02').show().addClass('slideUp');
        });
        // 모달팝업 - 스마트스코어
        $('.mainBox.investCharm_area .signal_guide, .mainBox.investCharm_area .c_title').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_diagnosis').show().addClass('slideUp');
        });
        // 모달팝업 - my퀀트전략 저장하기
        $('.my_factor').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.myquant_save').show().addClass('slideUp');
        });
        // 모달팝업 - my퀀트전략 제목 수정        
        $('.edit_btn').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.myquant_nameEdt').show().addClass('slideUp');
        });
        // 모달팝업 - 관심종목 지정 저장하기
        $('.attention_pop').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_guest').show().addClass('slideUp');
        });
        // 주가&EPS 모달 팝업
        $('.chart_box .c_title + .signal_guide').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.eps_pop01').show().addClass('slideUp');
        });

        // 모달팝업 - 닫기
        $('.modal .pop_header .clse, .blocker').on('click', function () {
            $('.blocker').hide();
            $('.modal').hide().removeClass('slideUp');
        });
    }
    modalBoxJs();

    // 퀀트 전략 프로 최대 갯수 제한하는 스크립트
    function limitCheckboxSelection(checkboxName, maxLimit) {
        var checkboxes = $(`input[name="${checkboxName}"]`);
        checkboxes.change(function () {
            var selectedCount = checkboxes.filter(':checked').length;
            if (selectedCount > maxLimit) {
                $(this).prop('checked', false);
                alert(`최대 ${maxLimit}개 팩터를 선택하세요.`);
            }
        });
    }
    limitCheckboxSelection("allCheck_pro", 5);  // 최대 선택 가능한 개수를 인자로 함수 호출
    limitCheckboxSelection("allCheck_basic", 2);  // 최대 선택 가능한 개수를 인자로 함수 호출

    $(function () {
        // 달력 초기값을 오늘 날짜로 설정해줘야 합니다.
        $("#datepicker").datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
    });

    //메인 다우선물,다우지수
    if ($('.maingdowSwiper').length) {
        var swiper = new Swiper('.maingdowSwiper', {
            loop: true,
            spaceBetween: 15,
            slidesPerView: 4.5,
            slidesPerGroup: 1,
            loopAdditionalSlides: 1, // 슬라이드 복제를 위한 추가 슬라이드 수
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 3000,
            grabCursor: true,
            mousewheelControl: true,
            keyboardControl: true,
            // allowTouchMove: false,        

            breakpoints: {
                359: {
                    slidesPerView: 1.5,
                },
                360: {
                    slidesPerView: 2,
                },
                425: {
                    slidesPerView: 2.1,
                },
                680: {
                    slidesPerView: 2.3,
                },
                1024: {
                    slidesPerView: 3.3,
                },
                1440: {
                    slidesPerView: 4.3,
                }
            },
        });
    }
});

function historyHome() {                            
	if ( document.referrer ) {                                                                 
		history.back();
	}                            
	else {                                 
		location.href = "/main/us";
	}
} 

// ##### Search - 종목 검색 자동완성 결과 노출
var tId = null;
var flagInSearch = false;
$(function() {
    $('.sch_autocomplete').on('mouseenter', function() {
        flagInSearch = true;
    });
    $('.sch_autocomplete').on('mouseleave', function() {
        flagInSearch = false; 
    });
    
    //검색
    $('.searchArea .searchInput').on("keydown", function (e) {        
        var _this = $(this);
        
        $('.searchArea').addClass('keydown');
        $('.sch_autocomplete').addClass('focus_on _show');

        if(e.keyCode === 13) {
            e.preventDefault();
            
            if($('.sch_autocomplete ul li').length < 1) {
                return;
            }
            
            location.hash = '#searchInput';
            location.href = $('.sch_autocomplete ul li').first().children('a').attr('href');
        }
    });

    $('.searchArea .searchInput').on("focusout", function () {

        if(flagInSearch) {
            return;
        }
        $('.searchArea').removeClass('keydown');                
        $('.sch_autocomplete').removeClass('focus_on _show');
    });

    $('.mainBox .main_searching .searchArea .searchInput').on("keydown", function () {
        if(tId) { 
            clearTimeout(tId);
        }

        var _this = $(this);
        tId = setTimeout(function() {
            genSearchTickerResult(ticker_list, _this.val(), $('.sch_autocomplete'));
        }, 10);
    });

    $('.mainBox .main_searching .searchArea .searchInput').on("change", function () {        
        $('.searchArea').addClass('keydown');
        $('.sch_autocomplete').addClass('focus_on _show');
        if(tId) { 
            clearTimeout(tId);
        }

        var _this = $(this);
        tId = setTimeout(function() {
            genSearchTickerResult(ticker_list, _this.val(), $('.sch_autocomplete'));
        }, 10);
    });
});

function onSearchTicker(ticker) {
	if(ticker=='') { alert('선택된 종목코드가 없습니다.'); return; }
    $('.searchArea .searchInput').val('');
	$('.searchArea').removeClass('keydown');                
	$('.sch_autocomplete').removeClass('focus_on');
	location.href = '/us/view/' + ticker;
}

/**
 *  Ticker List Search Result Generator
 */
function genSearchTickerResult(data, keyword, $elem) {

    var searchResultCnt = 100;

    /* init element Contents */
    $elem.removeClass('_show');
    $elem.children('ul').hide().html('');
    $elem.children('.no_result').hide();

    if(keyword.length < 1) {
        return;
    }

    if( ! $elem.hasClass('_show')) {
        $elem.addClass('_show');
    }

    /* remove special chars */
    var spCharReg = /[\{\}\[\]\/?,;: |\)*~`!^\+<>@\#$%\\\=\(\'\"]/gi;

    var filteredKeyword = keyword.trim();
    if(spCharReg.test(filteredKeyword)) {
        filteredKeyword = filteredKeyword.replace(spCharReg, '');  
    }

    // filter keyword is empty => not found.
    if(filteredKeyword.length < 1) {
        $elem.find('#no-result-keyword').html("'" + keyword + "'");
        $elem.find('ul:first').hide();
        $elem.children('.no_result').show();
        return;
    }

    filteredKeyword = filteredKeyword.toUpperCase();

    var html = [];
    var exactMatch = ticker_list[filteredKeyword];
    if(typeof exactMatch !== 'undefined') {
        var li = [];
        li.push('<li><a href="javascript:onSearchTicker(\'' + exactMatch.ticker + '\')">');
        var genText = '<strong data-ticker="'+exactMatch.ticker+'">' + filteredKeyword + '</strong>';
        li.push('<span class="schCode">' + genText + '</span>');
        genText = exactMatch.name;
        li.push('<span class="schList">' + genText + '</span></a></li>');
        html.push(li.join(''));
    }

    $.each(data, function(i, v) {
        if(typeof exactMatch !== 'undefined' && v.ticker === exactMatch.ticker) {
            return true;
        }
        if(html.length > searchResultCnt) {
            return false;
        }

        var _tPos = v.ticker.toUpperCase().search(new RegExp(filteredKeyword, "i"));
        var _nPos = v.name.toUpperCase().split(' ').join('').search(new RegExp(filteredKeyword, "i"));

        if(_tPos < 0 && _nPos < 0) {
            return true;
        }
        var li = [];

        li.push('<li><a href="javascript:onSearchTicker(\'' + v.ticker + '\')">');
        var genText = v.ticker;
        if(_tPos !== -1) {
            genText = genText.slice(0, _tPos) + '<strong data-ticker="'+v.ticker+'">' + filteredKeyword + '</strong>' + genText.slice(_tPos + filteredKeyword.length);
        }
        li.push('<span class="schCode">' + genText + '</span>');
        genText = v.name;
        li.push('<span class="schList">' + genText + '</span></a></li>');
        html.push(li.join(''));
    });

    // not found.
    if(html.length < 1) {
        $elem.find('#no-result-keyword').html("'" + keyword + "'");
        $elem.children('.no_result').show();
        $elem.children('ul').hide();
        return;
    }
    $elem.children('.no_result').hide();
    $elem.children('ul').show();
    $elem.children('ul').html(html.join(''));
}
// end of - 종목 검색 자동완성 결과 노출

// 사용자가 스크롤할 때 .search_item 요소를 .clone()으로 복사하고 .search_item.fix_data를 생성해 그 안에 삽입하는 스크립트
function toggleSearchItemVisibility() {
    const searchItem = document.querySelector('.search_item');
    if (!searchItem) return; // .search_item이 없는 경우 예외처리 추가

    const clonedItem = document.querySelector('.search_item.fix_data');

    const rect = searchItem.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (clonedItem) {
        clonedItem.style.display = isVisible ? 'none' : 'block';
    }
}

function copySearchItemHTML() {
    const searchItem = document.querySelector('.search_item');
    if (!searchItem) return; // .search_item이 없는 경우 예외처리 추가

    let clonedItem = document.querySelector('.search_item.fix_data');

    if (!clonedItem) {
        clonedItem = searchItem.cloneNode(true);
        // 클론된 코드에서 특정 요소들 제거
        const elementsToRemove = ['.title_logo', '.ticker'];
        elementsToRemove.forEach(selector => {
            const element = clonedItem.querySelector(selector);
            if (element) element.remove();
        });

        clonedItem.classList.add('fix_data');
        document.body.appendChild(clonedItem);
    }

    toggleSearchItemVisibility();
}

window.addEventListener('scroll', toggleSearchItemVisibility);
window.addEventListener('load', () => {
    copySearchItemHTML();
    toggleSearchItemVisibility();
});

// recom_company .list 클론 및 고정 관련 코드
function toggleRecomCompanyVisibility() {
    const recomItem = document.querySelector('.recom_company .list');
    if (!recomItem) return; // .search_item이 없는 경우 예외처리 추가

    const recomCompany = document.querySelector('.recom_company .list');
    const clonedRecom = document.querySelector('.list.fix_data');

    const rect = recomCompany.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (clonedRecom) {
        clonedRecom.style.display = isVisible ? 'none' : 'flex';
    }
}

function copyRecomCompanyHTML() {
    const recomCompany = document.querySelector('.recom_company .list');
    if (!recomCompany) return;

    let clonedRecom = document.querySelector('.recom_company .list.fix_data');

    if (!clonedRecom) {
        clonedRecom = recomCompany.cloneNode(true);
        // 클론된 코드에서 특정 요소들 제거
        const elementsToRemove = ['.day', '.ticker'];
        elementsToRemove.forEach(selector => {
            const element = clonedRecom.querySelector(selector);
            if (element) element.remove();
        });

        // 회사 이름에 span 태그 추가
        const companyName = clonedRecom.querySelector('.company_nm');
        if (companyName) {
            const span = document.createElement('span');
            span.textContent = companyName.textContent;
            companyName.textContent = '';
            companyName.appendChild(span);
        }
        // 클론 후 코드에서 괄호가 있는 span 요소를 찾아 괄호를 제거
        const spanElements = clonedRecom.querySelectorAll('.per span');
        spanElements.forEach(span => {
            span.textContent = span.textContent.replace(/\(|\)/g, '');
        });

        clonedRecom.classList.add('fix_data');
        document.body.appendChild(clonedRecom);
    }

    toggleRecomCompanyVisibility();
}

// 이벤트 등록
window.addEventListener('scroll', toggleRecomCompanyVisibility);
window.addEventListener('load', () => {
    copyRecomCompanyHTML();
    toggleRecomCompanyVisibility();
});

// .sstock_us 요소가 있는지 확인 후 있는 경우 gnb 우측 끝으로 이동
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.sstock_us')) {
        const menu = document.querySelector('#menu');

        if (menu) {
            // 일단 숨김 (CSS에서 opacity 0으로 되어 있어야 함)
            menu.scrollTo({
                left: menu.scrollWidth,
                behavior: 'auto' // 부드럽게 하고 싶으면 'smooth'도 가능
            });

            // 잠깐 후에 표시
            setTimeout(() => {
                menu.style.opacity = '1';
            }, 100); // 시간은 스크롤 타이밍에 맞춰 조정 가능
        }
    }
});