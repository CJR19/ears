import Input from "./Input.vue";
import type { App } from "vue";
Input.install = function (app: App) {
    app.component(Input.name, Input);
};
export default Input;
export * from "./types";