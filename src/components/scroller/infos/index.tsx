import Info from "@/components/info";
import {
  BookCheck,
  BookOpenCheck,
  IdCard,
  ScanEye,
  ScanText,
} from "lucide-react";
import { useState } from "react";

const Infos = () => {
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);

  return (
    <>
      <Info
        position="-top-7 left-[348px]"
        dropPosition="-bottom-22 -right-50"
        delay={0.3}
        title="Self-Correcting Accuracy"
        content="Real-time verification against 15,000+ company database"
        handleEnter={() => setShowTwo(true)}
      >
        <BookOpenCheck size={20} />
      </Info>

      {showTwo && (
        <Info
          position="top-32 left-[410px]"
          dropPosition="-bottom-25"
          delay={0.8}
          title="Finance Metadata"
          content="Identifies tickers, executives, products, and financial figures instantly"
          handleEnter={() => setShowThree(true)}
        >
          <ScanEye size={20} />
        </Info>
      )}

      {showThree && (
        <Info
          position="top-[50%] transform -translate-y-[50%] left-[485px]"
          delay={1.3}
          title="Speaker Attribution"
          content="Names, titles, and roles tagged automatically while staying GDPR compliant voice fingerprinting"
          handleEnter={() => setShowFour(true)}
        >
          <IdCard size={20} />
        </Info>
      )}

      {showFour && (
        <Info
          position="bottom-30 left-[430px]"
          dropPosition="top-0"
          delay={1.8}
          title="Contextual Processing"
          content={`EBITDA isn't "a bit da" - our AI knows finance terminology`}
          handleEnter={() => setShowFive(true)}
        >
          <ScanText size={20} />
        </Info>
      )}

      {showFive && (
        <Info
          position="-bottom-8 left-[345px]"
          dropPosition="-top-24"
          delay={2.3}
          title="Live Glossary"
          content="Continuously updated dictionaries for industry jargon and emerging terms"
        >
          <BookCheck size={20} />
        </Info>
      )}
    </>
  );
};

export default Infos;
