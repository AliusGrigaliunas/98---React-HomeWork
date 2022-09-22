import React from 'react';
import fetchedData from 'services/products';
import { ItemProps } from 'Types/ItemProps';

export type ItemContextValue = {
    Items: ItemProps[],
    deleteItem: (id:number) => void,
};

const ItemContext = React.createContext({} as ItemContextValue);

export const ItemContextProvider: React.FC<{ children:React.ReactNode }> = ({ children }) => {
    const [Items, setItem] = React.useState<ItemProps[]>([]);

    React.useEffect(() => {
        (async () => {
            const fetchedInfo = await fetchedData.fetchData();

            setItem(fetchedInfo);
        })();
    }, []);

     const deleteItem = (id:number) => {
      const NewItems = Items.filter((Item) => Item.id !== id);
      setItem(NewItems);
    };

    const ItemContextValue:ItemContextValue = React.useMemo(
() => ({ Items, deleteItem }),
     [Items, deleteItem],
);

  return (
    <ItemContext.Provider
      value={ItemContextValue}
    >
      {children}

    </ItemContext.Provider>
  );
};

export default ItemContext;
