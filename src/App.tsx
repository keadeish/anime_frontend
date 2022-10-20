import { AnimeCard } from "./components/AnimeCard";
import "./app.css";
function App(): JSX.Element {
  return (
    <>
      <h2 className="pageTitle">
        <b>K</b>eadeish's <b>A</b>nime <b>L</b>ist
      </h2>
      <AnimeCard />
    </>
  );
}

export default App;
