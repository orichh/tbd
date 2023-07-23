"use client";

import { useEffect, useRef } from "react";

type Props = {
  source: string;
  type?: string;
};
export default function Video({ source, type = "video/mp4" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.defaultMuted = true;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
    >
      <source src={source} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}
