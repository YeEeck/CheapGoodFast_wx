//index.js
//获取应用实例
const app = getApp()
// var pagedata = {
//   data: {
//     SwitchChecked1: false,
//     SwitchChecked2: false,
//     SwitchChecked3: false
//   },
// }

Page({
  data: {
    SwitchChecked1: false,
    SwitchChecked2: false,
    SwitchChecked3: false
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
    
  },
  switch1Change: function (e) {
    this.setData({
      SwitchChecked1: e.detail.value
    })
    if (this.data.SwitchChecked1 == this.data.SwitchChecked2 == this.data.SwitchChecked3 == true) {
      if ((Math.floor(Math.random() * 2)) == 0) {
        this.setData({
          SwitchChecked2: false
        })
      } else {
        this.setData({
          SwitchChecked3: false
        })
      }
    }
  },

  switch2Change: function (e) {
    this.setData({
      SwitchChecked2: e.detail.value
    })
    if (this.data.SwitchChecked1 == this.data.SwitchChecked2 == this.data.SwitchChecked3 == true) {

      if ((Math.floor(Math.random() * 2)) == 0) {
        this.setData({
          SwitchChecked1: false
        })
      } else {
        this.setData({
          SwitchChecked3: false
        })
      }
    }
  },

  switch3Change: function (e) {
    this.setData({
      SwitchChecked3: e.detail.value
    })
    if (this.data.SwitchChecked1 == this.data.SwitchChecked2 == this.data.SwitchChecked3 == true) {
      if ((Math.floor(Math.random() * 2)) == 0) {
        this.setData({
          SwitchChecked1: false
        })
      } else {
        this.setData({
          SwitchChecked2: false
        })
      }
    }
  }
})