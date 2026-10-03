type Props = { image: string; alt: string; line: string; position?: string };

export default function VisualBreak({ image, alt, line, position }: Props) {
  return (
    <figure className="frame break" data-reveal>
      <img src={image} alt={alt} style={position ? { objectPosition: position } : undefined} decoding="async" />
      <figcaption>
        <span className="meta">BİÇER HUKUK BÜROSU</span>
        <span className="breakLine">{line}</span>
      </figcaption>
    </figure>
  );
}
