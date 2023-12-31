import { useEffect } from "react";

export const useIsLargerScreen = () => {

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            document.body.style.pointerEvents = "auto";
            console.log("pointer events auto")
        }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

};
