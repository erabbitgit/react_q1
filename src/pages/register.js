import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import InputItem from '../components/InputItem'
import Toast from '../components/toast'

const Register = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [formTouch, setFormTouch] = useState(false)
  const [alert, setAlert] = useState({})
  const history = useHistory()
  let accountIsValid
  let passwordIsValid
  let checkPasswordIsValid

  const accountInput = (value) => {
    setAccount(value)
  }

  const passwordInput = (value) => {
    setPassword(value)
  }

  const doubleCheckInput = (value) => {
    setCheckPassword(value)
  }

  const goLogin = () => {
    history.push('/login')
  }

  const submit = async (e) => {
    e.preventDefault()
    setFormTouch(true)
    if (accountIsValid && passwordIsValid && checkPasswordIsValid) {
      let params = {
        username: account,
        password: password,
      }
      try {
        const res = await axios.post('/api/register', params)
        if(res.data.success){
          const res = await axios.post('/api/login', params)
          localStorage.setItem('token',res.data.token)
          history.push('/home')
        }
      } catch (error) {
        setAlert({show: true, msg: error.response.data.message, type: 'error'})
      }
    }
  }

  const accountVerify = (value) => {
    let obj = {
      status: true,
      message: ''
    }
    if (value.trim() !== '' && value.includes('@')) {
      accountIsValid = true
      return obj
    } else {
      obj.status = false
      obj.message = '請輸入帳號'
      return obj
    }
  }

  const passwordVerify = (value) => {
    let obj = {
      status: true,
      message: ''
    }
    if (value.trim() !== '' && value.trim().length > 3) {
      passwordIsValid = true
      return obj
    } else {
      obj.status = false
      obj.message = '請輸入密碼'
      return obj
    }
  }

  const confirmVerify = (value) => {
    let obj = {
      status: true,
      message: ''
    }
    if (value.trim() !== '' && value === password) {
      checkPasswordIsValid = true
      return obj
    } else if (value.trim() !== '' && value !== password) {
      obj.status = false
      obj.message = '與密碼不同'
      return obj
    } else {
      obj.status = false
      obj.message = '請輸入確認密碼'
      return obj
    }
  }

  return (
    <>
      {alert.show && <Toast type={alert.type} message={alert.msg} />}
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl flex flex-col">
          <h1 className="font-medium text-2xl mt-3 text-center">註冊</h1>
          <form action="" className="mt-6">
            <InputItem label="帳號"
                       type="text"
                       change={accountInput}
                       placeholder="請輸入信箱"
                       valid={accountVerify(account)}
                       touched={formTouch}
            />
            <InputItem label="密碼"
                       type="password"
                       change={passwordInput}
                       placeholder="4-8字元；首尾必須是英文；中間必須是數字"
                       valid={passwordVerify(password)}
                       touched={formTouch}
            />
            <InputItem label="確認密碼"
                       type="password"
                       change={doubleCheckInput}
                       placeholder="4-8字元；首尾必須是英文；中間必須是數字"
                       valid={confirmVerify(checkPassword)}
                       touched={formTouch}
            />
            <button
              className="block text-center text-blue-600 p-3 duration-300 rounded-sm  hover:text-blue-300 w-3/12 m-auto"
              onClick={goLogin}>返回登入
            </button>
            <button
              className="block text-center text-white bg-blue-700 p-1 duration-300 rounded-md hover:bg-blue-500 w-1/5 m-auto"
              onClick={submit}>註冊
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
