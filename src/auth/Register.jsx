import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handeRegister = (e) => {
    if (
      name.length < 3 ||
      surname.length < 3 ||
      password.length < 8 ||
      !agreement
    ) {
      e.preventDefault();
      alert("Iltimos barcha maydonlarni to'ldiring va shartlarga rozilik bildiring.");
      return;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#060917] selection:bg-indigo-500/30">
      {/* ---------- orqa fon effektlari ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="auth-grid absolute inset-0" />
        <div className="animate-blob absolute -left-40 -top-40 size-[34rem] rounded-full bg-indigo-600/25 blur-[130px]" />
        <div className="animate-blob-slow absolute -bottom-56 right-[-10rem] size-[32rem] rounded-full bg-fuchsia-600/20 blur-[140px]" />
        <div className="absolute left-1/2 top-1/4 size-[24rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 lg:min-h-screen lg:grid-cols-[1.05fr_1fr]">
        {/* ================= CHAP: brend paneli ================= */}
        <aside className="hidden flex-col justify-between px-8 py-12 lg:flex xl:pl-12">
          <a href="/" className="inline-flex w-fit items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-indigo-900/50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 text-white"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h10" />
                <path d="M4 18h13" />
                <circle cx="18.5" cy="12" r="2" />
              </svg>
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">
              ADMINKA
            </span>
          </a>

          <div className="max-w-xl animate-rise">
            <span className="auth-badge">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3.5"
                aria-hidden="true"
              >
                <path d="M12 2l1.9 5.6L19.5 9l-4.6 3.3 1.6 5.7L12 14.7 7.5 18l1.6-5.7L4.5 9l5.6-1.4L12 2z" />
              </svg>
              Beta 2.0
            </span>

            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-white">
              Boshqaruv panelini{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                bir zumda
              </span>{" "}
              ishga tushiring.
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400">
              Mahsulotlar, buyurtmalar va mijozlarni yagona joyda boshqaring.
              Sozlash 2 daqiqadan ko'p vaqt olmaydi.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border border-indigo-400/25 bg-indigo-500/10 text-indigo-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M13 2 4.5 13.5H11l-1 8.5L18.5 10.5H12l1-8.5Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Tez sozlash
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
                    Ro'yxatdan o'ting va darhol panelga kiring.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6l-7-3Z" />
                    <path d="m9.5 12 1.8 1.8L15 10" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Xavfsiz kirish
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
                    Parollar shifrlangan, rollar bo'yicha huquqlar.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M4 19V5" />
                    <path d="M4 19h16" />
                    <path d="M8 15.5V11" />
                    <path d="M12.5 15.5V7.5" />
                    <path d="M17 15.5v-6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Jonli statistika
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
                    Savdo va ombor hisobotlari real vaqtda yangilanadi.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex max-w-xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl animate-rise-2">
            <div>
              <p className="text-xl font-extrabold tracking-tight text-white">
                12k+
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Faol do'kon
              </p>
            </div>
            <span className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-xl font-extrabold tracking-tight text-white">
                99.9%
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Uptime
              </p>
            </div>
            <span className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-xl font-extrabold tracking-tight text-white">
                4.9/5
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Foydalanuvchi bahosi
              </p>
            </div>
          </div>
        </aside>

        {/* ================= O'NG: ro'yxatdan o'tish formasi ================= */}
        <main className="flex items-center justify-center px-5 py-10 sm:px-8 lg:py-14">
          <div className="w-full max-w-[27rem]">
            {/* mobil uchun logo */}
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <a href="/" className="inline-flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="size-5 text-white"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h10" />
                    <path d="M4 18h13" />
                  </svg>
                </span>
                <span className="font-extrabold tracking-tight text-white">
                  ADMINKA
                </span>
              </a>
              <a href="/login" className="text-sm auth-link">
                Kirish
              </a>
            </div>

            <div className="relative animate-rise rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/60 backdrop-blur-2xl before:absolute before:inset-x-10 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-indigo-400/60 before:to-transparent sm:p-9">
              <span className="auth-badge">Bepul boshlash</span>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white">
                Ro'yxatdan o'tish
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Akkaunt yarating va boshqaruv panelini sinab ko'ring.
              </p>

              {/* ijtimoiy tarmoq tugmalari */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <button type="button" className="btn-social">
                  <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.52 12.27c0-.79-.07-1.55-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3.01h3.88c2.27-2.09 3.57-5.18 3.57-8.88Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3.01c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.11A12 12 0 0 0 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27 14.27a7.2 7.2 0 0 1 0-4.55V6.61H1.29a12 12 0 0 0 0 10.77l3.98-3.11Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.18 15.23 0 12 0 7.7 0 3.99 2.47 1.29 6.61l3.98 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
                    />
                  </svg>
                  Google
                </button>
                <button type="button" className="btn-social">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.24 3.22c0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .33.22.7.83.58A12 12 0 0 0 12 .5Z" />
                  </svg>
                  GitHub
                </button>
              </div>

              <div className="my-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  yoki email bilan
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              {/* ---------------- forma ---------------- */}
              <form onSubmit={(e) => handeRegister(e)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="field-label">
                      Ism
                    </label>
                    <div className="field-wrap">
                      <span className="field-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-[18px]"
                          aria-hidden="true"
                        >
                          <path d="M20 21a8 8 0 1 0-16 0" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Aziz"
                        className="field field-pl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="field-label">
                      Familiya
                    </label>
                    <div className="field-wrap">
                      <span className="field-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-[18px]"
                          aria-hidden="true"
                        >
                          <path d="M20 21a8 8 0 1 0-16 0" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        onChange={(e) => setSurname(e.target.value)}
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Karimov"
                        className="field field-pl"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <div className="field-wrap">
                    <span className="field-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-[18px]"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="3" />
                        <path d="m4 8 7.2 4.8a1.4 1.4 0 0 0 1.6 0L20 8" />
                      </svg>
                    </span>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="aziz@example.com"
                      className="field field-pl"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="field-label">
                      Parol
                    </label>
                    <span className="mb-2 text-[11px] font-medium text-slate-500">
                      kamida 8 belgi
                    </span>
                  </div>
                  <div className="field-wrap">
                    <span className="field-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-[18px]"
                        aria-hidden="true"
                      >
                        <rect x="4" y="10" width="16" height="10" rx="2.5" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                        <path d="M12 14v2.5" />
                      </svg>
                    </span>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="••••••••"
                      className="field field-pl"
                    />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Kamida 8 ta belgi, harf va raqamlardan foydalaning.
                  </p>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <label
                    htmlFor="terms"
                    className="cursor-pointer text-[13px] leading-relaxed text-slate-400"
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      onChange={(e) => setAgreement(e.target.checked)}
                      className="mr-2 h-4 w-4 rounded border-slate-700 bg-slate-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    Men{" "}
                    <a href="#" className="auth-link">
                      Foydalanish shartlari
                    </a>{" "}
                    va{" "}
                    <a href="#" className="auth-link">
                      maxfiylik siyosati
                    </a>
                    ga roziman.
                  </label>
                </div>

                <button type="submit" className="btn-primary">
                  Akkaunt yaratish
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M5 12h13" />
                    <path d="m12.5 6 6 6-6 6" />
                  </svg>
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-slate-400">
                Akkauntingiz bormi?{" "}
                <a href="/login" className="auth-link">
                  Kirish
                </a>
              </p>
            </div>

            <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-500">
              Ma'lumotlaringiz shifrlangan holda saqlanadi va uchinchi
              shaxslarga berilmaydi.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Register;
