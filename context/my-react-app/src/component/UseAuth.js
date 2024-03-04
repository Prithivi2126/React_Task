import { useContext } from 'react'
import { context } from './Authprovider'

const UseAuth = () => {
  return useContext(context)
}

export default UseAuth