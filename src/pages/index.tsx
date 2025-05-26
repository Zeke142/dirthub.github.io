import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-green-500 pl-3 mb-4">{title}</h2>
    <div className="text-gray-700 space-y-2">{children}</div>
  </div>
);

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-900">DirtHub: Smarter Dirt Management Starts Here</h1>
          <p className="mt-3 text-lg text-gray-600">
            Connecting buyers, sellers, and transporters in real-time. Optimized workflows. Transparent logistics. Scalable architecture.
          </p>
        </header>

        <Section title="Frontend Architecture Overview">
          <p>Built with <strong>Tailwind CSS</strong> for responsive, utility-first design.</p>
          <p>Navigation system structured for fast, clear access to core workflows.</p>
        </Section>

        <Section title="Frontend Frameworks">
          <ul className="list-disc pl-5">
            <li><strong>Vite + React + Tailwind CSS</strong> for rapid, modern frontend development.</li>
            <li>Flutter style audit underway for future cross-platform consistency.</li>
          </ul>
        </Section>

        <Section title="DirtHub MVP Setup">
          <ul className="list-disc pl-5">
            <li>Next.js MVP deployed to GitHub Pages.</li>
            <li>Homepage includes <strong>Vertical Curve Tool</strong> integrated with Tailwind UI.</li>
            <li>GitHub-based CI setup with Core Shell architecture.</li>
          </ul>
        </Section>

        <Section title="Bot & Plugin Strategy">
          <ul className="list-disc pl-5">
            <li><strong>Streamlit + ChatGPT Plugin:</strong> DirtHub Info Bot assists users in real time.</li>
            <li>Streamlined onboarding and in-app support integration roadmap in progress.</li>
          </ul>
        </Section>

        <Section title="Deployment & DevOps">
          <ul className="list-disc pl-5">
            <li>Next.js + Tailwind deployed to GitHub Pages.</li>
            <li>Vite + React alternative tested for performance benchmarking.</li>
            <li>Full deployment troubleshooting guide included in docs.</li>
          </ul>
        </Section>

        <Section title="Cross-Platform Integration">
          <ul className="list-disc pl-5">
            <li>Replit + Flutter WebView wrapper in progress for mobile compatibility.</li>
          </ul>
        </Section>

        <Section title="Tools & Plugins">
          <ul className="list-disc pl-5">
            <li>Dev Toolchain: GitHub, Replit, Streamlit, ChatGPT Plugin API.</li>
            <li>Design Audit aligned with Flutter for future mobile UX continuity.</li>
          </ul>
        </Section>

        <Section title="Coming Soon">
          <ul className="list-disc pl-5">
            <li>Buyers & Sellers Dashboards with real-time transport & messaging.</li>
            <li>Marketplace for handlers: processors, storage, logistics services.</li>
          </ul>
        </Section>

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-10">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex flex-col items-center justify-center text-center text-gray-600 gap-4 mt-8">
        <div className="flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </div>
        <div>
          Get Involved: Contributor, Collaborator, or Angel Investor<br />
          <a href="https://github.com/your-org/your-repo" className="text-blue-600 underline">GitHub Repository</a> | 
          <a href="mailto:you@dirthub.com" className="ml-2 text-blue-600 underline">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
