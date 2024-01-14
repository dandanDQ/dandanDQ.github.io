import './home.scss';
import Navbar from './components/NavBar';
import Header from './components/Header';
import RelevantCard from './components/RelevantCard';
import DiscoveryCard from './components/DiscoveryCard';

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
