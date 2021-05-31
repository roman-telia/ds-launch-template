import {
  TeliaCol,
  TeliaLink,
  TeliaRow,
  TeliaP,
  TeliaTextSpacing,
  TeliaSelect,
  TeliaToggle,
} from "@teliads/components/react";
import React from "react";

const AccountSettingsForm = () => {
  return (
    <TeliaRow>
      <TeliaCol width={3}>
        <TeliaTextSpacing>
          <TeliaP variant="subsection">Email</TeliaP>
          <TeliaP variant="subsection">Password</TeliaP>
          <TeliaP variant="subsection">Language</TeliaP>
          <TeliaP variant="subsection">Send receipts to e-mail</TeliaP>
          <TeliaP variant="subsection">Send e-mails about offers</TeliaP>
        </TeliaTextSpacing>
      </TeliaCol>
      <TeliaCol width={3}>
        <TeliaTextSpacing>
          <TeliaP variant="paragraph-200">minna@email.com</TeliaP>
          <TeliaLink>Change password</TeliaLink>
        </TeliaTextSpacing>
        <TeliaSelect name="language">
            {["Swedish", "Norvegian", "Lithuanian", "Latvia", "Danish", "Finnish", "Estonian", "English"].map((language) => {
                return (<option key={language} value={language}>{language}</option>)
            })}
        </TeliaSelect>
        <TeliaToggle name="reciepts" checked={true} />
        <TeliaToggle name="offers" checked={false} />
      </TeliaCol>
    </TeliaRow>
  );
};

export default AccountSettingsForm;
