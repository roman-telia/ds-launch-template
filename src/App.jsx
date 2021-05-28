import React from "react";
import {
  TeliaGrid,
  TeliaRow,
  TeliaCol,
  TeliaHeading,
  TeliaP,
  TeliaTab,
  TeliaTabContent,
  TeliaTextInput,
  TeliaSelect,
  TeliaFieldset,
  TeliaRadioButton,
  TeliaTextSpacing,
  TeliaIcon,
  TeliaButton,
  TeliaCheckbox,
} from "@teliads/components/react";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="mainSection">
          <TeliaGrid>
            <TeliaRow>
              <TeliaCol width={7}>
                <TeliaTextSpacing>
                  <TeliaHeading variant="title-600" tag="h1">
                    My account
                  </TeliaHeading>
                  <TeliaP variant="preamble-200">
                    Find all the information related to your account here. You
                    can edit your settings and preferences.
                  </TeliaP>
                </TeliaTextSpacing>
                <TeliaTextSpacing>
                  <TeliaHeading variant="title-400" tag="h2">
                    Personal information
                  </TeliaHeading>
                  <TeliaP variant="paragraph-200">
                    You can edit your account information any time. Save a
                    delivery and payment information for easy future use.
                  </TeliaP>
                </TeliaTextSpacing>
              </TeliaCol>
            </TeliaRow>
          </TeliaGrid>
          <TeliaTab background={true}>
            <TeliaTabContent active name="Delivery information">
              <TeliaRow>
                <TeliaCol width={6}>
                  <TeliaTextSpacing>
                    <TeliaIcon name="delivery" />
                    <TeliaHeading tag="h3" variant="title-200">
                      Add delivery address
                    </TeliaHeading>
                    <TeliaP variant="paragraph-100">
                      Edit your delivery information here.
                    </TeliaP>
                  </TeliaTextSpacing>
                  <form>
                    <TeliaRow>
                      <TeliaCol width={12}>
                        <TeliaSelect
                          selectId="countrySelect"
                          label="Country"
                          required={true}
                          name="country"
                        >
                          {[
                            "Denmark",
                            "Estonia",
                            "Finland",
                            "Latvia",
                            "Lithuania",
                            "Norway",
                            "Sweden",
                            "",
                          ].map((option) => {
                            return (
                              <option key={option} vlaue={option}>
                                {!option ? "Select country" : option}
                              </option>
                            );
                          })}
                        </TeliaSelect>
                      </TeliaCol>
                      <TeliaCol width={12}>
                        <TeliaTextInput
                          name="street"
                          variant="text"
                          required={true}
                          label="Street adress"
                        />
                      </TeliaCol>
                      <TeliaCol width={12}>
                        <TeliaTextInput
                          name="city"
                          variant="text"
                          required={true}
                          label="City"
                        />
                      </TeliaCol>
                      <TeliaCol width={6}>
                        <TeliaTextInput
                          name="zip"
                          variant="number"
                          required={true}
                          inputMode="numeric"
                          label="Zipcode"
                        />
                      </TeliaCol>
                      <TeliaCol width={6}>
                        <TeliaTextInput
                          name="state"
                          variant="text"
                          required={false}
                          label="State (optional)"
                        />
                      </TeliaCol>
                    </TeliaRow>
                    <TeliaRow>
                      <TeliaCol width={12}>
                        <TeliaFieldset className="text">
                          <legend>Billing address</legend>
                          <TeliaRadioButton
                            className="teliaRadioButton"
                            name="text"
                            value="Same as delivery address"
                            checked={true}
                          >
                            Same as delivery address
                          </TeliaRadioButton>
                          <TeliaRadioButton
                            className="teliaRadioButton"
                            name="text"
                            value="Different"
                          >
                            Different
                          </TeliaRadioButton>
                        </TeliaFieldset>
                      </TeliaCol>
                      <TeliaCol width={12}>
                        <TeliaButton type="submit" variant="primary">
                          Save changes
                        </TeliaButton>
                      </TeliaCol>
                    </TeliaRow>
                  </form>
                </TeliaCol>
              </TeliaRow>
            </TeliaTabContent>
            <TeliaTabContent name="Payment information">
              <TeliaRow>
                <TeliaCol width={6}>
                  <TeliaTextSpacing>
                    <TeliaIcon name="credit-card" />
                    <TeliaHeading tag="h3" variant="title-200">
                      Add credit card info
                    </TeliaHeading>
                    <TeliaP variant="paragraph-100">
                      Edit your payment information here.
                    </TeliaP>
                  </TeliaTextSpacing>
                  <form>
                    <TeliaRow>
                      <TeliaCol width={12}>
                        <TeliaTextInput
                          required={true}
                          name="name"
                          label="Name on the card"
                          type="text"
                        />
                      </TeliaCol>
                      <TeliaCol width={12}>
                        <TeliaTextInput
                          name="cardnumber"
                          variant="text"
                          required={true}
                          label="Card number"
                        />
                      </TeliaCol>
                      <TeliaCol width={6}>
                        <TeliaTextInput
                          name="expiration"
                          variant="text"
                          required={true}
                          label="Expiration date (mm/yyyy)"
                        />
                      </TeliaCol>
                      <TeliaCol width={6}>
                        <TeliaTextInput
                          name="cvv"
                          variant="text"
                          required={false}
                          label="CVV number"
                        />
                      </TeliaCol>
                    </TeliaRow>
                    <TeliaRow>
                      <TeliaCol width={12}>
                        <TeliaCheckbox name="remember">
                          Remember card detaild
                        </TeliaCheckbox>
                      </TeliaCol>
                      <TeliaCol width={12}>
                        <TeliaButton type="submit" variant="primary">
                          Save changes
                        </TeliaButton>
                      </TeliaCol>
                    </TeliaRow>
                  </form>
                </TeliaCol>
              </TeliaRow>
            </TeliaTabContent>
            <TeliaTabContent icon="settings" name="Account settings">
              <TeliaRow>
                <TeliaCol width="12" width-md="8" width-lg="5"></TeliaCol>
              </TeliaRow>
            </TeliaTabContent>
          </TeliaTab>
          <TeliaGrid>
            <TeliaRow>
              <TeliaCol width={12}>
                <TeliaHeading variant="title-400" tag="h3">Order history</TeliaHeading>
                <TeliaP variant="paragraph-100">Check the status of your orders.</TeliaP>
              </TeliaCol>
            </TeliaRow>
          </TeliaGrid>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
