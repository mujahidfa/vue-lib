import { defineComponent, type PropType } from "vue";

export type CoolButtonColor = "red" | "blue";

export interface CoolButtonProps {
  color: CoolButtonColor;
}

export const CoolButton = defineComponent({
  name: "CoolButton",
  props: {
    color: {
      type: String as PropType<CoolButtonColor>,
      default: "red",
      required: false,
      validator(prop: string) {
        return ["red", "blue"].includes(prop);
      },
    },
  },
  setup(props, { slots }) {
    return () => (
      <button style={{ backgroundColor: props.color }}>
        {slots.default?.()}
      </button>
    );
  },
});
