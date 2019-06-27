// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paramsType: '',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    let data = []
    let { type } = params
    for (let i = 0; i <= type.length; i++) {
      data.push({
        id: 1 + i, name: 'name-' + type[i] + i, title: '标题-' + type[i] + i, type: type + type[i] + i, content: '最火爆的电影' + type[i] + i
      })
    }
    this.setData({
      paramsType: params.type,
      list: data
    })
    // 请求后台数据
    // wx.request({
    //   url: 'url',
    //   data: {x: "x", y: "y"},
    //   header: { 'content-type': 'application/json' },// 默认值
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
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