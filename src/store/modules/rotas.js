const rotas = {
    state: {
        //routes:{},
        routes: {
            "routePath": [
                {
                    "id": 41,
                    "origin": {
                        "id": 41,
                        "name": "Pizzaria Kikos",
                        "lat": "-20.841883068850247",
                        "lng": "-41.123348450883235"
                    },
                    "destination": {
                        "id": 41,
                        "name": "R. Maurílio Coelho, 366-706",
                        "lat": "-20.83669150372154",
                        "lng": "-41.12310786208119"
                    },
                    "distance": {
                        "id": 41,
                        "value": 648.0,
                        "text": "0.6 km"
                    },
                    "duration": {
                        "id": 41,
                        "value": 88.0,
                        "text": "1 min"
                    },
                    "color": "#7CEDF6"
                },
                {
                    "id": 48,
                    "origin": {
                        "id": 48,
                        "name": "R. Maurílio Coelho, 366-706",
                        "lat": "-20.83669150372154",
                        "lng": "-41.12310786208119"
                    },
                    "destination": {
                        "id": 48,
                        "name": "R. Elisario Imperial, 3 - Teixeira Leite",
                        "lat": "-20.833795277763638",
                        "lng": "-41.124438237629214"
                    },
                    "distance": {
                        "id": 48,
                        "value": 623.0,
                        "text": "0.6 km"
                    },
                    "duration": {
                        "id": 48,
                        "value": 98.0,
                        "text": "2 mins"
                    },
                    "color": "#6FDE6C"
                },
                {
                    "id": 55,
                    "origin": {
                        "id": 55,
                        "name": "R. Elisario Imperial, 3 - Teixeira Leite",
                        "lat": "-20.833795277763638",
                        "lng": "-41.124438237629214"
                    },
                    "destination": {
                        "id": 55,
                        "name": "R. Gen. Ozires de Almeida Freitas",
                        "lat": "-20.837808465079917",
                        "lng": "-41.12804312621109"
                    },
                    "distance": {
                        "id": 55,
                        "value": 892.0,
                        "text": "0.9 km"
                    },
                    "duration": {
                        "id": 55,
                        "value": 206.0,
                        "text": "3 mins"
                    },
                    "color": "#35AAAA"
                },
                {
                    "id": 43,
                    "origin": {
                        "id": 43,
                        "name": "R. Gen. Ozires de Almeida Freitas",
                        "lat": "-20.837808465079917",
                        "lng": "-41.12804312621109"
                    },
                    "destination": {
                        "id": 43,
                        "name": "Sabor da Carioca, R. Cap. Jose Vieira, 83",
                        "lat": "-20.84052253478413",
                        "lng": "-41.12656026940595"
                    },
                    "distance": {
                        "id": 43,
                        "value": 352.0,
                        "text": "0.4 km"
                    },
                    "duration": {
                        "id": 43,
                        "value": 65.0,
                        "text": "1 min"
                    },
                    "color": "#5D5619"
                },
                {
                    "id": 50,
                    "origin": {
                        "id": 50,
                        "name": "Sabor da Carioca, R. Cap. Jose Vieira, 83",
                        "lat": "-20.84052253478413",
                        "lng": "-41.12656026940595"
                    },
                    "destination": {
                        "id": 50,
                        "name": "Pizzaria Kikos",
                        "lat": "-20.841883068850247",
                        "lng": "-41.123348450883235"
                    },
                    "distance": {
                        "id": 50,
                        "value": 1753.0,
                        "text": "1.8 km"
                    },
                    "duration": {
                        "id": 50,
                        "value": 331.0,
                        "text": "6 mins"
                    },
                    "color": "#908C98"
                }
            ],
            "distanceComplete": 4268.0,
            "durationComplete": 788.0
        },
        localStore: {
            "id": 0,
            "name": "Pizzaria Kikos",
            "lat": "-20.841883068850247",
            "lng": "-41.123348450883235"
        }

    },
    getters: {
        getRoute: state => state.routes,
        getLocalStore: state => state.localStore
    },
    actions: {
        salveRoute: ({ commit }, routes) => {
            commit("addRoute", routes);
        }
    },
    mutations: {
        addRoute: (state, routes) => state.routes = routes
    }
}

export default rotas;