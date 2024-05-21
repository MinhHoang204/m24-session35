import React, {useState} from 'react'

export default function Bai9() {
  const [selectedGender, setSelectedGender] = useState<string>('Nam');

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div>Bai9
        <div>
        <h2>Giới tính:</h2>
        <label>
          <input
            type="radio"
            value="Nam"
            checked={selectedGender === 'Nam'}
            onChange={handleGenderChange}
          />
          Nam
        </label>
        <label>
          <input
            type="radio"
            value="Nữ"
            checked={selectedGender === 'Nữ'}
            onChange={handleGenderChange}
          />
          Nữ
        </label>
        <label>
          <input
            type="radio"
            value="Khác"
            checked={selectedGender === 'Khác'}
            onChange={handleGenderChange}
          />
          Khác
        </label>
      </div>
      <div>
        <h2>Giới tính: {selectedGender}</h2>
        <label>
          <input
            type="radio"
            value="Nam"
            checked={selectedGender === 'Nam'}
            onChange={handleGenderChange}
          />
          Nam
        </label>
        <label>
          <input
            type="radio"
            value="Nữ"
            checked={selectedGender === 'Nữ'}
            onChange={handleGenderChange}
          />
          Nữ
        </label>
        <label>
          <input
            type="radio"
            value="Khác"
            checked={selectedGender === 'Khác'}
            onChange={handleGenderChange}
          />
          Khác
        </label>
      </div>
    </div>
  )
}
