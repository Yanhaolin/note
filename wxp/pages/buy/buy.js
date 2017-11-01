// pages/buy/buy.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    array: ['本部图书馆', '白云图书馆', '西校区图书馆', '北校区图书馆'],
    index: 0,
    date: '2017-11-01',
    time: '12:00',
    list: [{
      title: '解忧杂货店',
      desc1: '[日]东野圭吾/南海出版社',
      desc2: '九成新未开无笔记',
      desc: '校本部6栋501宿舍XXX',
      price: '￥45.00',
    }],
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  netpay: function(){
    var that = this;
    that.setData({
      showView: (that.data.showView = true)
    })
  },
  cash: function(){
    var that = this;
    that.setData({
      showView: (that.data.showView = false)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
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
  
  }
})