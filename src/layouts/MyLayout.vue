<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-avatar>
          <img src="../assets/logo.jpg" />
        </q-avatar>
        <q-toolbar-title>Table Soccer League</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Menü</q-item-label>
        <q-item clickable to="/Overview">
          <q-item-section avatar>
            <q-icon name="insert_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Meine Statistik</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/Ranking">
          <q-item-section avatar>
            <q-icon name="view_list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Rangliste</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/Games">
          <q-item-section avatar>
            <q-icon name="sports_soccer" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Spiele</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/NewGame">
          <q-item-section avatar>
            <q-icon name="note_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Spiel eintragen</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/NewPlayer">
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Neuer Spieler</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false
    };
  }
};
</script>
