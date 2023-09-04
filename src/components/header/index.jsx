import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCounts } from "../../redux/cart/selectors";
import { userLogin, userLogout } from "../../redux/user/slice";
import { selectUser } from "../../redux/user/selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const productsCount = useSelector(selectProductsCounts);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(userLogin({ name: "Kauan", email: "4kauanmota@gmail.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(userLogout());
  };

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {user ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        {console.log(user)}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
