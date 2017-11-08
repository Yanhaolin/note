Page({
  data: {
    list: [{
      title: '解忧杂货店',
      desc1: '[日]东野圭吾/南海出版社',
      desc2: '数量:1',
      img: '../../img/jyzhd.jpg',
    }, 
    ],
    currentTab: 0,
    flag: 0
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({ currentTab: id });
    }
    page.setData({ flag: id });
  },
})