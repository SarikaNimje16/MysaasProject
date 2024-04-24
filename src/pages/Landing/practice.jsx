import React from "react";

const practice = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
      <div className="flex w-full flex-col items-start sm:w-full">
          <Img
            src="images/img_icons_black_900_24x24.svg"
            alt="image"
            className="h-[24px] w-[24px]"
          />
          <Heading
            as="h3"
            className="mt-[11px] tracking-[-0.56px] !text-black-900"
          >
            Integration ecosystem
          </Heading>
          <div className="mt-[7px] flex flex-col items-start gap-2.5 self-stretch">
            <Text
              size="md"
              as="p"
              className="leading-[23px] tracking-[-0.16px]"
            >
              <>
                Track your progress and motivate
                <br />
                your efforts everyday.
              </>
            </Text>
            <div className="flex gap-1 rounded-[10px]">
              <a href="#">
                <Text size="md" as="p" className="tracking-[-0.16px]">
                  Learn more
                </Text>
              </a>
              <Img
                src="images/img_icons_black_900.svg"
                alt="learn_more_one"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>


        <div className="absolute bottom-0 left-0 right-0 m-auto flex h-max w-[32%] flex-col items-start justify-center sm:py-5">
          <Img
            src="images/img_icons_1.svg"
            alt="icons_five"
            className="h-[24px] w-[24px]"
          />
          <Heading
            as="h5"
            className="mt-[11px] tracking-[-0.56px] !text-black-900"
          >
            Goal setting and tracking
          </Heading>
          <div className="mt-[7px] flex flex-col items-start gap-2.5 self-stretch">
            <Text
              size="md"
              as="p"
              className="leading-[23px] tracking-[-0.16px]"
            >
              <>
                Set and track goals with
                <br />
                manageable task breakdowns.
              </>
            </Text>
            <div className="flex gap-1 rounded-[10px]">
              <a href="#">
                <Text size="md" as="p" className="tracking-[-0.16px]">
                  Learn more
                </Text>
              </a>
              <Img
                src="images/img_icons_black_900.svg"
                alt="icons_seven"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[9px] sm:w-full">
          <Img
            src="images/img_icons_24x24.svg"
            alt="icons_one"
            className="h-[24px] w-[24px]"
          />
          <Heading as="h4" className="tracking-[-0.56px] !text-black-900">
            Secure data encryption
          </Heading>
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            <Text
              size="md"
              as="p"
              className="leading-[23px] tracking-[-0.16px]"
            >
              <>
                Ensure your data’s safety with top-
                <br />
                tier encryption.
              </>
            </Text>
            <div className="flex gap-1 rounded-[10px]">
              <a href="#">
                <Text size="md" as="p" className="tracking-[-0.16px]">
                  Learn more
                </Text>
              </a>
              <Img
                src="images/img_icons_black_900.svg"
                alt="icons_three"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>

        <div className="flex w-[24%] flex-col items-start justify-center gap-[9px] py-10 md:w-full sm:py-5">
          <Img
            src="images/img_icons_2.svg"
            alt="icons_nine"
            className="h-[24px] w-[24px]"
          />
          <Heading as="h6" className="tracking-[-0.56px] !text-black-900">
            Customizable notifications
          </Heading>
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            <Text
              size="md"
              as="p"
              className="leading-[23px] tracking-[-0.16px]"
            >
              <>
                Get alerts on tasks and deadlines
                <br />
                that matter most.
              </>
            </Text>
            <div className="flex gap-1 rounded-[10px]">
              <a href="#">
                <Text size="md" as="p" className="tracking-[-0.16px]">
                  Learn more
                </Text>
              </a>
              <Img
                src="images/img_icons_black_900.svg"
                alt="icons_eleven"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default practice;
