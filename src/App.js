import React from 'react';
import GoodsCard from './components/GoodsCard';

function App() {
  const products = [
    { id: 1, name: "Портфель", price: 3200, image: `${process.env.PUBLIC_URL}/images/1.jpg` },
    { id: 2, name: "Сумка дорожня", price: 7800, image: `${process.env.PUBLIC_URL}/images/2.jpg` },
    { id: 3, name: "Рюкзак шкіряний", price: 4500, image: `${process.env.PUBLIC_URL}/images/3.jpg` },
    { id: 4, name: "Сумка жіноча", price: 3550, image: `${process.env.PUBLIC_URL}/images/4.jpg` },
    { id: 5, name: "Блокнот шкіряний", price: 1200, image: `${process.env.PUBLIC_URL}/images/5.jpg` },
    { id: 6, name: "Портмоне шкіряне", price: 2100, image: `${process.env.PUBLIC_URL}/images/6.jpg` },
  ];

  return (
    <div className="product-gallery">
      {products.map(product => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
