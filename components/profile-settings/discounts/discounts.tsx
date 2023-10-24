import { useState } from "react";
import { IconArrowRight, IconVoucher, IconClose } from "../../icon-family";
import { Dialog } from "@headlessui/react";
import Styles from "./styles.module.css";

export const SettingsDiscounts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <>
          <div>
            <IconVoucher color="#FACD5D" />
            Descontos
          </div>
          <IconArrowRight color="#A3A3A4" size={16} />
        </>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex bg-black/25 items-center justify-center p-4">
          <Dialog.Panel className="w-[400px] p-8 rounded-2xl bg-white">
            <Dialog.Title
              as="h2"
              className="mb-8 flex justify-between items-center"
            >
              <div>Descontos</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <ul className={Styles.discounts}>
              <li className={Styles.purple}>
                <div>
                  <h3>KL7L24</h3>
                  <p>* válido até 30 Set. 2022</p>
                </div>
              </li>
              <li className={Styles.orange}>
                <div>
                  <h3>AQ1P7O</h3>
                  <p>* válido até 15 Nov. 2022</p>
                </div>
              </li>
            </ul>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
