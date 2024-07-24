export default function Hero() {
  return (
    <section className="section">
      {/* Wrap */}
      <div className="wrap">
        {/* CONTENT COL */}
        <div className="content">
          {/* H1 */}
          <h1 className="title">
            Lessons and insights
            {' '}
            <span className="text-primary">
              from 8 years
            </span>
          </h1>
          {/* P */}
          <p className="paragraph">Where to grow your business as a photographer: site or social media?</p>
          {/* BUTTON LG */}
          <a href="#" className="btn md primary w-fit">
            Register
          </a>
        </div>
        {/* IMG COL */}
        <div className="img">
          <img src="hero_illustration.png" width="391" alt="hero img" />
        </div>
      </div>
    </section>
  )
}
