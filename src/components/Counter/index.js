import {useRef, useEffect} from 'react'

import './index.css'

const Counter = () => {
  const data = useRef(null)

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(data.current.value)
    data.current.value = 'vidya' // like this we can update a value
    console.log(data.current.value)
    console.log(data.current.value + 1) //  like this we can update a value
  }

  useEffect(() => {
    data.current.focus()
  }, [])

  return (
    <div>
      <center>
        <form onSubmit={onSubmitForm}>
          <input ref={data} type="text" placeholder="Enter your Name" />
          <br />

          <input type="submit" />
        </form>
      </center>
    </div>
  )
}

export default Counter
