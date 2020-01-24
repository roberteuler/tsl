<template>
  <div class="q-pa-md">
    <q-table
      title="Rangliste"
      :data="playerData"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:top>
        <FilterBar @yearSelected="selectedYear = $event"></FilterBar>
      </template>
    </q-table>
  </div>
</template>

<script>
import FilterBar from "../components/FilterBar";
import data from "../statics/data.js";
export default {
  components: { FilterBar },
  created() {
    this.playerData = data.players;
  },
  data() {
    return {
      selectedYear: "2018",
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
  computed: {
    playerData() {
      return data.players.filter(row => {
        return row.year === this.selectedYear;
      });
    }
  }
};
</script>
