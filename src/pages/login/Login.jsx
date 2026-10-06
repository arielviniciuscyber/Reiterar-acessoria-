import { useState } from "react"

const BG_IMAGE =
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=80"

function GradientInput({ id, type, value, onChange }) {
  return (
    <div className="mb-8 rounded-2xl bg-linear-to-r from-[#3b4fe0] via-[#b44aa8] to-[#f2c35e] p-[1.5px] focus-within:shadow-[0_0_0_3px_rgba(180,74,168,0.25)]">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="h-[51px] w-full rounded-[14.5px] bg-[#111] px-4 text-base text-white outline-none"
      />
    </div>
  )
}

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ email, senha })
  }

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#060608] font-sans">
      <div className="relative z-10 w-full px-6 pt-16 lg:w-1/2 lg:pl-[11%] lg:pt-[90px]">
        <h1 className="mb-[70px] w-full max-w-[352px] bg-[#060608]">
          <img
            src="/reiterar.png"
            alt="Reiterar Assessoria"
            className="block w-full invert mix-blend-screen"
          />
        </h1>

        <form onSubmit={handleSubmit} className="flex w-full max-w-[352px] flex-col">
          <label htmlFor="email" className="mb-3.5 text-sm text-[#cfcfcf]">
            Login
          </label>
          <GradientInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha" className="mb-3.5 text-sm text-[#cfcfcf]">
            Senha
          </label>
          <GradientInput
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <a href="#" className="-mt-2 self-end text-[17px] text-white underline">
            Esqueci minha senha
          </a>

          <button
            type="submit"
            className="mt-16 h-[52px] w-full cursor-pointer rounded-2xl bg-linear-to-tr from-[#3b4fb8] via-[#a83fa8] to-[#d9a45a] text-2xl font-bold text-white/70 transition hover:brightness-110 active:scale-[0.98]"
          >
            Entrar
          </button>

          <a href="#" className="mt-9 self-center text-[17px] text-white underline">
            Ainda não tenho uma conta
          </a>
        </form>
      </div>

      <div
        className="absolute inset-y-0 right-0 hidden w-[52%] bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#060608] via-[#060608]/60 via-25% to-transparent to-60%" />
      </div>

      <footer className="absolute inset-x-0 bottom-3.5 z-10 text-center text-base text-white">
        2026 | Reiterar 
      </footer>
    </div>
  )
}