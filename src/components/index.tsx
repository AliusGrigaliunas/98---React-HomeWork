import { Grid } from '@mui/material';
import ItemContext from 'contexts/ItemContext';
import React, { useContext } from 'react';
import ItemCard from './Item-Card';

const MainCard:React.FC = () => {
  const { Items, deleteItem } = useContext(ItemContext);
  return (
    <Grid container sx={{ gap: 10 }}>
      {Items.map((Item) => (
        <ItemCard
          id={Item.id}
          deleteItem={deleteItem}
          image={Item.image}
          price={Item.price}
          title={Item.title}
        />
        ))}
    </Grid>

  );
};

export default MainCard;
