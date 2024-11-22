import { useState } from "react";

function Form(){

    const [nome, setNome] = useState("")

    function enviarFormulario(){
        window.alert("Formulário Enviado")
    }

    function lidarMudancaNome(event){
        const valor = event.target.value
        setNome(valor)

    }
    return(
        <form style={{padding:"20px"}} >
            <p>{nome}</p>

            <label htmlFor="nome">Nome</label> <br />
            <input type="text" id="nome" onChange={lidarMudancaNome}/><br />

            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email"  /> <br />

            <label htmlFor="mensagem">Mensagem</label> <br />
            <input type="text" id="mensagem" />


            <button type="button" onClick={enviarFormulario}   >Enviar</button>
        </form>

    )
}

export default Form;