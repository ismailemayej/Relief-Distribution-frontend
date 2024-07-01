import { useCallback } from "react";
import SocialLogin from "react-social-login";

const SocialButton = ({ children, triggerLogin, ...props }: any) => {
  const handleLogin = useCallback(() => {
    triggerLogin();
  }, [triggerLogin]);

  return (
    <button onClick={handleLogin} {...props}>
      {children}
    </button>
  );
};

export default SocialLogin(SocialButton);
