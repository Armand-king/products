/**
 * 
 * @param {*} name 
 * @returns 
 */
// ./products/productCategoryRow.tsx
export default function ProductCategory({ name }) {
  return (
    <tr>
      <th colSpan={2}>{name}</th>
    </tr>
  );
}
