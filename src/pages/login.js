import InputItem from '../components/InputItem'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const accountInput = (value) => {
    setAccount(value);
  }

  const passwordInput = value => {
    setPassword(value);
  }

  const register = () => {
    history.push('/register')
  }

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl flex flex-col">
        <h1 className="font-medium text-2xl mt-3 text-center">登入</h1>
        <form action="" className="mt-6">

          {/*<label htmlFor="username" className="block text-black">Username</label>*/}
          {/*<input type="text" autoFocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username"/>*/}
          <InputItem label={'帳號'} type="text" change={accountInput}/>

          {/*<label htmlFor="password" className="block text-black">Password</label>*/}
          {/*<input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password"/>*/}
          <InputItem label={'密碼'} type="password" change={passwordInput}/>

          <button className="block text-center text-black p-3 duration-300 rounded-sm hover:bg-black hover:text-white w-3/12 m-auto" onClick={register}>註冊</button>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-3/12 m-auto">登入</button>
        </form>
      </div>
    </div>
  )
}

export default Login
