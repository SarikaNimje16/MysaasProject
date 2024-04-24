import React from "react";
import { Text, Img } from "./..";

export default function DesktopTestimonial({
  asaseasoned = "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="md" as="p" className="leading-[23px] tracking-[-0.16px]">
        {asaseasoned}
      </Text>
      <div className="flex w-[78%] gap-2">
        <Img src={props.image}  alt="circleimage" className="h-[42px] w-[42px] rounded-[50%]" />
        <div className="flex flex-col items-start gap-0.5">
          <Text size="md" as="p" className="text-center !font-medium tracking-[-0.32px]">
            {props.alexrivera}
          </Text>
          <Text size="md" as="p" className="text-center tracking-[-0.16px]">
            {props.jamietechguruze}
          </Text>
        </div>
      </div>
    </div>
  );
}
