import './App.css';
import ClassBox from './ClassBox';

function App() {
  const title = 'Titulo';

  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>

        <ClassBox titulo='Cliente' url='https://localhost:7064/api/Cliente/Consultar' />
        <ClassBox titulo='Filme' url='https://localhost:7064/api/Filme/Consultar' />
        <ClassBox titulo='Locação' url='https://localhost:7064/api/Locacao/Consultar' />

        <h1>Relatórios</h1>
        
        <ClassBox titulo='Clientes devedores' url='https://localhost:7064/api/Relatorio/ClientesDevendo' />
        <ClassBox titulo='Filmes não alugados' url='https://localhost:7064/api/Relatorio/FilmesNaoAlugados' />
        <ClassBox titulo='Top 5 filmes do ano' url='https://localhost:7064/api/Relatorio/Top5Filmes' />
        <ClassBox titulo='Top 3 filmes menos alugados na semana' url='https://localhost:7064/api/Relatorio/Piores3Filmes' />
        <ClassBox titulo='Segundo cliente que mais aluga' url='https://localhost:7064/api/Relatorio/Top2Cliente' />
      </div>
    </div>
  );
}

export default App;
