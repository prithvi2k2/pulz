import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import fs from "fs";
import path from "path";
import NavBar from "../../components/NavBar";

function HtmlEmbed({ html, css, js }) {
  const router = useRouter();
  const { game } = router.query;
  const [showHtml, setShowHtml] = useState(false);
  const [gameUrl, setGameUrl] = useState("");


  const getGeneratedPageURL = ({ html, css, js, origin }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, "text/css");
    const jsURL = getBlobURL(js, "text/javascript");

    const source = `
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${`${origin}/games/${game}/styles.css`}" />`}
        ${js && `<script src="${`${origin}/games/${game}/script.js`}" defer></script>`}
      </head>
      <body>
        ${html || ""}
      </body>
    </html>
    `;

    return source;
  };

  // async function fetchData(rawUrl) {
  //   return await fetch(rawUrl)
  //   .then((raw) => raw.text())
  //   .then((text) => {return text})
  //   .catch((err) => console.error(err));
  // };

  // fetchData(`/games/${game}/styles.css`).then((styles) => console.log(styles));

  // Game is loaded in a container div, with help of useEffect
  // let urlL;
  useEffect(() => {
    const origin = window.location.origin;
    console.log(origin);
    setGameUrl(getGeneratedPageURL({ html, css, js, origin }));
    // const url =  getGeneratedPageURL({ html, css, js });;
    // urlL = url;
    // console.log(html, css, js);
    // url = getGeneratedPageURL({ html, css, js });
    // const gameContainer = document.getElementById('pulz-game-container');

    // Inject Game Styles
    // const link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href = `/games/${game}/styles.css`;
    // gameContainer.appendChild(link);

    // // Inject Game Script
    // const script = document.createElement("script");
    // script.src = `/games/${game}/script.js`;
    // script.onload = () => {
    //   // Set renderHtml to true once script has loaded
    setShowHtml(true);
    // };
    // gameContainer.appendChild(script);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <NavBar back />
      {/* <div
        id="pulz-game-container"
        // dangerouslySetInnerHTML={{ __html: htmlContent }}
        src={htmlContent}
        className={showHtml ? "h-64 w-28" : "hidden"}
      ></div> */}
      {/* <iframe src={url} className={showHtml ? "h-64 w-28" : "hidden"}></iframe> */}
      {showHtml ? <iframe srcDoc={gameUrl} className="flex-1"></iframe> : "Loading game..."}
    </div>
  );
}

export async function getStaticProps(context) {
  const { game } = context.params;
  const filePath = (type) =>
    path.join(process.cwd(), "public", `games/${game}/${type}`);
  const html = fs.readFileSync(filePath("index.html"), "utf-8");
  const css = fs.readFileSync(filePath("styles.css"), "utf-8");
  const js = fs.readFileSync(filePath("script.js"), "utf-8");

  return {
    props: {
      html,
      css,
      js,
    },
  };
}

export default HtmlEmbed;

export async function getStaticPaths() {
  return {
    paths: ["/games/menja"],
    fallback: true,
  };
}
