// pages/map/map.js
// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap/qqmap-wx-jssdk.js')
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'R3HBZ-WI6H2-4X5UD-CMWUD-V7QLV-FRF7E' // 必填
})

Page({
  data: {
    active: 4,
    lat: '',
    lon: '',
    search_result: [],
    is_search: false,
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  onLoad: function() {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success(result) {
        const latitude = result.latitude
        const longitude = result.longitude
        const speed = result.speed
        const accuracy = result.accuracy
        console.log(result)
        that.setData({
          latitude: latitude,
          longitude: longitude
        })
      },
      fail() {
      },
      complete(res) {
      }
    })
  },

  regionchange(e) {
    console.log(e.type)
  },

  markertap(e) {
    console.log(e.markerId)
  },

  controltap(e) {
    console.log(e.controlId)
  },

  // 事件触发，调用接口
  nearby_search: function(event) {
    console.log(event)
    
    //获取搜索关键字
    var _keywords = event.detail
    //从页面获取定位到的经纬度数据
    var _lat = event.currentTarget.dataset.latitude
    var _lon = event.currentTarget.dataset.longitude
    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: _keywords, //搜索关键词
      location: _lat + ',' + _lon, //设置周边搜索中心点

      success: function(res) { //搜索成功后的回调
        console.log(res.data)
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            address: res.data[i].address,
            category: res.data[i].category,
            tel: res.data[i].tel,
            distance: res.data[i]._distance,
            iconPath: "../../images/location_pin.png", //图标路径
            width: 20,
            height: 20
          })
        }
        if (mks.length > 0) this.is_search = true
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks,
          search_result: mks,
          is_search: this.is_search
        })

      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res);
      }
    });

  }
})