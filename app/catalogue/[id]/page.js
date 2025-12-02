import { books } from "@/data/books";
import BookDetailsCard from "@/components/BookDetailsCard";

export default function Page({ params }) {
  const book = books.find(b => b.id == params.id);
  return <BookDetailsCard book={book} />;
}
