<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="true"
      :floating="true"
      app
      overflow
    />
    <v-app-bar :clipped-left="true" app>
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="false" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //HelloWorld
  },
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    },
    appTitle: "TSC Ranking",
    footer: {
      inset: false
    }
  })
};
</script>
