import Image from 'next/image';

export default function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <Image src={src} alt={alt} width={600} height={400} className="w-full h-auto object-cover" />
    </div>
  );
}
