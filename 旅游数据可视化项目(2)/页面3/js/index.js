 // 折线图
var colors = ['#0997c1', '#c22167', '#082773', '#604fb9', '#0067c3', '#68cdfb','#5793f3', '#d14a61', '#675bba'];

//碳交易行情
option1 = {
    color: colors,

   tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    legend: {
        data:['春节旅游收入（亿元）', '十一旅游收入（亿元）', '春节游客数量（十万人次）', '十一游客数量（十万人次）'],
        textStyle: {
            color:"#fff"
        },
        orient: 'left',
      	x: 'right',
        textStyle: {
          fontSize: '14',
          color: '#fff'
        },
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: [
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                
            ],
            axisLabel: {
                formatter: '{value}',
                color:"#fff"
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额（亿元）/数量（十万人次）',
            min: 0,
            max: 35,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}',
                color:"#fff"
            },
            splitLine: {
	            show: true,
	            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
	              color: 'rgba(255, 255, 255, 0)',
	            }
          	},
        },
        {
            type: 'value',
            name: '降水量',
             show:false            
        },
        {
            type: 'value',
            name: '温度',
            show:false
        }
    ],
    series: [
        {
            name:'春节旅游收入（亿元）',
            type:'line',
            yAxisIndex: 2,
            data:[1.99, 2.42, 2.79, 3.4, 4.18, 4.68, 5.89, 6.51, 7.17, 7.39, 8.3, 9.65, 18.1,
            20.72]
        },
        {
            name:'十一旅游收入（亿元）',
            type:'line',
            yAxisIndex: 2,
            data:[5.81,6.94,8.55,11.35,12.75,14.04,19.7,17.56,19.9,22.6,25.6,32,31.98,34.76]
        },
         {
            name:'春节游客数量（十万人次）',
            type:'line',
            yAxisIndex: 2,
            data:[3.278,3.811,4.08,4.7,5.59,6.16,7.25,7.735,8.22,8.136,9,10.192,16.4,19.3]
        },{
            name:'十一游客数量（十万人次）',
            type:'line',
            yAxisIndex: 2,
            data:[7.83,9.006,10.6,13.82,15,16.275,21.07,18.5,21.034,22.65,24.75,30.27,29.87,32.2]
        },
       
    ]
};
