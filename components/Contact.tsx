import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

//? Define the types
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {
  pageInfo:PageInfo
};

function Contact({pageInfo}: Props) {
  // ? use register, handleSubmit from useForm in react-hook-form library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  //? onSubmit is our handler and use the submit handler from the library for validation
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    (window.location.href = `mailto:oscar.w.ergun@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}. 
    The reason i am trying to reach you because of ${data.message} and my email is ${data.email}`);
  return (
    <div className="h-screen relative text-center md:text-left flex items-center justify-center">
      <h3 className="subtitle">Contact</h3>
      <div>
        <div className="flex flex-col mt-40">
          <h4 className="flex flex-col text-center text-3xl tracking-wider my-5">
            I am ready for new challenge...
            <span className="underline decoration-yellow-500 tracking-wider text-3xl">
              Let&apos;s talk
            </span>
          </h4>
          <div className="flex items-center gap-4 justify-center my-2 tracking-wider text-slate-400">
            <PhoneIcon className="h-8 w-8 text-yellow-500" />
            <p className="text-2xl ">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center gap-4 justify-center my-2 tracking-wider text-slate-400">
            <EnvelopeIcon className="h-8 w-8 text-yellow-500" />
            <p className="text-2xl ">{pageInfo.email}</p>
          </div>
          <div className="flex items-center gap-4 justify-center my-2 tracking-wider text-slate-400">
            <MapPinIcon className="h-8 w-8 text-yellow-500" />
            <p className="text-2xl ">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-fit mx-auto my-4"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="inputContact"
              placeholder="Name"
            />{" "}
            <input
              {...register("email")}
              type="email"
              className="inputContact"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            className="inputContact"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="inputContact"
            placeholder="Message"
          />
          <motion.button
            initial={{ width: 200 }}
            whileHover={{ width: 500 }}
            transition={{ duration: 0.5 }}
            type="submit"
            className="bg-yellow-400/90 px-3 py-4 outline-none rounded-md
          uppercase text-black text-2xl font-bold flex items-center justify-center gap-3
          "
          >
            Send <ChevronDoubleRightIcon className="h-6" />
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
