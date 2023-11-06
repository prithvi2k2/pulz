import dynamic from "next/dynamic";
import { LogoutButton } from "../components/LogoutButton";

const HankoProfile = dynamic(() => import("../components/HankoProfile"), {
  ssr: false,
});

export default function ProfilePage() {
  return (
    <div>
      <HankoProfile />
      <LogoutButton />
    </div>
  );
}
