import { Instagram, MessageCircle, Send, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О магазине */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('storeName')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('storeSlogan')}
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contacts')}</h3>
            <div className="space-y-3">
              <a
                href="tel:+996999000000"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>+996 999 00 00 00</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('address')}: г. Кара-Куль</span>
              </div>
            </div>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/996999000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/outfitstore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 {t('storeName')} | {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
