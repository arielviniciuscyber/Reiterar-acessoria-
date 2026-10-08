
import Header from "../../components/Header/Header"

export default function Painel() {
  return (
    <div className="min-h-screen bg-[#060608] font-sans text-white">
      <Header usuario="Logado" />

      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#d9d9d9]">
          Painel
          <span className="bg-linear-to-br from-[#3b4fe0] to-[#c23fb0] bg-clip-text text-transparent">
            .
          </span>
        </h1>
      </main>
    </div>
  )
}