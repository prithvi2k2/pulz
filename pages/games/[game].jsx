import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import fs from "fs";
import path from "path";

function HtmlEmbed({ htmlContent }) {
  const router = useRouter();
  const { game } = router.query;
  const [showHtml, setShowHtml] = useState(false);

  useEffect(() => {
    // Inject Game Styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/games/${game}/styles.css`;
    document.head.appendChild(link);
    
    // Inject Game Script
    const script = document.createElement("script");
    script.src = `/games/${game}/script.js`;
    script.onload = () => {
      // Set renderHtml to true once script has loaded
      setShowHtml(true);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={showHtml ? "" : "hidden"}
      />
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
