


- `'use client';`  
  Indique à Next.js que ce composant doit être rendu côté client.

- `import { useState } from 'react';`  
  Importe le hook d’état pour gérer les valeurs dynamiques.

- `import { Input } from './components/Input';`  
  Importe le composant personnalisé d’input texte.

- `import Checkbox from './components/Checkbox';`  
  Importe le composant Checkbox personnalisé.

- `import ProductCategory from './products/productCategoryRow';`  
  Importe le composant pour afficher une catégorie de produits.

- `import ProductRow from './products/ProductRow';`  
  Importe le composant pour afficher une ligne de produit.

- `const PRODUCTS = [...]`  
  Définit la liste des produits à afficher, chaque objet ayant une catégorie, un prix, un état de stock et un nom.

- `function App() { ... }`  
  Composant principal de l’application.

  - `const [showStockedOnly, setShowStockedOnly] = useState(false);`  
    État pour savoir si on filtre uniquement les produits en stock.

  - `const [search, setSearch] = useState("");`  
    État pour la valeur de la recherche.

  - `const visibleProducts = PRODUCTS.filter(product => {...});`  
    Filtre les produits selon la recherche et le stock.

    - `if (showStockedOnly && !product.stocked) return false;`  
      Si le filtre "en stock" est activé et que le produit n’est pas en stock, on l’exclut.

    - `if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;`  
      Si une recherche est saisie et que le nom ne correspond pas, on l’exclut.

    - `return true;`  
      Sinon, on garde le produit.

  - `return (...)`  
    Rendu du composant principal :  
    - Affiche un titre  
    - Affiche la barre de recherche et le filtre  
    - Affiche le tableau des produits filtrés

- `function SearchBar({ ... }) { ... }`  
  Composant pour la barre de recherche et le filtre.

  - `Input ...`  
    Champ texte pour la recherche, lié à l’état `search`.

  - `Checkbox ...`  
    Checkbox pour filtrer les produits en stock, lié à l’état `showStockedOnly`.

- `function ProductTable({ products }) { ... }`  
  Composant pour afficher le tableau des produits.

  - `const rows = [];`  
    Stocke les lignes du tableau.

  - `let lastCategory = null;`  
    Permet de savoir quand la catégorie change.

  - `for (let product of products) { ... }`  
    Parcourt les produits filtrés.

    - Si la catégorie change, ajoute une ligne de catégorie.
    - Ajoute une ligne pour chaque produit.

  - `return (<table>...</table>)`  
    Rendu du tableau avec en-tête et corps.

- `export default App;`  
  Exporte le composant principal.

Si vous souhaitez que je commente chaque ligne directement dans le fichier, merci de réessayer plus tard ou d’augmenter votre quota d’édition.
