Page({
  data: {
    imgUrls: [
      '../../img/top1.png',
      '../../img/top2.png',
      '../../img/top3.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:[{
        title: '解忧杂货店',
        desc1: '[日]东野圭吾/南海出版社',
        desc2: '九成新未开无笔记',
        desc: '校本部6栋501宿舍XXX',
        price: '￥45.00'
      },{
      title: '红楼梦',
      desc1: '[中]曹雪芹/长春出版社',
      desc2: '八成新，可能有点老旧',
      desc: '白云校区A2-318XXX',
      price: '￥35.00'
    },{
        title: '红楼梦',
        desc1: '[中]曹雪芹/长春出版社',
        desc2: '全新',
        desc: '白云校区A2-318XXX',
        price: '￥75.00'
    },{
        title: '红楼梦',
        desc1: '[中]曹雪芹/长春出版社',
        desc2: '九成新，有少许笔记',
        desc: '白云校区A2-318XXX',
        price: '￥65.00'
    }]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
