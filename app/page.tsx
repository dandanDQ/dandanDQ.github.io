import './page.scss';
import Navbar from './components/NavBar';
import Header from './components/Header';
import RelevantCard from './components/RelevantCard';
import DiscoveryCard from './components/DiscoveryCard';

export default function Home() {
  const relevantList = [
    {
      title: '星空度假露营地',
      rateStar: '4.99',
      rateCount: '116',
      desc: '独立卫浴 独立露台',
      price: '￥1899/晚',
      img: '/camp/2.jpg'
    },
    {
      title: '临海星空屋',
      rateStar: '4.98',
      rateCount: '999',
      desc: '可做饭',
      price: '￥2688/晚',
      img: '/camp/5.png'
    },
    {
      title: '野奢帐篷酒店',
      rateStar: '5.00',
      rateCount: '888',
      desc: '独立卫浴 独立露台',
      price: '￥1899/晚',
      img: '/camp/1.png'
    },
    {
      title: '自带沙滩帐篷',
      rateStar: '4.98',
      rateCount: '100',
      desc: '独立卫浴 可做饭',
      price: '￥1899/晚',
      img: '/camp/3.jpg'
    }
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
  return (
    <div className="home-container">
      <Header />

      <div className="main">
        <div className="container">
          <h3 className='title'>营地推荐</h3>
          <div className="list">
            {relevantList.map((item) => {
              return <RelevantCard
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
              return <DiscoveryCard img={item.img} />
            })}
          </div>
        </div>
        {/* <div className="navbar">navbar</div> */}
      </div>

      <div className='nav-bar'>
        <Navbar></Navbar>
      </div>
    </div>
  );
}
