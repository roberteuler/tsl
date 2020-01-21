<template>
  <div class="q-pa-md">
    <q-table title="Rangliste" :data="data" :columns="columns" row-key="id">
      <template v-slot:top>
        <FilterBar></FilterBar>
      </template>
    </q-table>
  </div>
</template>

<script>
import FilterBar from "../components/FilterBar";
export default {
  components: { FilterBar },
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
          label: "Year",
          align: "center",
          field: () => this.selectedYear,
          sortable: true
        },
        {
          name: "maxRating",
          align: "center",
          label: "Max Rating",
          field: "maxRating",
          sortable: true
        }
      ],
      data: [
        {
          id: 1,
          firstname: "Tom",
          lastname: "Müller",
          maxRating: 1950,
          ranking: [
            {
              year: 2019,
              season: 1,
              rating: 1780,
              rank: 1,
              goalsScored: 38,
              goalsTaken: 45,
              wins: 12,
              looses: 10,
              gameCount: 22
            },
            {
              year: 2018,
              season: 1,
              rating: 1950,
              rank: 2,
              goalsScored: 24,
              goalsTaken: 33,
              wins: 21,
              looses: 21,
              gameCount: 42
            }
          ]
        },
        {
          id: 2,
          firstname: "Hans",
          lastname: "Günther",
          maxRating: 1980,
          ranking: [
            {
              year: 2019,
              season: 1,
              rating: 1720,
              rank: 2,
              goalsScored: 38,
              goalsTaken: 45,
              wins: 12,
              looses: 10,
              gameCount: 22
            },
            {
              year: 2018,
              season: 1,
              rating: 1980,
              rank: 1,
              goalsScored: 55,
              goalsTaken: 23,
              wins: 12,
              looses: 18,
              gameCount: 30
            }
          ]
        },
        {
          id: 3,
          firstname: "Franz",
          lastname: "Tchambo",
          maxRating: 1620,
          ranking: [
            {
              year: 2019,
              season: 1,
              rating: 1620,
              rank: 3,
              goalsScored: 12,
              goalsTaken: 45,
              wins: 4,
              looses: 32,
              gameCount: 36
            },
            {
              year: 2018,
              season: 1,
              rating: 1520,
              rank: 3,
              goalsScored: 24,
              goalsTaken: 33,
              wins: 12,
              looses: 35,
              gameCount: 47
            }
          ]
        }
      ]
    };
  }
};
</script>
