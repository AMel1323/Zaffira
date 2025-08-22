import estilos from './Produtos.module.css';

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Saltos</h2>
                <p>
                    Descubra a arte da elegância com nossos saltos de luxo. Cada par é uma obra-prima de sofisticação e conforto, projetada para elevar seu estilo a novas alturas
                </p>
                <p>
                    Autentidade garantida | As Melhores Marcas do mundo | Entrega rapido e seguro
                </p>


                <div className={estilos.sapato_img}>
                    <div className={estilos.card_sapato}>
                        <span className={estilos.selo}>Mais Vendido</span>
                        <h3>Scarpin Vermelho</h3>
                        <picture>
                            <img src='./scarpin-vermelho.png' alt='scarpin-vermelho' />
                        </picture>

                        <p className={estilos.preco}>R$2.300,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_sapato}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Scarpin Espada</h3>
                        <picture>
                            <img src='./scarpin-vermelho-espada.png' alt='scarpin-vermelho-espada' />
                        </picture>

                        <p className={estilos.preco}>R$7.000,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_sapato}>
                        <span className={estilos.selo}>Destaque</span>
                        <h3>Scarpin laço</h3>
                        <picture>
                            <img src='./salto-laco.png' alt='salto-laco' />
                        </picture>

                        <p className={estilos.preco}>R$3.000,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                     <div className={estilos.card_sapato}>
                        <span className={estilos.seloNovo}>Novo Destaque</span>
                        <h3>Salto SYL - Saint Laurent</h3>
                        <picture>
                            <img src='./syl-salto.png' alt='syl-salto' />
                        </picture>

                        <p className={estilos.preco}>R$1.000,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                </div>




               

            </div>
        </section>

    )
}