import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-screen justify-center">
        <Video source="/redcamp.mp4" />
      </div>

      <p className="break-all"></p>
    </div>
  );
}
