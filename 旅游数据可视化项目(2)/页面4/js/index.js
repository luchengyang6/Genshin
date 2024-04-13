var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['5A', '4A','3A'],
        icon: 'roundRect',
        textStyle: {
        	color: '#fff'
        }
    },
    grid: {
        top: 30,
        bottom: 60
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
            	color:'#fff',
            	interval: 0,
            	fontSize :12,
            	rotate:45,
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                	show: false,
                    formatter: function (params) {
                        return params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: [
            	"2020", "2022", 
            	"2024", "2026", 
            	"2028", "2030",  
            	"2032", "2034", 
            	"2036", "2038", 
            	"2040", "2042",  
            	"2044", "2046", 
            	"2048", "2050", 
            	"2052", "2054", 
            	"2056", "2058", 
            	"2060", ]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max : 45,
            axisLabel: {
            	color:'#fff',
            	interval: 0,
            	fontSize :12,
            	formatter: '{value}'
            },
            min: 0,
            splitLine: {
                show: false
            },
           data: [1, 2, 3, 4, 5, 6, 7,8]
        }
    ],
    series: [
       
        {
            name:'5A',
            type:'line',
            symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	            	show: false,
	                color: '#DC143C',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#DC143C',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#DC143C',
	            }
	        },
          	data: [2,2,2,2,2,2,2,2,
          			3,3,3,3,3,3,3,4,4,4,4,4,4]
        },{
        	type: 'line',
	        name: '4A',
	        symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	            	show: false,
	                color: '#7fffaa',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#7fffaa',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#7fffaa',
	            }
	        },
	        data: [12,12,12,12,12,12,12,13,
	        	13,13,13,14,14,14,14,15,15,16,16,16,17],
        },
        {
        	type: 'line',
	        name: '3A',
	        symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	                color: '#ffbe0d',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#ffbe0d',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#ffbe0d',
	            }
	        },
	        data: [34,34,35,35,35,35,36,37,37,
	        		38,38,38,39,40,40,40,41,41,42,43,44],
        }
    ]
};


optionbtm = {
    color: colors,

    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['境内游客接待量（/万人次）', '境外游客接待量（/十人次）'],
        icon: 'roundRect',
        textStyle: {
        	color: '#fff'
        }
    },
    grid: {
        top: 30,
        bottom: 60
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
            	color:'#fff',
            	interval: 0,
            	fontSize :12,
            	rotate:45,
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                	show: false,
                    formatter: function (params) {
                        return params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2020", "2022", 
            	"2024", "2026", 
            	"2028", "2030",  
            	"2032", "2034", 
            	"2036", "2038", 
            	"2040", "2042",  
            	"2044", "2046", 
            	"2048", "2050", 
            	"2052", "2054", 
            	"2056", "2058", 
            	"2060",]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max : 10000,
            axisLabel: {
            	color:'#fff',
            	interval: 0,
            	fontSize :12,
            	formatter: '{value}'
            },
            min: 1,
            splitLine: {
                show: false
            },
        }
    ],
    series: [
       
        {
            name:'境内游客接待量（/万人次）',
            type:'line',
            symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	            	show: false,
	                color: '#DC143C',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#DC143C',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#DC143C',
	            }
	        },
	        data: [3233,3541,5050,5122,5324,5433,5501,5632,5401,
	        	5200,5081,5634,5581,5443,5596,5601,5532,5398,5401,5870,5633]
        },{
        	type: 'line',
	        name: '境外游客接待量（/十人次）',
	        symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	            	show: false,
	                color: '#00eef8',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#00eef8',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#00eef8',
	            }
	        },
	        data: [1256.9,3372,5153,6043,7731,7899,7933,8080,8135,8334,8566,8739,8899,9090,9111,9233,9344,9021,8873,8933,9222],
        }
    ]
};


//中间的图
optioncenter = {
    color: colors,

    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['住宿', '交通','餐饮'],
        icon: 'roundRect',
        textStyle: {
        	color: '#fff'
        }
    },
    grid: {
        top: 30,
        bottom: 60
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
            	color:'#fff',
            	interval: 0,
            	fontSize :12,
            	rotate:45,
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                	show: false,
                    formatter: function (params) {
                        return params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2017", "2025", "2035", "2050"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max : 100,
            axisLabel: {
            	color:'#fff',
            	interval: 0,
            	fontSize :12,
            	formatter: '{value}'
            },
            min: 1,
            splitLine: {
                show: false
            },
           data: [1, 2, 3, 4, 5, 6, 7,8]
        }
    ],
    series: [
       
        {
            name:'住宿',
            type:'line',
	        symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	            	show: false,
	                color: '#ff00f8',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#ff00f8',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#ff00f8',
	            }
	        },
          data: [66,75,84,96]
        },{
        	type: 'line',
	        name: '交通',
	        symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	            	show: false,
	                color: '#00eef8',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#00eef8',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#00eef8',
	            }
	        },
	        data: [70,80,91,99],
        },
        {
        	type: 'line',
	        name: '餐饮',
	        symbol: 'circle',
	        symbolSize: 15,
	        smooth: true,
	        itemStyle: {
	            normal: {
	                color: '#ffbe0d',
	                opacity: 0
	            },
	            emphasis: {
	            	color: '#ffbe0d',
	            }
	        },
	        lineStyle: {
	            normal: {
					color: '#ffbe0d',
	            }
	        },
	        data: [85,92,96,99],
        }
    ]
}
