<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col col-md-12">
        <q-table
          title="Spielübersicht"
          :dense="!mobileScreen"
          :grid="mobileScreen"
          :data="gameData"
          :columns="columns"
          class="gameTable"
          row-key="id"
          virtual-scroll
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
        >
          <template v-slot:top>
            <FilterBar @filterSelected="updateFilter($event)"></FilterBar>
          </template>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width />
              <q-th v-for="col in props.cols" :key="col.name" :props="props">{{ col.label }}</q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td auto-width>
                <q-btn
                  size="sm"
                  color="accent"
                  round
                  dense
                  @click="props.expand = !props.expand"
                  :icon="props.expand ? 'remove' : 'add'"
                />
              </q-td>
              <q-td v-for="col in props.cols" :key="col.name" :props="props">{{ col.value }}</q-td>
            </q-tr>
            <div v-show="props.expand" :props="props">
              <q-tr v-for="(set, index) in props.row.sets" :key="set.setId">
                <q-td colspan="100%">Satz {{ index }}:{{ set.pointsTeam1 }} : {{ set.pointsTeam2 }}</q-td>
              </q-tr>
            </div>
          </template>
        </q-table>
      </div>
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
          name: "expand",
          label: ""
        },
        {
          name: "team1",
          required: true,
          label: "Team 1",
          align: "left",
          field: row => `${row.player1Name} / ${row.player2Name}`,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "team2",
          required: true,
          label: "Team 2",
          align: "left",
          field: row => `${row.player3Name} / ${row.player4Name}`,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "result",
          label: "Ergebnis",
          align: "center",
          field: row => `${row.setsWonTeam1} : ${row.setsWonTeam2}`,
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
          name: "tableType",
          align: "center",
          label: "Tischmodell",
          field: "tableTypeName",
          sortable: true
        }
      ]
    };
  },
  methods: {
    updateFilter(filterParams) {
      this.filterParams = filterParams;
    },
    filterGames(gamesUnfiltered) {
      return gamesUnfiltered.filter(row => {
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
    },
    calculateSets(sets) {
      let setsWonTeam1 = 0;
      let setsWonTeam2 = 0;
      if (sets.length && sets.length > 0) {
        sets.forEach(set => {
          if (set) {
            if (set.pointsTeam1 > set.pointsTeam2) {
              setsWonTeam1++;
            } else {
              setsWonTeam2++;
            }
          }
        });
      }
      return {
        setsWonTeam1,
        setsWonTeam2
      };
    },
    getTableTypeName(tableTypes, tableTypeId) {
      const foundTable = tableTypes.find(type => {
        return type.tableId === tableTypeId;
      });
      if (foundTable) {
        return foundTable.name;
      } else {
        return tableTypeId;
      }
    }
  },
  computed: {
    gameData() {
      const games = data.games;
      const sets = data.sets;
      const players = data.players;
      const tableTypes = data.tableTypes;

      const filledGames = games.map(game => {
        //prepare playerNames
        var playerNames = {};
        for (let i = 1; i <= 4; i++) {
          let player = players.find(player => {
            return player.playerId === game[`player${i}Id`];
          });
          playerNames[
            `player${i}Name`
          ] = `${player.firstname} ${player.lastname}`;
        }
        //prepare sets
        const currentSets = game.sets.map(setId => {
          let foundSet = sets.find(fullSet => {
            return fullSet.setId === setId;
          });
          if (foundSet) {
            return foundSet;
          } else {
            return setId;
          }
        });
        const setsWon = this.calculateSets(currentSets);
        const tableTypeName = this.getTableTypeName(tableTypes, game.tableType);
        return {
          ...game,
          sets: currentSets,
          ...playerNames,
          ...setsWon,
          tableTypeName
        };
      });
      return this.filterGames(filledGames);
      //filter games
    }
  }
};
</script>
<style lang="scss" scoped>
.gameTable {
  width: 100%;
}
</style>
