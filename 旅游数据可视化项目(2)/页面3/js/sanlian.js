        // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    var nodes = [];
	var links = [];
	var constMaxDepth = 2;
	var constMaxChildren = 7;
	var constMinChildren = 4;
	var constMaxRadius = 10;
	var constMinRadius = 2;
	
nodes = [//展示的节点  
        {  
            "name": "旅游业务",//节点名称  
            "value": 63,
            "depth": 0,
            "id": 0,
            "category": 3//与关系网类别索引对应，此处只有一个关系网所以这里写0  
        },  
        {  
            "name": "政府指导",  
            "value": 40,  
            "category": 2,
            "depth": 1,
            "id": 1,  
        },  
        {  
            "name": "旅游企业",  
            "value": 40,  
            "category": 2,
            "depth": 2,
            "id": 2, 
        },
       {  
            "name": "制定政策",  
            "value": 30,  
            "category": 1 ,
            "depth": 1,
            "id": 3
        },{  
            "name": "制定旅游政策",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 4
        },{  
            "name": "规划发展方向",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 5
        },{  
            "name": "人民群众",  
            "value": 40,  
            "category": 2,
            "depth": 3,
            "id": 6, 
        }, 
           {  
            "name": "服务监督",  
            "value": 30,  
            "category": 1 ,
            "depth": 1,
            "id": 7
        },{  
            "name": "监督市场秩序",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 8
        },{  
            "name": "严惩违法行为",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 9
        },{  
            "name": "基础设施建设",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 10
        },{  
            "name": "完善基础政策",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 11
        },{  
            "name": "保障人民利益",  
            "value": 23,  
            "category": 0 ,
            "depth": 1,
            "id": 12
        },{  
            "name": "提供服务",  
            "value": 30,  
            "category": 1 ,
            "depth": 2,
            "id": 13
        }
        ,{  
            "name": "提供线路",  
            "value": 30,  
            "category": 1 ,
            "depth": 2,
            "id": 14
        },{  
            "name": "提供住宿",  
            "value": 30,  
            "category": 1 ,
            "depth": 2,
            "id": 15
        },{  
            "name": "提供餐饮",  
            "value": 30,  
            "category": 1 ,
            "depth": 2,
            "id": 16
        },{  
            "name": "销售门票",  
            "value": 30,  
            "category": 1 ,
            "depth": 2,
            "id": 17
        },{  
            "name": "合理设置价格区间",  
            "value": 23,  
            "category": 0 ,
            "depth": 2,
            "id": 18
        },{  
            "name": "保证食品安全",  
            "value": 23,  
            "category": 0 ,
            "depth": 2,
            "id": 19
        },{  
            "name": "志愿服务",  
            "value": 30,  
            "category": 1 ,
            "depth": 3,
            "id": 20
        },{  
            "name": "遵规守纪",  
            "value": 30,  
            "category": 1 ,
            "depth": 3,
            "id": 21
        },{  
            "name": "旅游从业者",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 22
        },{  
            "name": "旅游志愿者",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 23
        },{  
            "name": "文化活动介绍",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 24
        },{  
            "name": "环境保护",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 25
        },{  
            "name": "热心帮助游客",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 26
        },{  
            "name": "用语文明",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 27
        },{  
            "name": "举止有礼",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 28
        },{  
            "name": "着装规整",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 29
        },
        {  
            "name": "待客有道",  
            "value": 23,  
            "category": 0 ,
            "depth": 3,
            "id": 31
        }
    ];
    links =  [//节点之间连接  
        {  
            "source": 0,//起始节点，0表示第一个节点  
            "target": 1,
            "weight": 9
        },
        {  
            "source": 0,  
            "target": 2  
        },
        {  
            "source": 0,//起始节点，0表示第一个节点  
            "target": 6,
            "weight": 9
        },{
            "source": 1,  
            "target": 3  
        },{
            "source": 1,  
            "target": 7  
        },{  
            "source": 3,  
            "target": 4  
        }
        ,{  
            "source": 3,  
            "target": 5  
        },{
            "source": 7,  
            "target": 8  
        },{
            "source": 7,  
            "target": 9  
        },
        {
            "source": 7,  
            "target": 10 
        },{
            "source": 7,  
            "target": 11
        },{
            "source": 7,  
            "target": 12 
        },{
            "source": 2,  
            "target": 13 
        },{
            "source": 2,  
            "target": 14 
        },{
            "source": 2,  
            "target": 15 
        },{
            "source": 2,  
            "target": 16 
        },{
            "source": 2,  
            "target": 17 
        },{
            "source": 17,  
            "target": 18 
        },{
            "source": 16,  
            "target": 19 
        },{
            "source": 6,  
            "target": 20 
        },{
            "source": 6,  
            "target": 21 
        },{
            "source": 20,  
            "target": 22 
        },{
            "source": 20,  
            "target": 23
        },{
            "source": 20,  
            "target": 24 
        },{
            "source": 20,  
            "target": 25
        },{
            "source": 20,  
            "target": 26 
        },{
            "source": 21,  
            "target": 27 
        },{
            "source": 21,  
            "target": 28 
        },{
            "source": 21,  
            "target": 29 
        },{
            "source": 21,  
            "target": 30 
        },{
            "source": 21,  
            "target": 31 
        },{
            "source": 21,  
            "target": 32 
        }
    ] 
    for(var i=0; i<nodes.length; i++){
    	if(nodes[i].id == "0"){
    		nodes[i].itemStyle = {
    			normal: {
    				borderColor: '#000',
    				color:'blue',
    				label: {
		                show: true,
		            }
				}
    		}
    	}
    	else if(nodes[i].id == "22"){
    		nodes[i].itemStyle = {
    			normal: {
    				label: {
		                show: true,
		                textStyle:{
		                	color:'yellow'
		                }
		                
		            },
    			}
    		}
    	}
    	//22
    	nodes[i]["symbolSize"] = nodes[i].value *1.2;
    }
    console.log(nodes);
	require(
	    [
	        'echarts',
	        'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
	    ],
	    function (ec) {
	        // 基于准备好的dom，初始化echarts图表
	        var guanxi = ec.init(document.getElementById('guanxi')); 
			option3 = {
			    title : {
			        x:'right',
			        y:'bottom'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: '{b}',
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            restore : {show: true},
			          //  magicType: {show: true, type: ['force', 'chord']},
			            saveAsImage : {show: true}
			        }
			    },
			    legend: {
			        x: 'left',
			        data:['四级','三级', '二级','一级'],
			        orient: 'left',
		      		x: 10,
		      		y: 10,
		            textStyle: {
		              fontSize: '14',
		              color: '#fff'
		            },
			    },
			    series : [
			        {
			            type:'force',
			            name : "Force tree",
			            ribbonType: false,
			            categories : [
			                {
			                    name: '四级'
			                },
			                {
			                    name: '三级'
			                },
			                {
			                    name: '二级'
			                },
                            {
			                    name: '一级'
			                }
			            ],
			            itemStyle: {
			                normal: {
								label: {
			                        show: true,
			                        textStyle:{
			                        	color:'#fff'
			                        }
			                    },
			                    nodeStyle : {
			                        brushType : 'both',
			                        borderColor : 'rgba(255,215,0,0.6)',
			                        borderWidth : 1
			                    }
			                }
			            },
			            minRadius : constMinRadius,
			            maxRadius : constMaxRadius,
			            symbolSize: function (params) {
			            	console.log(params)
			           	},
			            coolDown: 0.995,
			            steps: 10,
			            nodes : nodes,
			            links : links,
			            steps: 1
			        }
			    ]
			};
			console.log(option3)
				 guanxi.setOption(option3); 
	});
	