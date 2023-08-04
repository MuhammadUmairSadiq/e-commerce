import SignInForm from "@/component/views/signin";
import ContextWrapper from "@/global/Context";

const SignIn = () => {
  return (
    <ContextWrapper>
      <SignInForm />
    </ContextWrapper>
  );
};

export default SignIn;
