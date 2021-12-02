import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./product-item.module.css";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default class Item extends React.Component<any, { quantity: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  data = this.props;

  StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  addItemToCartHandler = () => {
    this.props.addItemToCart(this.data);
  };

  removeProductFromCartHandler = () => {
    this.props.removeProductFromCart(this.data);
  };

  removeItemFromCartHandler = () => {
    this.props.removeItemFromCart(this.data);
  };

  componentDidUpdate(prevProps: any) {
    if (prevProps.quantity !== this.props.quantity) {
      this.setState({
        quantity: this.props.quantity,
      });
    }
  }

  render() {
    return (
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={this.data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            <div className={classes.product_title}> {this.data.title} </div>
          </Typography>
          <Typography component={"span"} variant="body2" color="text.secondary">
            <div className={classes.product_description}>
              {this.data.description}
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          {this.props.addedToCart ? (
            <div className={classes.card_actions}>
              <Button
                variant="outlined"
                onClick={this.removeProductFromCartHandler}
                size="small"
              >
                Remove
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup size="small" aria-label="small button group">
                  <Button onClick={this.removeItemFromCartHandler} key="remove">
                    -
                  </Button>
                  <Button onClick={this.addItemToCartHandler} key="add">
                    +
                  </Button>
                </ButtonGroup>
              </Box>
              <IconButton aria-label="cart">
                <this.StyledBadge
                  badgeContent={this.state.quantity}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </this.StyledBadge>
              </IconButton>
            </div>
          ) : (
            <Button
              className={classes.card_actions}
              variant="contained"
              disableElevation
              onClick={this.addItemToCartHandler}
              size="small"
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}
