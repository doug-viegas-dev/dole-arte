import style from "./style.module.scss";
import Logo from "../../assets/imgs/img_header.png";
import { FaFacebook, FaInstagram, FaSearch, FaWhatsapp } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <header>
        <div className={style.divSuperior}>
          <img id={style.logoHeader} src={Logo} alt="" />
          <form className={style.formBusca} action="/search" method="GET">
            <input
              className={style.inputBusca}
              type="text"
              name="query"
              placeholder="Encontre algo especial..."
              aria-label="Campo de busca"
            />
            <button className={style.buttonBusca} type="submit">
                <FaSearch/>
              Buscar
            </button>
          </form>
          <div className={style.divSocial}>
            <a
              className={style.iconeSocial}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={style.iconeSocial}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={style.iconeSocial}
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className={style.divInferior}>
          <nav className={style.navCategorias}>
            <ul className={style.listaCategorias}>
              <li className={style.liCategorias}>PROMOÇÕES</li>
              <li className={style.liCategorias}>CATEGORIAS</li>
              <li className={style.liCategorias}>COLEÇÕES</li>
              <li className={style.liCategorias}>PRO SEU BOLSO</li>
              <li className={style.liCategorias}>QUERIDINHOS</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
