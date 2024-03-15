import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useWindowSize } from 'usehooks-ts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from './Image';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel = ({ images, interval = 3000 }: ImageCarouselProps) => {
  const sliderRef = useRef<Slider>(null);

  const { width } = useWindowSize();
  const isMobile = width < 480;

  const getDeviceWidth = () => {
    let slidesToShow = 5;

    if (width < 480) {
      slidesToShow = 2;
    } else if (width <= 768) {
      slidesToShow = 4;
    }

    return slidesToShow;
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const startScrolling = () => {
      if (slider && slider.innerSlider && slider.innerSlider.list) {
        slider.slickPlay();
      }
    };

    const stopScrolling = () => {
      if (slider && slider.innerSlider && slider.innerSlider.list) {
        slider.slickPause();
      }
    };

    if (slider && slider.innerSlider && slider.innerSlider.list) {
      slider.innerSlider.list.addEventListener('mouseenter', stopScrolling);
      slider.innerSlider.list.addEventListener('mouseleave', startScrolling);

      startScrolling();
    }

    return () => {
      if (slider && slider.innerSlider && slider.innerSlider.list) {
        slider.innerSlider.list.removeEventListener(
          'mouseenter',
          stopScrolling,
        );
        slider.innerSlider.list.removeEventListener(
          'mouseleave',
          startScrolling,
        );
      }
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: interval,
    slidesToShow: getDeviceWidth(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: interval,
    cssEase: 'linear',
  };

  return (
    <Slider ref={sliderRef} {...settings} className='pt-5'>
      {images?.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={isMobile ? 130 : 145}
            height={50}
            rounded='rounded-full'
            className='rounded-full bg-light px-3 hover:shadow-xl'
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
