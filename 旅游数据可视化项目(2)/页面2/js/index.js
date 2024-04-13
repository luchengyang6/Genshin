

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
        data:['实际值', '预测上限','预测下限'],
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
            data: ["2017.11.15", "2017.11.16", "2017.11.17", "2017.11.18", "2017.11.19", "2017.11.20", "2017.11.21", "2017.11.22", "2017.11.23", "2017.11.24", "2017.11.25", "2017.11.26"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max : 7,
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
            name:'实际值',
            type:'line',
            smooth: true,
	            markArea: {
	              silent: true,
	              label: {
	                  normal: {
	                      position: ['10%', '50%']
	                  }
	              },
	              data: [
	                  [{
	                      yAxis: 1,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(68,2,30,0.2)'
	                          }
	                      },
	                  }, {
	                      yAxis: 3
	                  }],
	                  [{
	                      yAxis: 3,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(87,81,29,0.2)'
	                          }
	                      },
	                  }, {
	                      yAxis: 5
	                  }],
	                  [{

	                      yAxis: 5,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(2,78,40,0.2)'
	                          }
	                      }
	                  }, {
							yAxis: 7,
	                  }]
	              ]
	     },
          data: [5.53]
        },{
        	type: 'line',
	        name: '预测上限',
	        symbol: 'circle',
	        symbolSize: 10,
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
	        data: [5.57, 5.73, 5.61, 5.63, 5.69, 5.64, 5.9,5.71,5.69,5.69,5.76,5.9],
        },
        {
        	type: 'line',
	        name: '预测下限',
	        symbol: 'circle',
	        symbolSize: 10,
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
	        data: [5.24, 5.44, 5.25, 5.08, 5.44, 5.46, 5.6,5.28,5.35,5.34,5.32,5.37],
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
        data:['实际值', '预测上限','预测下限'],
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
            data: ["2017.11.15", "2017.11.16", "2017.11.17", "2017.11.18", "2017.11.19", "2017.11.20", "2017.11.21", "2017.11.22", "2017.11.23", "2017.11.24", "2017.11.25", "2017.11.26"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max : 7,
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
            name:'实际值',
            type:'line',
            smooth: true,
	            markArea: {
	              silent: true,
	              label: {
	                  normal: {
	                      position: ['10%', '50%']
	                  }
	              },
	              data: [
	                  [{
	                      yAxis: 1,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(68,2,30,0.2)'
	                          }
	                      },
	                  }, {
	                      yAxis: 3
	                  }],
	                  [{
	                      yAxis: 3,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(87,81,29,0.2)'
	                          }
	                      },
	                  }, {
	                      yAxis: 5
	                  }],
	                  [{

	                      yAxis: 5,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(2,78,40,0.2)'
	                          }
	                      }
	                  }, {
							yAxis: 7,
	                  }]
	              ]
	     },
          data: [3.78]
        },{
        	type: 'line',
	        name: '预测上限',
	        symbol: 'circle',
	        symbolSize: 10,
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
	        data: [4.02, 3.98, 3.87, 3.68, 3.76,4.02, 3.82,3.8,3.84,3.62,3.84,4.08],
        },
        {
        	type: 'line',
	        name: '预测下限',
	        symbol: 'circle',
	        symbolSize: 10,
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
	        data: [3.67, 3.78, 3.43, 3.4, 3.39, 3.59, 3.43,3.31,3.53,3.33,3.53,3.52],
        }
    ]
};
optioncenter = {
    color: colors,

    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['实际值', '预测上限','预测下限'],
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
            data: ["2017.11.15", "2017.11.16", "2017.11.17", "2017.11.18", "2017.11.19", "2017.11.20", "2017.11.21", "2017.11.22", "2017.11.23", "2017.11.24", "2017.11.25", "2017.11.26"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max : 7,
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
            name:'实际值',
            type:'line',
            smooth: true,
	            markArea: {
	              silent: true,
	              label: {
	                  normal: {
	                      position: ['10%', '50%']
	                  }
	              },
	              data: [
	                  [{
	                      yAxis: 1,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(68,2,30,0.2)'
	                          }
	                      },
	                  }, {
	                      yAxis: 3
	                  }],
	                  [{
	                      yAxis: 3,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(87,81,29,0.2)'
	                          }
	                      },
	                  }, {
	                      yAxis: 5
	                  }],
	                  [{

	                      yAxis: 5,
	                      itemStyle: {
	                          normal: {
	                              color: 'rgba(2,78,40,0.2)'
	                          }
	                      }
	                  }, {
							yAxis: 7,
	                  }]
	              ]
	     },
          data: [5.69]
        },{
        	type: 'line',
	        name: '预测上限',
	        symbol: 'circle',
	        symbolSize: 10,
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
	        data: [5.83, 5.75, 5.85, 5.55, 5.56,5.53, 5.61,5.68,5.74,5.56,5.57,5.78],
        },
        {
        	type: 'line',
	        name: '预测下限',
	        symbol: 'circle',
	        symbolSize: 10,
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
	        data: [5.48, 5.52, 5.39, 5.2, 5.28, 5.04, 5.29,5.33,5.42,5.31,5.28,5.42],
        }
    ]
};
 // 折线
