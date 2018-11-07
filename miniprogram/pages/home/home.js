// pages/home/home.js
Page({

  data: {
    active: 0,
    //图片地址
    imgUrls: [
      '/images/img_01.jpg',
      '/images/img_01.jpg',
      '/images/img_01.jpg'
    ],
    //是否采用衔接滑动  
    circular: true,
    //是否显示画板指示点  
    indicatorDots: true,
    //选中点的颜色  
    indicatorcolor: "#ffffff",
    //是否竖直  
    vertical: false,
    //是否自动切换  
    autoplay: true,
    //自动切换的间隔
    interval: 2500,
    //滑动动画时长毫秒  
    duration: 100,
  }

})