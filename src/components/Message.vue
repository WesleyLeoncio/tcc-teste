<template>
  <div class="q-pa-md">
     <q-dialog  v-model="dialog" position="top">
      <q-card class="cardPerson">
        <q-linear-progress :value="1" color="red" />
        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">ERRO AO TENTAR EXECUTAR AÇÃO!</div>
            <div class="text-gold">{{ msg }}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      valor: 1
    };
  },
  props: {
    msg: String,
    dialog: Boolean,
  },
  
};
</script>

<style scoped>
.cardPerson {
  color: #daa520;
  background-color: black;
  width: 350px;
}
</style>