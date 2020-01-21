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
    <q-btn-dropdown color="primary" label="Jahr Wählen" icon="calendar_today">
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
      search: ""
    };
  },
  methods: {
    onYearSelected: year => {
      alert(year);
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
</style>
