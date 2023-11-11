import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { register, Hanko } from "@teamhanko/hanko-elements";
import supabase from "../supabase";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();
  // const [nxtPage, setNxtPage] = useState<Url>("/profile");

  async function checkUserExistence(userId) {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", userId);

    if (error) {
      throw error;
    }

    return data.length > 0;
  }

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) => {
      setHanko(new Hanko(hankoApi));
    });
  }, []);

  const redirectAfterLogin = useCallback(
    (url) => {
      // successfully logged in, redirect to a page in your application
      router.replace(url);
    },
    [router]
  );

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(async () => {
        // Add user to supabase(if new) with a user-set gamer tag
        const { id } = await hanko.user.getCurrent();
        const userExists = await checkUserExistence(id);
        let url = "/games";
        if (!userExists) url = "/set-pulz-tag";
        redirectAfterLogin(url);
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log(error);
    });
  }, []);

  return <hanko-auth />;
}
