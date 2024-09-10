import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header/> 
      <div className="conteudo">
        <img src={background} className="background" alt="background-app"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button >Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/145286206?s=400&u=633f35ac9a1c8850c3e568fdc49a91ebed19a4f0&v=4" alt="imagem-perfil" className="profile"/>
            <div>
              <h3>NicolasKonishi</h3>
              <span>@NicolasKonishi</span>
              <p>Descricao</p>
            </div>
          </div>  
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
