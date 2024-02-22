import dynamic from "next/dynamic";
import { LogoutButton } from "../components/LogoutButton";
import NavBar from "../components/NavBar";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const HankoProfile = dynamic(() => import("../components/HankoProfile"), {
  ssr: false,
});

export default function ProfilePage() {
  return (
    <div>
      <NavBar back />
      <h1 className="flex items-center justify-center font-semibold text-4xl underline">
        <Cog6ToothIcon className="h-10 w-10" />
        SETTINGS
        <Cog6ToothIcon className="h-10 w-10" />
      </h1>
      <div className="flex h-max flex-col items-center justify-center">
        <HankoProfile />
        <LogoutButton />
      </div>
    </div>
  );
}
