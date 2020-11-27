import React from "react";
import CompleteButton from "./CompleteButton";
import ConfirmButton from "./ConfirmButton";

export default function ContractorButton(props) {
  
  const {order} = props;
 return <>
 {order.status === "pending" ? <ConfirmButton order={order} onclick={props.onConfirm}/> :
 <CompleteButton order={order} onclick={props.onComplete}/>}
 </>
}
