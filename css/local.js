$(document).ready(function () {

    // 기업개요 더보기 열기
    $('#container.sub_search .mainBox.outline .summary, #container.sub_stock .mainBox.outline .summary').on("click", function () {
        if ($(this).children().children().hasClass("txt_line02")) {
            $(this).toggleClass('active');
        } else {
            //더보기 없음            
        }
    });

    // 검색결과 iframe 탭 함수
    $(".tabs").tabs({
        select: function (event, ui) {
            window.location.replace(ui.tab.hash);
        },
    });

    // // iframe 높이 조정
    function autoResizeIframe() {
        $('.iframe100').on('load', function () {
            $(this).height(this.contentDocument
                ? this.contentDocument.documentElement.scrollHeight
                : this.contentWindow.document.body.scrollHeight);
        });
    }

    // // 탭 메뉴 눌렀을때 iframe 불러오기
    var iframes = {
        '#invest_charm': false,
        '#financials': false,
        '#finance_chart': false,
        '#dividend': false
    };
    $('.search_tabsList ul li').each(function (index, elem) {
        $(elem).on('click', function () {
            autoResizeIframe();
            var id = $(elem).find('a').attr('href');
            if (!iframes[id]) {
                $(id + ' iframe').attr('src', $(id + ' iframe').data('src')).css('visibility', 'visible');
                iframes[id] = true;
            }
        });
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


    

    



});