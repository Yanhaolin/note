var initData = '登陆回复以观看更多留言\n'
var extraLine = [];
var x = '';
var y = 0;
var name = '';
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
    text: initData,
    list: [{
      title: '解忧杂货店',
      desc1: '[日]东野圭吾/南海出版社',
      desc2: '九成新未开无笔记',
      desc: '校本部6栋501宿舍XXX',
      price: '￥45.00'
    }],
    mainline: [{
      txt: '书籍介绍',
      maintxt: '《解忧杂货店》是日本作家东野圭吾写作的奇幻温情小说。2011年于《小说野性时代》连载，于2012年3月由角川书店发行单行本。\n该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答：因男友身患绝症，年轻女孩月兔在爱情与梦想间徘徊；松冈克郎为了音乐梦想离家漂泊，却在现实中寸步难行；少年浩介面临家庭巨变，挣扎在亲情与未来的迷茫中……他们将困惑写成信投进杂货店，奇妙的事情随即不断发生。\n[1] 该书获得第七届中央公论文艺奖\n[2]苹果日报翻译小说销售排行榜连续两季第二名，荣登纪伊国屋、诚品、博客来、金石堂各大排行榜第1名，亚马逊中国2015年度畅销图书榜第二。!'
    },{
      txt: '卖家联系方式',
      maintxt: '12345678'
    },{
      txt: '卖家留言',
      maintxt: '想要这本书的请和我联系吧~'
    }]
  },
/** 自己写的垃圾没有存储功能的留言功能hiahiahia */
  liuyan: function (e) {
  if (x){
    if (name){
      extraLine.push('第' + y + '楼用户-(' + name + ')说:' + x)
      this.setData({
        text: initData + extraLine.join('\n')
      })
    }
  }
  },

  formSubmit: function (a) {
    var input = a.detail.value.input;
    if (input != '')
    {
      if (name){
        x = a.detail.value.input
        y = y + 1
      }
      else{
        x = false
      }
    }else
    {
      x = false
    }
  },

  getinfo: function (e) {
    name = e.detail.userInfo.nickName
  },
  /** 至此结束 */

  buy: function(){
    wx.navigateTo({
      url: '../buy/buy',
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
  
  },



})