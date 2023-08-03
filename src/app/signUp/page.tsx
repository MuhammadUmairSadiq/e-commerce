import SignupFormComp from "@/component/views/signup";
import ContextWrapper from "@/global/Context";

const SignupForm = () => {
  return (
    <ContextWrapper>
      <SignupFormComp />
    </ContextWrapper>
  );
};

export default SignupForm;
