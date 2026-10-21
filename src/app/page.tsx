import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-6 pt-12">
        <p className="text-sm tracking-widest uppercase">Portfolio / Foundation</p>
      </header>
      <main id="main" className="mx-auto max-w-4xl px-6 py-20" tabIndex={-1}>
        <h1 className="text-5xl leading-tight font-medium sm:text-7xl">{profile.name}</h1>
        <p className="mt-5 text-xl">{profile.title}</p>
        <p className="mt-8 max-w-xl leading-7 text-neutral-300">
          This portfolio is under development. Projects and personal records will be
          added after verification.
        </p>
        <a className="mt-8 inline-flex min-h-11 items-center underline underline-offset-4" href={profile.github}>
          Explore GitHub
        </a>
      </main>
      <footer className="mx-auto max-w-4xl px-6 pb-10 text-sm text-neutral-400">
        {profile.name}
      </footer>
    </>
  );
}
