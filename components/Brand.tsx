import Image from "next/image";
import Link from "next/link";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`brand${footer ? " brand-footer" : ""}`}
      href="/"
      aria-label="Lumina Deck — início"
    >
      <span className="brand-mark">
        <Image src="/logo-lumina.svg" width={45} height={30} alt="" />
      </span>
      <span>
        Lumina Deck<small>APRENDER FICA MAIS LEVE</small>
      </span>
    </Link>
  );
}

export function StoreBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`store-row${dark ? " store-row-dark" : ""}`}
      aria-label="Aplicativos móveis"
    >
      <a
        className="store-badge"
        href="/dashboard/"
        aria-label="Lumina Deck para iPhone — em breve na App Store"
      >
        <svg className="apple-logo" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.1M12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25" />
        </svg>
        <span>
          <small>Em breve na</small>App Store
        </span>
      </a>
      <a
        className="store-badge"
        href="/dashboard/"
        aria-label="Lumina Deck para Android — em breve no Google Play"
      >
        <span className="play-logo" aria-hidden="true">
          <i />
        </span>
        <span>
          <small>Em breve no</small>Google Play
        </span>
      </a>
    </div>
  );
}
