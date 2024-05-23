/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import StreamerCard from '../../components/StreamerCard';
import styles from './About.module.css';

function About() {
  const { data } = useSelector((state: any) => state.userStreams);
  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.cardContainer }>
        <StreamerCard streamer={ data } />
      </div>
      <div className={ styles.contentContainer }>
        <div className={ styles.imgSide }>
          <p>a</p>
          <img src="https://assets.gamearena.gg/wp-content/uploads/2023/04/30003948/A-Tribo-Gaules.jpg" alt="Tribo Img" />
        </div>
        <div className={ styles.textSide }>
          <h1>E sem saber que dava, fizemos o impossível</h1>
          <p>
            O que começou em um quarto de uma pequena kitnet e hoje é a maior comunidade
            de games do MUNDO. A Tribo nasceu em 2015,
            quando Alexandre &quot;Gaules&quot; Borba
            decidiu se dedicar exclusivamente ao seu sonho de ser um streamer de games.
            A Tribo é uma comunidade que tem como objetivo principal unir pessoas através
            de games e entretenimento. A Tribo é um lugar onde todos são bem-vindos e
            podem se sentir em casa.
          </p>
        </div>
      </div>
      <div className={ styles.contentContainer }>
        <div className={ styles.textSide }>
          <p>
            Durante essa jornada, assim como todas as outras, houveram altos e baixos,
            mas nunca desistimos. A Tribo é feita de pessoas que acreditam que juntas
            podem fazer a diferença. É assim que um gaulês nasce, cresce e se encontra!
            Através da resiliência, da paixão e do amor pelo que fazemos, a Tribo se
            tornou o que é hoje. E é com muito orgulho que olhamos para trás e vemos
            tudo o que conquistamos. E é com muito orgulho que olhamos para frente e
            sabemos que ainda temos muito a conquistar. O impossível não existe para
            um gaulês!
          </p>
        </div>
        <div className={ styles.imgSide }>
          <img src="https://cdn.ome.lt/GxiyXdLREFxLmKGHppRR9VFttDU=/1200x630/smart/extras/conteudos/tribonera.jpg" alt="La Triboneira Fan Art" />
        </div>
      </div>
      <div className={ styles.mvvContainer }>
        <div className={ styles.mission }>
          <div className={ styles.textingBox }>
            <h3>Missão</h3>
          </div>
          <div className={ styles.contentBox }>
            <p>
              Promover uma comunidade inclusiva e solidária,
              proporcionando entretenimento de alta qualidade
              e conteúdo educacional no mundo dos jogos eletrônicos e eSports,
              enquanto inspiramos, apoiamos e fazemos a diferença na vida das pessoas.
            </p>
          </div>
        </div>
        <div className={ styles.vision }>
          <div className={ styles.textingBox }>
            <h3>Visão</h3>
          </div>
          <div className={ styles.contentBox }>
            <p>
              Ser reconhecida como a principal comunidade de streaming e eSports no Mundo,
              destacando-se pela influência positiva, inovação no conteúdo e compromisso
              com a responsabilidade social, contribuindo para o crescimento
              sustentável do setor.
            </p>
          </div>
        </div>
        <div className={ styles.values }>
          <div className={ styles.textingBox }>
            <h3>Valores</h3>
          </div>
          <div className={ styles.contentBox }>
            <ul>
              <li>Paixão: A gente joga com o coração e compartilha essa vibe com todo mundo.</li>
              <li>Comunidade: A Tribo se apoia, se ajuda e cresce junto, como uma grande família.</li>
              <li>Inclusividade: A Tribo é para todos. Um ambiente onde todos são bem-vindos e respeitados, independentemente de suas origens ou interesses.</li>
              <li>Responsabilidade Social: Usar nossa força pra fazer o bem e ajudar quem tá precisando.</li>
              <li>Integridade: Manter um padrão elevado de honestidade e transparência em todas as nossas interações.</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className={ styles.partnerContainer }>
          <p>Parcerias de Peso:</p>
          <div className={ styles.partnersLayout }>
            <img src="https://img.redbull.com/redbullcom/static/redbullcom-logo_double-with-text.svg" alt="Redbull Logo" />
            <img src="https://static.kabum.com.br/conteudo/icons/logo.svg" alt="KaBum Logo" />
            <img src="https://hellagood.marketing/wp-content/uploads/2021/04/ggdrop.png" alt="GGdrop Logo" />
            <img src="https://www.heineken.com/media-la/1svj0bvv/heineken-logo.svg" alt="Heineken Logo" className={ styles.heineken } />
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="Itau Logo" className={ styles.itau } />
            <img src="https://image.pitchbook.com/54KlWtiX5dfbuZ5vgNhJimMVvxx1605385468948_200x200" alt="GamersClub Logo" />
          </div>
        </div>
      </div>
      <div className={ styles.documentary }>
        <img src="https://cdn.ome.lt/k2MdGRaS4E7tdU2qJ9U73nXHHo8=/970x360/smart/uploads/conteudo/fotos/gaules-documentario-tribo-ccxp23_z1wNwrZ.png" alt="A tribo, documentário" />
        <div className={ styles.textContent }>
          <p>
            E quando sai o filme contando tudo isso? Já saiu. O documentário já está disponível
            <a
              href="https://www.youtube.com/watch?v=0YI-e1U0BG8&ab_channel=Gaules"
              target="_blank"
              rel="noreferrer"
            >
              <p>Neste Link.</p>
            </a>
            Documentário produzido pela equipe de Alexandre Borba e que conta como o sonho de realizar um evento de Counter-Strike
            em território nacional se tornou realidade. Com depoimentos de integrantes e personalidades da tribo e da participação dos
            principais nomes do cenário nacional de CS. O documentário é uma verdadeira viagem no tempo e um registro histórico do que
            foi a Tribo e o que ela representa para o cenário de eSports.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
