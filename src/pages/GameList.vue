<template>
     <q-page class="flex">
      <div class="q-pa-md">
        <div class="row">
          <GameTable></GameTable>
        </div>
      </div>
    </q-page>
</template>

<script>
import GameTable from "../components/GameTable";
export default {
  name: "PageIndex",
  components: { GameTable }

};
</script>
