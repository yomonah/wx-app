//index.js
//获取应用实例
import {dataSet} from '../../utils/data.js';
var app = getApp()
Page({
  data: {
    imgUrls: ['../../img/one.jpeg',
    '../../img/two.jpg',
    '../../img/three.jpeg',
    '../../img/four.jpeg',
    '../../img/five.jpeg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:dataSet
  },
  //事件处理函数
  getDetail:function(event){
    let detail = event.target.dataset.detail || {};
    wx.navigateTo({
      url: `../../pages/detail/detail?item=${JSON.stringify(detail)}`
    })
  },
  pullDownRefresh: function( e ){
    this.onLoad()
  }
})
