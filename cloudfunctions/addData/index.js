// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const productsCollection = db.collection('products')

// 云函数入口函数
exports.main = async(event, context) => {
  return await productsCollection.add({
    data: {
      title: "product 3",
      image: "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18101919",
      tags: ["tag1", "tag3"],
      price: 50.12,
      color: 'yellow'
    }
  })
}