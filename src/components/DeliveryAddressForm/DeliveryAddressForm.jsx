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
import './DeliveryAddressForm.scss';

const DeliveryAddressForm = () => {
  return (
    <form>
      <TeliaRow>
        <TeliaCol width={12} className="input-col">
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
                  {!option ? "Choose..." : option}
                </option>
              );
            })}
          </TeliaSelect>
        </TeliaCol>
        <TeliaCol width={12} className="input-col">
          <TeliaTextInput
            name="street"
            variant="text"
            required={true}
            label="Street adress"
          />
        </TeliaCol>
        <TeliaCol width={12} className="input-col">
          <TeliaTextInput
            name="city"
            variant="text"
            required={true}
            label="City"
          />
        </TeliaCol>
        <TeliaCol width={6} className="input-col">
          <TeliaTextInput
            name="zip"
            variant="number"
            required={true}
            inputMode="numeric"
            label="Zipcode"
          />
        </TeliaCol>
        <TeliaCol width={6} className="input-col">
          <TeliaTextInput
            name="state"
            variant="text"
            required={false}
            label="State (optional)"
          />
        </TeliaCol>
      </TeliaRow>
      <TeliaRow>
        <TeliaCol width={12} className="input-col">
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
        <TeliaCol width={12} className="button-col">
          <TeliaButton type="submit" variant="primary">
            Save changes
          </TeliaButton>
        </TeliaCol>
      </TeliaRow>
    </form>
  );
};

export default DeliveryAddressForm;
