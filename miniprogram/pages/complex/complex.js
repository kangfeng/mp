const db = wx.cloud.database()
const _  = db.command
const productsCollection = db.collection('products')
// pages/complex/complex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 3,
    count: 'Count'
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.simple()
  },


  simple:function (event) {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },

  red:function(event) {
    productsCollection
    .where({
      color:"red"
    })
    .get().then(res =>{
      this.setData({
        products: res.data
      })
    })
  },

  lt:function(event){
    productsCollection
      .where({
        price: _.lt(50)
      })
      .get().then(res => {
        this.setData({
          products: res.data
        })
      })
  },

  in:function(event) {
    productsCollection.where({
      price: _.gte(50).and(_.lte(150))
    })
    .get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },

  limit: function (event) {
    productsCollection.limit(1).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },

  orderBy: function (event) {
    productsCollection
    .orderBy('price', 'asc')
    .orderBy('title', 'asc')
    .get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },

  count:function(event) {
    productsCollection.count().then(res => {
      this.setData({
        count: '共有：' + res.total + '条记录'
      })
    })
  }

})