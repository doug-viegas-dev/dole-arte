import style from "./style.module.scss";
import "../../styles/sliders.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardProduto } from "../CardProduto";
import imgElas from "../../assets/imgs/img_ofertas.jpg";

export const ParaEla = () => {
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
      <h2 className="tituloSeção">Para elas</h2>
      <div className={style.divElas}>
        <img className={style.imgElas} src={imgElas} alt="" />
        <div className="slider-aside">
          <Slider {...settings}>
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
          </Slider>
        </div>
      </div>
    </>
  );
};
