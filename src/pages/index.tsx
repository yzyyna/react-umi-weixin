import { Button } from "antd-mobile";
import "./index.less";
import { Link } from "umi";
import { getTicket, getToken, getWxConfig } from "@/api/login";
import wx from "weixin-js-sdk";

export default () => {
  async function clickHandler() {
    console.log("click...");
    const value = await getToken();
    const access_token = value?.access_token;
    console.log("api get access_token", access_token);
    const ticket = await getTicket({ access_token });
    console.log("api get ticket", ticket);
    const wxConfig = await getWxConfig({
      noncestr: Math.random().toString(36).substr(2, 15),
      jsapi_ticket: ticket,
      timestamp: parseInt((new Date().getTime() / 1000).toString()) + "",
      url: "http://101.43.2.88:8899",
      jsApiList: ["updateAppMessageShareData"],
    });
    console.log("api get wx config", wxConfig);
    wx.config(wxConfig);
    wx.error((res: any) => {
      console.error("出错啦...", res);
    });
    console.log("share...");
    wx.updateAppMessageShareData({
      title: "分享标题", // 分享标题
      desc: "分享描述", // 分享描述
      link: "http://101.43.2.88:8899", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "", // 分享图标
      success: function () {
        console.log("分享成功啦");
      },
    });
  }

  return (
    <>
      <div>
        <Link to="/share">share page(share to customer)</Link>
      </div>
      <div>
        <Link to="/to-be-partner">share page(to be partner)</Link>
      </div>
      <div>
        <Button onClick={clickHandler}>test</Button>
      </div>
    </>
  );
};
