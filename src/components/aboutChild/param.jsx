import React from "react";
import { useParams } from "react-router-dom";

export function Param() {
  const { param } = useParams();

  return <div>natija {param}</div>;
}
