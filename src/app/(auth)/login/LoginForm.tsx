"use client";

import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/PasswordInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { login } from "./actions";

export default function LoginForm() {
  const [error, setError] = useState<string>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginValues) {
    setError(undefined);
    startTransition(async () => {
      const { error } = await login(values);
      if (error) setError(error);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="animate-fadeIn space-y-3 rounded-xl bg-white/70 p-6 shadow-lg backdrop-blur-md"
      >
        {error && (
          <p className="animate-shake text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  className="border-black-300 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-700">
                Password
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="Enter your password"
                  className="border-black-300 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          loading={isPending}
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white shadow-md transition hover:bg-indigo-700"
        >
          Log in
        </LoadingButton>
      </form>
    </Form>
  );
}
