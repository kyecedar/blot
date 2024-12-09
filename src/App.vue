<!-- #region // SETUP -->

<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import {
  create,
  exists,
  writeTextFile,
  BaseDirectory,
} from "@tauri-apps/plugin-fs";

// const greetMsg = ref("");
// const name = ref("");

// async function greet() {
// // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
// greetMsg.value = await invoke("greet", { name: name.value });
// }

import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

const minimizeApp = () => {
  appWindow.minimize();
};

const maximizeApp = () => {
  appWindow.toggleMaximize();
};

const closeApp = () => {
  appWindow.close();
};
</script>
<!-- #endregion SETUP -->

<!-- #region // WINDOW -->
<template>
  <div id="titlebar">
    <div data-tauri-drag-region id="titlebartitle">blot.</div>
    <div data-tauri-drag-region id="titlebarspacer"></div>
    <div id="titlebarbuttons">
      <div
        id="windowminimize"
        class="windowbutton svg-icon"
        @click="minimizeApp"
      ></div>
      <div
        id="windowmaximize"
        class="windowbutton svg-icon"
        @click="maximizeApp"
      ></div>
      <div
        id="windowclose"
        class="windowbutton svg-icon"
        @click="closeApp"
      ></div>
    </div>
  </div>

  <main>
    <div id="content">
      <div id="sidebar">
        <div id="sidebartop"></div>
        <div id="timers"></div>
        <div id="sidebarbottom"></div>
      </div>
      <div id="resizer"><div id="resizerline"></div></div>
      <div id="workarea">
        <ul id="daynotes"></ul>
        <ul id="foreshore"></ul>
      </div>
    </div>
  </main>
  <!-- <main class="container">
    <h1>Welcome to Tauri + Vue</h1>

    <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <form class="row" @submit.prevent="greet">
      <input id="greet-input" v-model="name" placeholder="Enter a name..." />
      <button type="submit">Greet</button>
    </form>
    <p>{{ greetMsg }}</p>
  </main> -->
</template>

<style scoped>
/* .logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
} */
</style>

<style></style>
<!-- #endregion WINDOW -->
