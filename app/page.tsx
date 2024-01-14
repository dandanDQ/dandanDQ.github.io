import './home.scss';
import Navbar from './components/NavBar';
import Input from './components/Input'
import Header from './components/Header'

function RelevantCard({
  title = '国风精致温馨房',
  rateStar = '4.98',
  rateCount = '116',
  desc = '2房 | 1卫',
  price = '￥998/晚',
}) {
  return (
    <div className="relvant-card">
      <div className="card-img">
        <img
          src="/background/bg2.jpg"
          alt=""
        />
        <div className="card-img-controller-wrapper">
          <div className="controller-button like-button">❤️</div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-title">
          <div className="title-text">{title}</div>
          <div className="rate">
            ⭐️ {rateStar}({rateCount})
          </div>
        </div>
        <div className="card-desc">{desc}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

function DiscoveryCard() {
  return (
    <div className="discovery-card">
      <div className="img">
        <img
          src="/background/bg2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="body-container">
        <div className="relevant-container">
          <h3>相关推荐</h3>
          <div className="card-container">
            <RelevantCard />
            <RelevantCard title={'1234'} />
            <RelevantCard title={'1234'} />
            <RelevantCard title={'1234'} />
          </div>
        </div>
        <div className="discover-container">
          <h3>发现</h3>
          <div className="card-container">
            <DiscoveryCard />
            <DiscoveryCard />
            <DiscoveryCard />
            <DiscoveryCard />
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
