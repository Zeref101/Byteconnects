"use client";
import React, { FormEvent } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomAuth from "@/components/auth-buttons/CustomAuth";
import HorizontalLine from "@/components/horizontal-line/HorizontalLine";
import googleImage from "@/public/google.png";
import appleImage from "@/public/apple.png";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types";
const formSchema = z.object({
  Username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Invalid email address",
  }),
  Password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Page = () => {
  const { emailSignUp, signInWithGoogle, loading } =
    useAuth() as AuthContextType;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Username: "",
      Email: "",
      Password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      if (emailSignUp)
        await emailSignUp(values.Username, values.Email, values.Password);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className=" w-[550px] flex justify-center items-start flex-col gap-4">
      <h1 className="text-[30px] font-semibold leading-[42px] tracking-tighter mb-16 text-[#eee]">
        Get Started Now
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full pb-4"
        >
          <FormField
            control={form.control}
            name="Username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#eee] text-[14px] font-medium leading-[25.2px]">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className=" border-white bg-transparent  focus:border-none focus:outline-none text-[#eee] placeholder-white"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#eee] text-[14px] font-medium leading-[25.2px]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className=" border-white bg-transparent  focus:border-none focus:outline-none text-[#eee]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#eee] text-[14px] font-medium leading-[25.2px]">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className=" border-white bg-transparent  focus:border-none focus:outline-none text-[#eee]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" bg-[#9747ff] hover:bg-[#9d55fbbf] font-bold w-full"
          >
            Submit
          </Button>
        </form>
      </Form>
      <HorizontalLine />
      <div className=" w-full flex gap-2 mt-10 justify-center items-center">
        <CustomAuth
          name="Google"
          redirectUrl=""
          image={googleImage}
          signingMethod="up"
          handleClick={signInWithGoogle}
        />
        <CustomAuth
          name="Apple"
          redirectUrl=""
          image={appleImage}
          signingMethod="up"
          handleClick={signInWithGoogle}
        />
      </div>
      <p className=" w-full flex items-center justify-center gap-2.5 mt-4 text-[16px] font-normal leading-[22.4px] text-white">
        Have an account?{" "}
        <Link href={"/sign-in"} className=" text-blue-700 font-semibold">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Page;
