<template>
  <!--<q-toolbar> -->
  <div class="q-pa-md">
    <div class=" row q-col-gutter-lg">
      <q-select
        color="orange"
        filled
        v-model="selectedYear"
        :options="years"
        label="Jahr wählen"
        class="filterDropdowns"
      >
        <template v-if="selectedYear" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop="selectedYear = null"
            class="cursor-pointer"
          />
        </template>
      </q-select>

      <q-select
        color="orange"
        filled
        v-model="selectedSeason"
        :options="season"
        label="Season wählen"
        class="filterDropdowns"
      >
        <template v-if="selectedSeason" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop="selectedSeason = null"
            class="cursor-pointer"
          />
        </template>
      </q-select>
      <q-space />
      <q-input v-model="searchTerm" filled type="search" class="searchBar">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
  <!--</q-toolbar> -->
</template>

<script>
export default {
  created() {
    if (!this.selectedYear || this.selectedYear === "") {
      this.selectedYear = this.$moment().format("YYYY");
    }
  },
  data() {
    return {
      years: ["2018", "2019", "2020"],
      season: ["1", "2", "3", "4"],
      searchTerm: "",
      selectedYear: "",
      selectedSeason: ""
    };
  },
  methods: {},
  computed: {
    filterParams() {
      return {
        searchTerm: this.searchTerm,
        selectedYear: this.selectedYear,
        selectedSeason: this.selectedSeason
      };
    }
  },
  watch: {
    filterParams(filterParams) {
      this.$emit("filterSelected", filterParams);
    }
  }
};
</script>

<style lang="scss" scoped>
.searchBar {
  width: 15rem;
  margin-left: 2rem;
}
.filterDropdowns {
  min-width: 15rem;
  width: 15rem;
  margin-left: 2rem;
}
</style>
