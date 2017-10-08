import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/DafOpenMap.js");
}

configure(loadStories, module);
