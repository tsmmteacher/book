import Link from "next/link";
import BoutonNewsLetter from "./BoutonNewsLetter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-2 mt-6 flex gap-16">
      <p className="text-center mb-4 font-bold">
        NOM-PRENOM-BOOKSTORE © 2025
      </p>

      <div className="flex justify-center gap-6 mb-4">
        <Link href="/" className="hover:text-secondaire transition">Accueil</Link>
        <Link href="/catalogue" className="hover:text-secondaire transition">Catalogue</Link>
        <Link href="/ajouter" className="hover:text-secondaire transition">Ajouter</Link>
        <Link href="/abonnement" className="hover:text-secondaire transition">Abonnement</Link>
      </div>

      <div className="flex justify-center">
        <BoutonNewsLetter />
      </div>
    </footer>
  );
}
