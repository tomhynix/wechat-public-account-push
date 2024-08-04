/* eslint-disable */

const USER_CONFIG = {
  
  USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '',
  CITY: '锡林郭勒',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '308d143b9f2c431992406210df323653',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-15',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝恰娜', year: '2001', date: '11-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-10' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到a
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

