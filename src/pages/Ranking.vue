<template>
  <div>
    <q-page class="flex">
      <div class="q-pa-md">
        <div class="row">
          <RankingTable></RankingTable>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import RankingTable from "../components/RankingTable";
export default {
  name: "Ranking",
  components: { RankingTable }
};
</script>
