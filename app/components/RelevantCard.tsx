import Image from 'next/image';
import "./RelevantCard.scss"
export default function RelevantCard({
    title = '国风精致温馨房',
    rateStar = '4.98',
    rateCount = '116',
    desc = '2房 | 1卫',
    price = '￥998/晚',
  }) {
    return (
      <div className="relevant-card">
        <div className="card-img">
          <img
            className='main-img'
            src="/background/bg2.jpg"
            alt=""
          />
          <div className="card-img-controller-wrapper">
            <Image
                className="img"
                src='/like.svg'
                width={16}
                height={16}
                alt="Picture of the author"
                priority
                />
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