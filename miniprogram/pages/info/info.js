const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    productsCollection.doc(options.id).get({
      success: res =>  {
        this.setData({
          product: res.data
        }),
        this.info_id = options.id
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(this.info_id)
    productsCollection.doc(this.info_id).get({
      success: res => {
        this.setData({
          product: res.data
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('shareing~')
  }
})