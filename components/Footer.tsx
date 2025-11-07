import Link from "next/link";

interface FooterProps {
  lang: string;
  dict: {
    footer: {
      about: {
        title: string;
        description: string;
      };
      quickLinks: {
        title: string;
        home: string;
        guides: string;
        videos: string;
        about: string;
      };
      community: {
        title: string;
        discord: string;
        twitter: string;
        youtube: string;
        reddit: string;
      };
      legal: {
        title: string;
        privacy: string;
        terms: string;
      };
      copyright: string;
    };
  };
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎮</div>
              <h3 className="text-xl font-bold text-white">{dict.footer.about.title}</h3>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              {dict.footer.about.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{dict.footer.quickLinks.title}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.quickLinks.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/guides`} className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.quickLinks.guides}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/videos`} className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.quickLinks.videos}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.quickLinks.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{dict.footer.community.title}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.community.discord}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.community.twitter}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.community.youtube}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors text-sm">
                  {dict.footer.community.reddit}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{dict.footer.legal.title}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/privacy`}
                  className="text-white/60 hover:text-neon-cyan transition-colors text-sm"
                >
                  {dict.footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/terms`}
                  className="text-white/60 hover:text-neon-cyan transition-colors text-sm"
                >
                  {dict.footer.legal.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-white/40 text-xs text-center">
              {dict.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
