/* Chiqish sahifasi — faqat markup. App.jsx shu routni kutayotgani uchun qo'shildi. */
function LogOut() {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-[#060917] px-5">
      <div className="pointer-events-none absolute inset-0">
        <div className="auth-grid absolute inset-0" />
        <div className="animate-blob absolute -left-32 -top-40 size-[28rem] rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="animate-blob-slow absolute -bottom-48 right-[-8rem] size-[26rem] rounded-full bg-fuchsia-600/15 blur-[130px]" />
      </div>

      <div className="relative w-full max-w-md animate-rise rounded-[28px] border border-white/10 bg-white/[0.035] p-9 text-center shadow-2xl shadow-black/60 backdrop-blur-2xl">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl border border-indigo-400/25 bg-indigo-500/10 text-indigo-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-7"
            aria-hidden="true"
          >
            <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
            <path d="M10 8l-4 4 4 4" />
            <path d="M6 12h9" />
          </svg>
        </span>

        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-white">
          Sessiya yakunlandi
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Hisobingizdan xavfsiz chiqdingiz. Qayta kirish uchun quyidagi
          tugmadan foydalaning.
        </p>

        <div className="mt-8 space-y-3">
          <a href="/login" className="btn-primary">
            Qayta kirish
          </a>
          <a href="/register" className="btn-social w-full">
            Yangi akkaunt yaratish
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
