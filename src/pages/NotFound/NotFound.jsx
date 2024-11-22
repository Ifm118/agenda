import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


function NotFound(){
    return(
        <div>
            <Header/>
            <h1>Pag n encontrada</h1>
            <Link to ="/">Voltar pra Home</Link>
            <Footer/>
        </div>
    )
}
export default NotFound;