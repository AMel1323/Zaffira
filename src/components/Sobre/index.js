import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Sobre Nós</h2>
                <p>Somos uma empresa dedicada a oferecer os melhores produtos e serviços aos nossos clientes. Com anos de experiência no mercado, nossa missão é garantir a satisfação e a confiança de quem escolhe a nossa marca.</p>


                <div className={estilos.elementos_sobre}>
                    <picture>
                        <img src='faxada1.jpg' alt="Nossa loja" />
                    </picture>



                    <div className={estilos.sobre_elementos}>
                        <h4> Nossa Filiais</h4>
                        <p>Hoje tmemos cinco Filiais pelo Brasil</p>
                    </div>

                    <div className={estilos.sobre_elementos}>
                        <h4>Atendimento Individual</h4>
                        <p>Nossa equipe é treinada para te atender.</p>
                    </div>

                     <picture>
                            <img src='faxada2.jpg' alt="Atendimento" />
                    </picture>
                </div>
            </div>
        </section>
    )
}