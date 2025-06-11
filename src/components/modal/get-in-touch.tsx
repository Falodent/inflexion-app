"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import TextField from "../input/text-input";
import SelectDropdown from "../input/select-input";
import clsx from "clsx";
import Button from "../button";
import SuccessModal from "./success-modal";
import { useEffect, useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  monthVolume: string;
  interests: string[];
  challenge: string;
};

const interestsOptions = [
  "Real-time earnings call transcription",
  "Expert network call processing",
  "Building transcript libraries for resale",
  "Replacing current transcription provider",
  "General inquiry",
];

export default function GetInTouch({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    handleClose();
    setIsSuccess(true);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[200] px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-[90vh] max-h-[988px] bg-white rounded-[18px] w-full max-w-[368px] md:max-w-[810px] px-5 lg:p-16 lg:pr-4 lg:pl-10 relative py-16">
              <motion.div
                className="h-full overflow-y-auto flex flex-col gap-12.5 pr-2 lg:pr-12 relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <button
                  className="absolute right-0 top-0 lg:right-13 text-black cursor-pointer hover:scale-105 transition-all ease-in-out z-10 bg-white"
                  onClick={handleClose}
                >
                  <X size={48} strokeWidth={1} />
                </button>

                <div className="flex flex-col gap-4">
                  <h2 className="max-w-[270px] md:max-w-[400px] text-[48px] md:text-[62px] font-[700] leading-none -tracking-[0.03em] text-black-100">
                    Get in touch with us
                  </h2>

                  <p className="font-[500] text-lg md:text-xl -tracking-[0.02em] text-[#5C626F]">
                    Schedule a 1:1 session with an expert from our team to learn
                    more.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-14">
                  <TextField
                    label="Name"
                    register={register("name", {
                      required: "Name is required",
                    })}
                    error={errors.name?.message}
                    placeholder="Your First Name and Last Name"
                  />

                  <TextField
                    label="Email"
                    type="email"
                    register={register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    error={errors.email?.message}
                    placeholder="Your company email"
                  />

                  <TextField
                    label="Company"
                    register={register("company", {
                      required: "Company is required",
                    })}
                    error={errors.company?.message}
                    placeholder="Your company"
                  />

                  <TextField
                    label="Phone"
                    register={register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^\+?\d{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    error={errors.phone?.message}
                    placeholder="+1234567890"
                  />

                  <Controller
                    name="monthVolume"
                    control={control}
                    rules={{ required: "Please select a monthly audio volume" }}
                    render={({ field }) => (
                      <SelectDropdown
                        label="Monthly Audio Volume"
                        placeholder="Select monthly audio volume"
                        options={[
                          { value: "low", label: "Less than 10 hours" },
                          { value: "medium", label: "10 - 50 hours" },
                          { value: "high", label: "50+ hours" },
                        ]}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.monthVolume?.message}
                      />
                    )}
                  />

                  <fieldset>
                    <legend className="text-xl leading-none font-[700] -tracking-[0.03em] text-black-100 mb-8">
                      Primary Interest
                    </legend>

                    <div className="flex flex-col gap-7">
                      {interestsOptions.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center gap-2 md:gap-6 cursor-pointer text-lg md:text-xl font-[500] leading-none -tracking-[0.01em] text-black-100"
                        >
                          <input
                            type="checkbox"
                            value={interest}
                            {...register("interests", {
                              validate: (value) =>
                                value.length > 0 ||
                                "Select at least one interest",
                            })}
                            className="h-5 w-5 border-2 border-black cursor-pointer"
                          />
                          {interest}
                        </label>
                      ))}

                      {errors.interests && (
                        <p className="text-sm text-red-500 -mt-3">
                          {errors.interests.message}
                        </p>
                      )}
                    </div>
                  </fieldset>

                  <div className={`flex flex-col gap-7`}>
                    <label className="text-xl leading-none font-[700] -tracking-[0.03em] text-black-100">
                      Current Challenge
                    </label>

                    <textarea
                      {...register("challenge", {
                        required: "Please describe your current challenge",
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters required",
                        },
                      })}
                      placeholder="Tell us about your transcription needs..."
                      className={clsx(
                        "w-full border border-[#C5C5C5] rounded-lg p-4 md:p-6 resize-none focus:outline-none focus:border-blue-100",
                        "text-lg md:text-xl leading-none -tracking-[0.01em] text-black-100 placeholder:text-[#03030380]"
                      )}
                      rows={3}
                    />

                    {errors.challenge && (
                      <p className="text-sm text-red-500 -mt-3">
                        {errors.challenge.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-start">
                    <Button type="submit">
                      <span>SUBMIT REQUEST</span>
                      <MoveRight />
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SuccessModal
        isOpen={isSuccess}
        handleClose={() => setIsSuccess(false)}
      />
    </>
  );
}
