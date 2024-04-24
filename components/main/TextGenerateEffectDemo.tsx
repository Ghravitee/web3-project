"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Who is Detective Penguin you ask? Well, he's not your average birdbrain. With a beak for clues and a wing for adventure, he's the feathered Sherlock Holmes of the crypto world. With each trade, you're not just buying into a coin, you're joining a gang of crypto detectives who aren't afraid to waddle into the wildest financial escapades. 
`;



const textWhite = `text-white`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words}  />;
}
