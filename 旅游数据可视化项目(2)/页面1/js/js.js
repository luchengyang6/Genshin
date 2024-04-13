
$(window).load(function(){$(".loading").fadeOut()}) 
$(function () {
    echarts_1();

    echarts_21();
    echarts_3();

    echarts_4();
    echarts_5();
    echarts_6();
    echarts_7();


    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        var option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '',
              left: 'center'
            },
            series: [
              {
                name: '景点个数',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                padAngle: 5,
                itemStyle: {
                  borderRadius: 10
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false,
                  color:'#C0C0C0'
                },
                data: [
                  { value: 32, name: '环翠区' },
                  { value: 28, name: '荣成市',  itemStyle:{color:'#0000ff'}},
                  { value: 26, name: '乳山市' ,itemStyle:{color:'#ffff00'}},
                  { value: 12, name: '文登区' ,itemStyle:{color:'#00ff00'} },
                ]
              }
            ]
          };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));
 var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F57474", "#56D0E3", "#F8B448", "#1089E7", "#F8B448", "#8B78F6"];
  
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ['2022','2021',"2020", "2019", "2018", "2017", "2016", "2015"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [3541, 4403, 3233, 5100, 4682, 4262, 3861, 3541],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 15,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}"
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });


    }

	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
var plantCap = [{
       name: '发明',
       value: '7'
   }, {
       name: '外观',
       value: '15'
   }, {
       name: '商标',
       value: '3'
   }, {
       name: '实用',
       value: '11'
   }, {
       name: '超市',
       value: '650'
   },{
       name: '软件',
       value: '7'
   }];
   var datalist = [{
       offset: [56, 48],
       symbolSize: 80,
      // opacity: .95,
       color: '#0050e4',
   }, {
   
       offset: [30, 70],
       symbolSize: 60,
        color: '#fc4322'
   }, {
       offset: [0, 43],
       symbolSize: 40,
       color: '#e18310'
   
   }, {
       offset: [93, 30],
       symbolSize: 60,
        color: '#08ba79'
   }, {
       offset: [26, 19],
       symbolSize: 55,
       color: '#069fc5'
   }, {
       offset: [75, 75],
       symbolSize: 40,
        color: '#e18310'
   
   }];
   
   var datas = [];
   for (var i = 0; i < plantCap.length; i++) {
       var item = plantCap[i];
       var itemToStyle = datalist[i];
       datas.push({
           name: item.value + '\n' + item.name,
           value: itemToStyle.offset,
           symbolSize: itemToStyle.symbolSize,
         
   
           itemStyle: {
               normal: {
                  color: itemToStyle.color,
                   opacity: itemToStyle.opacity
              }
           },
       })
   }
   option = {
       grid: {
           show: false,
           top: 10,
           bottom: 10
       },
   
       xAxis: [{
           gridIndex: 0,
           type: 'value',
           show: false,
           min: 0,
           max: 100,
           nameLocation: 'middle',
           nameGap: 5
       }],
   
       yAxis: [{
           gridIndex: 0,
           min: 0,
           show: false,
           max: 100,
           nameLocation: 'middle',
           nameGap: 30
       }],
       series: [{
           type: 'scatter',
           symbol: 'circle',
           symbolSize: 120,
           label: {
               normal: {
                   show: true,
                   formatter: '{b}',
                   color: '#FFF',
                   textStyle: {
                       fontSize: '12'
                   }
                   
               },
           },
           data: datas
       }]
   
   };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_4() {  
        // 基于准备好的dom，初始化echarts实例  
        var myChart = echarts.init(document.getElementById('echart4'));  
          
        var option = {  
          textStyle:{color:'#FFFFFF'},
            title: {  
                text: ''  
            },  
            tooltip: {  
                trigger: 'axis',  
                axisPointer: {  
                    type: 'shadow'  
                }  
            },  
            grid: {  
                top: 30,  
                bottom: 30  
            },  
            xAxis: {  
                type: 'value',  
                position: 'top',  
                splitLine: {  
                    lineStyle: {  
                        type: 'dashed'  
                    }  
                }  
            },  
            yAxis: {  
                type: 'category',  
                axisLine: { show: false },  
                axisLabel: { show: false },  
                axisTick: { show: false },  
                splitLine: { show: false },  
                data: [  
                    '2018',  
                    '2019',  
                    '2020',  
                    '2021',  
                    '2022'  
                ]  
            },  
            series: [  
                {  
                    name: '增长率',  
                    type: 'bar',  
                    stack: 'Total',  
                    label: {  
                        show: true,  
                        position: 'right', // 将标签放在柱子的顶部  
                        formatter: '{b}' // 格式化标签内容，这里显示的是yAxis的类目值  
                    },  
                    data: [  
                       { value:8.7},
                        {value:10.01},  
                        {value:-37.14,  itemStyle:{color:'#00ff00'}},
                    {value:35.27},  
                        {value:-19.57,  itemStyle:{color:'#00ff00'}},
                    ]  
                }  
            ]  
        };  
        // 使用刚指定的配置项和数据显示图表。  
        myChart.setOption(option);  
        window.addEventListener("resize", function() {  
            myChart.resize();  
        });  
    }
    function echarts_5() {
        var myChart = echarts.init(document.getElementById('echart5'));
       option = {
           tooltip: {
               trigger: 'axis',
               axisPointer: {
                   type: 'shadow'
               }
           },
        legend: {
               data: [],
               left: 'center',
               textStyle: {color: "#fff"},
           },
                 grid: {
               left: '0',
               top: '30',
               right: '10',
               bottom: '0',
               containLabel: true
           },
         
           xAxis: [{
               type: 'category',
                boundaryGap: false,
          data: ['2018', '2019', '2020', '2021', '2022'],
               axisLine: {
                   lineStyle: {
                       color: 'rgba(255,255,255,0.12)'
                   }
               },
               axisLabel: {
                //   margin: 10,
                   color: '#e2e9ff',
                   textStyle: {
                       fontSize: 14
                   },
               },
           }],
           yAxis: [{
               splitNumber:3,
               axisLabel: {
                   formatter: '{value}',
                   color: '#e2e9ff',
               },
               axisLine: {
                   show: false
               },
               splitLine: {
                   lineStyle: {
                       color: 'rgba(255,255,255,0.12)',
                       type:'dotted'
                   }
               }
           }],
           series: [
               {
                   name: '增长率/%',
               type: 'line',
             //  smooth: true,
               symbol: 'circle',
               symbolSize: 5,
               showSymbol: false,
                   areaStyle: {
       
                   normal: {
       
                       color: '#DDA0DD'
       
                   }
       
               },
                lineStyle: {
                   normal: {
                       color: '#A52A2A',
                       width: 2
                   }
               },
             
               itemStyle: {normal: {color: '#58c8da',}},
              data: [12.39, 12.29, -43.24, 35.72,-27.11 ],
               
           },
               
           ]
       };
               myChart.setOption(option);
               window.addEventListener("resize",function(){
                   myChart.resize();
               });
           }
function echarts_6() {
 var myChart = echarts.init(document.getElementById('echart6'));
  var option = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
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
      name: '个数',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 2, name: '5A' },
        { value: 12, name: '4A' , itemStyle:{color:'#00FFFF'}},
        { value: 34, name: '3A' ,itemStyle:{color:'#00FF00'}},
        { value: 3, name: '2A' ,itemStyle:{color:'#FFFF00'}},
        { value: 0, name: '1A' }
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
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_7() {
 var myChart = echarts.init(document.getElementById('echart7'));
 var option = {
  textStyle:{color:'#FFFFFF'},
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [220, 220, '2010'],
        [252, 252, '2011'],
        [297, 297, '2012'],
        [338, 338, '2013'],
        [383, 383, '2014'],
        [455, 455, '2015'],
        [519, 519, '2016'],
        [596, 596, '2017'],
        [650, 650, '2018'],
        [692, 692, '2019'],
        [392, 392, '2020'],
        [533, 533, '2021'],
        [388, 388, '2022'],
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 200,
      max: 700,
      text: ['', ''],
      textStyle:{color:'#FFFFFF'},
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









