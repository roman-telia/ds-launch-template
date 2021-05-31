import React from "react";
import {
  TeliaRow,
  TeliaCol,
  TeliaTextInput,
  TeliaCheckbox,
  TeliaButton,
} from "@teliads/components/react";

const CreditCardForm = () => {
  return (
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
          <TeliaCheckbox name="remember">Remember card detaild</TeliaCheckbox>
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

export default CreditCardForm;
