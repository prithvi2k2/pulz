import dynamic from "next/dynamic";
import { LogoutButton } from "../components/LogoutButton";
import NavBar from "../components/NavBar";

const HankoProfile = dynamic(() => import("../components/HankoProfile"), {
  ssr: false,
});

export default function ProfilePage() {
  return (
    <div>
      <NavBar back />
      <HankoProfile />
      <LogoutButton />
    </div>
  );
}
