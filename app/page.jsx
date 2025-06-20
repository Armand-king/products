'use client';
//  Indique à Next.js que ce composant doit être rendu côté client.


import { useState } from 'react';
import { Input } from './components/Input';
import Checkbox from './components/Checkbox';
import ProductCategory from './products/productCategoryRow';
import ProductRow from './products/ProductRow';

const PRODUCTS = [
  { category: "Fruits",     price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits",     price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits",     price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");

  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) return false;
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="container my-3">
      <h1>Bienvenue sur mon cours sur base de la documentation de React et de Nextjs!</h1>

      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onShowStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({ showStockedOnly, onShowStockedOnlyChange, search, onSearchChange }) {
  return (
    <div className="mb-3">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Rechercher ici"
      />
     <Checkbox
  id="stocked"
  checked={showStockedOnly}
  onChange={onShowStockedOnlyChange}
  label="N'affiche que les produits en stock"
/>

    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategory key={product.category} name={product.category} />);
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
