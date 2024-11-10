import React from 'react';
import ReactECharts from 'echarts-for-react';

const Heatmap = (props) => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const PersonType = ['STAFF', 'OMANI', 'WORKERS'];

  const data = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 16; j++) {
      const randomValue = Math.floor(Math.random() * 10001); 
      data.push([j, i, randomValue]);
    }
  }
  
  const getXAxisData = () => {
      switch (props.selectedTimeFrame) {
          case 'week':
              return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          case 'month':
              return Array.from({ length: 31 }, (_, i) => (i + 1).toString());;
          case 'year':
              return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          default:
              return ["startDate","EndDate"];
      }
  };         
  const getOption = () => ({
    tooltip: {
      position: 'top'
    },
    grid: {
      top: 50,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: getXAxisData(),
      splitArea: {
        show: true
      },
      offset: 5,
      axisLine: {
        show: false,
        onZero: false,
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: PersonType,
      splitArea: {
        show: true
      },
      offset: 5,
      axisLine: {
        show: false,
        onZero: false,
      },
      axisTick: {
        show: false
      }
    },
    visualMap: {
      type: 'piecewise',
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: '0%',
      pieces: [
        { min: 0, max: 2000, color: '#f3f4f6' },
        { min: 2000, max: 5000, color: '#ced0f8' },
        { min: 5000, max: 10000, color: '#636ae8' },
        // { min: 50, max: 100, color: '#636ae8' },
      ],
    },
    series: [
      {
        name: 'Card',
        type: 'heatmap',
        data: data,
        label: {
          show: false
        },
        // emphasis: {
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //   }
        // },
        itemStyle: {
          borderColor: 'white',
          borderWidth: 8,
          borderRadius: 10,
          padding: [2, 2], 
          // opacity: 0.8
        }
      }
    ]
  });

  return (
    <ReactECharts
      option={getOption()}
      style={{ width: '100%', height: '250px' }}
      opts={{ renderer: 'canvas' }}
    />
  );
};

export default Heatmap;
