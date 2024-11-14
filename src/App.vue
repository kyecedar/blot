<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

// const greetMsg = ref("");
// const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  // greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <link rel="stylesheet" type="text/css" href="/css/reset.css" />
  <link rel="stylesheet" type="text/css" href="/css/fonts.css" />

  <div id="titlebar">
    <div data-tauri-drag-region id="titlebartitle">hound.</div>
    <div data-tauri-drag-region id="titlebarspacer"></div>
    <div id="titlebarbuttons">
      <div id="windowminimize" class="windowbutton"></div>
      <div id="windowmaximize" class="windowbutton"></div>
      <div id="windowclose" class="windowbutton"></div>
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
        <div id="dayscrawl"></div>
        <div id="scrawlspot"></div>
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
<style>
:root {
  font-family: Geist;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  user-select: none;
  color: #202020;

  --padding: 9px;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
}

#titlebar {
  display: flex;
  flex-direction: row;
  position: relative;

  height: 32px;
  width: 100%;
}

#titlebartitle {
  margin: auto 10px;
  font-weight: 900;
}

#titlebarspacer {
  flex-grow: 1;
}

#titlebarbuttons {
  display: flex;
  flex-direction: row;
  gap: 1px;
}

.windowbutton {
  width: 44px;
  height: 100%;
  cursor: pointer;
}

.windowbutton:hover {
  background: red;
}

main {
  display: flex;
  flex-grow: 1;
  position: relative;

  width: 100vw;
}

#content {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  position: relative;

  height: calc(100% - var(--padding) * 2);
  max-width: calc(100% - var(--padding) * 2);
  margin: auto auto;
}

#sidebar {
  width: 280px;
  height: 100%;
}

#resizer {
  position: relative;
  padding: 0 var(--padding);
  height: 100%;
  cursor: col-resize;
}

#resizerline {
  width: 2px;
  height: 100%;
  background-color: #e0e0e0;
}

#workarea {
  flex-grow: 1;
  height: 100%;
}
</style>
