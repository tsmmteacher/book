"use client";

import { useState } from "react";
import { books } from "../data/books";

import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import BookList from "../components/BookList";

import { motion } from "framer-motion";

export default function Catalogue() {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  // listes dynamiques sans doublons
  const genres = [...new Set(books.map((b) => b.genre))];
  const authors = [...new Set(books.map((b) => b.auteur))];

  const filteredBooks = books.filter((b) => {
    const matchTitle = b.titre.toLowerCase().includes(searchTitle.toLowerCase());
    const matchGenre = selectedGenre ? b.genre === selectedGenre : true;
    const matchAuthor = selectedAuthor ? b.auteur === selectedAuthor : true;
    return matchTitle && matchGenre && matchAuthor;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-title mb-6 text-center text-primaire">
        Catalogue de livres
      </h1>

      {/* 🎛️ Zone des filtres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Titre */}
        <div>
          <label className="block mb-1 font-semibold">Recherche par titre</label>
          <Input
            placeholder="Tapez un titre..."
            onChange={(e) => setSearchTitle(e.target.value)}
            className="border-secondaire focus-visible:ring-secondaire"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block mb-1 font-semibold">Genre</label>
          <Select onValueChange={(v) => setSelectedGenre(v)}>
            <SelectTrigger className="border-secondaire">
              <SelectValue placeholder="Tous les genres" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((g) => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Auteur */}
        <div>
          <label className="block mb-1 font-semibold">Auteur</label>
          <Select onValueChange={(v) => setSelectedAuthor(v)}>
            <SelectTrigger className="border-secondaire">
              <SelectValue placeholder="Tous les auteurs" />
            </SelectTrigger>
            <SelectContent>
              {authors.map((a) => (
                <SelectItem key={a} value={a}>{a}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Résultats */}
      <BookList books={filteredBooks} />
    </motion.div>
  );
}
