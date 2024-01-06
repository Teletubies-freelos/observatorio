import Image from "next/image";


export default async function Home() {
  const a  = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

  const b = await a.json()
  return (
    <main>
      <div>
        <p>
          {JSON.stringify(b)}
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

    </main>
  );
}
