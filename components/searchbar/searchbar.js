// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isNavigator:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 组件并不触发请求,而只通知,请求由页面完成
    onInputEvent(e){
      const {value}=e.detail
      const detail={"value":value}
      const options={}
      this.triggerEvent("searchinput",detail,options)
    }
  }
})
