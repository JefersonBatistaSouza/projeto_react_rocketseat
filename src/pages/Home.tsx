import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'
import imgButtonGoolgle from '../assets/images/google-icon.svg'

import '../assets/css/style.css'

export function Home() {
    return (
        <div className="container">
            <aside>
                <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
                <h1>Toda pergunta tem uma resposta!</h1>
                <p>Aprenda a compotilhar conhecimento com outras pessoas.</p>
            </aside>
            <main>
                <img src={logo} alt="Logo da aplicação" />
                <button>
                    <img src={imgButtonGoolgle} alt="Logo botão google" />
                    Entra na sala com o Google
                </button>
                <form method="post">
                    <input
                        type="email"
                        placeholder='Digite seu e-mail' />
                    <button type="submit">Entrar na sala</button>
                </form>
            </main>
        </div>

    )
}