var colors = ['#0997c1', '#c22167', '#082773', '#604fb9', '#0067c3', '#68cdfb','#5793f3', '#d14a61', '#675bba'];
//[];

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
/*    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },*/
    legend: {
        data:['长途交通费','自驾车费用','住宿','餐饮','购物','其他','景点旅游','文化娱乐','居民服务'],
        textStyle: {
            color:"#fff"
        },
       /* icon: 'roundRect',*/
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
            data: ['2018','2019','2020','2021','2022'],
            axisLabel: {
                formatter: '{value}',
                color:"#fff"
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额(/亿元)',
            min: 0,
            max: 250,
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
 /*           min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml',
                color:"#fff"
            },*/
            
        },
        {
            type: 'value',
            name: '温度',
            show:false
/*            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C',
                color:"#fff"
            }*/
        }
    ],
    series: [
        {
            name:'长途交通费',
            type:'bar',
            data:[44.93, 30.6, 27.7, 74.59, 6.6]
        },
        {
            name:'自驾车费用',
            type:'bar',
            yAxisIndex: 1,
            data:[8.52, 24.71, 7.6,38.68, 35]
        },
         {
            name:'住宿',
            type:'bar',
            yAxisIndex: 1,
            data:[127.89, 131.7, 21.2, 93.74, 61.56]
        },{
            name:'餐饮',
            type:'bar',
            yAxisIndex: 1,
            data:[141.48, 126.7, 70.6, 89.79, 70.58]
        },
        {
            name:'购物',
            type:'bar',
            yAxisIndex: 1,
            data:[169.04, 170.6, 202.1, 126.34, 170.17]
        },
        {
            name:'其他',
            type:'bar',
            yAxisIndex: 2,
            data:[15.41,49.3, 8.6, 20.7, 7.89]
        },
        {
            name:'景点旅游',
            type:'line',
            yAxisIndex: 2,
            data:[110.27, 130.36, 46.1, 55.86, 18.9]
        },
        {
            name:'文化娱乐',
            type:'line',
            yAxisIndex: 2,
            data:[8.97, 12.3, 5.6, 26.7, 8.9]
        },
        {
            name:'居民服务',
            type:'line',
            yAxisIndex: 2,
            data:[26, 15, 3.6,9.87, 7.35]
        },
        {
            name:'总计',
            type:'line',
            yAxisIndex: 2,
            data:[, , , , ]
        }
    ]
};
option5 = {
    title: {
      text: '游客总消费/全市总收入',
      textStyle: {  
        color: '#FFFFFF' 
    },  
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads']
    },
    textStyle:{color:'#FFFFFF'},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'GDP%',
        type: 'line',
        stack: 'Total',
        data: [16.17, 17.14, 17.86, 23.37, 13.03, 15.40,11.41]
      },
      {
        name: '三产增加值%',
        type: 'line',
        stack: 'Total',
        data: [34.18, 35.84, 36.94, 46.84, 25.3, 30.32, 22.35]
      },
    ]
  };
