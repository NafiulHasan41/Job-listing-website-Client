// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import carouselImg1 from '../../public/banner1.jpeg'
import carouselImg2 from '../../public/banner2.jpeg'
import carouselImg3 from '../../public/banner3.jpeg'


export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto rounded-xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper rounded-xl'
      >
        <SwiperSlide>
          <Slide
            image={carouselImg1}
            text={`Get Your On-Site time Jobs  We Provide Best Jobs for You`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carouselImg2}
            text='Get Your Remote Jobs'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carouselImg3}
            text='Start Your Journey with Us'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}