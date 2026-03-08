import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSize: string;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  onReset: () => void;
}

const ProductFilters = ({
  selectedCategory,
  selectedSize,
  onCategoryChange,
  onSizeChange,
  onReset
}: ProductFiltersProps) => {
  const { t } = useLanguage();

  const categories = [
    { value: 'all', label: t('all') },
    { value: 'штаны', label: t('pants') },
    { value: 'куртки', label: t('jackets') },
    { value: 'верх', label: t('top') },
    { value: 'кепки', label: t('caps') },
    { value: 'шапки', label: t('hats') }
  ];

  const sizes = [
    { value: 'all', label: t('allSizes') },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'Универсальный', label: t('universal') }
  ];
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-lg font-semibold">{t('filters')}</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder={t('category')} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSize} onValueChange={onSizeChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder={t('size')} />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={onReset}
            className="w-full sm:w-auto"
          >
            {t('reset')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
