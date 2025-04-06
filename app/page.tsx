import Clientes from "@/app/clientes/clientes";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-[1160px] ">
      <main className="flex-1 bg-gray-50">
        <Clientes />
      </main>
    </div>
  );
}
