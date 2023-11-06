import { getCookie } from 'cookies-next';
import { decodeJwt } from "jose";
import supabase from "../../supabase"

async function upsertRowIntoTable(table, data) {
  const { error } = await supabase.from(table).upsert(data);

  if (error) {
    throw error;
  }
}

export default async function handler(req, res) {
  const hanko = getCookie('hanko', {req});
  const {sub} = decodeJwt(hanko); // here, according to hanko Docs, sub === userID
  const data = { id: sub, ...req.body };
  await upsertRowIntoTable("users", data);
  res.status(200).json({ message: "Tag set successfully" });
}
