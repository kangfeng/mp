// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:1
  },

  addData: function (event) {
    wx.cloud.callFunction({
      name: 'addData'
    }).then(res => {
      console.log(res)
    })

    /*
    productsCollection.add({
      data:{
        title: "product 2",
        image: "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18101919",
        tags:["tag1", "tag3"],
        price: 20.12,
        color:'blue'
      },
    }).then(res => {
      console.log(res)
    })
    */

  }

})