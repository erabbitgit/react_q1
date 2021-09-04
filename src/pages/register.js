import InputItem from '../components/InputItem'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const history = useHistory()

  const accountInput = (value) => {
    setAccount(value);
  }

  const passwordInput = (value) => {
    setPassword(value);
  }

  const doubleCheckInput = (value) => {
    setCheckPassword(value)
  }

  const goLogin = () => {
    history.push('/login')
  }

  return (
    <div className="bg-white lg:w-5/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl flex flex-col">
        <h1 className="font-medium text-2xl mt-3 text-center">註冊</h1>
        <form action="" className="mt-6">
          <InputItem label='帳號' type='text' change={accountInput} placeholder='請輸入信箱' />
          <InputItem label='密碼' type='password' change={passwordInput} placeholder='4-8字元；首尾必須是英文；中間必須是數字' />
          <InputItem label='確認密碼' type='password' change={doubleCheckInput} placeholder='4-8字元；首尾必須是英文；中間必須是數字'/>

          <button className="block text-center text-blue-600 p-3 duration-300 rounded-sm  hover:text-blue-300 w-3/12 m-auto" onClick={goLogin}>返回登入</button>
          <button className="block text-center text-white bg-blue-700 p-1 duration-300 rounded-md hover:bg-blue-500 w-1/5 m-auto">註冊</button>
        </form>
      </div>
    </div>
  )
}

export default Register
