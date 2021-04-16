import ListItem from "../ListItem";


export default function List({ items }: IListProps) {
  const listItems = items.map((item) => <ListItem key={item.id} {...item} />);
  return <div className="list">{listItems}</div>;
}
