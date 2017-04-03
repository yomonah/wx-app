// pages/detail/detail.js
Page({
  data:{
    item:{}
  },
  onLoad:function(options){
    let data = JSON.parse(options.item);
    this.setData({
      item:data
    })
    // 页面初始化 options为页面跳转所带来的参数
  }
})