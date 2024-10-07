import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Capa from "../../assets/imgs/capa.jpg";
import style from "./style.module.scss";

export const CarroselHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      <div className={style.divCarrossel}>
        <img className={style.imgCapa} src={Capa} alt="Capa do Carrossel"/>
      </div>
    </Slider>
  );
}

export default CarroselHome;
