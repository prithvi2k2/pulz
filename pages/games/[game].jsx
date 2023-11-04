import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import fs from "fs";
import path from "path";

function HtmlEmbed({ htmlContent }) {
  const router = useRouter();
  const { game } = router.query;

  useEffect(() => {
    // Game Styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/games/${game}/styles.css`;
    document.head.appendChild(link);
    // Game Script
    const script = document.createElement("script");
    script.src = `/games/${game}/script.js`;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { game } = context.params;
  const filePath = path.join(
    process.cwd(),
    "public",
    `games/${game}/index.html`
  );
  const htmlContent = fs.readFileSync(filePath, "utf-8");
  return {
    props: {
      htmlContent,
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
