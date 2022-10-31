import { createStore } from "vuex";
import rotas from "./modules/rotas";
const store = createStore({
    modules: {
        rotas
    }
});

export default store;