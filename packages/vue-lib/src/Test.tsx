import { defineComponent, type PropType } from "vue";

export const ThroughPoints = defineComponent({
  name: "ThroughPoints",
  props: {
    color: {
      type: String,
      default: "red",
      required: false,
    },
    lineStyle: {
      type: String as PropType<"solid" | "dashed">,
      default: "solid",
      required: false,
      validator(prop: string) {
        return ["solid", "dashed"].includes(prop);
      },
    },
    weight: {
      type: Number,
      default: 2,
      required: true,
    },
    opacity: {
      type: Number,
      default: 1.0,
      required: false,
    },
  },
  setup(props) {
    return () => <div></div>;
  },
});
