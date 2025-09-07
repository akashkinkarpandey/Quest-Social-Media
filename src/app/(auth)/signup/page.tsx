import signupImage from "@/assets/signup-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="flex h-full max-h-[44rem] w-full max-w-[72rem] overflow-hidden rounded-3xl bg-white/90 shadow-2xl backdrop-blur-lg">
        {/* Right Image */}
        <div className="relative hidden w-1/2 md:block">
          <Image
            src={signupImage}
            alt="Sign up illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="animate-fadeIn absolute bottom-8 left-8 max-w-xs text-white">
            <h2 className="text-2xl font-bold">Welcome to Quest ✨</h2>
            <p className="text-sm text-gray-200">
              Find friends, build connections, and explore communities like
              never before.
            </p>
          </div>
        </div>
        {/* Left Content */}
        {/* Left Content */}
        <div className="flex w-full flex-col justify-center p-10 md:w-1/2">
          <div className="animate-fadeIn mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Create your account
            </h1>
            <p className="text-gray-600">
              Join{" "}
              <span className="text-xl font-bold text-purple-600">Quest</span>{" "}
              and start your journey today.
            </p>
          </div>

          {/* Keep form + errors independent */}
          <div className="animate-fadeIn">
            <SignUpForm />
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-indigo-600 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
