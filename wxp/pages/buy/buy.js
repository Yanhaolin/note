// pages/buy/buy.js
const templateMessageUrl = require('../../config').templateMessageUrl
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showView: false,
    showView2: false,
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
      showView: (that.data.showView = true),
      showView2: (that.data.showView = false)
    })
  },
  cash: function(){
    var that = this;
    that.setData({
      showView: (that.data.showView = false),
      showView2: (that.data.showView = true)
    })
  },
  payforme: function(){
    wx.navigateTo({
      url: '../payforme/payforme',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  submit: function(){
    wx.showModal({
      title: '提示',
      content: '订单是否经过确认？',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../mybuy/mybuy',
          })
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**模板消息的 */
  submitForm: function (e) {
    var self = this
    var form_id = "4IMrKuAx7cuuSE5v0feNdYX8qgcWWH5WoILekVXNoH0"
    var formData = e.detail.value

    console.log('form_id is:', form_id)

    self.setData({
      loading: true
    })

    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: templateMessageUrl,
          method: 'POST',
          data: {
            form_id,
            openid,
            formData
          },
          success: function (res) {
            console.log('submit form success', res)
            wx.showToast({
              title: '发送订单',
              icon: 'success'
            })
            self.setData({
              loading: false
            })
          },
          fail: function ({ errMsg }) {
            console.log('submit form fail, errMsg is:', errMsg)
          }
        })
      } else {
        console.log('err:', err)
      }
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