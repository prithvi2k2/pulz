import { getCookie } from "cookies-next";
import { decodeJwt } from "jose";
import supabase from "../../supabase";
import path from "path";

async function upsertHiScore(data) {
  const { error } = await supabase.from("leaderboards").upsert(data);

  if (error) {
    throw error;
  }
}

export default async function setHiScore(req, res) {
  const hanko = getCookie("hanko", { req });
  const { sub } = decodeJwt(hanko); // here, according to hanko Docs, sub === userID
  const { score } = JSON.parse(req.body);
  const url = req.headers.referer;
  const game = path.basename(url);
  const data = { game: game, id: sub, score: score };
  await upsertHiScore(data);
  res.status(200).json({ message: "Upserted High Score" });
}
