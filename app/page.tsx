import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <svg width={0} height={0}>
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency={0.022} />
        </filter>
      </svg>

      <div className="test">Hello!! This is going to be grainy</div>
      <TurbulenceSVG id="two" baseFrequency={0.22} />
      <div className="test2">Hello!! This is going to be grainy</div>
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
      <filter id={id}>
        <feTurbulence type="turbulence" baseFrequency={baseFrequency} />
      </filter>
    </svg>
  );
}
