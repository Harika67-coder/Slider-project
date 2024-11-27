import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { longList } from './src/data';
import {FaQuoteRight} from 'react-icons/fa';
import Slider from 'react-slick';
const SlickCarousel = () => {
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     //fade: true,
   autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <section className='slickContainer'>
      <Slider {...settings}>
        {longList.map((person)=>{
    const {id,image,name,title,quote}=person;
    return <article key={id} >
        <img src={image} alt={title} style={{width:"150px",height:"150px",objectFit:"cover",borderRadius:"50%",border:"4px solid var(--grey-200)",boxShadow:"1px 2px 5px var(--grey-200)",marginBottom:"0.9rem"}}/>
        <p style={{color:"var(--primary-500)",textTransform:"uppercase",fontSize:"20px",marginBottom:"1rem"}}>{name}</p>
        <p style={{textTransform:"capitalize",marginBottom:"1.5rem"}}>{title}</p>
        <p className='quote'>{quote}</p>
        <FaQuoteRight style={{color:"var(--primary-500)",fontSize:"48px"}}/>
    </article>
  })}
        </Slider>
    </section>
      
  );
};
export default SlickCarousel;