import dynamic from "next/dynamic";

const HankoAuth = dynamic(() => import("../components/HankoAuth"), {
  ssr: false,
});

export default function LoginPage() {
  return <HankoAuth />;
}
