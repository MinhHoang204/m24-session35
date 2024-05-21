import {useState} from 'react'
type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};
export default function Bai2() {
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: 'Coca cola',
        price: 1000,
        quantity: 10
    });
  return (
    <div>Bai2
        <h1>Product Name: {product.name}</h1>
    </div>
  )
}
