"use client"
import { useState } from 'react';
import './page.scss';
import Navbar from './components/NavBar';
import Header from './components/Header';
import RelevantCard from './components/RelevantCard';
import DiscoveryCard from './components/DiscoveryCard';
import BusinessCard from './components/BusinessCard';
import InfiniteScroll  from './UI/Others/InfiniteScroll';
import Card from "./UI/Others/GridCard";

export default function Home() {
  const relevantList = [
    {
      title: '星空度假露营地',
      rateStar: '4.99',
      rateCount: '999',
      desc: '独立卫浴 独立露台',
      price: '￥1899/晚',
      img: '/camp/2.jpg',
      tags: ["星空酒吧", "野趣帐篷", "营地餐吧"]
    },
    {
      title: '灯塔度假营地',
      rateStar: '4.98',
      rateCount: '1040',
      desc: '可做饭',
      price: '￥2688/晚',
      img: '/camp/5.png',
      tags: ["备课蓬屋", "贝壳蓬屋", "营地商店"]
    },
    {
      title: '野奢度假营地',
      rateStar: '5.00',
      rateCount: '998',
      desc: '独立卫浴 独立露台',
      price: '￥1899/晚',
      img: '/camp/1.png',
      tags: ["最美海岸线", "沙滩海岸", "星空露营"]
    },
  ];

  const carList = [{
    img: '/car/car1.jpg'
  }, {
    img: '/camp/4.jpg'
  },
  {
    img: '/car/car1.jpg'
  }, {
    img: '/car/car2.jpg'
  },
  {
    img: '/car/car1.jpg'
  }, {
    img: '/camp/2.jpg'
  }]

  const businessList = [{
    name: "野奢度假",
    icon: "/business/camp.png",
    width: 80
  },{
    name: "房车租售",
    icon: "/business/rv.png",
    width: 80
  },{
    name: "购物商城",
    icon: "/business/store.png",
    width: 70
  },{
    name: "会员礼遇",
    icon: "/business/dudu.png",
    width: 70
  }]

  const [productList, setProductList] = useState([{
    url: "xxxx",
    img: '/product/4.jpg',
  },
  {
    url: "",
    img: '/product/2.jpg',
  },
  {
    url: "",
    img: '/product/5.png',
  },
  {
    url: "xxxx",
    img: '/product/4.jpg',
  },
  {
    url: "",
    img: '/product/4.jpg',
  },
  {
    url: "xxxx",
    img: '/product/3.jpg',
  },
  {
    url: "",
    img: '/product/1.jpg',
  }
]);

  const addProductItem = () => {
    const newItem = {
      url: "",
      img: '/product/1.jpg',
    };
    setProductList(prevItems => [...prevItems, newItem])
  }
  return (
    <div className="home-container">
      <Header />

      <div className="main">
        <div className="container">
          <div className="business-list">
            {businessList.map((item) => {
              return <BusinessCard
                key={item.name}
                name={item.name}
                icon={item.icon}
                width={item.width}
              ></BusinessCard>
            })}
          </div>
        </div>
        <div className="container">
          <h3 className='title'>营地推荐</h3>
          <div className="list">
            {relevantList.map((item) => {
              return <RelevantCard
                key={item.title}
                title={item.title}
                price={item.price}
                desc={item.desc}
                rateStar={item.rateStar}
                rateCount={item.rateCount}
                img={item.img} />
            })}
          </div>
        </div>
        <div className="container">
          <h3 className='title'>嘟嘟房车</h3>
          <div className="list">
            {carList.map((item) => {
              return <DiscoveryCard key={item.img} img={item.img} />
            })}
          </div>
        </div>

        <div className="container">
          <h3 className='title'>商城精选</h3>
          <button onClick={addProductItem}>获取更多</button>
          <InfiniteScroll>
            {productList.map((item) => {
              return <Card key={item.img} img={item.img} />
            })}
          </InfiniteScroll>
        </div>
      </div>

      <div className='nav-bar'>
        <Navbar></Navbar>
      </div>
    </div>
  );
}
