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
    weather: true,
    holidaytts: false,
    CIBA: true,
    horoscope: true,
    birthdayMessage: true,
    NOTICE:true,
  },
  
  IS_SHOW_COLOR: true,
  
  USERS: [
    {
      name: '露露宝贝',
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
      useTemplateId: '	EJWi2QHs0ZMrjjCBvBoEHL_3OH4UkoiNge2UAFG7rmc',
      province: '四川',
      city: '内江',
      horoscopeDate: '04-21',
      horoscopeDateType: '今日',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{type: '*生日', name: '露露宝贝', year: '2001', date: '04-21',},
        //{type: '节日', name: '无', year: '2020', date: '09-03',},
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { type: '生日', name: '露露宝贝', year: '2001', date: '04-21',},
        { type: '节日', name: '除夕', year: '2023', date: '01-21',}
      ],
      
      customizedDateList: [
        { keyword: 'love_day', date: '2022-05-22' },
      ],
    },
  ],
  
  CALLBACK_TEMPLATE_ID: 'M6sw_D_e-tCFmh0S-7cPzCuVMHLouxgoSWTIA-orauY',
  
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
    }
  ],
}


module.exports = USER_CONFIG

