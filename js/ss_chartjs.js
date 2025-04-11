$(document).ready(function () {
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Pretendard Variable, Pretendard'
            }
        }
    });

    // 검색결과 일봉 + 선3개 차트
    

    // 검색결과 일봉 + 선1개 차트
    if ($('#containeroutline1_2').length) {
        var value = [[Date.UTC(2022, 4, 09),118000,120000,116500,119500],[Date.UTC(2022, 4, 10),118000,121000,117500,121000],[Date.UTC(2022, 4, 11),121500,124500,120000,122500],[Date.UTC(2022, 4, 12),122500,129000,122500,127500],[Date.UTC(2022, 4, 13),127500,133000,127000,133000],[Date.UTC(2022, 4, 16),134000,134000,128000,131500],[Date.UTC(2022, 4, 17),133000,139000,131000,138000],[Date.UTC(2022, 4, 18),139500,144000,138500,141500],[Date.UTC(2022, 4, 19),142500,152000,138000,149500],[Date.UTC(2022, 4, 20),150000,156000,147500,155500],[Date.UTC(2022, 4, 23),156000,163500,155000,156000],[Date.UTC(2022, 4, 24),156000,159000,150000,153500],[Date.UTC(2022, 4, 25),153000,155500,146000,150500],[Date.UTC(2022, 4, 26),150500,157500,150000,156500],[Date.UTC(2022, 4, 27),156000,162000,154500,160000],[Date.UTC(2022, 4, 30),160500,165000,160500,164000],[Date.UTC(2022, 4, 31),163500,164000,158000,159000],[Date.UTC(2022, 5, 02),159000,161500,158000,159000],[Date.UTC(2022, 5, 03),159000,160000,151000,154500],[Date.UTC(2022, 5, 07),154500,158000,152500,157500],[Date.UTC(2022, 5, 08),157000,159500,154500,158500],[Date.UTC(2022, 5, 09),158500,159500,156000,157500],[Date.UTC(2022, 5, 10),157000,160000,153500,157000],[Date.UTC(2022, 5, 13),156500,160000,155000,159500],[Date.UTC(2022, 5, 14),159000,159500,157000,158000],[Date.UTC(2022, 5, 15),157000,161500,156500,160500],[Date.UTC(2022, 5, 16),161500,163500,160000,163000],[Date.UTC(2022, 5, 17),162500,164500,159500,162000],[Date.UTC(2022, 5, 20),160500,161500,154500,154500],[Date.UTC(2022, 5, 21),154500,160500,154000,158500],[Date.UTC(2022, 5, 22),158500,160500,157500,158500],[Date.UTC(2022, 5, 23),158000,160000,156500,157500],[Date.UTC(2022, 5, 24),157500,162500,157500,161500],[Date.UTC(2022, 5, 27),162500,169500,162000,169500],[Date.UTC(2022, 5, 28),171000,182000,169500,182000],[Date.UTC(2022, 5, 29),182000,188500,177500,182000],[Date.UTC(2022, 5, 30),182000,182000,173000,180000],[Date.UTC(2022, 6, 01),177000,180000,174000,177000],[Date.UTC(2022, 6, 04),176000,182500,176000,182500],[Date.UTC(2022, 6, 05),181500,185500,179500,184500],[Date.UTC(2022, 6, 06),184500,184500,180000,182500],[Date.UTC(2022, 6, 07),182500,184500,180000,181000],[Date.UTC(2022, 6, 08),182000,188000,181500,182000],[Date.UTC(2022, 6, 11),181500,183000,180000,182500],[Date.UTC(2022, 6, 12),182500,188000,181500,184000],[Date.UTC(2022, 6, 13),183000,189000,183000,185500],[Date.UTC(2022, 6, 14),187500,188000,183500,186000],[Date.UTC(2022, 6, 15),186000,186500,179500,185500],[Date.UTC(2022, 6, 18),184000,188500,184000,184500],[Date.UTC(2022, 6, 19),184500,187000,178000,178500],[Date.UTC(2022, 6, 20),180000,183000,179000,181500],[Date.UTC(2022, 6, 21),181500,185000,180500,183000],[Date.UTC(2022, 6, 22),183000,184500,177500,183000],[Date.UTC(2022, 6, 25),183000,186000,177500,181000],[Date.UTC(2022, 6, 26),181000,188000,180500,184500],[Date.UTC(2022, 6, 27),184500,185500,182000,184000],[Date.UTC(2022, 6, 28),184000,186500,182000,185000],[Date.UTC(2022, 6, 29),185000,186500,183000,185000],[Date.UTC(2022, 7, 01),184000,189500,184000,187500],[Date.UTC(2022, 7, 02),187000,190000,186500,189000],[Date.UTC(2022, 7, 03),191000,191000,188500,190500],[Date.UTC(2022, 7, 04),193000,193500,188500,191000],[Date.UTC(2022, 7, 05),191000,192000,188000,190000],[Date.UTC(2022, 7, 08),190000,194500,188500,193000],[Date.UTC(2022, 7, 09),193000,196000,192000,193500],[Date.UTC(2022, 7, 10),195500,195500,192000,193000],[Date.UTC(2022, 7, 11),193500,198000,193500,198000],[Date.UTC(2022, 7, 12),198000,205500,198000,205000],[Date.UTC(2022, 7, 16),205000,211000,204000,208500],[Date.UTC(2022, 7, 17),208500,213500,206500,210500],[Date.UTC(2022, 7, 18),209500,212000,208000,209000],[Date.UTC(2022, 7, 19),209000,209500,206500,207000],[Date.UTC(2022, 7, 22),207000,210500,207000,208500],[Date.UTC(2022, 7, 23),210000,211000,207500,209000],[Date.UTC(2022, 7, 24),209000,211500,209000,210500],[Date.UTC(2022, 7, 25),210500,212000,208000,212000],[Date.UTC(2022, 7, 26),212500,214500,211000,211500],[Date.UTC(2022, 7, 29),211000,212500,207500,208000],[Date.UTC(2022, 7, 30),208000,209000,201000,208500],[Date.UTC(2022, 7, 31),206500,211000,196500,208000],[Date.UTC(2022, 8, 01),207500,210000,206500,206500],[Date.UTC(2022, 8, 02),206500,210000,206000,209500],[Date.UTC(2022, 8, 05),209500,213000,209000,212500],[Date.UTC(2022, 8, 06),214500,217000,213000,216500],[Date.UTC(2022, 8, 07),215500,222000,215500,216500],[Date.UTC(2022, 8, 08),218000,219000,216500,217000],[Date.UTC(2022, 8, 13),217500,218000,215000,216500],[Date.UTC(2022, 8, 14),215000,218000,215000,218000],[Date.UTC(2022, 8, 15),219500,221500,217000,220000],[Date.UTC(2022, 8, 16),220000,222500,218500,222500],[Date.UTC(2022, 8, 19),222500,226500,222000,226500],[Date.UTC(2022, 8, 20),228000,232000,225500,226500],[Date.UTC(2022, 8, 21),229000,230500,226500,229500],[Date.UTC(2022, 8, 22),230000,241000,229500,240500],[Date.UTC(2022, 8, 23),241000,275000,239000,260500],[Date.UTC(2022, 8, 26),261500,264500,245500,252000],[Date.UTC(2022, 8, 27),250500,253500,247500,249000],[Date.UTC(2022, 8, 28),249500,253500,246500,246500],[Date.UTC(2022, 8, 29),246000,270000,246000,265500],[Date.UTC(2022, 8, 30),269000,284000,263500,267500],[Date.UTC(2022, 9, 04),270000,280500,265500,279500],[Date.UTC(2022, 9, 05),285000,285500,278500,282000]];        
        var valueMVP = [[Date.UTC(2022, 4, 09),106410],[Date.UTC(2022, 4, 10),106798],[Date.UTC(2022, 4, 11),107173],[Date.UTC(2022, 4, 12),107633],[Date.UTC(2022, 4, 13),108198],[Date.UTC(2022, 4, 16),108740],[Date.UTC(2022, 4, 17),109380],[Date.UTC(2022, 4, 18),110083],[Date.UTC(2022, 4, 19),110908],[Date.UTC(2022, 4, 20),111783],[Date.UTC(2022, 4, 23),112683],[Date.UTC(2022, 4, 24),113483],[Date.UTC(2022, 4, 25),114317],[Date.UTC(2022, 4, 26),115233],[Date.UTC(2022, 4, 27),116167],[Date.UTC(2022, 4, 30),117142],[Date.UTC(2022, 4, 31),118033],[Date.UTC(2022, 5, 02),118933],[Date.UTC(2022, 5, 03),119750],[Date.UTC(2022, 5, 07),120608],[Date.UTC(2022, 5, 08),121492],[Date.UTC(2022, 5, 09),122358],[Date.UTC(2022, 5, 10),123208],[Date.UTC(2022, 5, 13),124092],[Date.UTC(2022, 5, 14),124975],[Date.UTC(2022, 5, 15),125867],[Date.UTC(2022, 5, 16),126800],[Date.UTC(2022, 5, 17),127717],[Date.UTC(2022, 5, 20),128508],[Date.UTC(2022, 5, 21),129375],[Date.UTC(2022, 5, 22),130225],[Date.UTC(2022, 5, 23),131058],[Date.UTC(2022, 5, 24),131958],[Date.UTC(2022, 5, 27),133008],[Date.UTC(2022, 5, 28),134275],[Date.UTC(2022, 5, 29),135533],[Date.UTC(2022, 5, 30),136767],[Date.UTC(2022, 6, 01),137950],[Date.UTC(2022, 6, 04),139242],[Date.UTC(2022, 6, 05),140583],[Date.UTC(2022, 6, 06),141858],[Date.UTC(2022, 6, 07),143108],[Date.UTC(2022, 6, 08),144325],[Date.UTC(2022, 6, 11),145558],[Date.UTC(2022, 6, 12),146817],[Date.UTC(2022, 6, 13),148083],[Date.UTC(2022, 6, 14),149375],[Date.UTC(2022, 6, 15),150658],[Date.UTC(2022, 6, 18),151925],[Date.UTC(2022, 6, 19),153092],[Date.UTC(2022, 6, 20),154275],[Date.UTC(2022, 6, 21),155483],[Date.UTC(2022, 6, 22),156725],[Date.UTC(2022, 6, 25),157917],[Date.UTC(2022, 6, 26),159133],[Date.UTC(2022, 6, 27),160317],[Date.UTC(2022, 6, 28),161517],[Date.UTC(2022, 6, 29),162717],[Date.UTC(2022, 7, 01),163958],[Date.UTC(2022, 7, 02),165158],[Date.UTC(2022, 7, 03),166342],[Date.UTC(2022, 7, 04),167508],[Date.UTC(2022, 7, 05),168633],[Date.UTC(2022, 7, 08),169725],[Date.UTC(2022, 7, 09),170733],[Date.UTC(2022, 7, 10),171758],[Date.UTC(2022, 7, 11),172758],[Date.UTC(2022, 7, 12),173817],[Date.UTC(2022, 7, 16),174800],[Date.UTC(2022, 7, 17),175717],[Date.UTC(2022, 7, 18),176600],[Date.UTC(2022, 7, 19),177492],[Date.UTC(2022, 7, 22),178458],[Date.UTC(2022, 7, 23),179333],[Date.UTC(2022, 7, 24),180175],[Date.UTC(2022, 7, 25),180975],[Date.UTC(2022, 7, 26),181850],[Date.UTC(2022, 7, 29),182667],[Date.UTC(2022, 7, 30),183567],[Date.UTC(2022, 7, 31),184408],[Date.UTC(2022, 8, 01),185208],[Date.UTC(2022, 8, 02),186075],[Date.UTC(2022, 8, 05),187000],[Date.UTC(2022, 8, 06),187950],[Date.UTC(2022, 8, 07),188925],[Date.UTC(2022, 8, 08),189867],[Date.UTC(2022, 8, 13),190758],[Date.UTC(2022, 8, 14),191692],[Date.UTC(2022, 8, 15),192783],[Date.UTC(2022, 8, 16),193850],[Date.UTC(2022, 8, 19),194983],[Date.UTC(2022, 8, 20),196133],[Date.UTC(2022, 8, 21),197267],[Date.UTC(2022, 8, 22),198450],[Date.UTC(2022, 8, 23),199758],[Date.UTC(2022, 8, 26),200925],[Date.UTC(2022, 8, 27),202075],[Date.UTC(2022, 8, 28),203233],[Date.UTC(2022, 8, 29),204617],[Date.UTC(2022, 8, 30),206000],[Date.UTC(2022, 9, 04),207617],[Date.UTC(2022, 9, 05),209300]];        

        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }    
        });
        Highcharts.stockChart('containeroutline1_2', {
            
            chart: {                
                borderColor: '#333',                                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,                
                borderColor: "#e41c39",                
                xDateFormat: '%Y.%m.%d',
            },
            

            colors: ['#333'],

            xAxis: [{
                title: {
                    text: null
                },
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,                
                labels: {                        
                    reserveSpace: true,
                    formatter: function () {
                        return Highcharts.dateFormat('%m.%d', this.value);
                    },
                    step: 1
                },                                                             
            }],

            yAxis: [{// 1
                title: {
                    text: null
                }, 
                labels: {                       
                    reserveSpace: true,
                    y: -15,                    
                    style: {
                        color: '#333',
                        fontSize : 13,
                    }
                },              
            }, {// 2
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {   
                    y: -15,                    
                    style: {
                        color: '#333',
                        fontSize : 13,
                    }
                },       
                opposite: true,
            }],


            series: [{
                type: 'candlestick',
                name: '일봉',                
                data: value,              
                yAxis: 1,                                                        
                tooltip: {                    
                    useHTML: true,
                    valueSuffix: '원',
                    headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.key} </b></span> </br>',
                    pointFormat: '<b>시가: {point.open}<br/>고가: {point.high}<br/>저가: {point.low}<br/>종가: {point.close}<br/></b>',                                        
                },                
            }, {
                type: 'line',
                name: 'MVP 점수',
                data: valueMVP,                       
                tooltip: {                    
                    useHTML: true,                    
                    headerFormat: '',
                    pointFormat: '</br></br><b> <span style="display: block; padding: 5px 0; border-top: 1px solid #c8c8c8;"> {series.name} : <span style="color: #e41c39;"> {point.y} </span></b></span>',                         
                }       
            }],            
            
            plotOptions: {
                series: {                    
                    marker: {
                        enabled: true,
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
                        width: 4,
                        height: 4
                    },
                },
            },

        });
    }

    // 검색결과 일봉 + 선3개 차트
    if ($('#containerfinancials1_1').length) {
        Highcharts.chart('containerfinancials1_1', {           

            chart: {                
                type: 'column',                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,                
                labels: {
                    enabled: false
                }
            },
            

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97.988, 45.988, 75.988]
            }, {
                name: '영업이익',
                data: [85.988, 24.988, 42.988]
            }, {
                name: '순이익',
                data: [64.988, 34.988, 24.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {           

            chart: {                
                type: 'column',                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,                
                labels: {
                    enabled: false
                }
            },
            

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97.988, 45.988, 75.988]
            }, {
                name: '영업이익',
                data: [85.988, 24.988, 42.988]
            }, {
                name: '순이익',
                data: [64.988, 34.988, 24.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {           

            chart: {                
                type: 'column',                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,                
                labels: {
                    enabled: false
                }
            },
            

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97.988, -45.988, 75.988]
            }, {
                name: '영업이익',
                data: [85.988, 24.988, 42.988]
            }, {
                name: '순이익',
                data: [64.988, 34.988, -24.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    if ($('#containerfinancials2_1').length) {
        Highcharts.chart('containerfinancials2_1', {           

            chart: {                
                type: 'column',                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,                
                labels: {
                    enabled: false
                }
            },
            

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [397.988, 145.988, 275.988]
            }, {
                name: '영업이익',
                data: [185.988, 124.988, 242.988]
            }, {
                name: '순이익',
                data: [164.988, 134.988, 224.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_2').length) {
        Highcharts.chart('containerfinancials2_2', {           

            chart: {                
                type: 'column',                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,                
                labels: {
                    enabled: false
                }
            },
            

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97.988, 45.988, 75.988]
            }, {
                name: '영업이익',
                data: [85.988, 24.988, 42.988]
            }, {
                name: '순이익',
                data: [64.988, 34.988, 24.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_3').length) {
        Highcharts.chart('containerfinancials2_3', {           

            chart: {                
                type: 'column',                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            legend: {          
                enabled: false,
            },

            exporting: {
                enabled: false,
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,                
                labels: {
                    enabled: false
                }
            },
            

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97.988, -45.988, 75.988]
            }, {
                name: '영업이익',
                data: [85.988, 24.988, 42.988]
            }, {
                name: '순이익',
                data: [64.988, 34.988, -24.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    
});