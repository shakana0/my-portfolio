import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider absolute top-5 inset-0 z-2 w-full h-full"
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="keen-slider__slide flex items-center justify-center"
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
