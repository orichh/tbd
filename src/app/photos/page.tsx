import { CustomImage } from "@/components/CustomImage";
import PhotoCarouselModal from "@/components/PhotoCarouselModal";
import { images } from "@/util/constants";

export default function Photos() {
  return (
    <div className="w-full p-1">
      <PhotoCarouselModal />

      <div className="grid grid-cols-12 w-full gap-1">
        {images.map((image, i) => {
          return (
            <CustomImage
              key={`${i}-${image.title}`}
              image={image}
              imageIndex={i}
            />
          );
        })}
      </div>
    </div>
  );
}
