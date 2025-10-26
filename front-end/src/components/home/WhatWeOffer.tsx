import Image from "next/image";
import Link from "next/link";
import React from "react";
import shape1 from "@/images/icons/shape-1.webp";
import { OffersData, offersGridData } from "@/data/OffersData";

const WhatWeOffer = () => {
  return (
    <div className="bg-secondary-background relative py-[60px] md:py-[100px]">
      <div className="max-w-[720px] lg:max-w-full mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Side — Text Content */}
          <div className="relative">
            <div className="flex items-center mb-3">
              <p className="text-base uppercase text-paragraph">
                What We Offer
              </p>
            </div>

            <h2 className="font-lexends text-4xl md:text-5xl font-bold text-foreground mb-[50px]">
              Everything You Need to Shape Your Future
            </h2>

            {/* Offer Items */}
            <div className="space-y-8 mb-10">
              {OffersData.map((offer, index) => (
                <div className="flex items-start gap-5" key={index}>
                  <div className="flex-shrink-0 h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    <offer.icon className="text-[#DD0733]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {offer.title}
                    </h3>
                    <p className="text-paragraph text-sm">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/apply"
              className="inline-block bg-primary hover:bg-tertiary text-white font-medium px-8 py-3 rounded-full transition"
            >
              Get Started
            </Link>

            <div className="absolute -bottom-5 right-5">
              <Image src={shape1} alt="Decorative" />
            </div>
          </div>

          {/* Right Side — Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* offer images */}
            {offersGridData.map((offer) => (
              <div key={offer.id} className="odd:pt-[25px]">
                <div className="relative">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    className="w-full object-cover"
                  />
                  <div className="absolute -bottom-[15%] right-[5%]">
                    <h3 className="text-[96px] font-lexends font-bold text-white">
                      {String(offer.id).padStart(2, "0")}
                    </h3>
                  </div>
                </div>
                <div className="relative p-5 bg-white">
                  <h4 className="text-[22px] font-lexends font-bold text-foreground">
                    {offer.title}
                  </h4>
                  <Link
                    href={offer.link}
                    className="text-primary relative font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
