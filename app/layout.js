import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookCarousel from "./components/BookCarousel";

export const metadata = {
  title: "BOOKSTORE – Votre bibliothèque en ligne",
  description: "Découvrez, commandez et explorez des milliers de livres dans tous les genres."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-body">
        <NavBar />
        <BookCarousel />
        <main className="px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
