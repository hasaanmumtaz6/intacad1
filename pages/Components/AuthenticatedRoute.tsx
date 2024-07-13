import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AnimatedHeading from "./AnimatedHeading";
import Loader from "./Loader";

const AuthenticatedRoute = ({ children }: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; 

    if (!session) {
      router.push("/"); 
    }
  }, [session, status, router]);

  if (status === "loading")
    return (
      <div className="flex items-center flex-col justify-center min-h-screen">
        <Loader />
        {/* <AnimatedHeading heading="LOADING...." fontSize="text-2xl font-bold" /> */}
      </div>
    );

  return <>{children}</>;
};

export default AuthenticatedRoute;
