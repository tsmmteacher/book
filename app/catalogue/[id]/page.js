"use client";
import BookDetailsCard from "@/app/components/BookDetailsCard";
import { books } from "../../data/books";
import { useParams } from "next/navigation";


export default function Page() {
    const params =  useParams();
  const book = books.find(b => b.id == params.id);
  return <BookDetailsCard book={book} />;
}
