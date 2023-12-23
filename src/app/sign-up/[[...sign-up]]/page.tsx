import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
