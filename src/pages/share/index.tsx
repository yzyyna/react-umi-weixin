import { Button } from 'antd-mobile';
import './share.less';
import wx from 'weixin-js-sdk';

export default () => {
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wxcfae56cfbede56c7', // 必填，公众号的唯一标识
    timestamp: '1681204821', // 必填，生成签名的时间戳
    nonceStr: 'SFSWFFSF', // 必填，生成签名的随机串
    signature: '584937207151b7424bc62a92b7f17d8bc5a3755d', // 必填，签名
    jsApiList: ['updateAppMessageShareData'], // 必填，需要使用的JS接口列表
  });
  wx.error((res) => {
    console.error('出错啦...', res);
  });
  wx.checkJsApi({
    jsApiList: ['updateAppMessageShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function (res) {
      console.log('>>>>是否支持', res);
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    },
  });
  const share = () => {
    console.log('share...', wx);
    //需在用户可能点击分享按钮前就先调用
    wx.updateAppMessageShareData({
      title: '分享标题', // 分享标题
      desc: '分享描述', // 分享描述
      link: 'http://192.168.110.177:8000/share', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
      success: function () {
        console.log('分享成功啦');
      },
    });
  };
  return (
    <>
      <div className="share-container"></div>
      <div className="fixed-container">
        <Button color="primary" size="large" onClick={share}>
          分享给客户,获取收益
        </Button>
      </div>
    </>
  );
};
