import { createApp } from "vue";
import App from "./App.vue";

import { version } from "./../package.json" assert { type: "json" };

console.log(`%cblot %cv${version}`, "font-weight: 800;", "font-weight: 400");

// App mounting.
createApp(App).mount("#app");
