import { useState } from "react";
import {
  IconArrowRight,
  IconCard,
  IconClose,
  IconPlus,
} from "../../icon-family";
import { Dialog } from "@headlessui/react";
import Styles from "./styles.module.css";
import Image from "next/image";

export const SettingsMyCards = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
    }, 3000);
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <>
          <div>
            <IconCard color="#FB6D3A" />
            Meus Cartões
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
          <Dialog.Panel className={Styles.modal}>
            <Dialog.Title
              as="h2"
              className="mb-8 flex justify-between items-center"
            >
              <div>Meus Cartões (1)</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <ul>
              <li>
                <button className={Styles.button}>
                  <IconPlus color="#000" />
                </button>
              </li>
              <li>
                <button className={`${Styles.button} ${Styles.cardButton}`}>
                  <div>
                    <div>
                      <Image
                        src="/card-chip.png"
                        width="20"
                        height="24"
                        alt="Chip do Cartão"
                      />
                      <p>1211</p>
                    </div>
                    <div>
                      <h3>Mastercard</h3>
                      <p>Platinum</p>
                      <div>
                        <Image
                          src="/card-logo-mastercard.png"
                          width="39"
                          height="24"
                          alt="Mastercard"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
