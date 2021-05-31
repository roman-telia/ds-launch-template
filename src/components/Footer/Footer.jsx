import React from "react";
import {
  TeliaGrid,
  TeliaCol,
  TeliaRow,
  TeliaLink,
  TeliaP,
  TeliaHeading,
  TeliaTextSpacing,
} from "@teliads/components/react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <TeliaGrid>
        <TeliaRow>
          <TeliaCol width={12}>
            <TeliaTextSpacing>
              <TeliaHeading tag="h4" variant="title-100">
                Contact us
              </TeliaHeading>
              <TeliaP>
                Slack channel : <TeliaLink>#design-system</TeliaLink>
              </TeliaP>
              <TeliaP>
                {" "}
                Slack group for designers:{" "}
                <TeliaLink>#telia_global_design</TeliaLink>
              </TeliaP>
            </TeliaTextSpacing>
          </TeliaCol>
        </TeliaRow>
      </TeliaGrid>
    </footer>
  );
};

export default Footer;
