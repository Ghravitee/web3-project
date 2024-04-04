"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Built On The Solid Foundation Of Base, Book Of Meme Enjoys The Benefits Of A Secure, Scalable, And User-Friendly Blockchain. This Paw-Some Memecoin Is Designed To Be Accessible To Everyone, From Seasoned Crypto Traders To Newcomers Who Are Just Starting Their Journey In The World Of Digital Assets. 
`;



const textWhite = `text-white`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words}  />;
}
