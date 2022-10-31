<template>
  <div class="q-pa-md">
    <div class="center-component">
      <Message :msg="msg" :dialog="dialog" :valor="valor" />
      <div class="route-client-box">
        <q-input
          color="black"
          outlined
          v-model="phone"
          label="Celular do Cliente"
          mask="(##) ##### - ####"
        >
          <template v-slot:append>
            <q-icon name="phone" color="black" />
          </template>
        </q-input>
        <div class="btn-route-client">
          <q-btn
            color="secondary"
            label="Pesquisar"
            size="lg"
            @click="searchClient()"
          />
        </div>
      </div>
    </div>
    <div class="q-pa-md" v-if="clienteList.length > 0">
      <table>
        <tr>
          <th style="width: 40%">Nome do Cliente</th>
          <th style="width: 50%">Endereço</th>
          <th style="width: 10%">Remover</th>
        </tr>
        <tr v-for="cliente in clienteList" :key="cliente.id">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.endereco.name }}</td>
          <td>
            <q-btn
              @click="remover(index)"
              round
              color="red"
              glossy
              icon="delete"
            />
          </td>
        </tr>
      </table>
      <div class="q-pa-md">
        <q-btn
          :loading="loading"
          v-if="clienteList.length > 1"
          @click="calcRoute()"
          color="secondary"
          class="full-width"
          label="Calcular Rota"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Message from "./Message.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RouteView",
  components: { Message },
  data() {
    return {
      phone: "(28) 11111 - 1111",
      msg: "",
      dialog: false,
      valor: 0,
      localStore: {},
      clienteList: [],
      loading: false,
    };
  },
  computed: mapGetters(["getLocalStore"]),
  created() {
    this.localStore = this.getLocalStore;
  },
  methods: {
    //Declara o metodo do vuex
    ...mapActions(["salveRoute"]),
    calcRoute() {
      this.loading = true;
      const enderecos = this.clienteList.map((e) => e.endereco);
      enderecos.unshift(this.getLocalStore);
      this.generatePath(enderecos);
    },
    remover(id) {
      this.clienteList.splice(id, 1);
      this.messageView("Cliente removido da lista!");
    },
    searchClient() {
      const url = `api/cliente/buscarTelefone/${this.phone}`;
      axios
        .get(url)
        .then((res) => {
          this.clienteList.push(res.data);
        })
        .catch((error) => {
          this.messageView(error.response.data.message);
        });
    },

    generatePath(enderecos) {
      const url = `api/routePath`;
      axios
        .post(url, enderecos)
        .then((res) => {
          this.salveRoute(res.data);
          this.loading = false;
          //Abrir tela de maps
          this.$router.push({ name: "map" });
        })
        .catch((error) => {
          this.msg = error.response.data.message;
          this.loading = false;
        });
    },
    messageView(msgView) {
      this.msg = msgView;
      this.dialog = true;
      setTimeout(() => (this.dialog = false), 4000);
    },
  },
};
</script>

<style scoped>
.center-component {
  max-width: 400px;
  margin: 0 auto;
}

/*  CSS INPUT E Button   */
.route-client-box {
  display: flex;
  flex-wrap: wrap;
}

.btn-route-client {
  padding-left: 10px;
  padding-top: 2px;
}
/*  CSS TABELA   */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
</style>