import telescopio from "../../assets/image/telescopio.jpg"
import "./article.css"
function Article (){
    return(

        <article id="article">
            <div className="img-content">
                <img src={telescopio} alt="" />
            </div>
            <div className="article-info">
                <h2>FORA DE ÓRBITA</h2>
                <h3>Defeito estrutural obriga aposentadoria do telescópio Hubble</h3>

                <p>O telescópio espacial Hubble, que desde 1990 revolucionou a astronomia com suas descobertas, 
                    será aposentado após um programa de observação mais reduzido, segundo informaram nesta terça-feira (4) 
                    responsáveis da Nasa. Um dos três giroscópios que controlam a 
                    direção para onde o telescópio aponta tornou-se instável nos últimos meses, levando a 
                    episódios de "modo seguro" intermitentes, o mais recente em 24 de maio.</p>
            </div>
        </article>


    );
}

export default Article