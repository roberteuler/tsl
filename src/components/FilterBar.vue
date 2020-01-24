<template>
  <!-- <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <h4>Jahr auswählen</h4>
      </div>
      <div class="col">
        <q-btn-dropdown color="primary" label="Dropdown Button">
          <q-list>
            <template v-for="y in years">
              <q-item
                :key="y"
                clickable
                v-close-popup
                @click="onYearSelected(y)"
              >
                <q-item-section>
                  <q-item-label>{{ y }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
  </div> -->
  <q-toolbar>
    <q-btn-dropdown
      color="primary"
      label="Jahr Wählen"
      icon="calendar_today"
      class="filterDropdowns"
    >
      <q-list>
        <template v-for="y in years">
          <q-item :key="y" clickable v-close-popup @click="onYearSelected(y)">
            <q-item-section>
              <q-item-label>{{ y }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-btn-dropdown>
    <q-space></q-space>
    <q-btn-dropdown
      color="primary"
      label="Season Wählen"
      class="filterDropdowns"
      icon="cached"
    >
      <q-list>
        <template v-for="s in seasons">
          <q-item :key="s" clickable v-close-popup @click="onSeasonSelected(s)">
            <q-item-section>
              <q-item-label>{{ s }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-btn-dropdown>
    <q-space></q-space>
    <q-input v-model="search" filled type="search" class="searchBar">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      years: ["2018", "2019", "2020"],
      season: ["1", "2", "3", "4"],
      search: ""
    };
  },
  methods: {
    onYearSelected(year) {
      this.$emit("yearSelected", year);
    }
  }
};
</script>

<style lang="scss" scoped>
.searchBar {
  width: 12rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
}
.filterDropdowns {
  margin-top: 0.5rem;
  margin-left: 2rem;
  padding-left: 1rem;
}
</style>
