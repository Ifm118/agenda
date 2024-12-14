import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-4 shadow-lg">
            <div className="container text-center">
                {/* Texto do Footer */}
                <p className="mb-2">© 2024 Agenda de Agendamentos. Todos os direitos reservados.</p>

                {/* Links do Footer */}
                <div className="d-flex justify-content-center">
                    <a 
                        href="https://github.com/Ifm118/agenda" 
                        className="btn btn-outline-light btn-sm me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-github me-1"></i> GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/igor-fr%C3%B3es-moreira-72a94626a/" 
                        className="btn btn-outline-light btn-sm me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin me-1"></i> LinkedIn
                    </a>
                    <a 
                        href="/contato" 
                        className="btn btn-outline-light btn-sm"
                    >
                        <i className="bi bi-envelope-fill me-1"></i> Contato
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
