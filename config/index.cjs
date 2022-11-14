/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  USE_PASSAGE: 'wechat-test',

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '四川',
  CITY: '内江',

  USERS: [
    {
      // 想要发送的人的名字
      name: '无敌暴龙战士.',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UrE5LjYFHzsB5dCGkseExrnZ8sWoYorNpDYJpFvIXhw	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-21',
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '刘露', year: '2001', date: '04-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2001', date: '04-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-22' },

      ],
    },
  ],
    
    TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '65687576542844d3796c6cf07a78cd47',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'M6sw_D_e-tCFmh0S-7cPzCuVMHLouxgoSWTIA-orauY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
    }
  ],

}

module.exports = USER_CONFIG

