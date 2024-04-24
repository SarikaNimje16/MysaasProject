import React from "react";
import { Text, Heading, Img, Button } from "./..";

export default function DesktopFooterl({
  effortlessly = "Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.",
  product = "Product",
  featuresOne = "Features",
  integrations = "Integrations",
  updatesOne = "Updates",
  faq = "FAQ",
  pricing = "Pricing",
  company = "Company",
  aboutOne = "About",
  blog = "Blog",
  careers = "Careers",
  manifesto = "Manifesto",
  press = "Press",
  contact = "Contact",
  resources = "Resources",
  examples = "Examples",
  community = "Community",
  guides = "Guides",
  docs = "Docs",
  legal = "Legal",
  privacy = "Privacy",
  terms = "Terms",
  security = "Security",
  ...props
}) {
  return (
    <div {...props}>
      <div className="my-8 ml-3 flex w-[20%] flex-col gap-[111px] md:ml-0 md:w-full md:gap-[83px] sm:gap-[55px]">
        <div className="flex flex-col gap-5">
          <Button size="md" shape="square" className="w-[40px]">
            <Img src="images/img_logosaas.svg" />
          </Button>
          <Text as="p" className="!text-gray-400">
            {effortlessly}
          </Text>
        </div>
        <div className="flex gap-[11px]">
          <Img src="images/img_socials.svg" alt="socials_one" className="h-[24px] w-[24px]" />
          <Img src="images/img_socials_gray_600.svg" alt="socials_three" className="h-[24px] w-[24px]" />
          <Img src="images/img_socials_gray_600_24x24.svg" alt="socials_five" className="h-[24px] w-[24px]" />
          <Img src="images/img_socials_24x24.svg" alt="socials_seven" className="h-[24px] w-[24px]" />
          <Img src="images/img_socials_1.svg" alt="socials_nine" className="h-[24px] w-[24px]" />
          <Img src="images/img_socials_2.svg" alt="socials_eleven" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="flex w-[36%] items-start justify-between gap-5 md:w-full">
        <div className="flex flex-col items-start gap-5">
          <Heading size="xs" as="h1" className="!text-white-A700">
            {product}
          </Heading>
          <ul className="flex flex-col items-start gap-5">
            <li>
              <a href="Features" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {featuresOne}
                </Text>
              </a>
            </li>
            <li>
              <a href="Integrations" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {integrations}
                </Text>
              </a>
            </li>
            <li>
              <a href="Updates" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {updatesOne}
                </Text>
              </a>
            </li>
            <li>
              <a href="FAQ" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {faq}
                </Text>
              </a>
            </li>
            <li>
              <a href="Pricing" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {pricing}
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[18px]">
          <Heading size="xs" as="h2" className="!text-white-A700">
            {company}
          </Heading>
          <ul className="flex flex-col items-start gap-[19px]">
            <li>
              <a href="About" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {aboutOne}
                </Text>
              </a>
            </li>
            <li>
              <a href="Blog" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {blog}
                </Text>
              </a>
            </li>
            <li>
              <a href="Careers" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {careers}
                </Text>
              </a>
            </li>
            <li>
              <a href="Manifesto" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {manifesto}
                </Text>
              </a>
            </li>
            <li>
              <a href="Press" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {press}
                </Text>
              </a>
            </li>
            <li>
              <a href="Contact" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {contact}
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[21px]">
          <Heading size="xs" as="h2" className="!text-white-A700">
            {resources}
          </Heading>
          <ul className="flex flex-col items-start gap-[19px]">
            <li>
              <a href="Examples" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {examples}
                </Text>
              </a>
            </li>
            <li>
              <a href="Community" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {community}
                </Text>
              </a>
            </li>
            <li>
              <a href="Guides" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {guides}
                </Text>
              </a>
            </li>
            <li>
              <a href="Docs" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {docs}
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[19px]">
          <Heading size="xs" as="h2" className="!text-white-A700">
            {legal}
          </Heading>
          <ul className="flex flex-col items-start gap-5">
            <li>
              <a href="Privacy" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {privacy}
                </Text>
              </a>
            </li>
            <li>
              <a href="Terms" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {terms}
                </Text>
              </a>
            </li>
            <li>
              <a href="Security" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-gray-600_01">
                  {security}
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
