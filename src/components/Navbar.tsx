import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Search, X, Moon, Sun } from 'lucide-react';
//import { Logo } from './ui/Logo';
import { useTheme } from '../theme/ThemeProvider';
import { navStructure } from '../data/content';
import phenixLogo from '../assets/images/phenix.jpeg';


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? 'glass shadow-premium py-2.5' : 'bg-transparent py-4'}`}
        onMouseLeave={() => setMegaOpen(null)}
      >
        <nav className="container-premium flex items-center justify-between gap-6">
          <Link
  to="/"
  aria-label="Accueil Groupe PHÉNIX"
  className="flex items-center gap-4"
>
  {/* Logo */}
  <img
    src={phenixLogo}
    alt="Logo Groupe PHÉNIX"
    className="h-16 w-16 rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
  />

  {/* Texte */}
  <div className="hidden lg:flex flex-col justify-center pt-2">

    <h1
      className={`text-[1rem] font-bold tracking-[0.08em] uppercase leading-none transition-colors duration-300 ${
        scrolled
          ? "text-anthracite-900 dark:text-white"
          : "text-white"
      }`}
    >
      Groupe
      <span className="ml-2 font-extrabold text-brand-500">
        PHÉNIX
      </span>
    </h1>

    <p
  className={`mt-1 text-[9px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
    scrolled
      ? "text-anthracite-500"
      : "text-white/65"
  }`}
>
  Idées innovantes en action
</p>
</div>
</Link>
          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navStructure.map((item) => (
              <li key={item.label} onMouseEnter={() => setMegaOpen(item.mega ? item.label : null)}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${scrolled ? 'text-anthracite-700 hover:text-brand-600 dark:text-anthracite-100 dark:hover:text-brand-400' : 'text-white/85 hover:text-white'}`}
                >
                  {item.label}
                  {item.mega && <ChevronDown className={`h-3 w-3 transition-transform ${megaOpen === item.label ? 'rotate-180' : ''}`} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Recherche"
              className={`rounded-full p-2.5 transition-colors ${scrolled ? 'text-anthracite-600 hover:bg-brand-50 dark:text-anthracite-100 dark:hover:bg-white/10' : 'text-white/85 hover:bg-white/10'}`}
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Language */}
            

            <button
              onClick={toggle}
              aria-label="Changer de thème"
              className={`rounded-full p-2.5 transition-colors ${scrolled ? 'text-anthracite-600 hover:bg-brand-50 dark:text-anthracite-100 dark:hover:bg-white/10' : 'text-white/85 hover:bg-white/10'}`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link to="/devis" className="btn-brand hidden md:inline-flex !px-5 !py-2.5 text-xs">
              Demander un devis
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
              className={`rounded-full p-2.5 lg:hidden ${scrolled ? 'text-anthracite-900 dark:text-white' : 'text-white'}`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-0 top-full hidden lg:block"
            >
              <div className="container-premium pt-2">
                <div className="glass-card grid grid-cols-3 gap-8 rounded-2xl p-7 shadow-float">
                  {navStructure.find((n) => n.label === megaOpen)?.mega?.map((col) => (
                    <div key={col.title}>
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-ultra text-brand-600 dark:text-brand-400">{col.title}</p>
                      <ul className="space-y-2.5">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link to={link.to} className="link-hover text-sm text-anthracite-700 transition-colors hover:text-brand-600 dark:text-anthracite-200 dark:hover:text-brand-400">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-[110] overflow-y-auto bg-anthracite-950/95 backdrop-blur-xl lg:hidden"
>
            <div className="flex items-center justify-between px-5 py-4">
              <Link to="/" className="flex items-center gap-4">

  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">

    <img
      src={phenixLogo}
      alt="Logo Groupe PHÉNIX"
      className="h-10 w-10 object-contain"
    />

  </div>

  <div>

    <h2 className="text-xl font-black tracking-wider text-white uppercase">
      GROUPE
      <span className="text-brand-500 ml-2">
        PHÉNIX
      </span>
    </h2>

    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">
      Idées innovantes en action
    </p>

  </div>

</Link>
              <button onClick={() => setMobileOpen(false)} className="rounded-full p-2 text-white" aria-label="Fermer">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
  initial="hidden"
  animate="show"
  variants={{
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }}
  className="flex min-h-[calc(100vh-90px)] flex-col gap-1 px-5 pb-10 pt-2"
>
              {navStructure.map((item) => (
                <motion.div key={item.label} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                  <Link to={item.to} className="block py-3 text-lg font-semibold text-white border-b border-white/10">
                    {item.label}
                  </Link>
                  {item.mega && (
                    <div className="ml-3 mt-1 mb-2 flex flex-col gap-2">
                      {item.mega.flatMap((c) => c.links).map((l) => (
                        <Link key={l.label + l.to} to={l.to} className="py-1.5 text-sm text-anthracite-300">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <Link to="/devis" className="btn-brand mt-6 w-full">Demander un devis</Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-start justify-center bg-anthracite-950/90 backdrop-blur-xl pt-24 px-6"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-card flex items-center gap-3 rounded-2xl px-5 py-4">
                <Search className="h-5 w-5" style={{ color: '#C9A02A' }} />
                <input
                  autoFocus
                  placeholder="Rechercher un service, une filiale, un projet..."
                  className="flex-1 bg-transparent text-lg text-white placeholder:text-anthracite-400 focus:outline-none"
                />
                <button onClick={() => setSearchOpen(false)} className="text-anthracite-300 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 text-center text-sm text-anthracite-400">Services · Filiales · Projets · Secteurs · Actualités</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
