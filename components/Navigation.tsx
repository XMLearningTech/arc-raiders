import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationProps {
  lang: string;
  dict: {
    navigation: {
      home: string;
      guides: string;
      videos: string;
      about: string;
    };
  };
}

export default function Navigation({ lang, dict }: NavigationProps) {
  const navItems = [
    { name: dict.navigation.home, href: `/${lang}` },
    { name: dict.navigation.about, href: `/${lang}/about` },
    { name: dict.navigation.guides, href: `/${lang}/guides` },
    { name: dict.navigation.videos, href: `/${lang}/videos` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="text-2xl font-bold neon-text text-neon-cyan hover-glow">
            ARC RAIDERS
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-neon-cyan transition-all duration-300 hover:neon-text text-sm uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