option6 = {
title: {
    text: '重点景区人数',
    textStyle:{color:'#FFFFFF'}
},
tooltip: {
    trigger: 'axis'
},
textStyle:{color:'#FFFFFF'}
,    legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
toolbox: {
    feature: {
    saveAsImage: {}
    }
},
xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
},
yAxis: {
    type: 'value'
},
series: [

    {
    name: '游客数量（百万人次）',
    type: 'line',
    stack: 'Total',
    data: [9.05, 1.09, 1.1, 1.2, 7.4,7.8 , 7.3]
    },
    {
    name: '增长率（%）',
    type: 'line',
    stack: 'Total',
    data: [7.08, 23.22, 4.99, 9.13, -49.87, 70.12, -21.51]
    }
]
};
option7 = {
    title: {
        text: '入境外国游客人数',
        textStyle:{color:'#FFFFFF'}
    },
    tooltip: {
        trigger: 'axis'
    },
    textStyle:{color:'#FFFFFF'}
    ,    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
        type: 'value'
    },
    series: [
    
        {
        name: '绝对量（百万人次）',
        type: 'line',
        stack: 'Total',
        data: [4.5, 4.5, 4.7, 4.8, 0.5,0.3 , 0.1]
        },
        {
        name: '增长率（%）',
        type: 'line',
        stack: 'Total',
        data: [5.06, 0.79, 2.96, 2.09, -89.53, -36.79, -63.16]
        }
    ]
    };
option8 = {
    title: {
        text: '2019~2024年入境游客来源',
        left: 'center',
        textStyle:{color:'#FFFFFF'},
        top:0
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
        center:['50%', '60%'],
        name: '人数',
        type: 'pie',
        radius: '50%',
        data: [
            { value: 88936, name: '韩国' },
            { value: 3366, name: '日本' },
            { value: 1057, name: '俄罗斯' },
            { value: 2220, name: '台胞' },
            { value: 1813, name: '港澳' },
            {value: 319,name:'德国'},
            {value:1024,name:'其他'}
            
        ],
        emphasis: {
            itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
        }
    ]
    };




///饼图
option2 = {
      title: {
        text: '合计',
        textStyle:{
        	color: '#fff'
        },
                subtext: '100%',
        subtextStyle: {
        	color: '#fff',
        	fontSize:18,
        },
        x: 'center',
        y: 'center' 
      },
      tooltip: {
        trigger: 'item',
        formatter: '{c}'
      },
      legend: {
      	show: true,
        y: 'top',
        data:['长途交通费','自驾车费用','住宿','餐饮','景点旅游','文化娱乐','购物',"休闲疗养",'其他'],
      	orient: 'left',
  		x: 0,
  		y: 0,
        textStyle: {
          fontSize: '14',
          color: '#fff'
        },
      },
      calculable: true,
      series: [
        {
          color: ['#0997c1', '#c22167', '#082773', '#604fb9', '#0067c3', '#68cdfb'],
          type: 'pie',
          radius: [50, 200],
          center: ['50%', '50%'],
          
          //roseType: 'radius',
          label: {
              normal: {
                 /* position: 'inside',*/
                color:"#fff"
              }
          },
          tooltip: {
            trigger:'item'
          },
          itemStyle: {
                normal: {
                    
                    /*borderWidth: 14.5,
                    borderColor: 'rgba(255, 255, 255, 1)'*/
                }
          },
          data: [
             {value: 13.98, name:'长途交通费'},
             {value: 7.25, name: '自驾车费用'},
             {value: 17.57, name: '住宿'},
             {value: 16.83, name: '餐饮'},
             {value: 10.47, name: '景点旅游'},
             {value: 4.49, name: '文化娱乐'},
             {value: 23.68, name: '购物'},
             {value: 1.85, name: '休闲疗养'},
             {value: 3.88, name: '其他'},
          ]
        }
      ]
    }

