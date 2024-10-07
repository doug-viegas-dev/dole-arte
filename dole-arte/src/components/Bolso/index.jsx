import style from "./style.module.scss";
import card_19 from "../../assets/imgs/card_bolso_19.png";
import card_39 from "../../assets/imgs/card_bolso_39.png";
import card_59 from "../../assets/imgs/card_bolso_59.png";
import card_79 from "../../assets/imgs/card_bolso_79.png";
export const Bolso = () => {
  return (
    <>
      <div className={style.div_todos_bolsos}>
        <h2 className="tituloSeção">Para todos os bolsos</h2>
        <div className={style.div_cards}>
          <a href="">
            <img className={style.cardImg} src={card_19} />
          </a>
          <a href="">
            <img className={style.cardImg} src={card_39} />
          </a>
          <a href="">
            <img className={style.cardImg} src={card_59} />
          </a>
          <a href="">
            <img className={style.cardImg} src={card_79} />
          </a>
        </div>
      </div>
    </>
  );
};
