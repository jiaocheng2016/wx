//个人,群 公众号 基本　数据模型
/*
  id
  name
  wxid
  qq
  email
  type  [friends:好友/group:群/service:服务号/sub:订阅号]
  iconSrc
  qrCode
  signature   //签名
  newsUnreadCount {Number} //未读
  endTimeStr    //最后消息
  endChatAuth   //最后消息作者
  endChatTxt    //最后消息内容
  chatBackground //聊天背景
  newsMute  {Boolean} //消息免打扰
  area
  selfPhotos
  telphone
 */
module.exports = {
    "base": {
        "id": 1,
        "nickname": "大双",
        "remark":"大双",
        "wxid": "13545631471",
        "qq": "448772566",
        "email": "leaf4669805@gmail.com",
        "type": "firends",
        "iconSrc": "//om83cysj8.qnssl.com/T15PxnBXCT1R4cSCrK_188_188.png",
        "qrCode": "",
        "telphone":13545631471,
        "signature": "个性签名",
        "area":["中国","广东","深圳"],
        "selfPhotos":[{imgSrc:""}]
    },
    "chatPrevivw": {
        "newsUnreadCount": 1, //未读
        "endTimeStr": 1472632586443,
        "endChatAuth": "大双",
        "endChatTxt": "晚上打球",
        "chatBackground": null, //聊天背景
        "newsMute": false
    }
}
