import { redirect } from "next/navigation";

export default async function Home() {
  redirect('/books');

  return (
    <div></div>
  )
}
