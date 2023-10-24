import { useState } from "react";
import {
  IconArrowRight,
  IconSupport,
  IconClose,
  IconMail,
  IconDocument,
  IconPhone,
} from "../../icon-family";
import { Dialog } from "@headlessui/react";
import Styles from "./styles.module.css";

export const SettingsSupport = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <>
          <div>
            <IconSupport color="#503E9D" />
            Suporte
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
              <div>Suporte</div>
              <button onClick={() => setIsOpen(false)}>
                <IconClose color="#A3A3A4" />
              </button>
            </Dialog.Title>

            <ul>
              <li>
                <button>
                  <div className={Styles.purple}>
                    <IconMail color="#503E9D" />
                  </div>
                  <div>
                    <h3>CHAT AO VIVO</h3>
                    <p>
                      Waiting time: <strong>5 min</strong>
                    </p>
                  </div>
                  <IconArrowRight color="#A3A3A4" size={16} />
                </button>
              </li>
              <li>
                <button>
                  <div className={Styles.orange}>
                    <IconDocument color="#FB6D3A" />
                  </div>
                  <div>
                    <h3>FAQ</h3>
                    <p>182 Park Row Street, Suite 8</p>
                  </div>
                  <IconArrowRight color="#A3A3A4" size={16} />
                </button>
              </li>
              <li>
                <div>
                  <div className={Styles.yellow}>
                    <IconPhone color="#FACD5D" />
                  </div>
                  <div>
                    <h3>TELEFONE</h3>
                    <p>+1 (987) 1234 098</p>
                  </div>
                </div>
              </li>
            </ul>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
