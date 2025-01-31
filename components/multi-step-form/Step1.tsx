"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formStep1SchemaStep = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

const Step1 = () => {
  const form = useForm<z.infer<typeof formStep1SchemaStep>>({
    resolver: zodResolver(formStep1SchemaStep),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formStep1SchemaStep>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="absolute md:relative md:top-0 top-[100px] left-0 right-0 shadow-lg bg-white w-[91.2%] m-auto rounded-[10px] p-6">
      <div className="flex flex-col gap-3 mb-4">
        <h2 className="text-[#02295a] text-2xl font-extrabold">
          Personal info
        </h2>
        <p className="text-[#9699ab] font-light">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#02295a] font-bold">Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g Stephen King" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#02295a] font-bold">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="e.g stephen.king@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#02295a] font-bold">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g +1 234 567 890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Step1;
