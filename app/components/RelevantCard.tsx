
export default function RelevantCard({
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