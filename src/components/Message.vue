<template>
  <div class="alert alert-danger" v-show="dialog" role="alert">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      valor: 1,
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