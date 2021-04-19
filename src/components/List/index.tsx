import React from "react";
import ListItem from "../ListItem";

export default function List({ items }: IListProps) {
  const listItems = items.map((item) => <ListItem key={item.id} {...item} />);
  return listItems.length > 0 ? (
    <div className="list">{listItems}</div>
  ) : (
    <h3>No todo...</h3>
  );
}
