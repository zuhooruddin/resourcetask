import { redirect } from "next/navigation";
export default function Home() {
  redirect("/Home");
  return <div className="">             
  
  Home
  </div>;
}
