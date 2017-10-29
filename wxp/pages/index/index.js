//index.js
//获取应用实例
const app = getApp()
var initData = 'localhost login: guest\nPassword:_\n[guest@qianmiao ~]$'
var extraLine = [];
Page({
  data: {
    text: initData,
    imgUrls: [
      'http://www.gdinit.cn/uploads/allimg/banner_1_2.png',
      'http://www.gdinit.cn/uploads/allimg/banner_2_2.png',
      'http://www.gdinit.cn/uploads/allimg/banner_3_2.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  add: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    var a = e.detail.value 
    if (a == 'cd')
    {
      extraLine.push('[guest@qianmiao ~]$')
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
    if(a == 'clear'){
      if (extraLine.length > 0) {
        extraLine.pop()
        this.setData({
          text: initData + '\n' 
        })
      }
    }
    if(a == 'help'){
      extraLine.push("[cd] --add one line in console\n[help] --show this help  page\n[clear] --delete one line in console\n[guest@qianmiao ~]$")
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
    if (a == 'shutdown') {
      if (extraLine.length > 0) {
        extraLine.pop()
        this.setData({
          text: 'bye bye!\n'
        })
      }
    }
  },
})



