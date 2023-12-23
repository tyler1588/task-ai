import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn />
    </div>
  );
};

export default LoginPage;
