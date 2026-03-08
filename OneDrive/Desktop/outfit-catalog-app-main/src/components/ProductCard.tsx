import { Product } from '@/utils/storage';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-smooth">
      {/* Изображение */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
              product.inStock
                ? 'bg-success text-success-foreground'
                : 'bg-destructive text-destructive-foreground'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {product.inStock ? t('inStock') : t('outOfStock')}
          </span>
        </div>
      </div>

      {/* Информация */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg group-hover:text-accent transition-smooth">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="capitalize">{product.category}</span>
          <span>•</span>
          <span>{product.size.join(', ')}</span>
        </div>

        <p className="text-xl font-bold">
          {product.price.toLocaleString('ru-RU')} {t('som')}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
