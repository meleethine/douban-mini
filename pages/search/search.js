import { network } from "../../utils/network"

// pages/search/search.js
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
    const self=this
    wx.getStorage({
      key:"searched",
      success(res){
        const histories=res.data
        self.setData({
          histories:histories
        })
      }
    })
      
  },
  onSearchInput(e){
    // searchbar中触发事件triggerEvent
    // this.triggerEvent("searchinput",detail,options)
    // searchinput即此处的onSearchInput
    const self=this
    const {value}=e.detail
    console.log('e.detail',e.detail)
    if(!value||value==""){
      self.setData({
        items:null
      })
      return
    }
    network.getSearch({
      q:value,
      success(subjects){
          self.setData({
            items:subjects.items
          })
      }
    })
  },
  onItemTap(e){
    console.log('e1',e)
    const self=this
    const {id,title}=e.currentTarget.dataset
    let histories=self.data.histories||[]
    let exist=false
    if(histories){
      histories.forEach(item=>{
        if(item.id==id){
          exist=true
        }
      })
    }
    if(!exist){
      histories.push({id:id,title:title})
      wx.setStorage({
        key:'searched',
        data:histories?histories:[{id:id,title:title}],
        success(){
          console.log('保存成功!')
        }
      })
    }
    wx.navigateTo({
      url: "/pages/detail/detail?type=movie&id="+id
    })
  },
  onClearTap(){
    wx.removeStorage({
      key: 'searched',
      success(){
        console.log('清除成功')
      }
    })
    this.setData({
      histories:null
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
  onPullDownRefresh() {

  },

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