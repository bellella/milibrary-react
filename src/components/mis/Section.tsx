import { Div, DivInterface, createMi } from "@milibrary/mi-style";

export interface SectionInterface extends DivInterface { };

export const Section = createMi<SectionInterface>({
  tagName: <Div />,
  styles: [],
  css: {
    position: 'relative',
    width: '100%',
  }
});