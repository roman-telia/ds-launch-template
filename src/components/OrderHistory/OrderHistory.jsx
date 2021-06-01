import React from "react";
import "./OrderHistory.scss";
import {
  TeliaGrid,
  TeliaCol,
  TeliaRow,
  TeliaHeading,
  TeliaP,
} from "@teliads/components/react";
import OrderHistoryItem from "../OrderHistoryItem/OrderHistoryItem";

const OrderHistory = () => {
  return (
    <TeliaGrid>
      <TeliaRow>
        <TeliaCol width={12} className="margin-col">
          <TeliaHeading variant="title-400" tag="h3">
            Order history
          </TeliaHeading>
          <TeliaP variant="paragraph-100">
            Check the status of your orders.
          </TeliaP>
        </TeliaCol>
        <TeliaCol width={6}>
          <OrderHistoryItem />
        </TeliaCol>
      </TeliaRow>
    </TeliaGrid>
  );
};

export default OrderHistory;
