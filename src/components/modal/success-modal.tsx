import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MoveRight, X } from "lucide-react";
import Button from "../button";

const SuccessModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[200] px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={clsx(
              "h-[85vh] max-h-[678px] bg-white rounded-[18px] w-full max-w-[368px] md:max-w-[810px]",
              "py-16 px-5 lg:pt-32 lg:pb-8 lg:px-14 relative overflow-y-auto flex flex-col md:flex-row items-start gap-[46px]"
            )}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className="absolute right-10 top-10 text-black cursor-pointer hover:scale-105 transition-all ease-in-out"
              onClick={handleClose}
            >
              <X size={48} strokeWidth={1} />
            </button>

            <CalendarCheck
              size={64}
              strokeWidth="1"
              className="text-blue-100 shrink-0"
            />

            <div className="flex flex-col gap-14">
              <h2 className="max-w-[400px] text-[48px] md:text-[62px] font-[700] leading-none -tracking-[0.03em] text-black-100">
                Thanks for your interest!
              </h2>

              <div className="flex flex-col gap-4 font-[500] text-lg md:text-xl -tracking-[0.02em] text-[#5C626F]">
                <p>
                  Thanks for reaching out — you&apos;re one step closer to
                  transforming your transcription workflow.
                </p>
                <p>
                  We&apos;ll be in touch soon to get your session scheduled.
                </p>
              </div>

              <div className="flex justify-start">
                <Button handleClick={handleClose}>
                  <span>RETURN TO WEBSITE</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
