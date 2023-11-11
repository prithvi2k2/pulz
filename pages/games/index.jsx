import Link from "next/link";

export default function Games() {
  return (
    <div>
      !!! Site under development !!!
      <br />
      You can still try the BETA game{" "}
      <Link href="/games/menja" className="underline">
        menja
      </Link>{" "}
      - Expect Bugs!
      <hr />
      <Link href="/profile" className="underline"> Account Settings </Link>
    </div>
  );
}
