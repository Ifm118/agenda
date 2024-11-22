import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"


const post1 = {
    titulo:"SoulCode melhor editech gratuita.",
    autor:"Igor Froes",
    conteudo:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem:"https://media.istockphoto.com/id/1452752338/pt/foto/abstract-light-effect.webp?a=1&b=1&s=612x612&w=0&k=20&c=3icdx5bSy0dWIyKf0TsOXeC5mvGlIQ5vkS1Wbs8xL4w="
  }
  

  const post2 = {
    titulo: "Titulo Post 2.",
    autor: "José Almir",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const post3 = {
    titulo: "Titulo Post 3.",
    autor: "João Silva",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const post4 = {
    titulo: "Titulo Post 4.",
    autor: "Maria de Souza",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1664566484452-03b6f3817fdc?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const post5 = {
    titulo: "Titulo Post 5.",
    autor: "Fernando Aguiar",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1731570225640-7ddad4231679?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
                const posts = [
                    post1,
                    post2,
                    post3,
                    post4,
                    post5
                ]

function Home(){
    return(
        <div>
            <Header />
            <h1>Home</h1>
            {posts.map(post => {
                return <Post key= {post.titulo}{...post} />

                
            })}
              
             
            <Footer />
        </div>
    )
}
export default Home;