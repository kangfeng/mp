// pages/home/home.js
Page({

  data: {
    active: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  navigateToHome: function(event) {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  navigateToAdd: function(event) {
    wx.navigateTo({
      url: '../add/add',
    })
  },

  navigateToIndex: function(event) {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  navigateToComplex: function(event) {
    wx.navigateTo({
      url: '../complex/complex',
    })
  },

  navigateToMap: function (event) {
    wx.navigateTo({
      url: '../map/map',
    })
  },

  switchTab:function (event) {
    var idx = event.detail
    console.log(idx)
    if (idx == 0) this.navigateToHome()
    if (idx == 1) this.navigateToAdd()
    if (idx == 2) this.navigateToIndex()
    if (idx == 3) this.navigateToComplex()
    if (idx == 4) this.navigateToMap()
  }

})