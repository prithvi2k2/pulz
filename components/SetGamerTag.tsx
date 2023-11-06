import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SetGamerTag() {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [tag, setTag] = useState<String>(null);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsDisabled(true);
    const data = {
      tag: tag,
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
    <div>
      Create your gamer tag - It will be used to represent you site-wide
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="foxy2plays"
          disabled={isDisabled}
          onChange={(e) => setTag(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
