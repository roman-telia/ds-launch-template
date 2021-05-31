import React from "react";
import {
  TeliaRow,
  TeliaCol,
  TeliaHeading,
  TeliaP,
  TeliaTab,
  TeliaTabContent,
  TeliaTextSpacing,
  TeliaIcon,
} from "@teliads/components/react";
import "./App.scss";
import Header from "./components/Header/Header";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Footer from "./components/Footer/Footer";
import AccountInformation from "./components/AccountInformation/AccountInformation";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import DeliveryAddressForm from "./components/DeliveryAddressForm/DeliveryAddressForm";
import AccountSettingsForm from "./components/AccountSettingsForm/AccountSettingsForm";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="mainSection">
          <AccountInformation />
          <TeliaTab background={true}>
            <TeliaTabContent active name="Delivery information">
              <TeliaRow>
                <TeliaCol width={6}>
                  <TeliaTextSpacing>
                    <TeliaHeading tag="h3" variant="title-200">
                      <TeliaIcon name="delivery" />
                      Add delivery address
                    </TeliaHeading>
                    <TeliaP variant="paragraph-100">
                      Edit your delivery information here.
                    </TeliaP>
                  </TeliaTextSpacing>
                  <DeliveryAddressForm />
                </TeliaCol>
              </TeliaRow>
            </TeliaTabContent>
            <TeliaTabContent name="Payment information">
              <TeliaRow>
                <TeliaCol width={6}>
                  <TeliaTextSpacing>
                    <TeliaHeading tag="h3" variant="title-100">
                      <TeliaIcon name="credit-card" />
                      Add credit card info
                    </TeliaHeading>
                    <TeliaP variant="paragraph-100">
                      Edit your payment information here.
                    </TeliaP>
                  </TeliaTextSpacing>
                  <CreditCardForm />
                </TeliaCol>
              </TeliaRow>
            </TeliaTabContent>
            <TeliaTabContent name="Account settings">
              <TeliaRow>
                <TeliaCol width={12}>
                  <TeliaTextSpacing>
                    <TeliaHeading tag="h3" variant="title-200">
                      <TeliaIcon name="settings" />
                      Edit account settings
                    </TeliaHeading>
                    <TeliaP variant="paragraph-100">
                      Edit your account details and notifications preferences.
                    </TeliaP>
                  </TeliaTextSpacing>
                  <AccountSettingsForm />
                </TeliaCol>
              </TeliaRow>
            </TeliaTabContent>
          </TeliaTab>
          <OrderHistory />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
