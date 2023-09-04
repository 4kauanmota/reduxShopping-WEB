// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";

import CartItem from "../cart-item";
import { selectProductsPrice } from "../../redux/cart/selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsPrice = useSelector(selectProductsPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
        <Styles.CartTotal>Total: R${productsPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
