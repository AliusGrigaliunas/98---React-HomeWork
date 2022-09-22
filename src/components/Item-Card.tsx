import React from 'react';
import {
 Button, Grid, Paper, Typography,
} from '@mui/material';
import { ItemProps } from 'Types/ItemProps';
import { Box } from '@mui/system';

type ItemPropsExclusion = ItemProps & {
  deleteItem: (id:number) => void
};

const ItemCard:React.FC<ItemPropsExclusion> = ({
  deleteItem,
  image,
  price,
  title,
  id,
}) => (
  <Grid item>
    <Paper
      elevation={3}
      sx={{
        width: 300,
        height: 500,
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        }}
    >
      <Box>
        <img src={`${image}`} alt="" />
      </Box>
      <Box>
        {title}
      </Box>
      <Box>
        <Typography color="error" variant="h3">
          <span>&#8364;</span>
          {price}
        </Typography>
      </Box>
      <Button color="warning" onClick={() => deleteItem(id)}>
        Ištrint
      </Button>
    </Paper>
  </Grid>
  );

export default ItemCard;
