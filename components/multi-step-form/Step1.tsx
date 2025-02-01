"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { userInput } from "@/app/multi-step-form/page";

const formStep1SchemaStep = z.object({
  name: z.string().min(2, { message: "This field is required." }),
  email: z
    .string()
    .min(1, { message: "This field is required." }) // Required check
    .email({ message: "Invalid email address." }), // Email format check

  phoneNumber: z
    .string()
    .min(1, { message: "This field is required." })
    .min(10, { message: "Invalid phone number." })
    .max(15, { message: "Invalid phone number." })
    .regex(/^\d+$/, { message: "Invalid phone number." }),
});
interface step1Props {
  setCurrentStep: (number: number) => void,
  userInput: userInput
  setUserInput: (userInput: userInput) => void,
}

const Step1 = ({setCurrentStep, userInput, setUserInput} : step1Props) => {
  const form = useForm<z.infer<typeof formStep1SchemaStep>>({
    resolver: zodResolver(formStep1SchemaStep),
    defaultValues: {
      name: userInput.name,
      email:  userInput.email ,
      phoneNumber: userInput.phoneNumber ,
    },
  });

  function onSubmit(values: z.infer<typeof formStep1SchemaStep>) {
    setCurrentStep(2)
    setUserInput({
      name:values.name,
      email:values.email,
      phoneNumber:values.phoneNumber
    })
    console.log(values);
  }

  return (
    <div className="absolute md:relative md:top-0 md:m-0 top-[100px] left-0 right-0 min-w-96 shadow-lg md:shadow-none md:min-h- bg-white w-[91.2%] text-left m-auto rounded-[10px] p-6 md:justify-between md:w-[550px]" >
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-[#02295a] font-bold">
                    Name
                  </FormLabel>
                  <FormMessage className="text-[#ed3548] font-semibold" />
                </div>
                <FormControl className="rounded-[10px] font-semibold text-[#02295a]  placeholder:text-gray-400 placeholder:font-medium">
                  <Input
                    className={`focus:border-[#534ba1] ${
                      form.formState.errors.name ? "border-red-400" : ""
                    } `}
                    placeholder="e.g Stephen King"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-[#02295a] font-bold">
                    Email
                  </FormLabel>
                  <FormMessage className="text-[#ed3548] font-semibold" />
                </div>
                <FormControl className="rounded-[10px] font-semibold text-[#02295a]  placeholder:text-gray-400 placeholder:font-medium">
                  <Input
                    className={`focus:border-[#534ba1] ${
                      form.formState.errors.email ? "border-red-400" : "border-gray-700"
                    } `}
                    placeholder="e.g stephen.king@example.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-[#02295a] font-bold">
                    Phone Number
                  </FormLabel>
                  <FormMessage className="text-[#ed3548] font-semibold" />
                </div>
                <FormControl className="rounded-[10px] font-semibold text-[#02295a]  placeholder:text-gray-400 placeholder:font-medium">
                  <Input
                    className={`focus:border-[#534ba1] ${
                      form.formState.errors.phoneNumber ? "border-[#ed3548]" : "border-gray-700"
                    } `}
                    placeholder="e.g +1 234 567 890"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white w-full flex justify-end h-20 p-4 items-center md:relative md:top-16 md:bg-transparent md:h-auto md:p-0">
            <Button
              type="submit"
              className="w-24 h-10 bg-[#012a5a] text-white rounded-[10px] hover:bg-[#174a8b] "
            >
              Next Step
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Step1;
