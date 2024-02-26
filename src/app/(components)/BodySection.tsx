import send from "@/assets/send.e835f036.webp";
import spend from "@/assets/spend.cd683ed8.webp";
import bank from "@/assets/bank.0f1ceb86.webp";
import invest from "@/assets/invest.d469556b.webp";
import Image from "next/image";
const list = [
  {
    image: "",
    title: "Send",
    description: "Send & receive money globally in seconds.",
  },
  {
    image: "",
    title: "Spend",
    description: "Virtual master card that fits your digital life.",
  },
  {
    image: "",
    title: "Bank",
    description: "Own multiple international accounts.",
  },
  {
    image: "",
    title: "Invest",
    description: "Buy crypto with as little as $1.",
  },
];

const BodySection = () => {
  return (
    <div className="lg:mt-40 max-sm:mt-10 flex flex-col items-center">
      <div className="bg-red-400 w-10/12 flex items-center max-sm:flex-wrap">
        {list.map((item, i)=>(
            <div className="bg-green-300 max-sm:w-6/12 flex flex-col items-center ">
          <Image
            src={send}
            alt="send"
            width={150}
            className="max-sm:w-[120px]"
          ></Image>
          <h1 className="text-3xl max-sm:text-xl  font-semibold">Send</h1>
          <p className="tracking-wider text-wrap text-center">
            Send & receive money globally in seconds
          </p>
        </div>
        )}
        
        
      </div>
    </div>
  );
};

export default BodySection;
