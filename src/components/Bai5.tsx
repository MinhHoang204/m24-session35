import React, {useState} from 'react'

export default function Bai5() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>Bai5
        <form>
        <label htmlFor="userInput">Nhập nội dung: </label>
        <input
          type="text"
          id="userInput"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <p>Đang nhập tiêu đề: {inputValue}</p>
    </div>
  )
}
