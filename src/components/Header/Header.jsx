import { NavLink } from "react-router-dom"

const MENU = [
    { label: "Painel", to: "/painel" },
    { label: "Consulta CPF", to: "/consulta-cpf" },
    {
        label: "Pedidos",
        children: [
            { label: "pedidos", to: "/pedidos/novo" },
            { label: "Lista de Pedidos", to: "/pedidos" },
            { label: "SLAs", to: "/pedidos" },
            { label: "Pedidos Finalizados", to: "/pedidos" },
            { label: "Instalações", to: "/pedidos" },
            { label: "Instalações Pendentes", to: "/pedidos" },
            { label: "Pedidos Inadimplentes", to: "/pedidos" },
            { label: "Carga Conexão", to: "/pedidos" },
        ],
    },
    { label: "Móveis", to: "/moveis" },
    { label: "SVAs", to: "/svas" },
    { label: "Extrato", to: "/extrato" },
    {
        label: "Diversos",
        children: [
            { label: "CRM", to: "/diversos/relatorios" },
            { label: "Clientes ", to: "/diversos/configuracoes" },
            { label: "Listagem ", to: "/diversos/configuracoes" },
            { label: "Whatsapps", to: "/diversos/configuracoes" },
            { label: "Telegram", to: "/diversos/configuracoes" },
            { label: "Agenda", to: "/diversos/configuracoes" },
            { label: "Alterar Senha ", to: "/diversos/configuracoes" },
        ],
    },
]

const baseLink =
    "relative px-4 py-2 text-sm transition-colors hover:text-white"

function linkClass({ isActive }) {
    return isActive
        ? `${baseLink} text-white after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:rounded after:bg-linear-to-r after:from-[#3b4fe0] after:via-[#b44aa8] after:to-[#f2c35e]`
        : `${baseLink} text-[#cfcfcf]`
}

function Caret() {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M1 3l4 4 4-4z" fill="currentColor" />
        </svg>
    )
}

export default function Header({ usuario = "Logado", foto }) {
    return (
        <header className="sticky top-0 z-40 grid h-20 grid-cols-[1fr_auto_1fr] items-center border-b border-[#222] bg-[#060608] px-8 font-sans">
            <NavLink to="/painel" className="ml-10 block w-[150px] justify-self-start bg-[#060608]">
                <img
                    src="/reiterar.png"
                    alt="Reiterar Assessoria"
                    className="block w-full invert mix-blend-screen"
                />
            </NavLink>

            <nav className="flex items-center gap-2">
                {MENU.map((item) =>
                    item.children ? (
                        <div key={item.label} className="group relative">
                            <button
                                type="button"
                                className={`${baseLink} flex cursor-pointer items-center gap-1 text-[#cfcfcf]`}
                            >
                                {item.label}
                                <Caret />
                            </button>

                            <div className="invisible absolute left-0 top-full z-50 min-w-48 pt-2 opacity-0 transition group-focus-within group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                <div className="bg-black">
                                    <ul className="bg-[#111] py-2">
                                        {item.children.map((sub) => (
                                            <li key={sub.to}>
                                                <NavLink
                                                    to={sub.to}
                                                    className="block px-4 py-2 text-sm text-[#cfcfcf] transition-colors hover:bg-white/5 hover:text-white">
                                                    {sub.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <NavLink key={item.to} to={item.to} className={linkClass}>
                            {item.label}
                        </NavLink>
                    )
                )}
            </nav>

            <div className="flex items-center gap-3 justify-self-end">
                <span className="text-sm text-[#cfcfcf]">{usuario}</span>

                <div className="rounded-full bg-linear-to-br from-[#3b4fe0] via-[#b44aa8] to-[#f2c35e] p-[1.5px]">
                    {foto ? (
                        <img
                            src={foto}
                            alt="Foto de perfil"
                            className="size-8 rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-[#111] text-[#cfcfcf]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}