import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <Link href={`/catalogue/${book.id}`}>
      <div className="border p-4 rounded shadow hover:scale-105 transition cursor-pointer">
        <img src={book.image} className="h-40 w-full object-cover rounded" />
        <h3 className="mt-2 font-bold">{book.titre}</h3>
        <p>{book.auteur}</p>
        <p className="text-primaire">{book.prix} €</p>
        <p className="text-sm text-gray-600">{book.genre}</p>
      </div>
    </Link>
  );
}
