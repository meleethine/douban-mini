import { network } from "../../utils/network"

// pages/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    start:1,
    count:20
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self=this
    console.log('options',options)
    self.setData(options)
    self.getComments(1)
  },
  getComments(start){
    const self=this
    // 封装获取评论的函数后要重新获取type和id
    const {type,id}=self.data
    if(start>self.data.start){
      self.setData({
        nextLoading:true
      })
    }else{
      self.setData({
        prevLoading:true
      })
    }
    network.getItemComments({
      type:type,
      id:id,
      start:start,
      count:20,
      success(res){
        let total=res.data.total
        let comments=res.data.interests
        self.setData({
          total:total,
          comments:comments,
          start:start,
          prevLoading:false,
          nextLoading:false
        })
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }
    })
  },
  onItemTapEvent:function(){
    wx.navigateBack({
    })
  },
  onPrevPage(){
    let oldstart=this.data.start
    let start=oldstart-this.data.count
    this.getComments(start)
  },
  onNextPage(){
    let oldstart=this.data.start
    let start=oldstart+this.data.count
    this.getComments(start)
  },
})