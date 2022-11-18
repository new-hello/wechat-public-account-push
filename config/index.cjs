/* eslint-disable */
const USER_CONFIG = {
  /**
   * 基本配置
   */
  USE_PASSAGE: 'wechat-test', 
  
  APP_ID: '',
  
  APP_SECRET: '',
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    
    // 每日一言
    oneTalk: false,
    
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    
    // 朋友圈文案
    momentCopyrighting: false,
    
    // 毒鸡汤
    poisonChickenSoup: false,
    
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: true,
  
    /** 生日消息和节日消息 */
    birthdayMessage: true,
  
    /** 学生课表 */
    courseSchedule: false,
    
    NOTICE:true,
  },
  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '',
    
    // 早安心语
    morningGreeting: true,
  
    // 晚安心语
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 0,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
     
      name: '露露宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: '1V5l3oLrATfmCzEI_75eiPsbBFA6CN18SqxIWZAQNYA',

      province: '四川',

      city: '内江',

      horoscopeDate: '04-21',

      horoscopeDateType: '今日',

      openUrl: 'https://www.xiaohongshu.com/user/profile/605c0243000000000100210c?xhsshare=QQ&appuid=5e5eb99d000000000100a8a3&apptime=1668405053',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{type: '*生日', name: '露露宝贝', year: '2001', date: '04-21',},
        
        //{type: '节日', name: '无', year: '2020', date: '09-03',},
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { type: '生日', name: '露露宝贝', year: '2001', date: '04-21',},
        
        { type: '节日', name: '除夕', year: '2023', date: '01-21',}
      ],
      
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-22' },
        
      ],
    },
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 使用微信测试号：【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // 使用其他通道时，请填写 config/template-config.cjs 中【推送完成提醒】模板的id
  CALLBACK_TEMPLATE_ID: 'M6sw_D_e-tCFmh0S-7cPzCuVMHLouxgoSWTIA-orauY',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
    }
    // 你可以不断按格式往下增加
    // ...
  ],
}


module.exports = USER_CONFIG

