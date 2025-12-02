"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup.string().min(5).required(),
  email: yup.string().email().required(),
  confirmEmail: yup.string().oneOf([yup.ref("email")]).required(),
  tel: yup.string().matches(/^[0-9]{8}$/).required(),
  photo: yup.mixed().test("type", "Format jpg/jpeg", (value) => {
    return value && ["image/jpeg", "image/jpg"].includes(value[0]?.type);
  }),
  conditions: yup.bool().oneOf([true], "Obligatoire"),
});

export default function Abonnement() {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const submit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4 max-w-lg mx-auto">
      <input {...register("nom")} placeholder="Nom" className="border p-2 w-full"/>
      <p className="text-red-500">{errors.nom?.message}</p>

      <input {...register("email")} placeholder="Email" className="border p-2 w-full"/>
      <p className="text-red-500">{errors.email?.message}</p>

      <input {...register("confirmEmail")} placeholder="Confirmer Email" className="border p-2 w-full"/>
      <p className="text-red-500">{errors.confirmEmail?.message}</p>

      <input {...register("tel")} placeholder="Téléphone" className="border p-2 w-full"/>
      <p className="text-red-500">{errors.tel?.message}</p>

      <input type="file" {...register("photo")} />
      <p className="text-red-500">{errors.photo?.message}</p>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("conditions")} />
        J'accepte les conditions générales
      </label>
      <p className="text-red-500">{errors.conditions?.message}</p>

      <button className="bg-yellow-500 text-white px-4 py-2 rounded">S’abonner</button>
    </form>
  );
}
