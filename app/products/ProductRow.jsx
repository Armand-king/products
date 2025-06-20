/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function ProductRow({ product }) {
  const style = product.stocked ? { color: 'blue' } : { color: 'red' };

  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
