$(document).ready(function () {
    // AI추천 상세 매매신호 일봉 차트
    if ($('#containeroutline1_1').length) {
        var value = [
            [1627948800000, 145.81, 148.045, 145.18, 147.36],
            [1628035200000, 157.27, 147.79, 146.28, 146.95],
            [1628121600000, 146.98, 147.84, 156.17, 137.06],
            [1628208000000, 146.35, 152.11, 145.63, 126.14],
            [1628467200000, 146.2, 146.7, 145.52, 166.09],
        ];

        var value2 = [
            [1627948800000, 155.81,],
            [1628035200000, 147.27],
            [1628121600000, 156.98],
            [1628208000000, 166.35],
            [1628467200000, 186.2],
        ];
        var value3 = [
            [1627948800000, 165.81,],
            [1628035200000, 177.27],
            [1628121600000, 186.98],
            [1628208000000, 186.35],
            [1628467200000, 176.2],
        ];
        Highcharts.chart('containeroutline1_1', {
            chart: {
                // backgroundColor: '#FCFFC5',
                // margin: [0, 15, 0, 15],
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
                // selected: 2,
            },

            title: {
                text: '2022.06.04 ~ 2022.08.05',
                style: {
                    
                },
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
                // enabled: false,
                symbolHeight: 12,
                symbolWidth: 12,
                symbolRadius: 6,
                align: 'left',
                verticalAlign: 'top',                                                                
            },

            exporting: {
                enabled: false
            },

            tooltip: {                                
                useHTML: true,     
                backgroundColor: '#1f3143',
                borderWidth: 0,                
                borderRadius: 10,                                
                style: {
                    fontWeight: 'normal',
                    fontSize: '12px',
                    color: '#fff',
                    fontFamily: "'Spoqa Han Sans Neo', 'Malgun gothic'"
                },     
                shadow: false,
                split: false,     
                shared : true,
                
                // formatter: function () {                    
                //     var s = '<b>' + Highcharts.dateFormat('%Y/%m/%d', this.x) + '</b>' // 일자 포맷
                //     $.each(this.points, function(i, point) {                        
                //         // s += '<span>' + this.series.name + '</span>';                                     
                //         for (i = 0; i < value .length; i++) {                            
                //             if (value [i][0] == point.x ) {
                //                 s += (
                //                     '<br/><span style="color: ' + this.series.color + ';">시가 </span><span>' + value [i][1] + '</span>'
                //                     +  '<span style="color: ' + this.series.color + '; padding-left:7px">고가 </span><span>' + value [i][2] + '</span>'
                //                     +  '<span style="color: ' + this.series.color + '; padding-left:7px">저가 </span><span>' + value [i][3] + '</span>'
                //                     +  '<span style="color: ' + this.series.color + '; padding-left:7px">종가 </span><span>' + value [i][4] + '</span>'
                //                 );
                //                 break;
                //             };    
                //         }
                //     });
                //     return s;                        
                // }
            },

            xAxis: [{
                title: {
                    text: null
                },
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%m-%d', this.value);
                    },
                },                
            }],

            yAxis: [{// 1
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    format: '{value}',                    
                },
                opposite: true
            }, {// 2
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    format: '{value}',                    
                },
                
            }],

            series: [{
                type: 'candlestick',
                name: '일봉',                
                data: value,                
                showInLegend: false,
                // yAxis: 1,                
            }, {
                type: 'line',
                name: '5일',
                data: value2,                 
            },{
                type: 'line',
                name: '20일',
                data: value3, 
            }, {
                type: 'line',
                name: '60일',
                data: value2,                 
            }],          
            
            plotOptions: {
                series: {
                    marker: {
                        symbol: 'circle'
                    }
                },
            },

        });
    }
});