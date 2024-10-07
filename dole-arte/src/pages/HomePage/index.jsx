import { Bolso } from "../../components/Bolso";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { Ofertas } from "../../components/Ofertas";
import { Infantil } from "../../components/Infantil";
import { CarroselHome } from "../../components/CarrosselHome";
import { ParaEla } from "../../components/ParaEla";
import { ParaEle } from "../../components/ParaEle";

export const HomePage = () => {
    return (
      <>
              < Header/>
              <main>
                <CarroselHome/>
                <Bolso/>
                <Ofertas/>
                <Infantil/>
                <ParaEla/>
                <ParaEle/>
              </main>
              <Footer/>
      </>
    );
  };