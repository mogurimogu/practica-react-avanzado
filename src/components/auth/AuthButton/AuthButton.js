import { Link } from 'react-router-dom';
import useStoreData from '../../../hooks/useStoreData';
import useStoreAction from '../../../hooks/useStoreAction';
import { getIsLogged } from '../../../store/selectors';
import { authLogout } from '../../../store/actions';

import { ConfirmationButton } from '../../common';

const AuthButton = () => {
  const isLogged = useStoreData(getIsLogged)
  const authLogoutAction = useStoreAction(authLogout)

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={authLogoutAction}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};
export default AuthButton;
