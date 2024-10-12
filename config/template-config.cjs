/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝贝, 早上好',
    desc: `
      **{{date.DATA}}**
      
      💕<font color=#FF00FF>暖心提醒</font>💕
      
      📅下个休息日：{{holidaytts.DATA}}
      
      ---
      
      🏠城市：{{city.DATA}}
      
      🌈天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}

      💧湿度:{{shidu.DATA}}
      
      空气质量指数AQI:{{aqi.DATA}}{{quality.DATA}}

      ☀️日出/日落:{{sunrise.DATA}} / {{sunset.DATA}}
      
      🌀风力: {{wind_direction.DATA}}{{wind_scale.DATA}}

      温馨提示:{{notice.DATA}}
      
      ---
      
      🥰今天是我们在一起的第<font color=#FF0000>{{love_day.DATA}}</font>天
      
      {{birthday_message.DATA}}

      公众号已经上线运行{{love_day.DATA}}天
      
      ---
      
      每日一言 
      {{moment_copyrighting.DATA}}
      
      一首古诗
      
           {{poetry_title.DATA}} 
      
      {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
