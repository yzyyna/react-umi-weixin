// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import * as CryptoJS from 'crypto-js';

export async function getToken() {
  return request('/wx/cgi-bin/token', {
    method: 'GET',
    params: {
      grant_type: 'client_credential',
      appid: 'wx90d99cb5aa4cccc0',
      secret: '5eda03d7e506c7574a8e28b869bbae46',
    },
  });
}
export async function getTicket(params: { access_token: string }) {
  return request('/wx/cgi-bin/ticket/getticket', {
    method: 'GET',
    params: {
      access_token: params.access_token,
      type: 'jsapi',
    },
  });
}
// noncestr=Wm3WZYTPz0wzccnW
// jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg
// timestamp=1414587457
// url=http://mp.weixin.qq.com?params=value

export async function getSignature(params: {
  noncestr: string;
  jsapi_ticket: string;
  timestamp: number;
  url: string;
}) {
  const str = `jsapi_ticket=${params.jsapi_ticket}&noncestr=${params.noncestr}&timestamp=${params.timestamp}&url=${params.url}`;
  let signature = CryptoJS.SHA1(str)?.toString();
  return signature;
}
export async function getWxConfig(params: {
  noncestr: string;
  jsapi_ticket: string;
  timestamp: string;
  url: string;
  jsApiList: string[];
}) {
  const str = `jsapi_ticket=${params.jsapi_ticket}&noncestr=${params.noncestr}&timestamp=${params.timestamp}&url=${params.url}`;
  let signature = CryptoJS.SHA1(str)?.toString();
  return {
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx90d99cb5aa4cccc0', // 必填，公众号的唯一标识
    timestamp: params.timestamp, // 必填，生成签名的时间戳
    nonceStr: params.noncestr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名
    jsApiList: params.jsApiList, // 必填，需要使用的JS接口列表
  };
}
// /** 发送验证码 POST /api/login/captcha */
// export async function getFakeCaptcha(
//   params: {
//     // query
//     /** 手机号 */
//     phone?: string;
//   },
//   options?: { [key: string]: any },
// ) {
//   return request<API.FakeCaptcha>('/api/login/captcha', {
//     method: 'GET',
//     params: {
//       ...params,
//     },
//     ...(options || {}),
//   });
// }
