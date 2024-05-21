import {useState} from 'react'

export default function Bai4() {
  // Khởi tạo state để quản lý trạng thái ẩn/hiện của tiêu đề
  const [isVisible, setIsVisible] = useState(true);

  // Hàm để thay đổi trạng thái ẩn/hiện của tiêu đề
  const handleToggle = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };
  return (
    <div>Bai4
        <button onClick={handleToggle}>
           {isVisible ? 'Hide Title' : 'Show Title'}
        </button>
        {isVisible && <h1>This is the title</h1>}
    </div>
  )
}
