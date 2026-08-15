import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  step,
  caption,
}: {
  src: string;
  alt: string;
  step: number;
  caption: string;
}) {
  return (
    <div className="flex w-48 shrink-0 snap-center flex-col items-center gap-3">
      <div className="rounded-[2rem] border-[6px] border-mahogany bg-mahogany p-1.5 shadow-lg">
        <div className="relative aspect-[738/1600] w-36 overflow-hidden rounded-[1.4rem] bg-vanilla">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="144px"
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-center text-sm text-mahogany">
        <span className="font-medium">Paso {step}.</span> {caption}
      </p>
    </div>
  );
}
