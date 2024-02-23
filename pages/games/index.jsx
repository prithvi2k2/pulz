import NavBar from "../../components/NavBar";
import GameCard from "../../components/GameCard";
import gameData from "../../games_metadata.json";

export default function Games() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap flex-1 items-center justify-center">
        {gameData.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
}
