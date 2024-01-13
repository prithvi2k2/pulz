import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function Games() {
  return (
    <>
      <NavBar />
      <div>
        !!! Site under development !!!
        <br />
        You can still try the BETA game{" "}
        <Link href="/games/menja" className="underline">
          menja
        </Link>{" "}
        - Expect Bugs!
        <hr />
        <Link href="/profile" className="underline">
          {" "}
          Account Settings{" "}
        </Link>
      </div>
    </>
  );
}
