import { useState, useRef } from 'react'
import SliderImg from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { css } from '@emotion/css'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'

const containers = css`
  position: relative;
`

const iframeYoutube = css`
  width: 700px;
  height: 500px;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const slideContainer = css`
  width: 100%;
  height: 100%;
  background-color: #0009;
  display: flex;
  align-items: center;
  justify-content: center;
`

const overlay = css`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #0009;
  width: 100%;
  height: 100%;
`

const slideContentWrapper = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const slideContent = css`
  display: flex;
  align-items: center;
`

const ratings = css`
  font-size: 2.1rem;
  font-weight: 500;
  color: #fff;
  margin-left: 5px;
`

const nameFilm = css`
  color: #fff;
  font-size: 4.6rem;
  line-height: 2;
`

const description = css`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.5;
`

const typeAction = css`
  font-size: 2.5rem;
  color: #ffc000;
  text-transform: capitalize;
  line-height: 2;
`

const btnShowVideo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
  background: #f44336;
  min-width: 200px;
  line-height: 55px;
  border-radius: 30px;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 40px;
  user-select: none;
  color: #fff;
`

const nextArrow = css`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  z-index: 1000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
`

const prevArrow = css`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  z-index: 1000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
`

const icon = css`
  font-size: 2rem;
`

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <button onClick={onClick} className={nextArrow}>
      <GrLinkPrevious className={icon} />
    </button>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <button className={prevArrow} onClick={onClick}>
      <GrLinkNext className={icon} />
    </button>
  )
}

const Slider = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false)
  const containerRef = useRef()
  const iframeRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const handleShowVideo = () => {
    setShowVideo(true)
  }

  const handleClick = () => {
    if (containerRef.current.contains(iframeRef.current)) {
      setShowVideo(false)
    }
  }

  return (
    <div className={containers} onClick={handleClick} ref={containerRef}>
      <SliderImg {...settings}>
        {data &&
          data.slides.map((slide) => (
            <div key={slide.id} className={slideContainer}>
              <div
                className={css`
                position: relative;
                background-image: url('${slide.image}') !important;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                padding-top: 50%;
              `}
              >
                <div className={overlay}>
                  <div className={slideContentWrapper}>
                    <div className={slideContent}>
                      <AiTwotoneStar
                        className={css`
                          font-size: 2.4rem;
                          color: #ffc000;
                        `}
                      />
                      <span className={ratings}>{slide.ratings}</span>
                    </div>
                    {showVideo ? (
                      <iframe
                        src={slide.video}
                        title="video"
                        className={iframeYoutube}
                        ref={iframeRef}
                        allowFullScreen
                      />
                    ) : (
                      <></>
                    )}
                    <h2 className={nameFilm}>{slide.name}</h2>
                    <p className={description}>{slide.desc}</p>
                    <span className={typeAction}>{slide.display_name}</span>
                    <button className={btnShowVideo} onClick={handleShowVideo}>
                      <BsPlayFill />
                      <span
                        className={css`
                          margin-left: 5px;
                        `}
                      >
                        Play Trailer
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </SliderImg>
    </div>
  )
}

export default Slider
