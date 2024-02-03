import "./ProductList.scss"
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';


export default function ProductList() {
  const [productList, setProductList] = useState([{
    url: "xxxx",
    img: '/product/4.jpg',
    index: 1,
  },
  {
    url: "",
    img: '/product/2.jpg',
    index: 2,
  },
  {
    url: "",
    img: '/product/5.png',
    index: 3,
  },
  {
    url: "xxxx",
    img: '/product/4.jpg',
    index: 4,
  },
  {
    url: "xxxx",
    img: '/product/3.jpg',
    index: 6,
  },
  {
    url: "",
    img: '/product/1.jpg',
    index: 7,
  }
]);

  const addProductItem = () => {
    const newItems = [{
      url: "",
      img: '/product/1.jpg',
      index: 10
    },
    {
      url: "",
      img: '/product/3.jpg',
      index: 10
    }];
    setProductList(prevItems => [...prevItems, ...newItems])
  }


  return <div className="product-list">
      <Masonry columns={2} spacing={0}>
        {productList.map((item, index) => (
          <div key={index} className="product-card">
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4, 
                display: 'block',
                width: '100%',
              }}
            />
            <div className="detail-info">
              <div className="product-name"></div>
            </div>
          </div>
        ))}
      </Masonry>
    <button onClick={addProductItem}>获取更多</button>
  </div>
}