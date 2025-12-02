"use client";
import { useRouter } from "next/navigation";

export default function BoutonNewsLetter() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/abonnement")}
      className="bg-secondaire px-4 py-2 text-white rounded hover:bg-primaire transition"
    >
      S'abonner à la newsletter
    </button>
  );
}
