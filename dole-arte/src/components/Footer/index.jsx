import style from "./style.module.scss";
import formaPagamento from "../../assets/imgs/formas_pagamento.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className={style.divSuperior}>
        <nav className={style.navCategorias}>
          <h5 className="tituloFooter">Menu</h5>
          <ul className={style.listaMenu}>
            <li className={style.liCategorias}>Promoções</li>
            <li className={style.liCategorias}>Categorias</li>
            <li className={style.liCategorias}>Coleções</li>
            <li className={style.liCategorias}>Pro Seu Bolso</li>
            <li className={style.liCategorias}>Queridinhos</li>
          </ul>
        </nav>
        <div className={style.divContato}>
          <h5 className="tituloFooter">Fale Conosco:</h5>
            <a
              className={style.iconeSocial}
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
              <p className="heading one">(53)99942-4900</p>
            </a>
            <a
              className={style.iconeSocial}
              href="email"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-mail"
            >
              <FaEnvelope />
              <p className="heading one">(53)99942-4900</p>
            </a>
        </div>
        <div className={style.divSocial}>
          <h5 className="tituloFooter">Nossas Redes Sociais:</h5>
          <a
            className={style.iconeSocial}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
            <p className="heading one">/dolearte</p>
          </a>
          <a
            className={style.iconeSocial}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
            <p className="heading one">@dole.arte</p>
          </a>
        </div>
      </div>
      <div className={style.divInferior}>
          <h5>Formas de Pagamento</h5>
          <img className={style.imgPagamento} src={formaPagamento} />
        </div>
    </footer>
  );
};
