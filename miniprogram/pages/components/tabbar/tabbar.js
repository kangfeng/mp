// pages/components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentTab: {
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {

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

    navigateToMap: function(event) {
      wx.navigateTo({
        url: '../map/map',
      })
    },

    switchTab: function(event) {
      var idx = event.detail
      console.log(idx)
      if (idx == 0) this.navigateToHome()
      if (idx == 1) this.navigateToAdd()
      if (idx == 2) this.navigateToIndex()
      if (idx == 3) this.navigateToComplex()
      if (idx == 4) this.navigateToMap()
    }
  }

})