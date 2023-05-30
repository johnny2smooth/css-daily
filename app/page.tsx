import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div>
        <svg width={0} height={0}>
          <filter id="grainy" x={0} y={0} height="100%" width="100%">
            <feTurbulence type="turbulence" baseFrequency={0.022} />
            <feColorMatrix type="" values="0" />
            <feBlend in="" mode="multiply" />
          </filter>
        </svg>
        <div className="test">Hello!! This is going to be grainy</div>
      </div>

      <div>
        <TurbulenceSVG id="two" baseFrequency={0.537} />
        <div className="test2">Hello!! This is going to be grainy</div>
      </div>
    </main>
  );
}

function TurbulenceSVG({
  baseFrequency,
  id,
}: {
  baseFrequency: number;
  id: string;
}) {
  return (
    <svg width={0} height={0}>
      <filter id={id} x={0} y={0} height="100%" width="100%">
        <feTurbulence type="turbulence" baseFrequency={baseFrequency} />
        <feColorMatrix type="saturate" values="0" />
        <feBlend in="SourceGraphic" mode="multiply" />
      </filter>
    </svg>
  );
}
