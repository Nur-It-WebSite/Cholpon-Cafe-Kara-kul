import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Store, Sun, Moon, Laptop } from 'lucide-react';
import { useState, useEffect } from 'react';
import { isStoreOpen } from '@/utils/storage';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(isStoreOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setStoreOpen(isStoreOpen());
    }, 5000); // Проверяем каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/contacts', label: t('contacts') },
    { path: '/login', label: t('cashierLogin') }
  ];

  const themeIcons = {
    light: <Sun className="w-4 h-4" />,
    gray: <Laptop className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-smooth">
            <Store className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">{t('storeName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-accent ${
                  location.pathname === item.path ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Store Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${storeOpen ? 'bg-success' : 'bg-destructive'}`} />
              <span className="text-xs font-medium">
                {storeOpen ? t('storeOpen') : t('storeClosed')}
              </span>
            </div>

            {/* Theme Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {themeIcons[theme]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="w-4 h-4 mr-2" />
                  Светлая
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('gray')}>
                  <Laptop className="w-4 h-4 mr-2" />
                  Серая
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="w-4 h-4 mr-2" />
                  Темная
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {language === 'ru' ? 'РУС' : 'КЫР'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('ru')}>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('kg')}>
                  Кыргызча
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-accent px-2 py-1 ${
                    location.pathname === item.path ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-2 py-1">
                <div className={`w-2 h-2 rounded-full ${storeOpen ? 'bg-success' : 'bg-destructive'}`} />
                <span className="text-xs font-medium">
                  {storeOpen ? t('storeOpen') : t('storeClosed')}
                </span>
              </div>
              
              {/* Mobile Theme Buttons */}
              <div className="flex gap-2 px-2">
                <Button variant="outline" size="sm" onClick={() => setTheme('light')}>
                  <Sun className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTheme('gray')}>
                  <Laptop className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTheme('dark')}>
                  <Moon className="w-4 h-4" />
                </Button>
              </div>

              {/* Mobile Language Buttons */}
              <div className="flex gap-2 px-2">
                <Button variant="outline" size="sm" onClick={() => setLanguage('ru')}>
                  РУС
                </Button>
                <Button variant="outline" size="sm" onClick={() => setLanguage('kg')}>
                  КЫР
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
