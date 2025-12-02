"use client";
import { useState } from "react";
import { books } from "../data/books";
import BookList from "../components/BookList";

export default function Catalogue() {
  const [search, setSearch] = useState("");

  const filtered = books.filter(b =>
    b.titre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-title mb-4">Catalogue</h1>

      <input
        type="text"
        placeholder="Rechercher par titre..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList books={filtered} />
    </div>
  );
}
