import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
    const [agendamentos, setAgendamentos] = useState([]); // Estado para armazenar os agendamentos
    const [loading, setLoading] = useState(true); // Estado para indicar carregamento

    // Função para buscar agendamentos do back-end
    useEffect(() => {
        const fetchAgendamentos = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/agendamentos"); // Endpoint da API
                const data = await response.json();
                setAgendamentos(data); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error("Erro ao buscar agendamentos:", error);
            } finally {
                setLoading(false); // Finaliza o estado de carregamento
            }
        };

        fetchAgendamentos();
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header */}
            <Header />

            {/* Conteúdo Principal */}
            <main className="flex-grow-1 container py-5">
                <h1 className="text-center mb-4">Listagem de Agendamentos</h1>

                {/* Indicador de Carregamento */}
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Verificação de agendamentos */}
                        {agendamentos.length === 0 ? (
                            <p className="text-center">Nenhum agendamento encontrado.</p>
                        ) : (
                            <table className="table table-striped table-bordered">
                                <thead className="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>Tópico</th>
                                        <th>Horário</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {agendamentos.map((agenda, index) => (
                                        <tr key={agenda.id}>
                                            <td>{index + 1}</td>
                                            <td>{agenda.nome}</td>
                                            <td>{agenda.topico}</td>
                                            <td>{agenda.horario}</td>
                                            <td>{agenda.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
