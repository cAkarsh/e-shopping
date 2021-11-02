import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './product-item.module.css';

const Item: React.FC<any> = (props) => {
  const data = props;

  const handleClick = () => {
    props.addProductToCart(data);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component='img'
        height='140'
        image={data.image}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='subtitle1' component='div'>
          <div className={classes.product_title}> {data.title} </div>
        </Typography>
        <Typography component={'span'} variant='body2' color='text.secondary'>
          <div className={classes.product_description}>{data.description}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size='small'>
          Add to cart {props.cartItems}
        </Button>
        <Button size='small'>Buy now</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
