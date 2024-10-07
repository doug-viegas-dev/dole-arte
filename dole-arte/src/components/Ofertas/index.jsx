import style from "./style.module.scss";
import "../../styles/sliders.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardProduto } from "../CardProduto";
import imgOfertas from "../../assets/imgs/img_ofertas.jpg";

export const Ofertas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <button />,
    nextArrow: <button />,
  };
  return (
    <>
      <h2 className="tituloSeção">Nossas Ofertas Especiais para você!</h2>
      <div className={style.divOfertas}>
        <div className="slider-aside">
          <Slider {...settings}>
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
          </Slider>
        </div>
        <img className={style.imgOfertas} src={imgOfertas} alt="" />
      </div>
    </>
  );
};
