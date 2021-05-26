import React from "react";
import {
  TeliaGrid,
  TeliaRow,
  TeliaCol,
  TeliaHeading,
  TeliaP,
  TeliaTab,
  TeliaTabContent,
  TeliaLink,
  TeliaTextInput,
  TeliaSelect,
  TeliaFieldset,
  TeliaRadioButton,
} from "@teliads/components/react";
import "./App.css";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <section>
          <TeliaGrid>
            <TeliaRow>
              <TeliaCol width={12}>
                <TeliaHeading variant="title-600" tag="h1">
                  Title 600
                </TeliaHeading>
              </TeliaCol>
              <TeliaCol width={6}>
                <TeliaP variant="preamble-200">Preamble 200</TeliaP>
              </TeliaCol>
              <TeliaCol width={6}>
                <TeliaP variant="paragraph-200">Paragraph 200</TeliaP>
              </TeliaCol>
              <TeliaCol width={12}>
                <TeliaTab>
                  <TeliaTabContent name="Section 1">
                    <TeliaRow>
                      <TeliaCol width="12" width-md="8" width-lg="5">
                        <TeliaLink href="https://www.telia.fi">
                          www.telia.fi
                        </TeliaLink>
                        <form>
                          <TeliaRow>
                            <TeliaCol width={12}>
                              <TeliaSelect
                                selectId="countrySelect"
                                label="Select Telia Country"
                                required={true}
                                name="country"
                              >
                                {[
                                  "",
                                  "Denmark",
                                  "Estonia",
                                  "Finland",
                                  "Latvia",
                                  "Lithuania",
                                  "Norway",
                                  "Sweden",
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
                                name="city"
                                variant="text"
                                required={true}
                                label="City"
                              />
                            </TeliaCol>
                          </TeliaRow>
                          <TeliaRow>
                            <TeliaCol width={12}>
                              <TeliaFieldset width="12" className="text">
                                <legend>Text</legend>
                                <TeliaRadioButton className="teliaRadioButton" name="text" value="text1" checked={true}>Text1</TeliaRadioButton>
                                <TeliaRadioButton className="teliaRadioButton" name="text" value="text2">Text2</TeliaRadioButton>
                              </TeliaFieldset>
                            </TeliaCol>
                          </TeliaRow>
                        </form>
                      </TeliaCol>
                    </TeliaRow>
                  </TeliaTabContent>
                  <TeliaTabContent name="Header 2">
                    <TeliaLink href="http://telia.se">
                      Link to telia.se
                    </TeliaLink>
                    <TeliaHeading tag="h2" variant="title-300">
                      Skapa och flytta till en ny samlingsfaktura
                    </TeliaHeading>
                    <TeliaRow>
                      <TeliaCol width="12" width-md="8" width-lg="4">
                        <TeliaTextInput
                          type={"text"}
                          label={"First name"}
                          additional={"Additional description"}
                          name={"nameOnSubmit"}
                        />
                        <TeliaTextInput
                          type={"text"}
                          label={"Last name"}
                          additional={"Additional description"}
                          name={"nameOnSubmit"}
                        />
                      </TeliaCol>
                    </TeliaRow>
                    <TeliaHeading tag="h2" variant="title-300">
                      Other ways to get your PUK-code
                    </TeliaHeading>
                    <TeliaRow>
                      <TeliaCol width="12" width-md="8" width-lg="5">
                        <TeliaP>
                          Mercury is the smallest and innermost planet in the
                          Solar System. It is named after the Roman deity
                          Mercury, the messenger to the gods.
                        </TeliaP>
                        <TeliaP>
                          Mercury is the smallest and innermost planet in the
                          Solar System. It is named after the Roman deity
                          Mercury, the messenger to the gods.
                        </TeliaP>
                        <TeliaP>
                          Mercury is the smallest and innermost planet in the
                          Solar System. It is named after the Roman deity
                          Mercury, the messenger to the gods.
                        </TeliaP>
                      </TeliaCol>
                    </TeliaRow>
                  </TeliaTabContent>
                  <TeliaTabContent active icon="connected" name="Header 3">
                    <TeliaRow>
                      <TeliaCol width="12" width-md="8" width-lg="5"></TeliaCol>
                    </TeliaRow>
                  </TeliaTabContent>
                </TeliaTab>
              </TeliaCol>
              <TeliaCol width={6}></TeliaCol>
            </TeliaRow>
          </TeliaGrid>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
