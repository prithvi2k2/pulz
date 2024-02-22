import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export function LogoutButton() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    setLoggingOut(true);
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.reload();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={logout}
      className="btn outline-red-600 outline outline-2 hover:outline-4"
    >
      {loggingOut ? (
        <span className="animate-spin inline-block">😭</span>
      ) : (
        <span>
          <strong>LOGOUT</strong>
        </span>
      )}
    </button>
  );
}
