<template>
  <q-page class="flex">
    <div class="q-pa-md">
      <Statistics></Statistics>
    </div>
  </q-page>
</template>

<script>
import Statistics from "../components/Statistics";
export default {
  name: "Overview",
  components: { Statistics }
};
</script>
