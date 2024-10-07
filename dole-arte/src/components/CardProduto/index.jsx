import style from "./style.module.scss";
import exemploProduto from "../../assets/imgs/exemplo_produto.jpg"
export const CardProduto = () => {
    return (
        <div className={style.cardProduto}>
            <img className={style.imgCard} src={exemploProduto}/>
            <div className={style.divInfo}>
                <h6 className="descrição">Descrição do Produto</h6>
                <p className="price">R$99,99</p>
                <p className="footcard">Ou em 1x de R$99,99 sem juros</p>
            </div>
            <button className={style.btCardProduto}>Comprar Agora</button>
        </div>
    )
}