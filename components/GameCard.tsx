import Link from "next/link";
import Image from "next/image";
import { PlayIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartedIcon } from "@heroicons/react/24/solid";
import Router from "next/router";

// This component is based on HyperUI/Marketing/Card
export default function GameCard({ ...props }) {
  return (
    <div className="m-3 group relative block h-64 sm:h-80 lg:h-96 w-72">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          {/* <Image
            src="/games/menja/menja.png"
            // fill={true}
            height={763}
            width={480}
            alt=""
            className="object-top object-cover p-1"
          /> */}

          <h2 className="mt-4 text-xl font-medium sm:text-2xl">
            {props.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base">{props.synopsis}</p>
          <hr className="mt-4" />

          <p className="mt-2">
            by{" "}
            <Link target="_blank" href={props.author.link} className="link">
              {props.author.name}
            </Link>
          </p>
          <hr className="mt-4" />
          <Link
            className="mt-4 font-bold flex gap-1 text-lg nav-btn min-w-fit"
            href={`/games/${props.dir}`}
          >
            <PlayIcon className="h-11 w-11 self-center" />
            {/* <HeartIcon className="h-11 w-11 self-center"/>
            <HeartedIcon className="h-11 w-11 self-center"/> */}
          </Link>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">
            {props.title}
          </h3>

          <p className="mt-4 text-sm sm:text-base">{props.synopsis}</p>

          <hr className="mt-4" />

          <p className="mt-2">
            by{" "}
            <Link target="_blank" href={props.author.link} className="link">
              {props.author.name}
            </Link>
          </p>

          <hr className="mt-4" />

          <Link
            className="mt-4 font-bold flex gap-1 text-lg nav-btn min-w-max"
            href={`/games/${props.dir}`}
          >
            <PlayIcon className="h-11 w-11 self-center" />
            play!
          </Link>
        </div>
      </div>
    </div>
  );
}
