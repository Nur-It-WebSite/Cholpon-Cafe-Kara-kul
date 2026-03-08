import { useState, useEffect } from 'react';
import { getProducts, Product } from '@/utils/storage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  useEffect(() => {
    const loadedProducts = getProducts();
    setProducts(loadedProducts);
    setFilteredProducts(loadedProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSize !== 'all') {
      filtered = filtered.filter(p => p.size.includes(selectedSize));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSize, products]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedSize('all');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {t('storeName')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {t('storeSlogan')}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 -mt-6">
          <ProductFilters
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            onCategoryChange={setSelectedCategory}
            onSizeChange={setSelectedSize}
            onReset={handleReset}
          />
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Товары не найдены. Попробуйте изменить фильтры.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
