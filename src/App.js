import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import logo from './logo.svg';
import './App.css';

//HighCharts配置
const config = {
    xAxis: {
        categories: ['一月(Jan)', '二月(Feb)', '三月(Mar)', '四月(Apr)', '五月(May)', '六月(Jun)', '七月(Jul)', '八月(Aug)', '九月(Sep)', '十月(Oct)', '十一月(Nov)', '十二月(Dec)']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};

//HighCharts渲染后回调
const afterRender = (chart)=>{
    //alert('afterRender');
};

const element = <h1>Hello World</h1>;


//主页
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>租房信息分析展示平台</h2>
        </div>
        <p className="App-intro">
            <ReactHighcharts config={config} ref="chart" callback = {afterRender}></ReactHighcharts>
        </p>
      </div>
    );
  }
}

export default App;
