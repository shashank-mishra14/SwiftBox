import { SignIn } from "@clerk/nextjs";
import React from "react";
export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />;
    </div>
  );
}
