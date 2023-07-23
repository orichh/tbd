// https://github.com/uidotdev/usehooks/blob/main/index.js#L121

import { useCallback, useLayoutEffect, useState } from "react";

type UseCopyToClipboardState = {
  error: Error | null;
  text: string | null;
};
export function useCopyToClipboard() {
  const [state, setState] = useState<UseCopyToClipboardState>({
    error: null,
    text: null
  });

  const copyToClipboard = useCallback(async (value: any) => {
    if (!navigator?.clipboard) {
      return setState({
        error: new Error("Clipboard not supported"),
        text: null
      });
    }

    const handleSuccess = () => {
      setState({
        error: null,
        text: value
      });
    };

    const handleFailure = (e: any) => {
      setState({
        error: e,
        text: null
      });
    };

    navigator.clipboard.writeText(value).then(handleSuccess, handleFailure);
  }, []);

  return [state, copyToClipboard];
}

type UseWindowScrollState = {
  x: number;
  y: number;
};

export const useWindowScroll = () => {
  const [state, setState] = useState<UseWindowScrollState>({
    x: 0,
    y: 0
  });

  const scrollTo = useCallback((...args: number[]) => {
    if (typeof args[0] === "object") {
      window.scrollTo(args[0]);
    } else if (typeof args[0] === "number" && typeof args[1] === "number") {
      window.scrollTo(args[0], args[1]);
    } else {
      throw new Error(
        `Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`
      );
    }
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setState({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [state, scrollTo] as const;
};
