import { redirect } from "react-router-dom";

export function useGetById(id) {
  const pratos = localStorage.getItem("pratos");
  if (pratos) {
    return { prato: JSON.parse(pratos).find((p) => p.id === id) };
  } else {
    window.location.href = "/"
    return { prato: null };
  }
}
