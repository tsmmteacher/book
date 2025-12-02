import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {books.map((b) => <BookCard key={b.id} book={b} />)}
    </div>
  );
}
