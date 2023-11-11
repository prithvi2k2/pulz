import { getCookie } from "cookies-next";
import { decodeJwt } from "jose";
import supabase from "../../supabase";
import path from "path";

async function getHiScoreIfExists(game, id) {
  const query = supabase
    .from("leaderboards")
    .select("score")
    .eq("game", game)
    .eq("id", id);

  const { data:scoreObj, error } = await query.single();

  if (error) {
    throw error;
  }

  console.log(scoreObj);
  if (!scoreObj) {
    return 0;
  }

  return scoreObj.score;
}

export default async function getHiScore(req, res) {
  const hanko = getCookie("hanko", { req });
  const { sub } = decodeJwt(hanko); // here, according to hanko Docs, sub === userID
  const url = req.headers.referer;
  const game = path.basename(url);
  const score = await getHiScoreIfExists(game, sub);
  //   console.log(score);
  res.status(200).json({ score: score });
}
