import InputItem from '../components/InputItem'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const accountInput = (value) => {
    setAccount(value);
  }

  const passwordInput = (value) => {
    setPassword(value);
  }

  const register = () => {
    history.push('/register')
  }

  const submit = async (e) => {
    e.preventDefault()
    let obj = {
      username: account,
      password: password
    }
    // const res = await axios.post('/api/login', obj)
    const res = fetch('/api/login',
      {
        method: 'POST',
        body: obj, headers: {
          'content-type': 'application/json'
        }
      })
    console.log(res, '============= res')
    history.push('/home')
  }

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl flex flex-col">
        <h1 className="font-medium text-2xl mt-3 text-center">登入</h1>
        <form action="" className="mt-6">
          <InputItem label='帳號' type='text' change={accountInput} valid={() => true} />
          <InputItem label='密碼' type='password' change={passwordInput} valid={() => true} />

          <button className="block text-center text-blue-600 p-3 duration-300 rounded-sm  hover:text-blue-300 w-3/12 m-auto" onClick={register}>註冊</button>
          <button className="block text-center text-white bg-blue-700 p-1 duration-300 rounded-md hover:bg-blue-500 w-1/5 m-auto" onClick={submit}>登入</button>
        </form>
      </div>
    </div>
  )
}

export default Login
