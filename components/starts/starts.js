// components/starts/starts.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0,
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        this.updateRate();
      }
    },
    starsize:{
      type:Number,
      value:20
    },
    fontsize:{
      type:Number,
      value:20
    },
    fontcolor:{
      type:String,
      value:"#ccc"
    },
    istext:{
      type:Boolean,
      value:true
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
    updateRate(){
      let rate=this.properties.rate
      let light=(rate/2)|0
      let half=rate%2
      let grey=5-light-half
      let lights= +light
      let halfs= +half
      let greys= +grey
      // let lights=new Array(light)
      // let halfs=new Array(half)
      // let greys=new Array(grey)
      let ratetext=rate&&rate>0?rate.toFixed(1):'未评分'
      this.setData({
        lights:lights,
        halfs:halfs,
        greys:greys,
        ratetext:ratetext
      })
    }
  },
  lifetimes:{
    attached:function(){
      this.updateRate()
    }
  }
})
