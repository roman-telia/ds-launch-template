import {
  TeliaHeading,
  TeliaTextSpacing,
  TeliaP,
  TeliaColorDot,
} from "@teliads/components/react";
import React from "react";
import "./OrderHistoryItem.scss";

const OrderHistoryItem = () => {
  return (
    <div className="orderHistoryItem">
      <TeliaTextSpacing>
        <div className="wrapper">
          <TeliaHeading tag="h3" variant="title-100">
            Order number 04183471591
          </TeliaHeading>
          <div className="innerWrapper">
            <TeliaColorDot color="#26BB6F" />
            <TeliaP variant="paragraph-100">Delivered</TeliaP>
          </div>
          <TeliaP variant="paragraph-100">25.05.2021</TeliaP>
        </div>
      </TeliaTextSpacing>
    </div>
  );
};

export default OrderHistoryItem;
