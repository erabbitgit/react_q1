const InputItem = (props) => {
  function handleInput(e){
    console.log(e,99999999)
  }
  return (
    <>
      <label className="inline-block text-black pr-2">{props.label}</label>
      <input type={props.type} value={props.value} onChange={handleInput}
             className="inline-block rounded-sm px-4 py-3 mt-3 focus:ring-1 focus:ring-blue-600 bg-gray-100 w-2/3"/>
    </>
  )
}

export default InputItem
