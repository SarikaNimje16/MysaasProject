import React, { useState } from "react";
import { Button, Text, Img } from "./..";

export default function DesktopNavbardesktop({
  madeby = "made by",
  about = "About",
  features = "Features",
  customers = "Customers",
  updates = "Updates",
  help = "Help",
  getForFree = "Get for free",
  ...props
}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const closeMenuOnMobile = () => {
  //   if (window.innerWidth <= 1150) {
  //     setShowMenu(false);
  //   }
  // };

  return (
    <div {...props}>
      <div className="mx-auto my-1 w-full max-w-[1169px] items-center justify-between gap-5 md:flex-col sm:h-48 sm:hidden block">
        <div className="flex items-center gap-2">
          <Img
            src="images/img_logo_default.png"
            alt="logodefault_one"
            className="h-[41px] w-[40px] object-cover sm:items-start"
          />
          <Text as="p" className="mb-2.5 self-end">
            {madeby}
          </Text>

          <div className="flex items-center gap-2">
            <Img
              src="images/img_user.svg"
              alt="user_one"
              className="h-[21px]"
            />
            <Img
              src="images/img_settings.svg"
              alt="settings_one"
              className="h-[9px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 sm:flex-col sm:hidden">
          <Text
            size="md"
            as="p"
            className="tracking-[-0.16px] !text-black-900_99"
          >
            {about}
          </Text>
          <Text
            size="md"
            as="p"
            className="tracking-[-0.16px] !text-black-900_99"
          >
            {features}
          </Text>
          <Text
            size="md"
            as="p"
            className="tracking-[-0.16px] !text-black-900_99"
          >
            {customers}
          </Text>
          <Text
            size="md"
            as="p"
            className="mb-2 self-end tracking-[-0.16px] !text-black-900_99"
          >
            {updates}
          </Text>
          <Text
            size="md"
            as="p"
            className="mb-2 self-end tracking-[-0.16px] !text-black-900_99"
          >
            {help}
          </Text>
          <Button
            shape="round"
            className="min-w-[115px] font-medium tracking-[-0.32px]"
          >
            {getForFree}
          </Button>
        </div>
      </div>

      <div className="mx-auto my-1 flex w-full max-w-[1169px] justify-between gap-5 md:flex-col sm:h-48 hidden sm:block">
        <div className="flex gap-2">
          <Img
            src="images/img_logo_default.png"
            alt="logodefault_one"
            className="h-[41px] w-[40px] object-cover items-start"
          />
          <div
            className="flex items-end gap-6 relative left-72"
            onClick={toggleMenu}
          >
            <Img
              src="images/img_menu_icon.png"
              alt="menu"
              className="h-[21px]"
            />
          </div>
        </div>
        {showMenu ? (
          <div className="w-full bg-white">
            <ul className="w-full border p-5 text-center">
              <li className="border-b-2 h-6">{about}</li>
              <li className="border-b-2 h-6">{features}</li>
              <li className="border-b-2 h-6">{customers}</li>
              <li className="border-b-2 h-6">{updates}</li>
              <li className="border-b-2 h-6">{help}</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
