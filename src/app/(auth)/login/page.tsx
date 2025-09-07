import loginImage from "@/assets/login-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="flex h-full max-h-[44rem] w-full max-w-[72rem] overflow-hidden rounded-3xl bg-white/90 shadow-2xl backdrop-blur-lg">
        {/* Left Content */}
        <div className="flex w-full flex-col justify-center space-y-10 p-10 md:w-1/2">
          <div className="animate-fadeIn space-y-3 text-center">
            <h1>Welcome Back!</h1>
            <p className="text-gray-600">
              Log in to{" "}
              <span className="font-semibold text-purple-600">Quest</span> and
              continue your journey.
            </p>
          </div>

          <div className="animate-slideUp space-y-6">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>
            <LoginForm />
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-indigo-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden w-1/2 md:block">
          <Image
            src={loginImage}
            alt="Login illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="animate-fadeIn absolute bottom-8 left-8 max-w-xs text-white">
            <h2 className="text-2xl font-bold">Quest Awaits 🚀</h2>
            <p className="text-sm text-gray-200">
              Pick up where you left off and explore communities full of amazing
              people.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
