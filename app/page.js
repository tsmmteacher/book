import Link from "next/link";
import BoutonNewsLetter from "./components/BoutonNewsLetter";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-title mb-6">Bienvenue dans votre bookstore</h1>

      <div className="flex justify-center gap-6">
        <Link href="/catalogue" className="bg-yellow-600 text-white px-4 py-2 rounded">
          Voir le catalogue
        </Link>

        <BoutonNewsLetter className="flex"/>
      </div>
    </div>
  );
}
