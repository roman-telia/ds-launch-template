import React from "react";
import {
  TeliaButton,
  TeliaRow,
  TeliaCol,
  TeliaTextInput,
  TeliaSelect,
  TeliaFieldset,
  TeliaRadioButton,
} from "@teliads/components/react";

const DeliveryAddressForm = () => {
  return (
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
  );
};

export default DeliveryAddressForm;
