/* eslint-disable */
const USER_CONFIG = {

  USE_PASSAGE: 'wechat-test',
 
  APP_ID: '',

  APP_SECRET: '',
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: false,

    /** 节假日 */
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: false,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: false,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },
  
  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '本人',
      
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
      
      useTemplateId: 'Urremeyf7pCM2sfDIgwst0n5lQpPW8sA1LKPBiy4avY',

      province: '四川',

      city: '达州',

      horoscopeDate: '10-14',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      
      // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果courseSchedule是一个对象（如下面所示）
      courseSchedule: {
          odd: [
            // 例子，周一的课表
            [
              '08:30-10:00 微信小程序开发 204A',
              '10:20-11:50 微信小程序开发 五机房',
              '14:40-16:10 大数据技术与应用 407A',
              '16:20-17:50 大数据技术与应用 一机房'
            ],
            // 周二
            [
              '08:30-10:00 交互界面设计 112B',
              '10:20-11:50 交互界面设计 二机房'
            ],
            // 周三
            [
              '08:30-10:00 影视特效制作 208A',
              '10:20-11:50 影视特效制作 五机房'
            ],
            // 周四
            [
              '08:30-10:00 虚拟现实应用设计 人工智能实训室2',
              '10:20-11:50 虚拟现实应用设计 人工智能实训室2'
            ],
            // 周五
            [
              '08:30-10:00 广告创意 201A',
              '10:20-11:50 广告创意 一机房'
            ]
          ],
        },
       },
      ],
  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 使用微信测试号：【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // 使用其他通道时，请填写 config/template-config.cjs 中【推送完成提醒】模板的id
  CALLBACK_TEMPLATE_ID: '	uDGKSdrCUyi2Qh3Dz9ysjhVmwZz3KHkbHgThr1OKnEs	',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oHkJg6RMxKEg0nWPLzYj1j2oLvDI',
    }
  ],

}


module.exports = USER_CONFIG

