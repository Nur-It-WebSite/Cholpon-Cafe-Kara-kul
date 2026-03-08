import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, MapPin, Clock, Instagram, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contacts = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('contacts')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('followUs')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Телефон */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('phone')}</h3>
            <a
              href="tel:+996999000000"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              +996 999 00 00 00
            </a>
          </div>

          {/* Адрес */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('address')}</h3>
            <p className="text-muted-foreground">
              г. Кара-Куль
            </p>
          </div>

          {/* Часы работы */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('workingHours')}</h3>
            <p className="text-muted-foreground">
              {t('workingHoursValue')}
            </p>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">{t('followUs')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-smooth group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-accent transition-smooth">Instagram</h3>
                <p className="text-sm text-muted-foreground">@outfitstore</p>
              </div>
            </a>

            <a
              href="https://wa.me/996999000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-smooth group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-accent transition-smooth">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Напишите нам</p>
              </div>
            </a>

            <a
              href="https://t.me/outfitstore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-smooth group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center flex-shrink-0">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-accent transition-smooth">Telegram</h3>
                <p className="text-sm text-muted-foreground">@outfitstore</p>
              </div>
            </a>
          </div>
        </div>

        {/* Карта (placeholder) */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">г. Кара-Куль</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
