import { Image } from "@/util/constants";
import { default as NextImage } from "next/image";
import ImageContainer from "./ImageContainer";

type CustomImageProps = {
  image: Image;
  imageIndex: number;
};
export const CustomImage = ({ image, imageIndex }: CustomImageProps) => {
  return (
    <ImageContainer imageIndex={imageIndex}>
      <NextImage
        src={image.src}
        width={500}
        height={500}
        alt={image.alt}
        className="h-full w-full object-cover object-center"
      />
    </ImageContainer>
  );
};
