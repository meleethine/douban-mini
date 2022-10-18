import { network } from "../../utils/network"

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {id,type}=options
    const self=this
    self.setData({
      id:id,
      type:type,
    })
    // 获取详情参数
    network.getItemDetail({
      id:id,
      type:type,
      success(item){
        let actors=item.actors
        let actornames=[]
        for(let a of actors){
          actornames.push(a.name)
        }
        const {rating}=item
        self.setData({
          item:item,
          rateval:rating?.value||'',
          ratecnt:rating?.count||'',
          actornames:actornames.slice(0,3)
        })
      }
    })
    // 获取标签
    network.getItemTags({
      type:type,
      id:id,
      success(tags){
        self.setData({
          tags:tags
        })
      }
    })
    // 获取评论
    network.getItemComments({
      type:type,
      id:id,
      success(res){
        const comments=res.data.interests
        const total=res.data.total
        self.setData({
          comments:comments,
          total:total
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 只要页面展示就执行滚动到头部
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh() {
  //   network.getItemComments({
  //     type:type,
  //     id:id,
  //     count:20,
  //     success(res){
  //       const comments=res.data.interests
  //       const total=res.data.total
  //       self.setData({
  //         comments:comments,
  //         total:total
  //       })
  //     }
  //   })
  //   wx.stopPullDownRefresh;
  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})