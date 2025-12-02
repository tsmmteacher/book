export default function BookDetailsCard({ book }) {
  return (
    <div className="max-w-xl mx-auto border p-6 rounded shadow">
      <img src={book.image} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{book.titre}</h1>
      <p className="text-lg">Auteur : {book.auteur}</p>
      <p className="mt-2">{book.résumé}</p>
      <p className="text-primaire text-xl mt-4">{book.prix} €</p>
      <p className="text-gray-600">Genre : {book.genre}</p>
    </div>
  );
}