option22 = {
    title: {
        text: '合计',
        textStyle:{
            color: '#fff'
        },
                subtext: '100%',
        subtextStyle: {
            color: '#fff',
            fontSize:18,
        },
        x: 'center',
        y: 'center' 
    },
    tooltip: {
        trigger: 'item',
        formatter: '{c}'
    },
    legend: {
        show: true,
        y: 'top',
        data:['长途交通费','自驾车费用','住宿','餐饮','景点旅游','文化娱乐','购物',"休闲疗养",'其他'],
        orient: 'left',
        x: 0,
        y: 0,
        textStyle: {
        fontSize: '14',
        color: '#fff'
        },
    },
    calculable: true,
    series: [
        {
        color: ['#0997c1', '#c22167', '#082773', '#604fb9', '#0067c3', '#68cdfb'],
        type: 'pie',
        radius: [50, 200],
        center: ['50%', '50%'],
        
        //roseType: 'radius',
        label: {
            normal: {
                /* position: 'inside',*/
                color:"#fff"
            }
        },
        tooltip: {
            trigger:'item'
        },
        itemStyle: {
                normal: {
                    
                    /*borderWidth: 14.5,
                    borderColor: 'rgba(255, 255, 255, 1)'*/
                }
        },
        data: [
            {value: 1.70, name:'长途交通费'},
            {value: 9.49, name: '自驾车费用'},
            {value: 15.83, name: '住宿'},
            {value: 18.15, name: '餐饮'},
            {value: 4.86, name: '景点旅游'},
            {value: 2.29, name: '文化娱乐'},
            {value: 43.76, name: '购物'},
            {value: 1.89, name: '休闲疗养'},
            {value: 2.03, name: '其他'},
        ]
        }
    ]
    }



/*var webkitDep = {  
    "type": "force",  
    "categories": [//关系网类别，可以写多组  
        {  
            "name": "人物关系",//关系网名称  
            "keyword": {},  
            "base": "人物关系"  
        }  
    ],  
    "nodes": [//展示的节点  
        {  
            "name": "齐悦科技",//节点名称  
            "value": 3,  
            "category": 0//与关系网类别索引对应，此处只有一个关系网所以这里写0  
        },  
        {  
            "name": "股权链",  
            "value": 1,  
            "category": 0  
        },  
        {  
            "name": "信用链",  
            "value": 1,  
            "category": 0  
        },
       {  
            "name": "股东",  
            "value": 1,  
            "category": 0  
        } 
    ],  
    "links": [//节点之间连接  
        {  
            "source": 0,//起始节点，0表示第一个节点  
            "target": 1 //目标节点，1表示与索引为1的节点进行连接  
        },  
        {  
            "source": 0,  
            "target": 2  
        },{  
            "source": 1,  
            "target": 3  
        }  
    ]  
};  
  
    optiongx = {  
        legend: {  
            data: ['人物关系']//此处的数据必须和关系网类别中name相对应  
        },  
        series: [{  
            type: 'graph',  
            layout: 'force',  
            animation: false,  
            label: {  
                normal: {  
                    show:true,  
                    position: 'right'  
                }  
            },  
            draggable: true,  
            data: webkitDep.nodes.map(function (node, idx) {  
                node.id = idx;  
                return node;  
            }),  
            categories: webkitDep.categories,  
            force: {  
                edgeLength: 105,//连线的长度  
                repulsion: 100  //子节点之间的间距  
            },  
            edges: webkitDep.links  
        }]  
    };  
    var guanxi = echarts.init(document.getElementById('guanxi'));
    guanxi.setOption(optiongx);  */
   function tohref(){
   		window.location.href = "sanlian.html?1";
   }
   function toindex(){
   		window.location.href = "index.html";
   			
   		
   }

function loadtm(){
	var days=new  Array ("日", "一", "二", "三", "四", "五", "六");  
	  var currentDT = new Date();  
	  var y,m,date,day,hs,ms,ss,theDateStr;  
	  y = currentDT.getFullYear(); //四位整数表示的年份  
	  m = currentDT.getMonth(); //月  
	  date = currentDT.getDate(); //日  
	  day = currentDT.getDay(); //星期  
	  hs = currentDT.getHours(); //时  
	  ms = currentDT.getMinutes(); //分  
	  ss = currentDT.getSeconds(); //秒  
	  //theDateStr = y+"年"+  m +"月"+date+"日 星期"+days[day]+" "+hs+":"+ms+":"+ss; 
	  theDateStr = " "+p(hs)+":"+p(ms)+":"+p(ss); 
	  console.log(theDateStr)
	  $(".tmtext>span span").html(theDateStr); 
	  // setTimeout 在执行时,是在载入后延迟指定时间后,去执行一次表达式,仅执行一次  
	 
}
  function p(s) {
        return s < 10 ? '0' + s: s;
    }
 window.setInterval( loadtm, 1000);  