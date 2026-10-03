export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container-x">

        <div className="flex flex-col items-center justify-between gap-8 border-t border-ink-900/5 pt-8 sm:flex-row">

          <div className="flex items-center gap-3 font-bold text-ink-900">

            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white text-xs">
              AMS
            </span>

            <span>
              Aidme Medical Solutions
            </span>

          </div>

          <p className="text-center text-xs text-ink-700/60">
            © {new Date().getFullYear()} Aidme Medical Solutions.
            <br className="sm:hidden" />
            Simplifying healthcare administration.
          </p>

          <div className="flex gap-6 text-xs text-ink-700/60">

            <a
              href="#solutions"
              className="hover:text-brand-600"
            >
              Solutions
            </a>

            <a
              href="#services"
              className="hover:text-brand-600"
            >
              Services
            </a>

            <a
              href="#contact"
              className="hover:text-brand-600"
            >
              Contact
            </a>

          </div>

        </div>

        <div className="mt-8 text-center text-xs text-ink-700/50">
          <p>
            +263 78 738 9519
          </p>

          <p className="mt-1">
            kingtrevor333@gmail.com
          </p>

          <p className="mt-1">
            4 Boscobel Drive East, Highlands, Harare, Zimbabwe
          </p>
        </div>

      </div>
    </footer>
  );
}