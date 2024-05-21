import React, {useState} from 'react'

export default function Bai7() {
    const [text, setText] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>Bai7
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Nhập văn bản..."
        />
      <p>Số ký tự: {text.length}</p>
    </div>
  )
}
