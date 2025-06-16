
"use client"

import { useState, useEffect } from "react";
import Card from "./Card";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

const ShowData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // កែតម្រូវ URL នេះទៅកាន់ Laravel API endpoint របស់អ្នក។
        // ប្រសិនបើដំណើរការ Laravel ជាមួយ Laravel Sail នោះវាអាចជា http://localhost/api/products ឬស្រដៀងគ្នា។
        // ពិនិត្យឯកសារ .env របស់អ្នកសម្រាប់ APP_URL និង docker-compose.yml របស់អ្នកសម្រាប់ port mappings។
        const response = await fetch("http://localhost/api/dashboard/product"); // សន្មតថា Laravel កំពុងដំណើរការនៅលើ port 8000
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="gap-5 grid grid-cols-5">
        {products.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            price={item.price}
            img={`http://localhost/uploads/${item.image}`} // កែតម្រូវ path រូបភាព
            title={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default ShowData;