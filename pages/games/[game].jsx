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

  const getSourceCode = ({ html, css, js, origin }) => {
    const source = `
    <html>
      <head>
        ${
          css &&
          `<link rel="stylesheet" type="text/css" href="${`${origin}/games/${game}/styles.css`}" />`
        }
        ${
          js &&
          `<script src="${`${origin}/games/${game}/script.js`}" defer></script>`
        }
      </head>
      <body>
        ${html || ""}
      </body>
    </html>
    `;

    return source;
  };

  // Game is loaded in an Iframe, with help of useEffect
  useEffect(() => {
    const origin = window.location.origin;
    setGameUrl(getSourceCode({ html, css, js, origin }));
    setShowHtml(true);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <NavBar back />
      {showHtml ? (
        <iframe srcDoc={gameUrl} className="flex-1">
          Your browser does not fully support IFrames!!
        </iframe>
      ) : (
        "Loading game..."
      )}
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
