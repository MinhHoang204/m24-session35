import React, {useState} from 'react'

export default function Bai8() {
  const cities = ['-- Chọn thành phố --', 'Hà Nội', 'Hà Nam', 'Ninh Bình', 'Thanh Hóa', 'Nghệ An'];
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div>Bai8
        <select value={selectedCity || ''} onChange={handleCityChange}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && <p>Bạn đã chọn thành phố: {selectedCity}</p>}
    </div>
  )
}
