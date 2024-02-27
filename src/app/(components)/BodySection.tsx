import send from "@/assets/send.e835f036.webp";
import spend from "@/assets/spend.cd683ed8.webp";
import bank from "@/assets/bank.0f1ceb86.webp";
import invest from "@/assets/invest.d469556b.webp";
import Image from "next/image";
import CreateAccountSection from "./CreateAccountSection";
const list = [
  {
    image: send,
    title: "Send",
    description: "Send & receive money globally in seconds.",
  },
  {
    image: spend,
    title: "Spend",
    description: "Virtual master card that fits your digital life.",
  },
  {
    image: bank,
    title: "Bank",
    description: "Own multiple international accounts.",
  },
  {
    image: invest,
    title: "Invest",
    description: "Buy crypto with as little as $1.",
  },
];

const BodySection = () => {
  return (
    <div className="lg:mt-40 max-sm:mt-10 flex flex-col items-center">
      <div className="w-10/12 flex items-center max-sm:flex-wrap">
        {list.map((item, i) => (
          <div
            key={i}
            className="max-sm:w-6/12 flex flex-col items-center mb-6"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              className="max-sm:w-[120px]"
            ></Image>
            <h1 className="text-3xl max-sm:text-xl  font-semibold">
              {item.title}
            </h1>
            <p className="tracking-wide text-wrap text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <CreateAccountSection />
    </div>
  );
};

export default BodySection;
