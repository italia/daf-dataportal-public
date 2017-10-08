import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DafOpenMap from "../components/DafOpenMap";

storiesOf("DafOpenMap", module).add("Dataset", () => (
  <DafOpenMap
    url={"http://localhost:9009/example_dataset.json"}
    lat={"enteBeneficiario.geoLat"}
    lng={"enteBeneficiario.geoLng"}
  />
));
