import {useState} from 'react'

export default function Bai3() {
  // Khởi tạo state cho màu chữ, mặc định là màu đen
  const [color, setColor] = useState('black');

  // Hàm để thay đổi màu chữ
  const handleChangeColor = () => {
    setColor(prevColor => (prevColor === 'black' ? 'red' : 'black'));
  };

  return (
    <div>Bai3
      <p style={{ color: color }}>Tiêu đề văn bản</p>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  )
}
