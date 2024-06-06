import Slider from 'react-slick';
import { ImageInfo } from "./../types";
// import './styles.scss';

interface ImageCarouselProps {
  images: ImageInfo[];
}

const ImageCarousel = ({ images }:ImageCarouselProps) =>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.src}
            alt={image.title}
            style={{
              objectFit: image.objectFit,
              width: image.width,
              height: image.height,
              maxWidth: "1000px",
              maxHeight: "600px",
              minHeight: "auto",
              margin: "0 auto",
              border: "1px solid #A8A8A8",
              backgroundColor: "rgba(0,0,0, 0.1)",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
