//Mon Jul 15 2024 11:37:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("爱海盐抽奖"),
  ckName = "ahycj";
let envSplitor = ["#", "\n"],
  strSplitor = "&";
const Notify = 1,
  debug = 0;
let ckStr = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "",
  ckStrArr = [],
  msg,
  ck,
  data = "",
  ck_status = true,
  num,
  ids,
  deviceId,
  client_id = "10018",
  tenantId = "60",
  t_id = "69",
  t = appid = "haiyan",
  i = appkey = "0be39bb836a0d86aa76761af779aa93e",
  requested = "com.hoge.android.app.haiyan",
  ua = "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.50.0;native_app;6.6.1";
const url = "https://vapp.tmuyun.com/api",
  portrait_urls = "https://img.tmuyun.com/assets/20221025/1666699613852_6357d15dad61a43345486769.png";
let days = local_year() + "-" + local_month_two() + "-" + local_day_two();
const publicKeyStr = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB-----END PUBLIC KEY-----";
let strShare = "./ahy.json",
  TempAccount = [];
const axios = require("axios");
let request = require("request");
const NodeRSA = require("node-rsa"),
  CryptoJS = require("crypto-js"),
  fs = require("fs"),
  XmldomParser = require("xmldom").DOMParser;
request = request.defaults({
  "jar": true
});
window = {};
const {
  log
} = console;
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) return;else {
      log("\n\n=================================================\n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=================================================\n");
      log("=================== 共找到 " + ckStrArr.length + " 个账号 ===================");
      debug && (log("【debug】 这是你的全部账号数组:\n " + ckStrArr), log("【debug】 这是你的全部账号数组:\n " + ckStr1Arr));
      for (let _0x369596 = 0; _0x369596 < ckStrArr.length; _0x369596++) {
        num = _0x369596 + 1;
        DoubleLog("==== 开始【第 " + num + " 个账号】====", true);
        ck = ckStrArr[_0x369596];
        ck = ckStrArr[_0x369596].split(strSplitor);
        requID = RandeCode();
        deviceId = requID;
        log("账号[" + num + "] deviceId:" + deviceId);
        device_token = "170" + getRandomInt(16);
        log("账号[" + num + "] device_token:" + device_token);
        if (checkck(ck[0])) await init();else {
          sessionId = ck[0];
        }
        await $.wait(1000);
        await userInfo();
        ck_status == true && (await get_activityid());
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x1975ed => log(_0x1975ed)).finally(() => $.done());
function checkck(_0x43ed27) {
  const _0x520c92 = /^1[3-9]\d{9}$/;
  if (_0x520c92.test(_0x43ed27)) return true;else {
    return false;
  }
}
function getAASkey() {
  var _0x4edc58 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  if (!_0x4edc58) return "";
  for (var _0x494b30 = [], _0x361076 = [], _0x5b8e63 = 0; _0x5b8e63 < _0x4edc58.length; _0x5b8e63++) _0x5b8e63 % 2 == 0 ? _0x361076.push(_0x4edc58[_0x5b8e63]) : _0x494b30.push(_0x4edc58[_0x5b8e63]);
  return MD5(_0x361076.join("") + _0x494b30.join(""));
}
async function Login() {
  did = RandeCode();
  let _0x168cbe = ts13(),
    _0x3cfbf7 = "globalDatetime" + _0x168cbe + "username" + ck[0] + "test_123456679890123456",
    _0x316929 = MD5Encrypt(_0x3cfbf7).toUpperCase();
  return new Promise(_0x2908d6 => {
    var _0x1ff116 = {
      "method": "GET",
      "url": "http://ypapp.cnnb.com.cn/yongpai-user/api/login2/local?username=" + ck[0] + "&password=" + ck[1] + "&deviceId=" + did + "&globalDatetime=" + _0x168cbe + "&sign=" + _0x316929,
      "headers": {
        "Host": "ypapp.cnnb.com.cn",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x1ff116)));
    axios.request(_0x1ff116).then(async function (_0x170410) {
      try {
        let _0x513d8b = _0x170410.data;
        if (debug) {
          log("\n\n【debug】===============这是 返回data==============");
          log(JSON.stringify(_0x170410.data));
        }
        if (_0x513d8b.code == 0) {
          nickname = _0x513d8b.data.nickname;
          userId = _0x513d8b.data.userId;
          DoubleLog("账号[" + num + "] 用户:" + nickname);
          log("账号[" + num + "] deviceId:" + _0x513d8b.data.deviceId);
          log("账号[" + num + "] token:" + _0x513d8b.data.token);
          log("账号[" + num + "] userId：" + userId);
          log("账号[" + num + "] 获得积分:" + _0x513d8b.data.score);
          log("账号[" + num + "] 推荐码:" + _0x513d8b.data.recommendcode);
          ck_status = true;
        } else console.log(_0x513d8b), ck_status = false;
      } catch (_0x47749a) {
        log("异常：" + JSON.stringify(_0x170410.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x510b7d) {
      console.error(_0x510b7d);
    }).then(_0x3a4ca1 => {
      _0x2908d6();
    });
  });
}
async function credential_auth(_0x2d6cf4, _0x31abbb) {
  return await RSA_Encrypt(_0x31abbb), signs = CryptoJS.SHA256("post%%/web/oauth/credential_auth?client_id=" + client_id + "&password=" + rsaCode + "&phone_number=" + _0x2d6cf4 + "%%" + requID + "%%").toString(), new Promise(_0x17bbff => {
    var _0x2c5ee5 = {
      "method": "post",
      "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
      "headers": {
        "Cache-Control": "no-cache",
        "User-Agent": "ANDROID;9;10001;1.1.3;1.0;null;MI 6",
        "X-REQUEST-ID": requID,
        "X-SIGNATURE": signs,
        "Host": "passport.tmuyun.com",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "COOKIE": "SESSION=OTlhNDg4MWItNmQwNy00NjY3LTgwNWEtMGI2M2NhNzJjMTQz; Path=/; HttpOnly; SameSite=Lax"
      },
      "data": "client_id=" + client_id + "&password=" + encodeURIComponent(rsaCode) + "&phone_number=" + _0x2d6cf4
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x2c5ee5));
    axios.request(_0x2c5ee5).then(async function (_0x14d799) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x14d799.data));
        if (_0x14d799.data.code === 0) {
          log("账号[" + num + "] 获取code成功:" + _0x14d799.data.data.authorization_code.code);
          await $.wait(2000);
          await login(_0x14d799.data.data.authorization_code.code);
        } else log(_0x14d799.data);
      } catch (_0x4877d8) {
        log("异常：" + _0x4877d8 + "，原因：" + _0x4877d8.msg + " ");
      }
    }).catch(function (_0x613fb1) {
      console.error(_0x613fb1);
    }).then(_0x1a18ff => {
      _0x17bbff();
    });
  });
}
async function login(_0x1f2e34) {
  const _0x2b8f12 = RandeCode(),
    _0x45b6a4 = +new Date();
  return new Promise(_0x3c333b => {
    var _0x3aa5d4 = {
      "method": "post",
      "url": url + "/zbtxz/login",
      "headers": {
        "Host": "vapp.tmuyun.com",
        "X-SESSION-ID": sessionIds,
        "X-SIGNATURE": CryptoJS.SHA256("/api/zbtxz/login&&" + sessionIds + "&&" + _0x2b8f12 + "&&" + _0x45b6a4 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release",
        "X-TIMESTAMP": _0x45b6a4,
        "X-TENANT-ID": tenantId,
        "X-REQUEST-ID": _0x2b8f12,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": "check_token=&code=" + _0x1f2e34 + "&token=&type=-1&union_id="
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x3aa5d4));
    axios.request(_0x3aa5d4).then(async function (_0x549cf3) {
      try {
        data = _0x549cf3.data;
        if (debug) {
          log("\n\n【debug】=============== 这是 返回data ============== ");
          log(_0x549cf3.data);
        }
        _0x549cf3.data.code === 0 ? (log("账号[" + num + "] 登录成功 用户:" + data.data.account.nick_name), sessionId = _0x549cf3.data.data.session.id, log("账号[" + num + "] sessionId:" + sessionId), accountid = _0x549cf3.data.data.session.account_id, log("账号[" + num + "] accountid:" + _0x549cf3.data.data.session.account_id), await $.wait(2000), await client_ids(), await $.wait(2000), await mine(sessionId), await $.wait(2000), await detail(sessionId), await $.wait(2000), await unread()) : log(_0x549cf3.data);
      } catch (_0x4ab1e5) {
        log("异常：" + _0x4ab1e5 + "，原因：" + _0x4ab1e5.msg + " ");
      }
    }).catch(function (_0x35a527) {
      console.error(_0x35a527);
    }).then(_0x48e55e => {
      _0x3c333b();
    });
  });
}
async function init() {
  requID = RandeCode();
  const _0x57f733 = +new Date();
  return new Promise(_0x2df41f => {
    var _0x1454c9 = {
      "method": "POST",
      "url": url + "/account/init",
      "headers": {
        "X-SESSION-ID": "",
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x57f733,
        "X-SIGNATURE": CryptoJS.SHA256("/api/account/init&&&&" + requID + "&&" + _0x57f733 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.5.1;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      },
      "data": ""
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x1454c9));
    axios.request(_0x1454c9).then(async function (_0x1fabb3) {
      try {
        data = _0x1fabb3.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x1fabb3.data));
        if (data.code == 0) {
          sessionIds = _0x1fabb3.data.data.session.id;
          log("账号[" + num + "] 获取sessionId成功:" + sessionIds);
          await $.wait(2000);
          await mine(sessionIds);
          await $.wait(2000);
          await detail(sessionIds);
          await $.wait(2000);
          log("账号[" + num + "] 去获取登录code");
          await credential_auth(ck[0], ck[1]);
          await $.wait(2000);
        }
      } catch (_0x4f0110) {
        log("异常：" + _0x4f0110 + "，原因：" + _0x4f0110.msg + " ");
      }
    }).catch(function (_0x398244) {
      console.error(_0x398244);
    }).then(_0x15858d => {
      _0x2df41f();
    });
  });
}
async function mine(_0x193b3f) {
  requID = RandeCode();
  const _0x48c705 = +new Date();
  return new Promise(_0x5cbbc6 => {
    var _0x30d510 = {
      "method": "GET",
      "url": url + "/app_version_customize_config/mine",
      "headers": {
        "X-SESSION-ID": _0x193b3f,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x48c705,
        "X-SIGNATURE": CryptoJS.SHA256("/api/app_version_customize_config/mine&&" + _0x193b3f + "&&" + requID + "&&" + _0x48c705 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x30d510));
    axios.request(_0x30d510).then(async function (_0x1a4d03) {
      try {
        data = _0x1a4d03.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x1a4d03.data));
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x41919a) {
        log("异常：" + _0x41919a + "，原因：" + _0x41919a.msg + " ");
      }
    }).catch(function (_0x56c06c) {
      console.error(_0x56c06c);
    }).then(_0x4ca70c => {
      _0x5cbbc6();
    });
  });
}
async function detail(_0x447f3a) {
  requID = RandeCode();
  const _0x12199a = +new Date();
  return new Promise(_0x36a5bc => {
    var _0x45d0b5 = {
      "method": "GET",
      "url": url + "/app_version/detail",
      "headers": {
        "X-SESSION-ID": _0x447f3a,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x12199a,
        "X-SIGNATURE": CryptoJS.SHA256("/api/app_version/detail&&" + _0x447f3a + "&&" + requID + "&&" + _0x12199a + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x45d0b5));
    axios.request(_0x45d0b5).then(async function (_0x3a6c1c) {
      try {
        data = _0x3a6c1c.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x3a6c1c.data));
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x547407) {
        log("异常：" + _0x547407 + "，原因：" + _0x547407.msg + " ");
      }
    }).catch(function (_0x26da7f) {
      console.error(_0x26da7f);
    }).then(_0x22d827 => {
      _0x36a5bc();
    });
  });
}
async function client_ids() {
  requID = RandeCode();
  const _0x18ff24 = +new Date();
  return new Promise(_0x155d63 => {
    var _0x2dd617 = {
      "method": "post",
      "url": url + "/account/client_id",
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "vapp.tmuyun.com",
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x18ff24,
        "X-SIGNATURE": CryptoJS.SHA256("/api/account/client_id&&" + sessionId + "&&" + requID + "&&" + _0x18ff24 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      },
      "data": "client_id=baaf13f41b180b0b6952b79e7a751398"
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x2dd617));
    axios.request(_0x2dd617).then(async function (_0x472c51) {
      try {
        data = _0x472c51.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x472c51.data));
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x2c7cef) {
        log("异常：" + _0x2c7cef + "，原因：" + _0x2c7cef.msg + " ");
      }
    }).catch(function (_0x1cbc10) {
      console.error(_0x1cbc10);
    }).then(_0x3f7db8 => {
      _0x155d63();
    });
  });
}
async function unread() {
  requID = RandeCode();
  const _0x28ae39 = +new Date();
  return new Promise(_0x12358e => {
    var _0x156b0b = {
      "method": "get",
      "url": url + "/chuanbo/unread",
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "vapp.tmuyun.com",
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x28ae39,
        "X-SIGNATURE": CryptoJS.SHA256("/api/chuanbo/unread&&" + sessionId + "&&" + requID + "&&" + _0x28ae39 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x156b0b));
    axios.request(_0x156b0b).then(async function (_0x1f962c) {
      try {
        data = _0x1f962c.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x1f962c.data));
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0xb28755) {
        log("异常：" + _0xb28755 + "，原因：" + _0xb28755.msg + " ");
      }
    }).catch(function (_0x3b0433) {
      console.error(_0x3b0433);
    }).then(_0x1dffa3 => {
      _0x12358e();
    });
  });
}
async function userInfo() {
  let _0x248274 = RandeCode();
  const _0xd0f537 = +new Date();
  try {
    let _0x1233de = {
        "url": "https://vapp.tmuyun.com/api/user_mumber/account_detail",
        "headers": {
          "X-SESSION-ID": sessionId,
          "X-REQUEST-ID": _0x248274,
          "X-TIMESTAMP": _0xd0f537,
          "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/account_detail&&" + sessionId + "&&" + _0x248274 + "&&" + _0xd0f537 + "&&FR*r!isE5W&&" + tenantId).toString(),
          "X-TENANT-ID": tenantId,
          "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
          "Cache-Control": "no-cache",
          "Host": "vapp.tmuyun.com",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      },
      _0x299375 = await httpGet(_0x1233de, "获取用户信息");
    if (_0x299375.code == 0) {
      uinfo = _0x299375.data.rst;
      phone = uinfo.phone_number;
      nickname = uinfo.nick_name;
      accountid = uinfo.id;
      DoubleLog("账号[" + num + "] " + ("昵称:" + uinfo.nick_name));
      DoubleLog("账号[" + num + "] " + ("手机号:" + uinfo.phone_number));
      DoubleLog("账号[" + num + "] " + ("当前积分:" + uinfo.total_integral));
      log("账号[" + num + "] 推荐码:" + uinfo.ref_code);
      ck_status = true;
    } else DoubleLog("账号[" + num + "] 获取用户信息:失败 ❌ 了呢,原因:" + _0x299375.message + "!🎉"), console.log(_0x299375), ck_status = false;
  } catch (_0x4c1ca8) {
    console.log(_0x4c1ca8);
  }
}
async function get_activityid(_0x2fac5a) {
  let _0x11c2f9 = RandeCode();
  const _0x313a62 = +new Date();
  try {
    let _0x17820b = {
        "url": "https://vapp.tmuyun.com/api/buoy/list",
        "headers": {
          "Host": "vapp.tmuyun.com",
          "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
          "X-SESSION-ID": sessionId,
          "X-REQUEST-ID": _0x11c2f9,
          "X-TIMESTAMP": _0x313a62,
          "X-SIGNATURE": CryptoJS.SHA256("/api/buoy/list&&" + sessionId + "&&" + _0x11c2f9 + "&&" + _0x313a62 + "&&FR*r!isE5W&&" + tenantId).toString(),
          "X-TENANT-ID": tenantId,
          "X-ACCOUNT-ID": accountid,
          "Cache-Control": "no-cache",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      },
      _0x31a0ad = await httpGet(_0x17820b, "获取活动id");
    if (_0x31a0ad.code == 0) {
      if (_0x31a0ad.data.new_up.title == "阅读领红包") {
        id = _0x31a0ad.data.new_up.icon_list[0].turn_to.url.split("id=")[1].split("&")[0];
        DoubleLog("账号[" + num + "] " + "活动id:" + id);
        await $.wait(1000);
        await auth_dt();
        await $.wait(1000);
        await ac_detail311(id);
        await $.wait(1000);
        await activity_id311(id);
        await $.wait(1000);
        await auth_appuserinit();
        await $.wait(1000);
        await detail_(id);
      }
    } else DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x31a0ad.message + "!🎉"), console.log(_0x31a0ad);
  } catch (_0x1efbd5) {
    console.log(_0x1efbd5);
  }
}
function searchInJson(_0x3d191c, _0x48044f, _0x43c7bb = []) {
  for (let _0x530e61 in _0x3d191c) {
    if (typeof _0x3d191c[_0x530e61] === "object") {
      let _0x23c1ff = [..._0x43c7bb, _0x530e61],
        _0x3c43eb = searchInJson(_0x3d191c[_0x530e61], _0x48044f, _0x23c1ff);
      if (_0x3c43eb) return _0x3c43eb;
    } else {
      if (typeof _0x3d191c[_0x530e61] === "string" && _0x3d191c[_0x530e61].includes(_0x48044f)) return {
        "path": [..._0x43c7bb, _0x530e61],
        "content": _0x3d191c[_0x530e61]
      };
    }
  }
  return null;
}
async function auth_dt() {
  const _0xa8398 = +new Date();
  return dt = _0xa8398 + "" + Math.floor(10000000 * Math.random()), new Promise(_0x32c708 => {
    var _0x4fda88 = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aosbase/_auth_dt",
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Android WebView\";v=\"120\"",
        "sec-ch-ua-platform": "\"Android\"",
        "Access-Api-Dt": dt,
        "sec-ch-ua-mobile": "?1",
        "Access-T-Id-In": t_id,
        "User-Agent": ua,
        "Access-Api-Unique-Token": "1",
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "X-Requested-With": requested,
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://haiyan.y-h5.iyunxh.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url =============== ");
      log(JSON.stringify(_0x4fda88));
    }
    axios.request(_0x4fda88).then(async function (_0x2a9719) {
      try {
        data = _0x2a9719.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(JSON.stringify(_0x2a9719.data)));
        data.code == 0 && (api_dt = data.data.slice(32, 68), log("账号[" + num + "] " + "Access-Api-Dt:" + api_dt));
      } catch (_0x39b740) {
        log("异常：" + _0x39b740 + "，原因：" + _0x39b740.msg + " ");
      }
    }).catch(function (_0x2f0ed0) {
      console.error(_0x2f0ed0);
    }).then(_0x17dae3 => {
      _0x32c708();
    });
  });
}
async function ac_detail311() {
  const _0x144f3c = +new Date();
  t10 = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + _0x144f3c + m).toString();
  signature = [t, r, _0x144f3c, d].join(";");
  finalString = t + ";" + r + ";" + _0x144f3c + ";" + d;
  signatures = MD5("app_user_token=" + sessionId + "&appid=" + t + "&noncestr=" + n + "&phone=" + uinfo.phone_number + "&portrait_url=https%3A%2F%2Fimg.tmuyun.com%2Fassets%2F20220729%2F1659109373830_62e3fffdad61a42834e55af2.jpeg&timestamp=" + t10 + "&user_id=" + accountid + "&user_name=" + encodeURIComponent(uinfo.nick_name) + "&wx_openid=&wx_unionid=&appkey=" + i).toString();
  try {
    let _0x43b9d4 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_ac_detail?id=" + id,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "371",
          "Access-User-Id": "0",
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": "",
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        }
      },
      _0x449c7b = await httpGet(_0x43b9d4, "获取活动id");
    _0x449c7b.code == 0 ? (other_set = _0x449c7b.data.other_set, other_set = JSON.parse(other_set), lottery_id = other_set.lottery.id, log("账号[" + num + "] " + _0x449c7b.msg + " lottery_id:" + other_set.lottery.id)) : (DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x449c7b.message + "!🎉"), console.log(_0x449c7b));
  } catch (_0x3975e7) {
    console.log(_0x3975e7);
  }
}
async function activity_id311(_0x3c148d) {
  const _0x38f490 = +new Date();
  return t10 = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x38f490 + m).toString(), signature = [t, r, _0x38f490, d].join(";"), finalString = t + ";" + r + ";" + _0x38f490 + ";" + d, new Promise(_0x5a1029 => {
    var _0x2770e5 = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_optionp_list",
      "params": {
        "activity_id": _0x3c148d
      },
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Android WebView\";v=\"120\"",
        "Access-T-Id": t_id,
        "Access-User-Id": "0",
        "Access-Api-Signature": signature,
        "Access-Api-Dt": api_dt,
        "sec-ch-ua-mobile": "?1",
        "Access-Token": "",
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Api-Unique-Token": "1",
        "sec-ch-ua-platform": "\"Android\"",
        "Accept": "*/*",
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "X-Requested-With": requested,
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://haiyan.y-h5.iyunxh.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(JSON.stringify(_0x2770e5)));
    axios.request(_0x2770e5).then(async function (_0x338a4c) {
      try {
        data = _0x338a4c.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(JSON.stringify(_0x338a4c.data)));
        data.code == 0 && log("账号[" + num + "] " + data.msg);
      } catch (_0xbf5082) {
        log("异常：" + _0xbf5082 + "，原因：" + _0xbf5082.msg + " ");
      }
    }).catch(function (_0x34fda0) {
      console.error(_0x34fda0);
    }).then(_0xca4f5f => {
      _0x5a1029();
    });
  });
}
async function auth_appuserinit() {
  const _0x4482d4 = +new Date();
  t10 = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + _0x4482d4 + m).toString();
  signature = [t, r, _0x4482d4, d].join(";");
  signatures = MD5("app_user_token=" + sessionId + "&appid=" + t + "&noncestr=" + n + "&phone=" + uinfo.phone_number + "&portrait_url=" + encodeURIComponent(portrait_urls) + "&timestamp=" + t10 + "&user_id=" + accountid + "&user_name=" + encodeURIComponent(uinfo.nick_name) + "&wx_openid=&wx_unionid=&appkey=" + i).toString();
  try {
    let _0x1da28e = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbase/_auth_appuserinit",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "371",
          "Access-User-Id": "0",
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": "",
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id + "&isNeedLogin=false",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"app_user_token\":\"" + sessionId + "\",\"appid\":\"" + t + "\",\"noncestr\":\"" + n + "\",\"phone\":\"" + uinfo.phone_number + "\",\"portrait_url\":\"" + portrait_urls + "\",\"timestamp\":\"" + t10 + "\",\"user_id\":\"" + accountid + "\",\"user_name\":\"" + uinfo.nick_name + "\",\"wx_openid\":\"\",\"wx_unionid\":\"\",\"signature\":\"" + signatures + "\"}"
      },
      _0x5d8ea4 = await httpPost(_0x1da28e, "获取活动token");
    _0x5d8ea4.code == 0 ? (user_id = _0x5d8ea4.data.data.user_id, log("账号[" + num + "] user_id:", user_id), access_token = _0x5d8ea4.data.access_token, log("账号[" + num + "] access_token:", access_token)) : (DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x5d8ea4.message + "!🎉"), console.log(_0x5d8ea4));
  } catch (_0x37ce22) {
    console.log(_0x37ce22);
  }
}
async function detail_(_0x2d237e) {
  requID = RandeCode();
  const _0x3928e4 = +new Date();
  return tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x3928e4 + m).toString(), signature = [t, r, _0x3928e4, d].join(";"), new Promise(_0x52285e => {
    var _0x15b96e = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_optionp_list?activity_id=" + _0x2d237e,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + _0x2d237e,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x15b96e));
    axios.request(_0x15b96e).then(async function (_0x583ea6) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x583ea6.data));
        data = _0x583ea6.data;
        if (data.code == 0) {
          levels_ = data.data;
          DoubleLog("账号[" + num + "] 有" + levels_.length + "个抽奖活动");
          let _0x281385 = fs.existsSync(strShare);
          _0x281385 && (console.log("检测到token缓存文件" + strShare + "，载入..."), TempAccount = fs.readFileSync(strShare, "utf-8"), TempAccount && (TempAccount = TempAccount.toString(), TempAccount = JSON.parse(TempAccount)));
          let _0x8dea2b = false;
          if (TempAccount) {
            for (let _0x5cdf39 = 0; _0x5cdf39 < TempAccount.length; _0x5cdf39++) {
              TempAccount[_0x5cdf39].phone == phone && TempAccount[_0x5cdf39].day == days && (_0x8dea2b = true, tokens = TempAccount[_0x5cdf39].token, tokenid = TempAccount[_0x5cdf39].tokenid, log("账号[" + num + "] " + "该账号有今日缓存 token:" + tokens + " tokenid:" + tokenid));
            }
          }
          if (!_0x8dea2b) {
            log("账号[" + num + "] " + "该账号没有今日缓存，尝试过滑块获取token.....");
            DoubleLog("账号[" + num + "] 去获取滑块");
            await get_captcha();
            if (tokens && tokenid) {
              var _0x5261b9 = {};
              _0x5261b9 = {
                "phone": phone,
                "token": tokens,
                "tokenid": tokenid,
                "day": days
              };
              TempAccount.push(_0x5261b9);
              var _0xc9b4aa = JSON.stringify(TempAccount, null, 2);
              fs.writeFile(strShare, _0xc9b4aa, "Utf8", _0x813a75 => {
                if (_0x813a75) {
                  console.log(_0x813a75);
                  console.log("账号[" + num + "] 缓存文件" + strShare + "更新失败!");
                } else console.log("账号[" + num + "] 缓存文件" + strShare + "更新成功!");
              });
            }
          }
          for (let _0x5bf010 = 0; _0x5bf010 < levels_.length; _0x5bf010++) {
            log("账号[" + num + "] 第" + ("" + (_0x5bf010 + 1)) + "轮阅读:" + levels_[_0x5bf010].title);
            if (levels_[_0x5bf010].user_undone_num > 0) ids = levels_[_0x5bf010].id, await level_(levels_[_0x5bf010].id, levels_[_0x5bf010].m_id);else {
              log("账号[" + num + "] 文章都读过了 不执行阅读");
            }
            await _ac_lottery_count();
          }
          await $.wait(randomInt(1000, 5000));
          await _ac_detail();
          await $.wait(randomInt(3000, 6000));
          await getrecord11();
        } else log(_0x583ea6.data);
      } catch (_0x2c6f5f) {
        log("异常：" + _0x2c6f5f + "，原因：" + _0x2c6f5f.msg + " ");
      }
    }).catch(function (_0x19b3e7) {
      console.error(_0x19b3e7);
    }).then(_0x2079ae => {
      _0x52285e();
    });
  });
}
async function level_(_0x10bc2d, _0xf93d63) {
  requID = RandeCode();
  const _0x34d507 = +new Date();
  return t10 = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x34d507 + m).toString(), signature = [t, r, _0x34d507, d].join(";"), new Promise(_0x16444d => {
    var _0x1921a8 = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/_task_list?offset=0&count=20&module_id=" + _0xf93d63 + "&activity_id=" + _0x10bc2d,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x1921a8));
    axios.request(_0x1921a8).then(async function (_0xdc8124) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0xdc8124.data));
        data = _0xdc8124.data;
        if (_0xdc8124.data.code == 0) {
          tasks_ = data.data;
          DoubleLog("账号[" + num + "] 要看" + tasks_.length + "篇文章后抽奖");
          for (let _0x33456b = 0; _0x33456b < tasks_.length; _0x33456b++) {
            if (tasks_[_0x33456b].user_done == 0) {
              idss = tasks_[_0x33456b].id;
              rule = tasks_[_0x33456b].rule;
              rule = JSON.parse(rule);
              news_id = rule.news_id;
              news_id = news_id.match(/\d+/);
              await $.wait(randomInt(1000, 5000));
              await task_create(idss, news_id, _0x33456b + 1);
            } else DoubleLog("账号[" + num + "] 这篇文章都读过了 不执行阅读");
          }
        } else log(_0xdc8124.data);
      } catch (_0x1032c8) {
        log("异常：" + _0x1032c8 + "，原因：" + _0x1032c8.msg + " ");
      }
    }).catch(function (_0x549877) {
      console.error(_0x549877);
    }).then(_0x267400 => {
      _0x16444d();
    });
  });
}
async function task_create(_0x2e6923, _0x5e8426, _0x5ac350) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x462892 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/task_create",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "18",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"task_id\":\"" + _0x2e6923 + "\"}"
      },
      _0x24f533 = await httpPost(_0x462892, "获取task_record_id");
    if (_0x24f533.code == 0) log("账号[" + num + "] 开始阅读:" + _0x24f533.msg + " news_id:" + _0x5e8426), task_record_id = _0x24f533.data.task_record_id, await $.wait(randomInt(700, 3000)), await details(_0x5e8426), await $.wait(randomInt(3000, 6000)), await reads(_0x5e8426, _0x5ac350), await $.wait(randomInt(1000, 3000)), await task_done(_0x2e6923, task_record_id, _0x5ac350);else {
      DoubleLog("账号[" + num + "] 获取id:失败 ❌ 了呢,原因:" + _0x24f533.message + "!🎉");
      console.log(_0x24f533);
    }
  } catch (_0x2f7ed7) {
    console.log(_0x2f7ed7);
  }
}
async function details(_0x1f5eac) {
  return requID = RandeCode(), ts = +new Date(), new Promise(_0x2c3408 => {
    var _0x816657 = {
      "method": "GET",
      "url": "https://vapp.tmuyun.com/api/article/detail?id=" + _0x1f5eac,
      "headers": {
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": ts,
        "X-SIGNATURE": CryptoJS.SHA256("/api/article/detail&&" + sessionId + "&&" + requID + "&&" + ts + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
        "X-ACCOUNT-ID": accountid,
        "Cache-Control": "no-cache",
        "Host": "vapp.tmuyun.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x816657));
    axios.request(_0x816657).then(async function (_0xc9e0ab) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0xc9e0ab.data));
        data = _0xc9e0ab.data;
        _0xc9e0ab.data.code === 0 ? log("账号[" + num + "] " + data.message) : log(_0xc9e0ab.data);
      } catch (_0x49549a) {
        log("异常：" + _0x49549a + "，原因：" + _0x49549a.msg + " ");
      }
    }).catch(function (_0x2cc23d) {
      console.error(_0x2cc23d);
    }).then(_0x551c98 => {
      _0x2c3408();
    });
  });
}
async function reads(_0x53be68, _0x46b419) {
  return requID = RandeCode(), ts = +new Date(), new Promise(_0x21fe9f => {
    var _0x51ff4d = {
      "method": "GET",
      "url": "https://vapp.tmuyun.com/api/article/read_time?channel_article_id=" + _0x53be68 + "&read_time=" + randomInt(4000, 6000),
      "headers": {
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": ts,
        "X-SIGNATURE": CryptoJS.SHA256("/api/article/read_time&&" + sessionId + "&&" + requID + "&&" + ts + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
        "X-ACCOUNT-ID": accountid,
        "Cache-Control": "no-cache",
        "Host": "vapp.tmuyun.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x51ff4d));
    axios.request(_0x51ff4d).then(async function (_0x33ca15) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x33ca15.data));
        data = _0x33ca15.data;
        _0x33ca15.data.code === 0 ? log("账号[" + num + "] 第" + _0x46b419 + "次上传阅读时间:" + data.message) : log(_0x33ca15.data);
      } catch (_0x300889) {
        log("异常：" + _0x300889 + "，原因：" + _0x300889.msg + " ");
      }
    }).catch(function (_0x33e897) {
      console.error(_0x33e897);
    }).then(_0x153953 => {
      _0x21fe9f();
    });
  });
}
async function task_done(_0x1fc454, _0x12e613, _0x445102) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x58beb3 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/task_done",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "132",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"task_record_id\":\"" + _0x12e613 + "\",\"collect_info\":\"\",\"afs_tokenid\":\"" + tokenid + "\",\"device_token\":\"" + device_token + "\"}"
      },
      _0x3a5e47 = await httpPost(_0x58beb3, "完成阅读");
    _0x3a5e47.code == 0 ? log("账号[" + num + "] 第" + _0x445102 + "次完成阅读:" + _0x3a5e47.msg) : log("账号[" + num + "] 第" + _0x445102 + "次完成阅读:" + _0x3a5e47.msg);
  } catch (_0x4e5156) {
    console.log(_0x4e5156);
  }
}
async function _ac_lottery_count(_0x20c289) {
  return requID = RandeCode(), ts = +new Date(), tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + ts + m).toString(), signature = [t, r, ts, d].join(";"), new Promise(_0x948555 => {
    var _0x5413a7 = {
      "method": "get",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/ac_lottery_times?id=" + lottery_id,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x5413a7));
    axios.request(_0x5413a7).then(async function (_0x451e93) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x451e93.data));
        data = _0x451e93.data;
        if (data.code == 0) {
          lottery_number = data.data.show_remain;
          log("账号[" + num + "] 抽奖次数:" + data.data.show_remain);
          if (lottery_number > 0) {
            log("账号[" + num + "] 有抽奖次数 去抽奖");
            for (let _0x29539b = 0; _0x29539b < lottery_number; _0x29539b++) {
              await $.wait(1000);
              await _ac_detail();
              await $.wait(randomInt(3000, 6000));
              await _event_sub(module_id, title);
            }
          }
        } else log(data);
      } catch (_0x3017a3) {
        log("异常：" + _0x3017a3 + "，原因：" + _0x3017a3.msg + " ");
      }
    }).catch(function (_0x2c6145) {
      console.error(_0x2c6145);
    }).then(_0x20c4a4 => {
      _0x948555();
    });
  });
}
async function _ac_detail() {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x5c4ceb = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/_ac_detail?id=" + lottery_id,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "132",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        }
      },
      _0x450372 = await httpGet(_0x5c4ceb, "打开转盘");
    _0x450372.code == 0 ? (log("账号[" + num + "] 打开转盘:" + _0x450372.msg), module_id = _0x450372.data.m_id, title = _0x450372.data.title) : (log("账号[" + num + "] 打开转盘:" + _0x450372.msg), console.log(_0x450372));
  } catch (_0x229b90) {
    console.log(_0x229b90);
  }
}
async function _event_sub() {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x3ea570 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosstat/_event_sub",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "132",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"_need_stat\":0,\"_need_task\":0,\"_need_behavior\":1,\"event\":\"lotteryTake\",\"action\":\"take\",\"brief\":\"抽奖提交\",\"client_type\":3,\"module_id\":\"" + module_id + "\",\"content_id\":\"" + lottery_id + "\",\"num\":1,\"duration\":0,\"column_id\":0,\"column_title\":\"\",\"title\":\"" + title + "\",\"device_token\":\"" + device_token + "\",\"user_id\":\"" + user_id + "\",\"user_name\":\"" + nickname + "\",\"phone_num\":\"" + phone + "\",\"page_path\":\"module-study/pass-detail/pass-detail\",\"version\":\"1.0.0\",\"network\":\"wifi\",\"client_model\":\"android\",\"system_version\":\"Android 9\",\"resolution\":\"\",\"baidu_longitude\":\"\",\"baidu_latitude\":\"\",\"longitude\":0,\"latitude\":0,\"province\":\"\",\"city\":\"\",\"area\":\"\",\"street\":\"\",\"address\":\"\"}"
      },
      _0x424f23 = await httpPost(_0x3ea570, "抽奖提交");
    _0x424f23.code == 0 ? (log("账号[" + num + "] 抽奖提交:" + _0x424f23.msg), await $.wait(5000), await _ac_lottery(lottery_id)) : log("账号[" + num + "] 抽奖提交:" + _0x424f23.msg);
  } catch (_0x3d8d4b) {
    console.log(_0x3d8d4b);
  }
}
async function _ac_lottery(_0x2d27f7) {
  return requID = RandeCode(), ts = +new Date(), tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + ts + m).toString(), signature = [t, r, ts, d].join(";"), new Promise(_0x1eb9cb => {
    var _0x382ed3 = {
      "method": "POST",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/ac_sub",
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Content-Length": "174",
        "Access-User-Id": user_id,
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Content-Type": "application/json",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      },
      "data": {
        "id": lottery_id,
        "verif_uuid": "",
        "verif_code": "",
        "afs_tokenid": tokenid,
        "collect_info": "",
        "longitude": 0,
        "latitude": 0,
        "device_token": device_token
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url =============== ");
      log(_0x382ed3);
    }
    axios.request(_0x382ed3).then(async function (_0x55c414) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x55c414.data));
        data = _0x55c414.data;
        if (data.code == 0) DoubleLog("账号[" + num + "] 抽奖:" + _0x55c414.data.msg + " 结果:" + _0x55c414.data.data.title);else {
          if (_0x55c414.data.code === 10000) DoubleLog("账号[" + num + "] 抽奖失败,原因:" + _0x55c414.data.msg);else {
            DoubleLog("账号[" + num + "] 抽奖失败,原因:" + _0x55c414.data.msg);
            console.log(_0x55c414.data);
          }
        }
      } catch (_0x14dd07) {
        log("异常：" + _0x14dd07 + "，原因：" + _0x14dd07.msg + " ");
      }
    }).catch(function (_0xfb1f16) {
      console.error(_0xfb1f16);
    }).then(_0x221229 => {
      _0x1eb9cb();
    });
  });
}
async function get_captcha() {
  requID = RandeCode();
  const _0x1cf105 = +new Date();
  return tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x1cf105 + m).toString(), signature = [t, r, _0x1cf105, d].join(";"), once = randomString(10), signature1 = "{\"once\":\"" + once + "\",\"referer\":\"https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id + "\",\"timestamp\":\"" + tt + "\",\"type\":\"1\"}", signature1 = AES_Encrypt(signature1), signature1 = encodeURIComponent(signature1), new Promise(_0x1f5331 => {
    var _0x5f8a38 = {
      "method": "get",
      "url": "https://yapi.y-h5.iyunxh.com/api/basemodule/_captcha_get?once=" + once + "&referer=" + encodeURIComponent("https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id) + "&timestamp=" + tt + "&type=1&signature=" + signature1,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://haiyan.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x5f8a38));
    axios.request(_0x5f8a38).then(async function (_0x4c2510) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x4c2510.data));
        data = _0x4c2510.data;
        data.code == 0 ? (jigsawImageUrls = data.data.block, originalImageUrls = data.data.background, cap_tokens = data.data.token, await slideCompare(jigsawImageUrls, originalImageUrls, cap_tokens)) : log(_0x4c2510.data);
      } catch (_0x3b4b3a) {
        log("异常：" + _0x3b4b3a + "，原因：" + _0x3b4b3a.msg + " ");
      }
    }).catch(function (_0x579c44) {
      console.error(_0x579c44);
    }).then(_0x2b216b => {
      _0x1f5331();
    });
  });
}
async function slideCompare(_0x3d40e9, _0x4fe20c, _0x50e592) {
  try {
    const _0x231c8e = await axios.get(_0x3d40e9, {
        "responseType": "arraybuffer"
      }),
      _0x43a9e1 = await axios.get(_0x4fe20c, {
        "responseType": "arraybuffer"
      }),
      _0x4eade0 = arrayBufferToBase64(_0x231c8e.data),
      _0x32965c = arrayBufferToBase64(_0x43a9e1.data),
      _0x2043ca = {
        "MovePicture": _0x4eade0,
        "Background": _0x32965c
      },
      _0x173539 = JSON.stringify(_0x2043ca),
      _0xaa3e6b = await axios.post("http://" + host + "/api.Slider_Move", _0x173539, {
        "headers": {
          "Content-Type": "application/json"
        }
      });
    ocr_x = _0xaa3e6b.data.result.target[0];
    log("ocr返回x轴的值 :", ocr_x);
    ocr_x = (ocr_x / 384 * 296).toFixed(1);
    ocr_x = parseInt(ocr_x) + 2;
    const _0x21863a = {
        "x": ocr_x,
        "width": 296,
        "track": [{
          "x": ocr_x - 10,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 8,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 6,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 5,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 3,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x,
          "y": 0,
          "time": 100
        }]
      },
      _0xa8ba49 = JSON.stringify(_0x21863a);
    points = AES_Encrypt(_0xa8ba49);
    await captcha(points, cap_tokens);
  } catch (_0xcb6495) {
    console.error("Error making POST request:", _0xcb6495);
  }
}
function arrayBufferToBase64(_0x1fc058) {
  return Buffer.from(_0x1fc058).toString("base64");
}
async function captcha(_0x55fa82, _0x3d1e6f) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x3a1d4a = {
        "url": "https://yapi.y-h5.iyunxh.com/api/basemodule/_captcha_check",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"token\":\"" + _0x3d1e6f + "\",\"data\":\"" + _0x55fa82 + "\",\"referer\":\"https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id + "\",\"type\":\"1\"}"
      },
      _0x3beeec = await httpPost(_0x3a1d4a, "过滑块");
    if (_0x3beeec.code == 0) _0x3beeec.data.result == true ? (DoubleLog("账号[" + num + "] 滑块验证成功"), tokens = _0x3beeec.data.token, await intelverifcode(tokens)) : (DoubleLog("账号[" + num + "] 滑块验证:" + _0x3beeec.data.result), console.log(_0x3beeec), await get_captcha());else log(_0x3beeec);
  } catch (_0x2adbee) {
    console.log(_0x2adbee);
  }
}
async function intelverifcode(_0x18f01c) {
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x298325 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/intelverifcode_check",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"validate\":\"" + _0x18f01c + "\",\"verif_type\":3,\"afs_uuid\":\"\",\"source\":\"yundian\"}"
      },
      _0x59cef9 = await httpPost(_0x298325, "?");
    if (_0x59cef9.code == 0) tokenid = _0x59cef9.data.tokenid, log("账号[" + num + "] tokenid:" + _0x59cef9.data.tokenid);else log(_0x59cef9);
  } catch (_0x973996) {
    console.log(_0x973996);
  }
}
async function getrecord11() {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x8a07ff = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/act_user?offset=0&count=20&activity_id=" + lottery_id + "&module_id=" + module_id,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Access-User-Id": user_id,
          "Origin": "https://haiyan.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        }
      },
      _0x27abd5 = await httpGet(_0x8a07ff, "查中奖记录");
    if (_0x27abd5.code == 0) {
      DoubleLog("账号[" + num + "] 查中奖记录:" + _0x27abd5.msg);
      recordslist = _0x27abd5.data;
      if (recordslist.length != 0) for (let _0x378ae5 = 0; _0x378ae5 < recordslist.length; _0x378ae5++) {
        DoubleLog("账号[" + num + "] 中奖记录:" + recordslist[_0x378ae5].title + ":" + recordslist[_0x378ae5].value + "  中奖时间:" + recordslist[_0x378ae5].created_at);
        if (recordslist[_0x378ae5].state == 0) {
          DoubleLog("账号[" + num + "] 红包未领取？绑定微信了吗");
        }
      }
    } else DoubleLog("账号[" + num + "] 查询:失败 ❌ 了呢,原因:" + _0x27abd5.message + "!🎉"), console.log(_0x27abd5);
  } catch (_0x11c652) {
    console.log(_0x11c652);
  }
}
async function Envs() {
  if (ckStr) {
    if (ckStr.indexOf(envSplitor[0]) != -1) ckStr.split(envSplitor[0]).forEach(_0x4cc82c => {
      ckStrArr.push(_0x4cc82c);
    });else {
      if (ckStr.indexOf(envSplitor[1]) != -1) {
        ckStr.split(envSplitor[1]).forEach(_0x34fc56 => {
          ckStrArr.push(_0x34fc56);
        });
      } else ckStrArr.push(ckStr);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 " + ckName);
    return;
  }
  return true;
}
async function RSA_Encrypt(_0x1ce3a7) {
  const _0x28f8d4 = new NodeRSA(publicKeyStr);
  _0x28f8d4.setOptions({
    "encryptionScheme": "pkcs1"
  });
  let _0x2ff6df = _0x28f8d4.encrypt(_0x1ce3a7, "base64", "utf8");
  return rsaCode = _0x2ff6df, _0x2ff6df;
}
var AESkey = CryptoJS.enc.Utf8.parse("7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG"),
  AESiv = CryptoJS.enc.Utf8.parse("8RsVKSCH8mQ4l7cu");
function AES_Encrypt(_0x1a005f) {
  var _0x1cb7e4 = CryptoJS.enc.Utf8.parse(_0x1a005f),
    _0x318243 = CryptoJS.AES.encrypt(_0x1cb7e4, AESkey, {
      "iv": AESiv,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x318243.toString();
}
function AES_Decrypt(_0x34cbec) {
  var _0x1d14ae = _0x34cbec,
    _0x384eed = CryptoJS.AES.decrypt(_0x1d14ae, AESkey, {
      "iv": AESiv,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x384eed.toString(CryptoJS.enc.Utf8);
}
function randomString(_0x37f627) {
  for (var _0x2adbf1 = _0x37f627 > 0 && void 0 !== _0x37f627 ? _0x37f627 : 21, _0x38628c = ""; _0x38628c.length < _0x2adbf1;) _0x38628c += Math.random().toString(36).slice(2);
  return _0x38628c.slice(0, _0x2adbf1);
}
function randomInt(_0x51cd90, _0x4753e5) {
  return Math.round(Math.random() * (_0x4753e5 - _0x51cd90) + _0x51cd90);
}
function getRandomInt(_0x3a3a9d) {
  let _0x3208fb = Math.random() * Math.pow(10, _0x3a3a9d),
    _0x37b012 = Math.floor(_0x3208fb).toString();
  return _0x37b012.padStart(_0x3a3a9d, "0");
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function local_hours() {
  let _0x2e3e62 = new Date(),
    _0x43da6a = _0x2e3e62.getHours();
  return _0x43da6a;
}
function local_minutes() {
  let _0x58f609 = new Date(),
    _0xefc7f0 = _0x58f609.getMinutes();
  return _0xefc7f0;
}
function local_Seconds() {
  let _0x5aa889 = new Date(),
    _0x1f97e7 = _0x5aa889.getSeconds();
  return _0x1f97e7;
}
function local_UTCMilliseconds() {
  let _0x10433b = new Date(),
    _0x306408 = _0x10433b.getUTCMilliseconds();
  return _0x306408;
}
function local_year() {
  let _0x504965 = new Date();
  return y = _0x504965.getFullYear(), y;
}
function local_month() {
  let _0x50958a = new Date(),
    _0x18ba06 = _0x50958a.getMonth();
  return _0x18ba06;
}
function local_month_two() {
  let _0x14a344 = new Date(),
    _0x1cf40b = _0x14a344.getMonth();
  if (_0x1cf40b.toString().length == 1) {
    _0x1cf40b = "0" + _0x1cf40b;
  }
  return _0x1cf40b;
}
function local_day() {
  let _0x419a15 = new Date(),
    _0x218939 = _0x419a15.getDate();
  return _0x218939;
}
function local_day_two() {
  let _0x150b37 = new Date(),
    _0x1263a0 = _0x150b37.getDate();
  return _0x1263a0.toString().length == 1 && (_0x1263a0 = "0" + _0x1263a0), _0x1263a0;
}
function local_day3() {
  let _0x30742b = new Date(),
    _0xd53fa6 = _0x30742b.getDay();
  return _0xd53fa6;
}
function RandeCode() {
  var _0x5c07ed = new Date().getTime(),
    _0x49dd92 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x281157) {
      var _0x12755a = (_0x5c07ed + Math.random() * 16) % 16 | 0;
      return _0x5c07ed = Math.floor(_0x5c07ed / 16), (_0x281157 == "x" ? _0x12755a : _0x12755a & 3 | 8).toString(16);
    });
  return _0x49dd92;
}
function debugLog(..._0x28cfea) {
  debug && console.log(..._0x28cfea);
}
var MD5 = function (_0x2611fe) {
  function _0x22f86f(_0x1e4eb8, _0x1cac74) {
    return _0x1e4eb8 << _0x1cac74 | _0x1e4eb8 >>> 32 - _0x1cac74;
  }
  function _0x5bbf65(_0x5112ea, _0x3265c6) {
    var _0xb3dd3a, _0x3375b4, _0x2c682d, _0x1bc9d2, _0x221fd2;
    _0x2c682d = _0x5112ea & 2147483648;
    _0x1bc9d2 = _0x3265c6 & 2147483648;
    _0xb3dd3a = _0x5112ea & 1073741824;
    _0x3375b4 = _0x3265c6 & 1073741824;
    _0x221fd2 = (_0x5112ea & 1073741823) + (_0x3265c6 & 1073741823);
    if (_0xb3dd3a & _0x3375b4) return _0x221fd2 ^ 2147483648 ^ _0x2c682d ^ _0x1bc9d2;
    if (_0xb3dd3a | _0x3375b4) {
      if (_0x221fd2 & 1073741824) return _0x221fd2 ^ 3221225472 ^ _0x2c682d ^ _0x1bc9d2;else {
        return _0x221fd2 ^ 1073741824 ^ _0x2c682d ^ _0x1bc9d2;
      }
    } else {
      return _0x221fd2 ^ _0x2c682d ^ _0x1bc9d2;
    }
  }
  function _0x20d9b6(_0x408724, _0x5142c3, _0x2be53e) {
    return _0x408724 & _0x5142c3 | ~_0x408724 & _0x2be53e;
  }
  function _0xf09edf(_0x14892e, _0x466d98, _0x1355f1) {
    return _0x14892e & _0x1355f1 | _0x466d98 & ~_0x1355f1;
  }
  function _0x26c609(_0x33f050, _0xe8b63a, _0xaae5f8) {
    return _0x33f050 ^ _0xe8b63a ^ _0xaae5f8;
  }
  function _0x3a2c5c(_0xb681c6, _0x215220, _0x2ec344) {
    return _0x215220 ^ (_0xb681c6 | ~_0x2ec344);
  }
  function _0x1f9fe9(_0xa74ff0, _0x1dfa27, _0x32556d, _0x285844, _0x2f9bdf, _0x52c7ee, _0x3ca954) {
    return _0xa74ff0 = _0x5bbf65(_0xa74ff0, _0x5bbf65(_0x5bbf65(_0x20d9b6(_0x1dfa27, _0x32556d, _0x285844), _0x2f9bdf), _0x3ca954)), _0x5bbf65(_0x22f86f(_0xa74ff0, _0x52c7ee), _0x1dfa27);
  }
  function _0x3a93e6(_0x14afe8, _0x4b4e61, _0x1b603d, _0x2a82b9, _0x369457, _0x5ccc27, _0x49f83c) {
    return _0x14afe8 = _0x5bbf65(_0x14afe8, _0x5bbf65(_0x5bbf65(_0xf09edf(_0x4b4e61, _0x1b603d, _0x2a82b9), _0x369457), _0x49f83c)), _0x5bbf65(_0x22f86f(_0x14afe8, _0x5ccc27), _0x4b4e61);
  }
  function _0x4a1962(_0x477fd1, _0xf674e3, _0x2d816e, _0x17f49c, _0x4d551b, _0xba3c08, _0x232a62) {
    return _0x477fd1 = _0x5bbf65(_0x477fd1, _0x5bbf65(_0x5bbf65(_0x26c609(_0xf674e3, _0x2d816e, _0x17f49c), _0x4d551b), _0x232a62)), _0x5bbf65(_0x22f86f(_0x477fd1, _0xba3c08), _0xf674e3);
  }
  function _0x3727ff(_0xbafaa6, _0x39cd8e, _0x27622a, _0x1147b1, _0x39e655, _0x52cac1, _0x1bc156) {
    return _0xbafaa6 = _0x5bbf65(_0xbafaa6, _0x5bbf65(_0x5bbf65(_0x3a2c5c(_0x39cd8e, _0x27622a, _0x1147b1), _0x39e655), _0x1bc156)), _0x5bbf65(_0x22f86f(_0xbafaa6, _0x52cac1), _0x39cd8e);
  }
  function _0x3821a1(_0x161017) {
    var _0x10b6c7;
    var _0x43926d = _0x161017.length;
    var _0x3bcd95 = _0x43926d + 8;
    var _0x12fdaf = (_0x3bcd95 - _0x3bcd95 % 64) / 64;
    var _0x3bf7a8 = (_0x12fdaf + 1) * 16;
    var _0x58dc16 = Array(_0x3bf7a8 - 1);
    var _0x27ab0e = 0;
    var _0x34cb8f = 0;
    while (_0x34cb8f < _0x43926d) {
      _0x10b6c7 = (_0x34cb8f - _0x34cb8f % 4) / 4;
      _0x27ab0e = _0x34cb8f % 4 * 8;
      _0x58dc16[_0x10b6c7] = _0x58dc16[_0x10b6c7] | _0x161017.charCodeAt(_0x34cb8f) << _0x27ab0e;
      _0x34cb8f++;
    }
    _0x10b6c7 = (_0x34cb8f - _0x34cb8f % 4) / 4;
    _0x27ab0e = _0x34cb8f % 4 * 8;
    _0x58dc16[_0x10b6c7] = _0x58dc16[_0x10b6c7] | 128 << _0x27ab0e;
    _0x58dc16[_0x3bf7a8 - 2] = _0x43926d << 3;
    _0x58dc16[_0x3bf7a8 - 1] = _0x43926d >>> 29;
    return _0x58dc16;
  }
  function _0x25a11f(_0x281bbd) {
    var _0x45d558 = "",
      _0x11bc6c = "",
      _0x9d8251,
      _0x1d4127;
    for (_0x1d4127 = 0; _0x1d4127 <= 3; _0x1d4127++) {
      _0x9d8251 = _0x281bbd >>> _0x1d4127 * 8 & 255;
      _0x11bc6c = "0" + _0x9d8251.toString(16);
      _0x45d558 = _0x45d558 + _0x11bc6c.substr(_0x11bc6c.length - 2, 2);
    }
    return _0x45d558;
  }
  function _0xedccdb(_0x26e577) {
    _0x26e577 = _0x26e577.replace(/\r\n/g, "\n");
    var _0x5b66dd = "";
    for (var _0x282764 = 0; _0x282764 < _0x26e577.length; _0x282764++) {
      var _0x2073f6 = _0x26e577.charCodeAt(_0x282764);
      if (_0x2073f6 < 128) {
        _0x5b66dd += String.fromCharCode(_0x2073f6);
      } else _0x2073f6 > 127 && _0x2073f6 < 2048 ? (_0x5b66dd += String.fromCharCode(_0x2073f6 >> 6 | 192), _0x5b66dd += String.fromCharCode(_0x2073f6 & 63 | 128)) : (_0x5b66dd += String.fromCharCode(_0x2073f6 >> 12 | 224), _0x5b66dd += String.fromCharCode(_0x2073f6 >> 6 & 63 | 128), _0x5b66dd += String.fromCharCode(_0x2073f6 & 63 | 128));
    }
    return _0x5b66dd;
  }
  var _0x391ef8 = Array(),
    _0x28617d,
    _0x5b3588,
    _0x158a41,
    _0x12f5b3,
    _0x4d4081,
    _0x37e5e5,
    _0x2d8b27,
    _0x362d2b,
    _0x26a8bd,
    _0x67ae68 = 7,
    _0x27888e = 12,
    _0x54d686 = 17,
    _0x4026e2 = 22,
    _0x16d12d = 5,
    _0x7b9ab5 = 9,
    _0x2a7906 = 14,
    _0x306ccd = 20,
    _0x2d26dc = 4,
    _0x55d84f = 11,
    _0x8ebc0c = 16,
    _0x487c52 = 23,
    _0x58e4e9 = 6,
    _0xcbb438 = 10,
    _0x357fab = 15,
    _0x471a5f = 21;
  _0x2611fe = _0xedccdb(_0x2611fe);
  _0x391ef8 = _0x3821a1(_0x2611fe);
  _0x37e5e5 = 1732584193;
  _0x2d8b27 = 4023233417;
  _0x362d2b = 2562383102;
  _0x26a8bd = 271733878;
  for (_0x28617d = 0; _0x28617d < _0x391ef8.length; _0x28617d += 16) {
    _0x5b3588 = _0x37e5e5;
    _0x158a41 = _0x2d8b27;
    _0x12f5b3 = _0x362d2b;
    _0x4d4081 = _0x26a8bd;
    _0x37e5e5 = _0x1f9fe9(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 0], _0x67ae68, 3614090360);
    _0x26a8bd = _0x1f9fe9(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 1], _0x27888e, 3905402710);
    _0x362d2b = _0x1f9fe9(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 2], _0x54d686, 606105819);
    _0x2d8b27 = _0x1f9fe9(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 3], _0x4026e2, 3250441966);
    _0x37e5e5 = _0x1f9fe9(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 4], _0x67ae68, 4118548399);
    _0x26a8bd = _0x1f9fe9(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 5], _0x27888e, 1200080426);
    _0x362d2b = _0x1f9fe9(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 6], _0x54d686, 2821735955);
    _0x2d8b27 = _0x1f9fe9(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 7], _0x4026e2, 4249261313);
    _0x37e5e5 = _0x1f9fe9(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 8], _0x67ae68, 1770035416);
    _0x26a8bd = _0x1f9fe9(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 9], _0x27888e, 2336552879);
    _0x362d2b = _0x1f9fe9(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 10], _0x54d686, 4294925233);
    _0x2d8b27 = _0x1f9fe9(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 11], _0x4026e2, 2304563134);
    _0x37e5e5 = _0x1f9fe9(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 12], _0x67ae68, 1804603682);
    _0x26a8bd = _0x1f9fe9(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 13], _0x27888e, 4254626195);
    _0x362d2b = _0x1f9fe9(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 14], _0x54d686, 2792965006);
    _0x2d8b27 = _0x1f9fe9(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 15], _0x4026e2, 1236535329);
    _0x37e5e5 = _0x3a93e6(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 1], _0x16d12d, 4129170786);
    _0x26a8bd = _0x3a93e6(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 6], _0x7b9ab5, 3225465664);
    _0x362d2b = _0x3a93e6(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 11], _0x2a7906, 643717713);
    _0x2d8b27 = _0x3a93e6(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 0], _0x306ccd, 3921069994);
    _0x37e5e5 = _0x3a93e6(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 5], _0x16d12d, 3593408605);
    _0x26a8bd = _0x3a93e6(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 10], _0x7b9ab5, 38016083);
    _0x362d2b = _0x3a93e6(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 15], _0x2a7906, 3634488961);
    _0x2d8b27 = _0x3a93e6(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 4], _0x306ccd, 3889429448);
    _0x37e5e5 = _0x3a93e6(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 9], _0x16d12d, 568446438);
    _0x26a8bd = _0x3a93e6(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 14], _0x7b9ab5, 3275163606);
    _0x362d2b = _0x3a93e6(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 3], _0x2a7906, 4107603335);
    _0x2d8b27 = _0x3a93e6(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 8], _0x306ccd, 1163531501);
    _0x37e5e5 = _0x3a93e6(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 13], _0x16d12d, 2850285829);
    _0x26a8bd = _0x3a93e6(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 2], _0x7b9ab5, 4243563512);
    _0x362d2b = _0x3a93e6(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 7], _0x2a7906, 1735328473);
    _0x2d8b27 = _0x3a93e6(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 12], _0x306ccd, 2368359562);
    _0x37e5e5 = _0x4a1962(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 5], _0x2d26dc, 4294588738);
    _0x26a8bd = _0x4a1962(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 8], _0x55d84f, 2272392833);
    _0x362d2b = _0x4a1962(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 11], _0x8ebc0c, 1839030562);
    _0x2d8b27 = _0x4a1962(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 14], _0x487c52, 4259657740);
    _0x37e5e5 = _0x4a1962(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 1], _0x2d26dc, 2763975236);
    _0x26a8bd = _0x4a1962(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 4], _0x55d84f, 1272893353);
    _0x362d2b = _0x4a1962(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 7], _0x8ebc0c, 4139469664);
    _0x2d8b27 = _0x4a1962(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 10], _0x487c52, 3200236656);
    _0x37e5e5 = _0x4a1962(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 13], _0x2d26dc, 681279174);
    _0x26a8bd = _0x4a1962(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 0], _0x55d84f, 3936430074);
    _0x362d2b = _0x4a1962(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 3], _0x8ebc0c, 3572445317);
    _0x2d8b27 = _0x4a1962(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 6], _0x487c52, 76029189);
    _0x37e5e5 = _0x4a1962(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 9], _0x2d26dc, 3654602809);
    _0x26a8bd = _0x4a1962(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 12], _0x55d84f, 3873151461);
    _0x362d2b = _0x4a1962(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 15], _0x8ebc0c, 530742520);
    _0x2d8b27 = _0x4a1962(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 2], _0x487c52, 3299628645);
    _0x37e5e5 = _0x3727ff(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 0], _0x58e4e9, 4096336452);
    _0x26a8bd = _0x3727ff(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 7], _0xcbb438, 1126891415);
    _0x362d2b = _0x3727ff(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 14], _0x357fab, 2878612391);
    _0x2d8b27 = _0x3727ff(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 5], _0x471a5f, 4237533241);
    _0x37e5e5 = _0x3727ff(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 12], _0x58e4e9, 1700485571);
    _0x26a8bd = _0x3727ff(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 3], _0xcbb438, 2399980690);
    _0x362d2b = _0x3727ff(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 10], _0x357fab, 4293915773);
    _0x2d8b27 = _0x3727ff(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 1], _0x471a5f, 2240044497);
    _0x37e5e5 = _0x3727ff(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 8], _0x58e4e9, 1873313359);
    _0x26a8bd = _0x3727ff(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 15], _0xcbb438, 4264355552);
    _0x362d2b = _0x3727ff(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 6], _0x357fab, 2734768916);
    _0x2d8b27 = _0x3727ff(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 13], _0x471a5f, 1309151649);
    _0x37e5e5 = _0x3727ff(_0x37e5e5, _0x2d8b27, _0x362d2b, _0x26a8bd, _0x391ef8[_0x28617d + 4], _0x58e4e9, 4149444226);
    _0x26a8bd = _0x3727ff(_0x26a8bd, _0x37e5e5, _0x2d8b27, _0x362d2b, _0x391ef8[_0x28617d + 11], _0xcbb438, 3174756917);
    _0x362d2b = _0x3727ff(_0x362d2b, _0x26a8bd, _0x37e5e5, _0x2d8b27, _0x391ef8[_0x28617d + 2], _0x357fab, 718787259);
    _0x2d8b27 = _0x3727ff(_0x2d8b27, _0x362d2b, _0x26a8bd, _0x37e5e5, _0x391ef8[_0x28617d + 9], _0x471a5f, 3951481745);
    _0x37e5e5 = _0x5bbf65(_0x37e5e5, _0x5b3588);
    _0x2d8b27 = _0x5bbf65(_0x2d8b27, _0x158a41);
    _0x362d2b = _0x5bbf65(_0x362d2b, _0x12f5b3);
    _0x26a8bd = _0x5bbf65(_0x26a8bd, _0x4d4081);
  }
  var _0x5d5a8c = _0x25a11f(_0x37e5e5) + _0x25a11f(_0x2d8b27) + _0x25a11f(_0x362d2b) + _0x25a11f(_0x26a8bd);
  return _0x5d5a8c.toLowerCase();
};
function MD5Encrypt(_0x1156c5) {
  function _0xf805c(_0x4a5aba, _0x573a95) {
    return _0x4a5aba << _0x573a95 | _0x4a5aba >>> 32 - _0x573a95;
  }
  function _0x1ad773(_0x35d48f, _0x5087cb) {
    var _0xb6050, _0x3a649f, _0x2cbec4, _0x190ece, _0x3f41b6;
    return _0x2cbec4 = 2147483648 & _0x35d48f, _0x190ece = 2147483648 & _0x5087cb, _0xb6050 = 1073741824 & _0x35d48f, _0x3a649f = 1073741824 & _0x5087cb, _0x3f41b6 = (1073741823 & _0x35d48f) + (1073741823 & _0x5087cb), _0xb6050 & _0x3a649f ? 2147483648 ^ _0x3f41b6 ^ _0x2cbec4 ^ _0x190ece : _0xb6050 | _0x3a649f ? 1073741824 & _0x3f41b6 ? 3221225472 ^ _0x3f41b6 ^ _0x2cbec4 ^ _0x190ece : 1073741824 ^ _0x3f41b6 ^ _0x2cbec4 ^ _0x190ece : _0x3f41b6 ^ _0x2cbec4 ^ _0x190ece;
  }
  function _0x3d8e97(_0x1c7e6b, _0x383c0d, _0x16cb61) {
    return _0x1c7e6b & _0x383c0d | ~_0x1c7e6b & _0x16cb61;
  }
  function _0x3f61fa(_0x3e2c52, _0x34ee5f, _0x27ee4f) {
    return _0x3e2c52 & _0x27ee4f | _0x34ee5f & ~_0x27ee4f;
  }
  function _0x386045(_0xb0a12b, _0x22ae5c, _0x5f334d) {
    return _0xb0a12b ^ _0x22ae5c ^ _0x5f334d;
  }
  function _0x3e6263(_0x5b89fd, _0x4a3b43, _0x172dba) {
    return _0x4a3b43 ^ (_0x5b89fd | ~_0x172dba);
  }
  function _0x1a7049(_0x3798fe, _0x300f57, _0x5c4e60, _0x54dba0, _0xf43f3d, _0xdf5862, _0x1c8f46) {
    return _0x3798fe = _0x1ad773(_0x3798fe, _0x1ad773(_0x1ad773(_0x3d8e97(_0x300f57, _0x5c4e60, _0x54dba0), _0xf43f3d), _0x1c8f46)), _0x1ad773(_0xf805c(_0x3798fe, _0xdf5862), _0x300f57);
  }
  function _0x4cf4eb(_0x590bb3, _0x10842a, _0x411c3d, _0x37344d, _0x5f05f0, _0xb754cc, _0x565392) {
    return _0x590bb3 = _0x1ad773(_0x590bb3, _0x1ad773(_0x1ad773(_0x3f61fa(_0x10842a, _0x411c3d, _0x37344d), _0x5f05f0), _0x565392)), _0x1ad773(_0xf805c(_0x590bb3, _0xb754cc), _0x10842a);
  }
  function _0x44fcf1(_0x4853c0, _0x355e58, _0x3ebc05, _0x147c68, _0x5f0bea, _0x279264, _0x17b5bb) {
    return _0x4853c0 = _0x1ad773(_0x4853c0, _0x1ad773(_0x1ad773(_0x386045(_0x355e58, _0x3ebc05, _0x147c68), _0x5f0bea), _0x17b5bb)), _0x1ad773(_0xf805c(_0x4853c0, _0x279264), _0x355e58);
  }
  function _0x1fbe4a(_0x20d34b, _0x16d61a, _0x222271, _0x1b09a9, _0x5011df, _0x544129, _0x2f9d6e) {
    return _0x20d34b = _0x1ad773(_0x20d34b, _0x1ad773(_0x1ad773(_0x3e6263(_0x16d61a, _0x222271, _0x1b09a9), _0x5011df), _0x2f9d6e)), _0x1ad773(_0xf805c(_0x20d34b, _0x544129), _0x16d61a);
  }
  function _0x4d2be1(_0xf1aa7f) {
    for (var _0x516f88, _0x27fa37 = _0xf1aa7f.length, _0x19e948 = _0x27fa37 + 8, _0x3fa919 = (_0x19e948 - _0x19e948 % 64) / 64, _0x505d68 = 16 * (_0x3fa919 + 1), _0x1c8cf7 = new Array(_0x505d68 - 1), _0x49e8f0 = 0, _0x37a651 = 0; _0x27fa37 > _0x37a651;) _0x516f88 = (_0x37a651 - _0x37a651 % 4) / 4, _0x49e8f0 = _0x37a651 % 4 * 8, _0x1c8cf7[_0x516f88] = _0x1c8cf7[_0x516f88] | _0xf1aa7f.charCodeAt(_0x37a651) << _0x49e8f0, _0x37a651++;
    return _0x516f88 = (_0x37a651 - _0x37a651 % 4) / 4, _0x49e8f0 = _0x37a651 % 4 * 8, _0x1c8cf7[_0x516f88] = _0x1c8cf7[_0x516f88] | 128 << _0x49e8f0, _0x1c8cf7[_0x505d68 - 2] = _0x27fa37 << 3, _0x1c8cf7[_0x505d68 - 1] = _0x27fa37 >>> 29, _0x1c8cf7;
  }
  function _0x955a5b(_0x3db501) {
    var _0x54deed,
      _0x102f8d,
      _0xa84d0a = "",
      _0x30ef29 = "";
    for (_0x102f8d = 0; 3 >= _0x102f8d; _0x102f8d++) _0x54deed = _0x3db501 >>> 8 * _0x102f8d & 255, _0x30ef29 = "0" + _0x54deed.toString(16), _0xa84d0a += _0x30ef29.substr(_0x30ef29.length - 2, 2);
    return _0xa84d0a;
  }
  function _0x34fbc3(_0x275d15) {
    _0x275d15 = _0x275d15.replace(/\r\n/g, "\n");
    for (var _0x4d605c = "", _0x32e95c = 0; _0x32e95c < _0x275d15.length; _0x32e95c++) {
      var _0x39f07c = _0x275d15.charCodeAt(_0x32e95c);
      128 > _0x39f07c ? _0x4d605c += String.fromCharCode(_0x39f07c) : _0x39f07c > 127 && 2048 > _0x39f07c ? (_0x4d605c += String.fromCharCode(_0x39f07c >> 6 | 192), _0x4d605c += String.fromCharCode(63 & _0x39f07c | 128)) : (_0x4d605c += String.fromCharCode(_0x39f07c >> 12 | 224), _0x4d605c += String.fromCharCode(_0x39f07c >> 6 & 63 | 128), _0x4d605c += String.fromCharCode(63 & _0x39f07c | 128));
    }
    return _0x4d605c;
  }
  var _0x267b4b,
    _0x38cf77,
    _0x1b3f7d,
    _0x44583f,
    _0x1176a5,
    _0x3198d0,
    _0x55208c,
    _0x1eaa18,
    _0x59fbc9,
    _0x4d4bfc = [],
    _0x522ac4 = 7,
    _0x4910f9 = 12,
    _0x2e4669 = 17,
    _0x8f2a76 = 22,
    _0x53ac92 = 5,
    _0x5200ce = 9,
    _0x22c90d = 14,
    _0x3313cc = 20,
    _0x530683 = 4,
    _0x1abfdd = 11,
    _0x16d472 = 16,
    _0x20ec67 = 23,
    _0x419142 = 6,
    _0x466abe = 10,
    _0x37f364 = 15,
    _0x3467b5 = 21;
  for (_0x1156c5 = _0x34fbc3(_0x1156c5), _0x4d4bfc = _0x4d2be1(_0x1156c5), _0x3198d0 = 1732584193, _0x55208c = 4023233417, _0x1eaa18 = 2562383102, _0x59fbc9 = 271733878, _0x267b4b = 0; _0x267b4b < _0x4d4bfc.length; _0x267b4b += 16) _0x38cf77 = _0x3198d0, _0x1b3f7d = _0x55208c, _0x44583f = _0x1eaa18, _0x1176a5 = _0x59fbc9, _0x3198d0 = _0x1a7049(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 0], _0x522ac4, 3614090360), _0x59fbc9 = _0x1a7049(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 1], _0x4910f9, 3905402710), _0x1eaa18 = _0x1a7049(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 2], _0x2e4669, 606105819), _0x55208c = _0x1a7049(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 3], _0x8f2a76, 3250441966), _0x3198d0 = _0x1a7049(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 4], _0x522ac4, 4118548399), _0x59fbc9 = _0x1a7049(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 5], _0x4910f9, 1200080426), _0x1eaa18 = _0x1a7049(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 6], _0x2e4669, 2821735955), _0x55208c = _0x1a7049(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 7], _0x8f2a76, 4249261313), _0x3198d0 = _0x1a7049(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 8], _0x522ac4, 1770035416), _0x59fbc9 = _0x1a7049(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 9], _0x4910f9, 2336552879), _0x1eaa18 = _0x1a7049(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 10], _0x2e4669, 4294925233), _0x55208c = _0x1a7049(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 11], _0x8f2a76, 2304563134), _0x3198d0 = _0x1a7049(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 12], _0x522ac4, 1804603682), _0x59fbc9 = _0x1a7049(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 13], _0x4910f9, 4254626195), _0x1eaa18 = _0x1a7049(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 14], _0x2e4669, 2792965006), _0x55208c = _0x1a7049(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 15], _0x8f2a76, 1236535329), _0x3198d0 = _0x4cf4eb(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 1], _0x53ac92, 4129170786), _0x59fbc9 = _0x4cf4eb(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 6], _0x5200ce, 3225465664), _0x1eaa18 = _0x4cf4eb(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 11], _0x22c90d, 643717713), _0x55208c = _0x4cf4eb(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 0], _0x3313cc, 3921069994), _0x3198d0 = _0x4cf4eb(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 5], _0x53ac92, 3593408605), _0x59fbc9 = _0x4cf4eb(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 10], _0x5200ce, 38016083), _0x1eaa18 = _0x4cf4eb(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 15], _0x22c90d, 3634488961), _0x55208c = _0x4cf4eb(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 4], _0x3313cc, 3889429448), _0x3198d0 = _0x4cf4eb(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 9], _0x53ac92, 568446438), _0x59fbc9 = _0x4cf4eb(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 14], _0x5200ce, 3275163606), _0x1eaa18 = _0x4cf4eb(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 3], _0x22c90d, 4107603335), _0x55208c = _0x4cf4eb(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 8], _0x3313cc, 1163531501), _0x3198d0 = _0x4cf4eb(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 13], _0x53ac92, 2850285829), _0x59fbc9 = _0x4cf4eb(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 2], _0x5200ce, 4243563512), _0x1eaa18 = _0x4cf4eb(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 7], _0x22c90d, 1735328473), _0x55208c = _0x4cf4eb(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 12], _0x3313cc, 2368359562), _0x3198d0 = _0x44fcf1(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 5], _0x530683, 4294588738), _0x59fbc9 = _0x44fcf1(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 8], _0x1abfdd, 2272392833), _0x1eaa18 = _0x44fcf1(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 11], _0x16d472, 1839030562), _0x55208c = _0x44fcf1(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 14], _0x20ec67, 4259657740), _0x3198d0 = _0x44fcf1(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 1], _0x530683, 2763975236), _0x59fbc9 = _0x44fcf1(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 4], _0x1abfdd, 1272893353), _0x1eaa18 = _0x44fcf1(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 7], _0x16d472, 4139469664), _0x55208c = _0x44fcf1(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 10], _0x20ec67, 3200236656), _0x3198d0 = _0x44fcf1(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 13], _0x530683, 681279174), _0x59fbc9 = _0x44fcf1(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 0], _0x1abfdd, 3936430074), _0x1eaa18 = _0x44fcf1(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 3], _0x16d472, 3572445317), _0x55208c = _0x44fcf1(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 6], _0x20ec67, 76029189), _0x3198d0 = _0x44fcf1(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 9], _0x530683, 3654602809), _0x59fbc9 = _0x44fcf1(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 12], _0x1abfdd, 3873151461), _0x1eaa18 = _0x44fcf1(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 15], _0x16d472, 530742520), _0x55208c = _0x44fcf1(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 2], _0x20ec67, 3299628645), _0x3198d0 = _0x1fbe4a(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 0], _0x419142, 4096336452), _0x59fbc9 = _0x1fbe4a(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 7], _0x466abe, 1126891415), _0x1eaa18 = _0x1fbe4a(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 14], _0x37f364, 2878612391), _0x55208c = _0x1fbe4a(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 5], _0x3467b5, 4237533241), _0x3198d0 = _0x1fbe4a(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 12], _0x419142, 1700485571), _0x59fbc9 = _0x1fbe4a(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 3], _0x466abe, 2399980690), _0x1eaa18 = _0x1fbe4a(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 10], _0x37f364, 4293915773), _0x55208c = _0x1fbe4a(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 1], _0x3467b5, 2240044497), _0x3198d0 = _0x1fbe4a(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 8], _0x419142, 1873313359), _0x59fbc9 = _0x1fbe4a(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 15], _0x466abe, 4264355552), _0x1eaa18 = _0x1fbe4a(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 6], _0x37f364, 2734768916), _0x55208c = _0x1fbe4a(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 13], _0x3467b5, 1309151649), _0x3198d0 = _0x1fbe4a(_0x3198d0, _0x55208c, _0x1eaa18, _0x59fbc9, _0x4d4bfc[_0x267b4b + 4], _0x419142, 4149444226), _0x59fbc9 = _0x1fbe4a(_0x59fbc9, _0x3198d0, _0x55208c, _0x1eaa18, _0x4d4bfc[_0x267b4b + 11], _0x466abe, 3174756917), _0x1eaa18 = _0x1fbe4a(_0x1eaa18, _0x59fbc9, _0x3198d0, _0x55208c, _0x4d4bfc[_0x267b4b + 2], _0x37f364, 718787259), _0x55208c = _0x1fbe4a(_0x55208c, _0x1eaa18, _0x59fbc9, _0x3198d0, _0x4d4bfc[_0x267b4b + 9], _0x3467b5, 3951481745), _0x3198d0 = _0x1ad773(_0x3198d0, _0x38cf77), _0x55208c = _0x1ad773(_0x55208c, _0x1b3f7d), _0x1eaa18 = _0x1ad773(_0x1eaa18, _0x44583f), _0x59fbc9 = _0x1ad773(_0x59fbc9, _0x1176a5);
  var _0x2c5187 = _0x955a5b(_0x3198d0) + _0x955a5b(_0x55208c) + _0x955a5b(_0x1eaa18) + _0x955a5b(_0x59fbc9);
  return _0x2c5187.toLowerCase();
}
async function SendMsg(_0x47b8a2) {
  if (!_0x47b8a2) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var _0x3cc1ae = require("./sendNotify");
      await _0x3cc1ae.sendNotify($.name, _0x47b8a2);
    } else {
      $.msg(_0x47b8a2);
    }
  } else log(_0x47b8a2);
}
function addNotifyStr(_0xe28d71, _0x414be7 = true) {
  _0x414be7 && log("\n" + _0xe28d71);
  msg += "\n" + _0xe28d71;
}
function DoubleLog(_0x11b328) {
  if ($.isNode()) _0x11b328 && (console.log("" + _0x11b328), msg += "\n" + _0x11b328);else {
    console.log("" + _0x11b328);
    msg += "\n" + _0x11b328;
  }
}
async function httpPost(_0x50db02, _0x59a5e4, _0x35e538 = 5 * 1000) {
  return new Promise((_0x27b0bc, _0x1458d5) => {
    let _0x3193e1 = _0x50db02;
    !_0x59a5e4 && (_0x59a5e4 = this.constructor.name);
    debug && (console.log("\n 【debug】=============== 这是 " + _0x59a5e4 + " 请求 url ==============="), console.log(_0x3193e1));
    $.post(_0x3193e1, async (_0x549305, _0x105eda, _0x2a0458) => {
      try {
        if (_0x105eda.status === 302) {
          debug && (console.log("\n 【debug】=========== 这是 " + _0x59a5e4 + " 302 请求头部数据 ========="), console.log(_0x2a0458));
          let _0x2d0551 = _0x105eda.headers;
          _0x27b0bc(_0x2d0551);
        } else {
          if (_0x105eda.headers["content-type"].includes("text/html")) _0x27b0bc(_0x2a0458);else {
            let _0x2a3432 = JSON.parse(_0x2a0458);
            if (debug) {
              console.log("\n 【debug】=============这是 " + _0x59a5e4 + " json解析后数据============");
              console.log(JSON.parse(_0x2a0458));
            }
            _0x27b0bc(_0x2a3432);
          }
        }
      } catch (_0x1171b9) {
        console.log(_0x549305, _0x105eda);
        console.log("\n " + _0x59a5e4 + " 请求失败！请稍后尝试！");
        _0x1458d5(_0x1171b9);
      } finally {}
    }, _0x35e538);
  });
}
async function httpGet(_0xf598ca, _0x4fc184, _0x37811a = 5 * 1000) {
  return new Promise((_0x28e60c, _0x5f4d26) => {
    let _0x45818b = _0xf598ca;
    !_0x4fc184 && (_0x4fc184 = this.constructor.name);
    debug && (console.log("\n 【调试】=============== 这是 " + _0x4fc184 + " 请求 url ==============="), console.log(_0x45818b));
    $.get(_0x45818b, async (_0x3a7ae3, _0x347b13, _0x472cf0) => {
      try {
        if (_0x347b13.status === 302) {
          debug && (console.log("\n 【debug】=========== 这是 " + _0x4fc184 + " 302 请求头部数据 ========="), console.log(_0x472cf0));
          let _0x30e6f4 = _0x347b13.headers;
          _0x28e60c(_0x30e6f4);
        } else {
          if (_0x347b13.headers["content-type"].includes("text/html")) _0x28e60c(_0x472cf0);else {
            let _0x24084f = JSON.parse(_0x472cf0);
            debug && (console.log("\n 【debug】=============这是 " + _0x4fc184 + " json解析后数据============"), console.log(JSON.parse(_0x472cf0)));
            _0x28e60c(_0x24084f);
          }
        }
      } catch (_0x305264) {
        console.log(_0x3a7ae3, _0x347b13);
        console.log("\n " + _0x4fc184 + " 请求失败！请稍后尝试！");
        _0x5f4d26(_0x305264);
      } finally {}
    }, _0x37811a);
  });
}
function Env(_0x1da288, _0xf97cc) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x2e89a0 {
    constructor(_0x4f67ca) {
      this.env = _0x4f67ca;
    }
    ["send"](_0x51cbc6, _0x24effe = "GET") {
      _0x51cbc6 = "string" == typeof _0x51cbc6 ? {
        "url": _0x51cbc6
      } : _0x51cbc6;
      let _0x176d8c = this.get;
      return "POST" === _0x24effe && (_0x176d8c = this.post), new Promise((_0x1d22f6, _0x3657c0) => {
        _0x176d8c.call(this, _0x51cbc6, (_0x241bd1, _0x205815, _0x26710f) => {
          _0x241bd1 ? _0x3657c0(_0x241bd1) : _0x1d22f6(_0x205815);
        });
      });
    }
    ["get"](_0x28e6e8) {
      return this.send.call(this.env, _0x28e6e8);
    }
    ["post"](_0x410efd) {
      return this.send.call(this.env, _0x410efd, "POST");
    }
  }
  return new class {
    constructor(_0x1cf2df, _0x466ad7) {
      this.name = _0x1cf2df;
      this.http = new _0x2e89a0(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x466ad7);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0xb3d0c1, _0x3b57bf = null) {
      try {
        return JSON.parse(_0xb3d0c1);
      } catch {
        return _0x3b57bf;
      }
    }
    ["toStr"](_0x23bc1b, _0x484992 = null) {
      try {
        return JSON.stringify(_0x23bc1b);
      } catch {
        return _0x484992;
      }
    }
    ["getjson"](_0x1d6adf, _0x452659) {
      let _0x430152 = _0x452659;
      const _0xdaf415 = this.getdata(_0x1d6adf);
      if (_0xdaf415) try {
        _0x430152 = JSON.parse(this.getdata(_0x1d6adf));
      } catch {}
      return _0x430152;
    }
    ["setjson"](_0x31bcc4, _0x1f0832) {
      try {
        return this.setdata(JSON.stringify(_0x31bcc4), _0x1f0832);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x37788f) {
      return new Promise(_0xe04b6b => {
        this.get({
          "url": _0x37788f
        }, (_0x2ba2ec, _0x4a0005, _0x45d888) => _0xe04b6b(_0x45d888));
      });
    }
    ["runScript"](_0x3441b1, _0x143020) {
      return new Promise(_0x5b282c => {
        let _0x4c9145 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4c9145 = _0x4c9145 ? _0x4c9145.replace(/\n/g, "").trim() : _0x4c9145;
        let _0x525163 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x525163 = _0x525163 ? 1 * _0x525163 : 20;
        _0x525163 = _0x143020 && _0x143020.timeout ? _0x143020.timeout : _0x525163;
        const [_0x4f1f1b, _0x1ea633] = _0x4c9145.split("@"),
          _0x12c866 = {
            "url": "http://" + _0x1ea633 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x3441b1,
              "mock_type": "cron",
              "timeout": _0x525163
            },
            "headers": {
              "X-Key": _0x4f1f1b,
              "Accept": "*/*"
            }
          };
        this.post(_0x12c866, (_0x1e598a, _0x5d98c7, _0x256b8c) => _0x5b282c(_0x256b8c));
      }).catch(_0x2ea7d7 => this.logErr(_0x2ea7d7));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4b88ee = this.path.resolve(this.dataFile),
          _0x184bd1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x2436d5 = this.fs.existsSync(_0x4b88ee),
          _0x3e6d51 = !_0x2436d5 && this.fs.existsSync(_0x184bd1);
        if (!_0x2436d5 && !_0x3e6d51) return {};
        {
          const _0x2f382f = _0x2436d5 ? _0x4b88ee : _0x184bd1;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2f382f));
          } catch (_0x3dba1e) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x30d33b = this.path.resolve(this.dataFile),
          _0x1c20bc = this.path.resolve(process.cwd(), this.dataFile),
          _0x37985c = this.fs.existsSync(_0x30d33b),
          _0x1253fa = !_0x37985c && this.fs.existsSync(_0x1c20bc),
          _0x15e056 = JSON.stringify(this.data);
        _0x37985c ? this.fs.writeFileSync(_0x30d33b, _0x15e056) : _0x1253fa ? this.fs.writeFileSync(_0x1c20bc, _0x15e056) : this.fs.writeFileSync(_0x30d33b, _0x15e056);
      }
    }
    ["lodash_get"](_0x3351d6, _0x5444cd, _0x506cad) {
      const _0x118fce = _0x5444cd.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2152fd = _0x3351d6;
      for (const _0x185d8e of _0x118fce) if (_0x2152fd = Object(_0x2152fd)[_0x185d8e], void 0 === _0x2152fd) return _0x506cad;
      return _0x2152fd;
    }
    ["lodash_set"](_0x344d0f, _0x3bc6b1, _0x11a3a8) {
      return Object(_0x344d0f) !== _0x344d0f ? _0x344d0f : (Array.isArray(_0x3bc6b1) || (_0x3bc6b1 = _0x3bc6b1.toString().match(/[^.[\]]+/g) || []), _0x3bc6b1.slice(0, -1).reduce((_0x2658d7, _0x2b08b9, _0x29dbab) => Object(_0x2658d7[_0x2b08b9]) === _0x2658d7[_0x2b08b9] ? _0x2658d7[_0x2b08b9] : _0x2658d7[_0x2b08b9] = Math.abs(_0x3bc6b1[_0x29dbab + 1]) >> 0 == +_0x3bc6b1[_0x29dbab + 1] ? [] : {}, _0x344d0f)[_0x3bc6b1[_0x3bc6b1.length - 1]] = _0x11a3a8, _0x344d0f);
    }
    ["getdata"](_0x115601) {
      let _0x322715 = this.getval(_0x115601);
      if (/^@/.test(_0x115601)) {
        const [, _0x2bf657, _0xa4312e] = /^@(.*?)\.(.*?)$/.exec(_0x115601),
          _0x5e8cd8 = _0x2bf657 ? this.getval(_0x2bf657) : "";
        if (_0x5e8cd8) try {
          const _0x3c1989 = JSON.parse(_0x5e8cd8);
          _0x322715 = _0x3c1989 ? this.lodash_get(_0x3c1989, _0xa4312e, "") : _0x322715;
        } catch (_0x2e8139) {
          _0x322715 = "";
        }
      }
      return _0x322715;
    }
    ["setdata"](_0x1478af, _0x97d793) {
      let _0x413486 = false;
      if (/^@/.test(_0x97d793)) {
        const [, _0x144f7d, _0x52e952] = /^@(.*?)\.(.*?)$/.exec(_0x97d793),
          _0x2b336b = this.getval(_0x144f7d),
          _0xdd7155 = _0x144f7d ? "null" === _0x2b336b ? null : _0x2b336b || "{}" : "{}";
        try {
          const _0x1551d5 = JSON.parse(_0xdd7155);
          this.lodash_set(_0x1551d5, _0x52e952, _0x1478af);
          _0x413486 = this.setval(JSON.stringify(_0x1551d5), _0x144f7d);
        } catch (_0x3d423d) {
          const _0x18761a = {};
          this.lodash_set(_0x18761a, _0x52e952, _0x1478af);
          _0x413486 = this.setval(JSON.stringify(_0x18761a), _0x144f7d);
        }
      } else _0x413486 = this.setval(_0x1478af, _0x97d793);
      return _0x413486;
    }
    ["getval"](_0xc63950) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0xc63950) : this.isQuanX() ? $prefs.valueForKey(_0xc63950) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xc63950]) : this.data && this.data[_0xc63950] || null;
    }
    ["setval"](_0x485a19, _0x4dc22b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x485a19, _0x4dc22b) : this.isQuanX() ? $prefs.setValueForKey(_0x485a19, _0x4dc22b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4dc22b] = _0x485a19, this.writedata(), !0) : this.data && this.data[_0x4dc22b] || null;
    }
    ["initGotEnv"](_0x407ecf) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x407ecf && (_0x407ecf.headers = _0x407ecf.headers ? _0x407ecf.headers : {}, void 0 === _0x407ecf.headers.Cookie && void 0 === _0x407ecf.cookieJar && (_0x407ecf.cookieJar = this.ckjar));
    }
    ["get"](_0x175dbb, _0x38f8c4 = () => {}) {
      _0x175dbb.headers && (delete _0x175dbb.headers["Content-Type"], delete _0x175dbb.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x175dbb.headers = _0x175dbb.headers || {}, Object.assign(_0x175dbb.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x175dbb, (_0xa002f9, _0x54805c, _0x5cc9c3) => {
        !_0xa002f9 && _0x54805c && (_0x54805c.body = _0x5cc9c3, _0x54805c.statusCode = _0x54805c.status);
        _0x38f8c4(_0xa002f9, _0x54805c, _0x5cc9c3);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x175dbb.opts = _0x175dbb.opts || {}, Object.assign(_0x175dbb.opts, {
        "hints": !1
      })), $task.fetch(_0x175dbb).then(_0x30ceee => {
        const {
          statusCode: _0x4e2940,
          statusCode: _0x487477,
          headers: _0x5de227,
          body: _0x3707ea
        } = _0x30ceee;
        _0x38f8c4(null, {
          "status": _0x4e2940,
          "statusCode": _0x487477,
          "headers": _0x5de227,
          "body": _0x3707ea
        }, _0x3707ea);
      }, _0x78b5ea => _0x38f8c4(_0x78b5ea))) : this.isNode() && (this.initGotEnv(_0x175dbb), this.got(_0x175dbb).on("redirect", (_0x32318b, _0xa66c95) => {
        try {
          if (_0x32318b.headers["set-cookie"]) {
            const _0x44b625 = _0x32318b.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x44b625 && this.ckjar.setCookieSync(_0x44b625, null);
            _0xa66c95.cookieJar = this.ckjar;
          }
        } catch (_0x40546c) {
          this.logErr(_0x40546c);
        }
      }).then(_0x4b7a47 => {
        const {
          statusCode: _0x13892b,
          statusCode: _0x391197,
          headers: _0x269de5,
          body: _0x2904fe
        } = _0x4b7a47;
        _0x38f8c4(null, {
          "status": _0x13892b,
          "statusCode": _0x391197,
          "headers": _0x269de5,
          "body": _0x2904fe
        }, _0x2904fe);
      }, _0x4b85e8 => {
        const {
          message: _0x184820,
          response: _0x2627ce
        } = _0x4b85e8;
        _0x38f8c4(_0x184820, _0x2627ce, _0x2627ce && _0x2627ce.body);
      }));
    }
    ["post"](_0x4140cf, _0x51ac0d = () => {}) {
      if (_0x4140cf.body && _0x4140cf.headers && !_0x4140cf.headers["Content-Type"] && (_0x4140cf.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4140cf.headers && delete _0x4140cf.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x4140cf.headers = _0x4140cf.headers || {}, Object.assign(_0x4140cf.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x4140cf, (_0x5e3f81, _0x2fd86c, _0x3248dc) => {
        !_0x5e3f81 && _0x2fd86c && (_0x2fd86c.body = _0x3248dc, _0x2fd86c.statusCode = _0x2fd86c.status);
        _0x51ac0d(_0x5e3f81, _0x2fd86c, _0x3248dc);
      });else {
        if (this.isQuanX()) _0x4140cf.method = "POST", this.isNeedRewrite && (_0x4140cf.opts = _0x4140cf.opts || {}, Object.assign(_0x4140cf.opts, {
          "hints": !1
        })), $task.fetch(_0x4140cf).then(_0x52cb69 => {
          const {
            statusCode: _0x308a5b,
            statusCode: _0xace71a,
            headers: _0x22daf4,
            body: _0x45325b
          } = _0x52cb69;
          _0x51ac0d(null, {
            "status": _0x308a5b,
            "statusCode": _0xace71a,
            "headers": _0x22daf4,
            "body": _0x45325b
          }, _0x45325b);
        }, _0x2322be => _0x51ac0d(_0x2322be));else {
          if (this.isNode()) {
            this.initGotEnv(_0x4140cf);
            const {
              url: _0x51ce05,
              ..._0x1113a7
            } = _0x4140cf;
            this.got.post(_0x51ce05, _0x1113a7).then(_0x36f5f0 => {
              const {
                statusCode: _0x4c2e36,
                statusCode: _0x225736,
                headers: _0x294230,
                body: _0x4fb979
              } = _0x36f5f0;
              _0x51ac0d(null, {
                "status": _0x4c2e36,
                "statusCode": _0x225736,
                "headers": _0x294230,
                "body": _0x4fb979
              }, _0x4fb979);
            }, _0x5bbf10 => {
              const {
                message: _0x18d6c7,
                response: _0x135975
              } = _0x5bbf10;
              _0x51ac0d(_0x18d6c7, _0x135975, _0x135975 && _0x135975.body);
            });
          }
        }
      }
    }
    ["time"](_0x39d2e5, _0x43ff46 = null) {
      const _0x2af65c = _0x43ff46 ? new Date(_0x43ff46) : new Date();
      let _0x2f35ac = {
        "M+": _0x2af65c.getMonth() + 1,
        "d+": _0x2af65c.getDate(),
        "H+": _0x2af65c.getHours(),
        "m+": _0x2af65c.getMinutes(),
        "s+": _0x2af65c.getSeconds(),
        "q+": Math.floor((_0x2af65c.getMonth() + 3) / 3),
        "S": _0x2af65c.getMilliseconds()
      };
      /(y+)/.test(_0x39d2e5) && (_0x39d2e5 = _0x39d2e5.replace(RegExp.$1, (_0x2af65c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2079e1 in _0x2f35ac) new RegExp("(" + _0x2079e1 + ")").test(_0x39d2e5) && (_0x39d2e5 = _0x39d2e5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2f35ac[_0x2079e1] : ("00" + _0x2f35ac[_0x2079e1]).substr(("" + _0x2f35ac[_0x2079e1]).length)));
      return _0x39d2e5;
    }
    ["msg"](_0x14b04f = _0x1da288, _0x5d48fb = "", _0x8058d2 = "", _0x4dc078) {
      const _0x8a58e0 = _0x281ec0 => {
        if (!_0x281ec0) return _0x281ec0;
        if ("string" == typeof _0x281ec0) return this.isLoon() ? _0x281ec0 : this.isQuanX() ? {
          "open-url": _0x281ec0
        } : this.isSurge() ? {
          "url": _0x281ec0
        } : void 0;
        if ("object" == typeof _0x281ec0) {
          if (this.isLoon()) {
            let _0x26c57f = _0x281ec0.openUrl || _0x281ec0.url || _0x281ec0["open-url"],
              _0x272db1 = _0x281ec0.mediaUrl || _0x281ec0["media-url"];
            return {
              "openUrl": _0x26c57f,
              "mediaUrl": _0x272db1
            };
          }
          if (this.isQuanX()) {
            let _0x594db6 = _0x281ec0["open-url"] || _0x281ec0.url || _0x281ec0.openUrl,
              _0x553580 = _0x281ec0["media-url"] || _0x281ec0.mediaUrl;
            return {
              "open-url": _0x594db6,
              "media-url": _0x553580
            };
          }
          if (this.isSurge()) {
            let _0x2a38a2 = _0x281ec0.url || _0x281ec0.openUrl || _0x281ec0["open-url"];
            return {
              "url": _0x2a38a2
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x14b04f, _0x5d48fb, _0x8058d2, _0x8a58e0(_0x4dc078)) : this.isQuanX() && $notify(_0x14b04f, _0x5d48fb, _0x8058d2, _0x8a58e0(_0x4dc078))), !this.isMuteLog) {
        let _0x11998f = ["", "==============📣系统通知📣=============="];
        _0x11998f.push(_0x14b04f);
        _0x5d48fb && _0x11998f.push(_0x5d48fb);
        _0x8058d2 && _0x11998f.push(_0x8058d2);
        console.log(_0x11998f.join("\n"));
        this.logs = this.logs.concat(_0x11998f);
      }
    }
    ["log"](..._0xd639ca) {
      _0xd639ca.length > 0 && (this.logs = [...this.logs, ..._0xd639ca]);
      console.log(_0xd639ca.join(this.logSeparator));
    }
    ["logErr"](_0x476969, _0x5abcfc) {
      const _0x5be561 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x5be561 ? this.log("", "❗️" + this.name + ", 错误!", _0x476969.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x476969);
    }
    ["wait"](_0x3b1c8e) {
      return new Promise(_0xe20db => setTimeout(_0xe20db, _0x3b1c8e));
    }
    ["done"](_0x49c1f0 = {}) {
      const _0x39c13d = new Date().getTime(),
        _0x33cd82 = (_0x39c13d - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x33cd82 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x49c1f0);
    }
  }(_0x1da288, _0xf97cc);
}