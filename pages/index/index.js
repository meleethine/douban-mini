// index.js
// 获取应用实例
const app = getApp()
import {network} from "../../utils/network"
Page({
  data: {
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  onLoad(options) {
    console.log('options',options)
    let self=this
    // 请求电影
    network.getMovieList({
      success(movies){
        self.setData({
          movies:movies
        })
      }
    })
    // 请求电视剧
    network.getTVList({
      success(tvs){
        self.setData({
          tvs:tvs
        })
      }
    })
    // 请求综艺
    network.getShowList({
      success(shows){
        self.setData({
          shows:shows
        })
      }
    })
  }
})
