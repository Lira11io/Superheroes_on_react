import "./style/App.css";
import Superheroes from "./components/Sheroes";
import sheroes from "./data/sheroes.json";

function App() {
  return (
    <section className="App">
      <h1 className="App-title">Отряд супергероев</h1>
      <div className="App-container">
        {sheroes.map((shero) => (
          <Superheroes
            name={shero.name}
            universe={shero.universe}
            alterego={shero.alterego}
            occupation={shero.occupation}
            friends={shero.friends}
            superpowers={shero.superpowers}
            url={shero.url}
            info={shero.info}
            key={shero.name}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
