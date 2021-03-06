/* eslint-disable */

import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = ({endpoint, uuid}) => {

  const url = uuid ? endpoint + "/" + uuid : endpoint;

  return (
    <SwaggerUI url={url} docExpansion="list" />
  );
};

export default ApiDocs;
