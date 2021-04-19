const InitialState: IListItem[] = [
  {
    id: 1,
    text: "my first to-do item",
    date: ` ${new Date().toLocaleTimeString()}  
              ${new Date().toLocaleDateString()}`,
    isDone: false,
  },
];

export default InitialState;
