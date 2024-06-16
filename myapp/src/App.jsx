
import Article from "./components/Article/Article";
import Navbar from "./components/Navbar/navBar";
import "./styles/App.css"

import planetas from "./assets/image/planetas.jpg"
import exoplaneta from "./assets/image/exoplaneta.jpg"
import telescopio from "./assets/image/telescopio.jpg"
import Counter from "./components/Counter/Count";


function App() {
  return (
   <>
    <Navbar />
    
    <section id="articles">
      <Article tumb={telescopio} tittle="FORA DE ÓRBITA"  notice="Defeito estrutural obriga aposentadoria do telescópio Hubble " description ="O telescópio espacial Hubble, que desde 1990 revolucionou a astronomia com suas descobertas, será aposentado após um programa de observação mais reduzido, segundo informaram nesta terça-feira (4) responsáveis da Nasa.
      Um dos três giroscópios que controlam a direção para onde o telescópio aponta tornou-se instável nos últimos meses, levando a episódios de modo seguro intermitentes, o mais recente em 24 de maio."/>
      
      <Article  tumb={planetas} tittle ="ATÉ QUARTA-FEIRA"  notice ="Fila de planetas pode ser observada a olho nu nesta semana " description ="Um fenômeno astronômico está ocorrendo desde o início do mês de junho. Um tipo de alinhamento entre seis planetas do sistema solar podem ser observado da Terra e o último dia para avistá-lo é nesta quarta-feira (5). 
      Saturno, Marte, Netuno, Urano, Mercúrio e Júpiter formam uma espécie de linha diagonal no céu e dois desses podem ser vistos a olho nu. Tudo depende, é claro, de condições climáticas favoráveis ao local de onde se observará o fenômeno. O alinhamento pode ser visto de todas as regiões do Brasil." />
      
      <Article  tumb={exoplaneta} tittle ="EXOPLANETA" notice = "Cientistas descobrem planeta com temperatura similar à da Terra e com potencial para ser habitado"  description ="Existe vida fora do planeta Terra? A resposta para esta pergunta, feita por cientistas há milhares de anos, pode estar mais próxima após cientistas descobrirem um planeta com condições similares ao nosso."/>


    </section>

    <Counter />

   </>

  );
}

export default App;
