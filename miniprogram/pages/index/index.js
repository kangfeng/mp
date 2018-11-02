import Notify  from '../../vant/notify/notify';

const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    products_result: [],
    products_search_result:[]
  },

  //触底事件处理
  onReachBottom:function () {
   // console.log("触底~")
  },

  onLoad: function (options) {
    productsCollection.get().then(res => {
      console.log(res.data)
      this.setData({
        products: res.data,
      })
      this.products_result = res.data
    })
  },

  //下拉刷新
  onPullDownRefresh: function () {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
      wx.stopPullDownRefresh()
      Notify({
        text: '刷新成功~',
        duration: 2000,
        color: '#fff',
        selector: '#custom-selector',
        backgroundColor: '#38f'
      });
    })
  },

  //标题栏返回事件处理
  onClickLeft:function() {
    wx.navigateBack({
      delta: 1
    })
  },

  //单条记录点击处理
  click:function (event) {
    console.log(event.currentTarget.dataset)
    productsCollection.doc(event.currentTarget.dataset.id).update({
      data: {
        view: _.inc(1)
      }
    })
  },

  //搜索
  onSearch:function (e) {
    console.log(e.detail)
    productsCollection.where({
      title:_.eq(e.detail) 
    }).get().then(res => {
      console.log(res.data)
      this.setData({
        products: res.data
      })
      this.products_search_result = res.data
    })
  },

  //搜索取消事件处理
  onCancel:function () {
    console.log('cancel search~')
    this.onLoad()
  }

})