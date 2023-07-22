import "./App.css";

function App() {
  const user = (
    <div>
      <User />
      <User />
      <User />
    </div>
  );
  return <div className="App">{user}</div>;
}

const User = () => {
  return (
    <div>
      <h1>Pedro</h1>
      <h2>22</h2>
      <h3>pedro@pedro.com</h3>
    </div>
  );
};

export default App;
