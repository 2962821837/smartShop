import request from '@/utils/request'
// import { endsWith } from 'core-js/core/string'

// 请求验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}
// 发送验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {

    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
