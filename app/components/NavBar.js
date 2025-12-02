import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 mb-2 bg-yellow-300 text-white">
      <div className="text-2xl font-title">
        PRENOM-BOOKSTORE
      </div>

      <ul className="flex gap-6 font-menu text-lg">
        <li><Link href="/" className="hover:text-secondaire transition">Accueil</Link></li>
        <li><Link href="/catalogue" className="hover:text-secondaire transition">Catalogue</Link></li>
        <li><Link href="/abonnement" className="hover:text-secondaire transition">Abonnement</Link></li>
      </ul>
    </nav>
  );
}
