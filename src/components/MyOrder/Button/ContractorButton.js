import React from "react";
import CompleteButton from "./CompleteButton";
import ConfirmButton from "./ConfirmButton";

export default function ContractorButton(props) {
  const {onConfirm, onComplete, status} = props;
 return <>
 {status === "pending" ? <ConfirmButton onclick={onConfirm}/> :
 <CompleteButton status={status} onclick={onComplete}/>}
 </>
}
