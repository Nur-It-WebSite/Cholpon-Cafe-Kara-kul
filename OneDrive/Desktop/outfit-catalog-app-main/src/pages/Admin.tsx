import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, addProduct, deleteProduct, isAuthenticated, logout, Product, setStoreStatus, getStoreStatus, clearStoreStatus } from '@/utils/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trash2, Plus, LogOut, Upload, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Admin = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(['M']);
  const [imageFile, setImageFile] = useState<string>('');
  const [imageFileName, setImageFileName] = useState<string>('');
  const [manualStoreStatus, setManualStoreStatus] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'верх',
    price: '',
    inStock: true
  });

  const availableSizes = ['S', 'M', 'L', 'XL', 'Универсальный'];

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    loadProducts();
    const status = getStoreStatus();
    setManualStoreStatus(status);
  }, [navigate]);

  const loadProducts = () => {
    setProducts(getProducts());
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Файл слишком большой (макс. 5MB)');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(reader.result as string);
      setImageFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !imageFile || selectedSizes.length === 0) {
      toast.error(t('fillAllFields'));
      return;
    }

    addProduct({
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      size: selectedSizes,
      inStock: formData.inStock,
      image: imageFile
    });

    toast.success(t('productAdded'));
    setFormData({
      name: '',
      category: 'верх',
      price: '',
      inStock: true
    });
    setSelectedSizes(['M']);
    setImageFile('');
    setImageFileName('');
    loadProducts();
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success(t('productDeleted'));
    loadProducts();
  };

  const handleLogout = () => {
    logout();
    toast.success(t('loggedOut'));
    navigate('/login');
  };

  const handleStoreStatusChange = (isOpen: boolean) => {
    setStoreStatus(isOpen);
    setManualStoreStatus(isOpen);
    toast.success(`Магазин теперь ${isOpen ? 'открыт' : 'закрыт'}`);
  };

  const handleAutoStatus = () => {
    clearStoreStatus();
    setManualStoreStatus(null);
    toast.success('Статус переключен на автоматический');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{t('dashboard')}</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            {t('logout')}
          </Button>
        </div>

        {/* Управление статусом магазина */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('storeStatus')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center gap-4">
                <Button
                  variant={manualStoreStatus === true ? 'default' : 'outline'}
                  onClick={() => handleStoreStatusChange(true)}
                >
                  {t('storeOpen')}
                </Button>
                <Button
                  variant={manualStoreStatus === false ? 'default' : 'outline'}
                  onClick={() => handleStoreStatusChange(false)}
                >
                  {t('storeClosed')}
                </Button>
                <Button
                  variant={manualStoreStatus === null ? 'default' : 'outline'}
                  onClick={handleAutoStatus}
                >
                  Авто (9:00-20:00)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма добавления товара */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                {t('addProduct')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('productName')}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('productNamePlaceholder')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">{t('category')}</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="штаны">{t('pants')}</SelectItem>
                      <SelectItem value="куртки">{t('jackets')}</SelectItem>
                      <SelectItem value="верх">{t('top')}</SelectItem>
                      <SelectItem value="кепки">{t('caps')}</SelectItem>
                      <SelectItem value="шапки">{t('hats')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">{t('price')}</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t('selectSizes')}</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={`size-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => handleSizeToggle(size)}
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">{t('uploadImage')}</Label>
                  <div className="space-y-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    {imageFile && (
                      <div className="relative">
                        <img
                          src={imageFile}
                          alt="Preview"
                          className="w-full h-32 object-cover rounded border"
                        />
                        <Button
                          type="button"
                          size="icon"
                          variant="destructive"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            setImageFile('');
                            setImageFileName('');
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="inStock">{t('inStock')}</Label>
                  <Switch
                    id="inStock"
                    checked={formData.inStock}
                    onCheckedChange={(checked) => setFormData({ ...formData, inStock: checked })}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  {t('addProduct')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Список товаров */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('allProducts')} ({products.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-border"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {product.category} • {product.size.join(', ')} • {product.price} сом
                        </p>
                        <span
                          className={`inline-block mt-1 text-xs font-medium ${
                            product.inStock ? 'text-success' : 'text-destructive'
                          }`}
                        >
                          {product.inStock ? `🟢 ${t('inStock')}` : `🔴 ${t('outOfStock')}`}
                        </span>
                      </div>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
