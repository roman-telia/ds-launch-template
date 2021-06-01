import React from "react";
import {
  TeliaGrid,
  TeliaCol,
  TeliaRow,
  TeliaTextSpacing,
  TeliaHeading,
  TeliaP,
} from "@teliads/components/react";
import './AccountInformation.scss';

const AccountInformation = () => {
  return (
    <TeliaGrid>
      <TeliaRow>
        <TeliaCol width={7} className="text-col">
          <TeliaTextSpacing>
            <TeliaHeading variant="title-600" tag="h1">
              My account
            </TeliaHeading>
            <TeliaP variant="preamble-200">
              Find all the information related to your account here. You can
              edit your settings and preferences.
            </TeliaP>
          </TeliaTextSpacing>
          <TeliaTextSpacing>
            <TeliaHeading variant="title-400" tag="h2">
              Personal information
            </TeliaHeading>
            <TeliaP variant="paragraph-200">
              You can edit your account information any time. Save a delivery
              and payment information for easy future use.
            </TeliaP>
          </TeliaTextSpacing>
        </TeliaCol>
      </TeliaRow>
    </TeliaGrid>
  );
};

export default AccountInformation;
