import {useState} from 'react'

export default function Bai1() {
    const [name, setName] = useState<string>('Nguyễn Minh Hoàng');   
  return (
    <div>Bai1
        <h1>Họ và tên, {name}!</h1>
    </div>
  )
}
