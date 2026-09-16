import { useState } from "react";
import portrait from "../assets/portrait.jpeg";
import { profile } from "../data/content";

export default function Hero() {
  const [isWechatOpen, setIsWechatOpen] = useState(false);

  return (
    <section id="home" className="relative bg-ink text-cream overflow-hidden">
      {/* soft radial glow, stands in for the photo backdrop in the reference design */}
      <div
        className="pointer-events-none absolute -right-24 top-24 w-[560px] h-[560px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4A5F45 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-3">
              Hi, I'm
              <br />
              {profile.name}
            </h1>
            <p className="font-display italic text-2xl text-clay mb-6">
              {profile.title}
            </p>
            <p className="text-cream/75 max-w-md leading-relaxed mb-9">
              {profile.tagline}
            </p>

            {/* <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-clay text-ink text-sm font-medium px-6 py-3.5 rounded-full hover:brightness-110 transition"
              >
                View My Work
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 border border-cream/30 text-cream text-sm font-medium px-6 py-3.5 rounded-full hover:bg-cream/10 transition"
              >
                Download CV
              </a>
            </div> */}

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-clay/40 bg-clay/10 text-clay">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 2.5a1 1 0 0 1 1 1V5.1a7.9 7.9 0 0 1 5.9 5.9h1.6a1 1 0 1 1 0 2h-1.6a7.9 7.9 0 0 1-5.9 5.9v1.6a1 1 0 1 1-2 0v-1.6A7.9 7.9 0 0 1 5.1 13.9H3.5a1 1 0 1 1 0-2h1.6A7.9 7.9 0 0 1 11 5.1V3.5a1 1 0 0 1 1-1Zm-1 4.3A5.2 5.2 0 0 0 6.8 12a5.2 5.2 0 0 0 4.2 5.2A5.2 5.2 0 0 0 15.2 12 5.2 5.2 0 0 0 11 6.8Zm1 2.2a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Z" />
                  </svg>
                </span>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cream/70">
                  Research Interests
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Cyber Security",
                  "Data Security",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-sm text-cream/90 shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-cream/50 mb-3">Connect with me</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-cream/25 flex items-center justify-center hover:border-clay hover:text-clay transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12Zm-1.38 1.06h2.76v7.75H5.56V9.56Zm4.29 0h2.64v1.06h.04c.37-.7 1.27-1.43 2.6-1.43 2.78 0 3.29 1.83 3.29 4.2v4.92h-2.76v-4.6c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.77 1.2-1.77 2.44v4.67H9.85V9.56Z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-cream/25 flex items-center justify-center hover:border-clay hover:text-clay transition"
                  aria-label="Email"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M3 7.75A2.75 2.75 0 0 1 5.75 5h12.5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25v-8.5Zm2.2-.6 6.8 5.14 6.8-5.14H5.2Zm13.55 1.42-6.26 4.73a.75.75 0 0 1-.88 0L5.25 8.57v7.68c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75V8.57Z" />
                  </svg>
                </a>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsWechatOpen(true)}
                    className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-cream/25 flex items-center justify-center text-[#07C160] hover:border-[#07C160] hover:bg-[#07C160] hover:text-white transition"
                    aria-label="WeChat"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.75C6.34 2.75 1.75 6.53 1.75 11.1c0 2.59 1.38 4.9 3.52 6.35l-1.13 4.03 4.13-2.21c.85.17 1.74.26 2.73.26 5.66 0 10.25-3.78 10.25-8.43S17.66 2.75 12 2.75Zm-4.25 8.45c.74 0 1.34-.6 1.34-1.34S8.49 8.42 7.75 8.42s-1.34.6-1.34 1.34.6 1.34 1.34 1.34Zm8.5 0c.74 0 1.34-.6 1.34-1.34S16.99 8.42 16.25 8.42s-1.34.6-1.34 1.34.6 1.34 1.34 1.34Zm-8.73 2.62c1.12-1.12 2.67-1.74 4.48-1.74 1.81 0 3.36.62 4.48 1.74-.57.52-1.38.9-2.45 1.12-.4.08-.83.12-1.27.12-.44 0-.87-.04-1.27-.12-1.07-.22-1.88-.6-2.45-1.12Z"
                      />
                      <circle cx="7.7" cy="11.1" r="0.9" fill="white" />
                      <circle cx="16.3" cy="11.1" r="0.9" fill="white" />
                    </svg>
                  </button>

                  {isWechatOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
                      <div className="relative rounded-3xl border border-cream/20 bg-ink p-4 shadow-2xl shadow-black/60 max-w-[calc(100vw-2rem)]">
                        <button
                          type="button"
                          onClick={() => setIsWechatOpen(false)}
                          className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-ink text-lg text-cream hover:bg-cream/10 transition"
                          aria-label="Close WeChat QR"
                        >
                          ×
                        </button>
                        <div className="rounded-2xl bg-white p-3">
                          <img
                            src="/QRcode.jpeg"
                            alt="WeChat QR code"
                            className="h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px] rounded-xl object-cover"
                          />
                        </div>
                        <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-cream/70">
                          Scan to chat
                        </p>
                        <a
                          href={profile.WeChat}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 block text-center text-xs uppercase tracking-[0.22em] text-clay hover:text-cream transition"
                        >
                          Open WeChat
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href={profile.WhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full border border-cream/25 flex items-center justify-center text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white transition"
                  aria-label="WhatsApp"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.15 6.38 2.15 11.8c0 1.75.46 3.46 1.34 4.96L2 22l5.38-1.44a9.84 9.84 0 0 0 4.66 1.16h.01c5.46 0 9.89-4.38 9.89-9.8S17.5 2 12.04 2Zm5.5 13.94c-.24.67-1.4 1.24-1.94 1.32-.48.07-1.08.1-3.48-.73-2.95-1.03-4.85-3.65-5-3.82-.15-.17-1.27-1.68-1.27-3.2 0-1.52.79-2.27 1.07-2.58.28-.3.61-.38.82-.38h.59c.19 0 .46.02.72.54.29.6.98 2.08 1.07 2.23.09.15.15.33.03.53-.12.2-.18.33-.36.52-.18.2-.38.45-.54.6-.18.18-.37.38-.16.74.2.35.9 1.49 1.94 2.4 1.33 1.18 2.45 1.54 2.8 1.72.35.18.56.15.76-.09.2-.24.87-1 1.11-1.35.24-.35.49-.29.82-.18.33.11 2.13 1 2.5 1.18.37.18.62.27.71.42.09.15.09.86-.15 1.53Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-moss bg-moss/30 overflow-hidden shadow-2xl shadow-black/20">
              <img
                src={portrait}
                alt="Nauman Ali portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
