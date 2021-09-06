
export const verificationRegister = obj => {
  let isVerified = true
  let account = obj.username
  let password = obj.password
  let checkPassword = obj.confirmedPassword

  console.log(obj,'----------obj')
  if(!account){
    isVerified = false
    // Toast.error(i18n.t('view.container.securityCenter.smsCode'), 1.5)
    return { isVerified: isVerified, params: null }
  }

  return {
    params: { account, password, checkPassword },
    isVerified: isVerified,
  }
}

export const verificationLogin = obj => {
  let isVerified = true

  return {
    params: {  },
    isVerified: isVerified,
  }
}
