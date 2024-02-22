import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SetGamerTag() {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [tag, setTag] = useState<String>(null);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const TAG = tag.trim();
    if(!TAG) return; // No empty tags allowed
    setIsDisabled(true);
    const data = {
      tag: TAG,
    };
    axios
      .post("/api/set-pulz-tag", data)
      .then((response) => {
        console.log(response);
        router.push("/games");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-10 h-screen">
      <h1 className="font-mono font-extrabold text-3xl">Set your PULZ Tag</h1>
      Create your gamer tag - It will be used to represent you site-wide.
      <br />
      It does not need to be unique XD so select a name you like the most!
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
      >
        <input
          type="text"
          name="name"
          placeholder="arch-nemesis"
          disabled={isDisabled}
          onChange={(e) => setTag(e.target.value)}
          className="btn min-w-min outline-double"
          required
        />
        <button
          type="submit"
          className="btn 
        bg-gradient-to-r from-green-400 to-blue-500 
        hover:from-pink-500 hover:to-yellow-500
        w-28 font-semibold text-lg"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
