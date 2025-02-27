"use client";
import React from "react";
import { SettingsCard } from "./SettingsCard";

export const HelpSection = () => {
  return (
    <div className="max-md:max-w-full">
      <div className="h-[60px]" />
      <SettingsCard title="Help Center">
        <div className="flex flex-col justify-center py-px w-full text-sm tracking-normal leading-6 text-black bg-white">
          <div className="flex items-start py-4 pr-4 pl-4 w-full">
            <p className="overflow-hidden pr-px min-w-60 w-[472px]">
              Frequently Asked Questions
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between px-5 py-3.5 w-full bg-gray-100 rounded-none">
          <div className="flex gap-2.5">
            <div className="flex justify-center items-center min-h-[17px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/1e681ae38cfd8cf9ae4e7cffce57ea1f76b52678e21ca8308f69e0a2bf00a764?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto aspect-square w-[17px]"
                alt=""
              />
            </div>
            <p className="text-sm leading-normal text-black basis-auto">
              Search questions here
            </p>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/c18aec8fd86ece567921f4a7feaba6c21c3e1cc74847e4b2519b7667343fe241?placeholderIfAbsent=true"
            className="object-contain shrink-0 my-auto w-4 aspect-[1.78]"
            alt=""
          />
        </div>
      </SettingsCard>

      <section className="px-4 pt-4 pb-10 mt-7 bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
        <h2 className="py-1.5 max-w-full text-2xl font-bold leading-none text-neutral-500 w-[416px]">
          Contact Us
        </h2>
        <div className="flex flex-col items-start pr-2 mt-4 w-full text-sm text-black">
          <p className="z-10 -mt-2.5 text-2xl leading-none text-gray-400">
            We are here to help
          </p>
          <p className="py-1 mt-6 max-w-full font-semibold w-[390px]">
            Directly contact Aigen&apos;s support team
          </p>
          <div className="flex flex-col items-start self-stretch px-3.5 pt-3.5 pb-1 w-full leading-none rounded-lg bg-stone-50">
            <div className="flex gap-3 items-start py-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/603b08e7c9f46712680d81af2e46c6dc865cb1e2aa7f5bf2003e9790660aad47?placeholderIfAbsent=true"
                className="object-contain shrink-0 mt-0 w-6 aspect-square"
                alt=""
              />
              <p>(855) 737-7645</p>
            </div>
          </div>
          <p className="pt-px pb-2 mt-7 max-w-full font-semibold w-[390px]">
            Chat Live
          </p>
          <div className="flex gap-10 self-stretch px-3.5 py-2 w-full leading-none rounded-lg bg-stone-50">
            <div className="flex flex-auto gap-3 items-start py-0.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/7001b68d0454337ceee76f350aa7d52bdc14f442915e51e9de01d9608e93df30?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt=""
              />
              <p>We are avaliable Monday to Friday, 09:00–17:00</p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/44b9dfb648938856617974af122cceea3cf7e4914721f8e85d180abcb4a7544e?placeholderIfAbsent=true"
              className="object-contain shrink-0 my-auto aspect-[0.56] w-[9px]"
              alt=""
            />
          </div>
          <p className="pt-px pb-2 mt-7 max-w-full font-semibold w-[390px]">
            Ask a Question
          </p>
          <div className="flex gap-10 self-stretch px-3.5 pt-2.5 pb-1 w-full leading-none rounded-lg bg-stone-50">
            <div className="flex flex-auto gap-3.5 items-start px-px pb-1.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/19f878db9e8aa386d7df132b9b65dc9d0f71acfafdba81addade21096fb525db?placeholderIfAbsent=true"
                className="object-contain shrink-0 aspect-square w-[21px]"
                alt=""
              />
              <p>Fill out our form and we&apos;ll get back to you in 24 hours.</p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/44b9dfb648938856617974af122cceea3cf7e4914721f8e85d180abcb4a7544e?placeholderIfAbsent=true"
              className="object-contain shrink-0 my-auto aspect-[0.56] w-[9px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}; 