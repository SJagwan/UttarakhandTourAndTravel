import { redirect } from "next/navigation";

export default function Root() {
  redirect("/en"); // redirect default to English
}
