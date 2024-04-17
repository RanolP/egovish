import { Preview } from "@storybook/react";
import egovishLight from "./themes/egovish-light";

const preview: Preview = {
  parameters: {
    docs: {
      theme: egovishLight,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
