import { Fragment, useState, useEffect } from "react";
import { IconArrowTopDown, IconTargetLocation } from "../icon-family";
import { Menu, Transition } from "@headlessui/react";

export function PickupFilter() {
  const [pickupModeSelected, setPickupModeSelected] = useState("");
  const pickupDefault = "Retirada";

  const pickupOptions = [
    {
      title: "Retirada",
    },
    {
      title: "Entrega",
    },
  ];

  const saveLocation = (location: string) => {
    setPickupModeSelected(location);
  };

  useEffect(() => {
    const updateLocation = () => {
      setPickupModeSelected(pickupDefault);
    };

    updateLocation();
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center w-full">
          <IconTargetLocation size={24} color="#503E9D" />
          {pickupModeSelected}
          <div className="flex">
            <IconArrowTopDown size={16} color="#000000" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-36 mt-2 bg-gray-100 shadow rounded-xl overflow-hidden">
          {pickupOptions.map((pickup, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  onClick={() => saveLocation(pickup.title)}
                  className={`${
                    active && "bg-gray-200 text-gray-600"
                  } py-2 px-4`}
                >
                  {pickup.title}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
