import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

function Form() {
    return (
        <form className="p-4 border rounded shadow-sm bg-light">
            <h2 className="mb-4 text-center">Formulário</h2>

            {/* Nome */}
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input 
                    type="text" 
                    id="nome" 
                    className="form-control" 
                    placeholder="Digite seu nome"
                />
            </div>

            {/* Tópico */}
            <div className="mb-3">
                <label htmlFor="topico" className="form-label">Tópico</label>
                <input 
                    type="text" 
                    id="topico" 
                    className="form-control" 
                    placeholder="Digite o tópico"
                />
            </div>

            {/* Horário */}
            <div className="mb-3">
                <label htmlFor="horario" className="form-label">Horário</label>
                <input 
                    type="time" 
                    id="horario" 
                    className="form-control"
                />
            </div>

            {/* Descrição */}
            <div className="mb-3">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea 
                    id="descricao" 
                    name="descricao" 
                    className="form-control" 
                    rows="4" 
                    placeholder="Escreva uma descrição..."
                />
            </div>

            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary d-flex align-items-center">
                    <i className="bi bi-send-fill me-2"></i> Enviar
                </button>
                <button type="button" className="btn btn-secondary d-flex align-items-center">
                    <i className="bi bi-trash-fill me-2"></i> Limpar
                </button>
                <Link to="/" className="btn btn-success d-flex align-items-center">
                    <i className="bi bi-arrow-left me-2"></i> Voltar
                </Link>
            </div>
        </form>
    );
}

export default Form;
