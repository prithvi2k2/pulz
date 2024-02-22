import dynamic from "next/dynamic";

const HankoAuth = dynamic(() => import("../components/HankoAuth"), {
  ssr: false,
});

export default function LoginPage() {
  return (
    <div className="h-screen min-w-full flex items-center justify-center">
      <HankoAuth />
    </div>
  );
}
