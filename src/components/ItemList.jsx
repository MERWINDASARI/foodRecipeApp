import Item from "./Item";

export default function ItemList({ details }) {
  return (
    <div>
      {details.extendedIngredients.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
