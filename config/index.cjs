/* eslint-disable */
const USER_CONFIG = {

  USE_PASSAGE: 'wechat-test',
  
 
  APP_ID: '',

  
  APP_SECRET: '',
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
   
    weather: true,

    /** 节假日 */
   
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
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
  },
  
  IS_SHOW_COLOR: true,
  
 USERS: [
    {
      
      name: '露露宝贝',
      
      
      id: 'oHkJg6bYOtp3MKws5XhHh0oh01Og',
      
      
      useTemplateId: 'EJWi2QHs0ZMrjjCBvBoEHL_3OH4UkoiNge2UAFG7rmc',
      
      province: '四川',
      // 所在城市或县区
      city: '内江',
      //获取星座运势
      horoscopeDate: '04-21',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 专属节日提醒
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{type: '*生日', name: '露露宝贝', year: '2001', date: '04-21',},
        
        //{type: '节日', name: '无', year: '2020', date: '09-03',},
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { type: '生日', name: '露露宝贝', year: '2001', date: '04-21',},
        
        { type: '节日', name: '除夕', year: '2023', date: '01-21',}
        
      ],
      // 专属纪念日/倒数日
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

