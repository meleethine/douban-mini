import { globalUrls } from "/globalUrls"
const network = {
  getMovieList(params) {
    params.type='movie'
    this.getItemList(params)
  },
  getTVList(params) {
    params.type='tv'
    this.getItemList(params)
  },
  getShowList(params) {
   params.type='show'
   this.getItemList(params)
  },
  getItemList(params){
    let url=''
    if(params.type=='movie'){
      url=globalUrls.movieurl
    }
    else if(params.type=='tv'){
      url=globalUrls.tvurl
    }
    else if(params.type=='show'){
      url=globalUrls.showurl
    }
    let count=params.count?params.count:7
    wx.request({
      url:url,
      data: { count: count },
      success(res) {
        let items = res.data.subject_collection_items
        let itemsLen=items.length
        if(itemsLen%3==2){
          items.push(null)
        }
        if (params && params.success) {
          params.success(items)
        }
      }
    })
  },
  getItemDetail(params){
    const {type,id}=params
    let url
    if(type=='movie'){
      url=globalUrls.moviedetail+id
    }else if(type=='tv'){
      url=globalUrls.tvdetail+id
    }else if(type=='show'){
      url=globalUrls.showdetail+id
    }
    wx.request({
      url: url,
      success(res){
        const item=res.data
        // 如果请求成功就执行success回调,将数据传递
        if(params.success){
          params.success(item)
        }
      }
    })
  },
  getItemTags(params){
    const {type,id}=params
    let url
    if(type=='movie'){
      url=globalUrls.movietags(id)
    }else if(type=='tv'){
      url=globalUrls.tvtags(id)
    }else if(type=='show'){
      url=globalUrls.showtags(id)
    }
    wx.request({
      url: url,
      success(res){
        let tags=res.data.tags
        // 如果请求成功就执行success回调,将数据传递
        if(params.success){
          params.success(tags)
        }
      }
    })
  },
  // 获取评论
  getItemComments(params){
    const {type,id}=params
    const start=params.start?params.start:0
    const count=params.count?params.count:3
    let url
    if(type=='movie'){
      url=globalUrls.moviecomments(id,start,count)
    }else if(type=='tv'){
      url=globalUrls.tvcomments(id,start,count)
    }else if(type=='show'){
      url=globalUrls.showcomments(id,start,count)
    }
    wx.request({
      url: url,
      success(res){
        // 如果请求成功就执行success回调,将数据传递
        console.log(res)
        if(params.success){
          params.success(res)
        }
      }
    })
  },
  getSearch(params){
    const{q}=params
    const url=globalUrls.searchUrl(q)
    wx.request({
      url: url,
      success(res){
        const {subjects}=res.data
        if(params.success){
          params.success(subjects)
        }
      }
    })
  }
}
export { network }