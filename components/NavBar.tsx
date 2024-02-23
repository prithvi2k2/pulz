import {
  HomeIcon,
  ArrowUturnLeftIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Router from "next/router";

export default function NavBar({ back }) {
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-8 p-9">
        <div onClick={() => Router.push("/games")}>
          {back ? (
            <ArrowUturnLeftIcon title="Return" className="nav-btn" />
          ) : (
            <HomeIcon title="Home" className="nav-btn cursor-default" />
          )}
        </div>

        <div
          className="nav-btn w-max font-mono font-extrabold text-2xl select-none cursor-default"
          onClick={() => Router.push("/games")}
        >
          <span className="max-sm:hidden">⚡ P U L Z ⚡</span>
          <span className="sm:hidden">⚡PULZ⚡</span>
        </div>
        <div className="flex gap-10">
          <div onClick={() => Router.push("/profile")}>
            <Cog6ToothIcon title="Settings" className="nav-btn" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
