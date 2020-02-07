<template>
  <div class="q-pa-md">
    <q-table
      title="Rangliste"
      :grid="mobileScreen"
      :dense="!mobileScreen"
      :data="playerData"
      :columns="columns"
      class="rankingTable"
      row-key="id"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top>
        <FilterBar @filterSelected="updateFilter($event)"></FilterBar>
      </template>
    </q-table>
    <div class="row">
      <div class="col col-md-12 col-xs-12"></div>
    </div>
  </div>
</template>

<script>
import FilterBar from "../components/FilterBar";
import data from "../statics/data.js";
import responsiveHandlerMixin from "../mixins/responsiveHandlerMixin";
export default {
  components: { FilterBar },
  mixins: [responsiveHandlerMixin],
  created() {
    // this.playerData = data.players;
  },
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      filterParams: {
        selectedYear: null,
        selectedSeason: null,
        searchTerm: null
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: row => `${row.firstname} ${row.lastname}`,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "year",
          label: "Jahr",
          align: "center",
          field: "year",
          sortable: true
        },
        {
          name: "season",
          label: "Season",
          align: "center",
          field: "season",
          sortable: true
        },
        {
          name: "maxRating",
          align: "center",
          label: "Max Rating",
          field: "maxRating",
          sortable: true
        },
        {
          name: "matchCount",
          align: "center",
          label: "Anzahl Spiele",
          field: "gameCount",
          sortable: true
        },
        {
          name: "wins",
          align: "center",
          label: "Siege",
          field: "wins",
          sortable: true
        },
        {
          name: "looses",
          align: "center",
          label: "Niederlagen",
          field: "looses",
          sortable: true
        }
      ]
    };
  },
  methods: {
    updateFilter(filterParams) {
      this.filterParams = filterParams;
    }
  },
  computed: {
    playerData() {
      return data.players.filter(row => {
        const year = this.filterParams.selectedYear;
        const season = this.filterParams.selectedSeason;
        const searchTerm = this.filterParams.searchTerm;
        if (year && row.year !== year) {
          return false;
        }
        if (season && row.season !== season) {
          return false;
        }
        if (searchTerm && searchTerm !== "") {
          let found = false;
          Object.keys(row).forEach(key => {
            if (row[key].toString().includes(searchTerm)) {
              found = true;
            }
          });
          if (!found) {
            return false;
          }
        }
        return true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.rankingTable {
  width: 100%;
}
</style>
