const globalUrls={
  movieurl:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvurl:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  showurl:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  moviedetail:"https://m.douban.com/rexxar/api/v2/movie/",
  tvdetail:"https://m.douban.com/rexxar/api/v2/movie/",
  showdetail:"https://m.douban.com/rexxar/api/v2/movie/",
  // 标签的url
  movietags(id){
    return `https://m.douban.com/rexxar/api/v2/movie/${id}/tags?count=8`
  },
  tvtags(id){
    return `https://m.douban.com/rexxar/api/v2/tv/${id}/tags?count=8`
  },
  showtags(id){
    return this.tvtags(id)
  },
  // 评论的url
  moviecomments(id,start=0,count=3){
    return `https://m.douban.com/rexxar/api/v2/movie/${id}/interests?count=${count}&start=${start}`
  },
  tvcomments(id,start=0,count=3){
    return `https://m.douban.com/rexxar/api/v2/tv/${id}/interests?count=${count}&start=${start}`
  },
  showcomments(id,start=0,count=3){
   return this.tvcomments(id,start,count)
  },
  searchUrl(q){
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q="+q
  }
}
export {globalUrls}