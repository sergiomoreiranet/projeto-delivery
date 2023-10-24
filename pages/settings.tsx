import type { NextPage } from "next";
import {
  PageTemplate,
  Button,
  SettingsUpdateProfile,
  SettingsMarketingPreferences,
  SettingsSavedAddress,
  SettingsMyCards,
  SettingsPaymentMethods,
  SettingsSupport,
  SettingsDiscounts,
  SettingsInviteFriend,
} from "../components";
import Styles from "../styles/settings.module.css";

const Settings: NextPage = () => {
  return (
    <PageTemplate
      title="Configurações - Nibble"
      description="Configurações do usuário no Nibble"
    >
      <div className={Styles.container}>
        <h1>Configurações</h1>
        <p>Geral</p>
        <ul>
          <li>
            <SettingsUpdateProfile />
          </li>
          <li>
            <SettingsSavedAddress />
          </li>
          <li>
            <SettingsMarketingPreferences />
          </li>
        </ul>
        <p>Pagamentos</p>
        <ul>
          <li>
            <SettingsPaymentMethods />
          </li>
          <li>
            <SettingsMyCards />
          </li>
        </ul>
        <p>Outros</p>
        <ul>
          <li>
            <SettingsSupport />
          </li>
          <li>
            <SettingsInviteFriend />
          </li>
          <li>
            <SettingsDiscounts />
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Settings;
