import { AnimeCard } from "./components/AnimeCard";
import "./app.css";
function App(): JSX.Element {
  return (
    <div className="app">
      <h1 className="pageTitle">
        ⭐<b>K</b>eadeish's <b>A</b>nime <b>L</b>ist⭐
      </h1>
      <AnimeCard />
    </div>
  );
}

export default App;
