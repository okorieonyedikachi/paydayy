import React from "react";
import Image from "next/image";
import account from "@/assets/card_6.feffc91a.webp";
import card from "@/assets/card_2.a21ed352.png";
import { Button } from "@/components/ui/button";
import sendMoney from "@/assets/send-money.36a36528.svg";
import payMoney from "@/assets/paid.54d1e64a.svg";
import andriod from "@/assets/android.6c54dd0a.svg";
import ios from "@/assets/ios.73ce1a72.svg";

const CreateAccountSection = () => {
  return (
    <div className="w-10/12">
      <section className="bg-black flex rounded-2xl mt-20">
        <div className="w-9/12 m-auto flex justify-between items-center pt-8 max-sm:flex-col">
          <div className="text-primary flex-1">
            <p className="text-xl font-semibold">Pro accounts</p>
            <h1 className="text-4xl font-bold mt-10 flex flex-col max-sm:text-2xl">
              Create {"\n"}
              <span className="text-green-100">International Accounts</span>
            </h1>
            <p className="mt-10 text-lg font-medium">
              Create and manage multiple foreign accounts
            </p>
            <ul className="flex gap-2">
              <li className="bg-primary text-black w-10 rounded-lg px-6 flex justify-center">
                USD
              </li>
              <li className="bg-primary text-black w-10 rounded-lg px-6 flex justify-center">
                EUR
              </li>
              <li className="bg-primary text-black w-10 rounded-lg px-6 flex justify-center">
                GBP
              </li>
              <li className="bg-primary text-black w-10 rounded-lg px-6 flex justify-center">
                NGN
              </li>
            </ul>
            <div className="w-6/12 mt-10">
              <Button>Download Paydayy</Button>
            </div>
          </div>
          <Image
            src={account}
            alt="account"
            width={300}
            className="max-sm:mt-10"
          ></Image>
        </div>
      </section>
      <section className="bg-gray-50 mt-10 rounded-2xl lg:py-20">
        <div className="w-9/12 m-auto flex justify-between items-center pt-8 max-sm:flex-col">
          <div className="text-black flex-1">
            <p className="text-md font-semibold">Shop on the go</p>
            <h1 className="text-4xl font-bold mt-10 flex flex-col max-sm:text-2xl">
              Mastercard for all your {"\n"}
              <span className="text-green-800">online purchases</span>
            </h1>
            <p className="my-10 text-lg font-medium">
              Create and manage multiple foreign accounts
            </p>
            <div className="w-6/12 mt-15">
              <Button variant="secondary">Download Paydayy</Button>
            </div>
          </div>
          <Image
            src={card}
            alt="account"
            width={400}
            className="max-sm:mt-10"
          ></Image>
        </div>
      </section>
      <section className="flex mt-10 gap-6 max-sm:flex-col">
        <div className="bg-gray-50 text-secondary rounded-2xl flex flex-col items-center p-10 py-20 max-sm:p-5">
          <Image src={sendMoney} alt="send-money-icon" width={150}></Image>
          <h2 className="font-semibold text-3xl mt-5">
            Send cash to family & friends
          </h2>
          <p className="tracking-wider mt-5 text-left w-11/12 max-sm:w-full">
            Who remembers long account numbers anymore? Just use the Payday $tag
          </p>
        </div>
        <div className="bg-black text-primary rounded-2xl flex flex-col items-center p-10 py-20 max-sm:p-5">
          <Image src={payMoney} alt="pay-money-icon" width={150}></Image>
          <h2 className="font-semibold text-3xl mt-5">
            Get paid by foreign employers
          </h2>
          <p className="tracking-wider mt-5 text-left w-11/12 max-sm:w-full">
            Freelancer, remote worker or corporate employee? Get your payments
            in seconds!
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center p-10 mt-10 bg-black rounded-2xl max-sm:flex-col">
        <div className="flex-1 text-primary">
          <h2 className="text-4xl max-sm:text-2xl font-bold">
            What are you waiting for? Download the Payday app & get started now!
          </h2>
        </div>
        <div className="flex flex-1 justify-center max-sm:mt-3">
          <Image src={ios} alt="apple-store-icon"></Image>
          <Image src={andriod} alt="google-playstore"></Image>
        </div>
      </section>
    </div>
  );
};

export default CreateAccountSection;
