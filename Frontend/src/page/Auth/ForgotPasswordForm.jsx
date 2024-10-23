import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

function ForgotPasswordForm() {
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div px-10 py-2>
      <h1 className="text-xl font-bold text-center pb-3">Reset Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    // name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter registred email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <Button type="submit" className="w-full py-5">
              Submit
            </Button>
          
        </form>
      </Form>
    </div>
  )
}

export default ForgotPasswordForm