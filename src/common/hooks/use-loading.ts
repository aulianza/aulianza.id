import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, []);

  return isLoading;
};

export default useLoading;
