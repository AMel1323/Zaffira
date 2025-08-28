import estilos from './contato.module.css'

export default function Contato() {
    return (
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2>Fale Conosco</h2>
            </div>
            <p>
                Não perca tempo, Venha conhecer uma de nossas lojas ou entre em contato através das nossas redes sociais ou da central de atendimento. 
            </p>
            <div className={estilos.central_redes}>
                <div className={estilos.bloco_contato}>
                    <h4>Contato</h4>
                    <ul>
                        <li>
                            <picture>
                                <img src='./localizacao.png' alt='localização'/>
                            </picture> Caraguatatuba - SP
                        </li>

                        <li>
                            <picture>
                                <img src='./telefone.png' alt='telefone'/>
                            </picture> (12) 99999-9999
                        
                        </li>

                        <li>
                            <picture>
                                <img src='./email.png' alt='email'/>
                            </picture>contato@zaffira.com.br
                        </li>
                    </ul>
                </div>

                <div className={estilos.bloco_contato}>
                    <h4>Redes Sociais</h4>
                    <ul>
                        <li>
                            <picture>
                                <img src='./facebook.png' alt='Facebook'/>
                            </picture>@zaffira
                        </li>
                        <li>
                            <picture>
                                <img src='./instagram.png' alt='Instagram'/>
                            </picture>@zaffira
                        </li>
                        <li>
                            <picture>
                                <img src='./tiktok.png' alt='TikTok'/>@zaffira
                            </picture>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}