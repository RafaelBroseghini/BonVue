import Vue from "vue"
import Vuex from "vuex"

import {
  routeServices,
  stopServices,
  helperServices,
  AGENCIES
} from "@/shared"

import { 
  GET_ROUTES,
  GET_SHARED_STOPS,
  GET_NON_SHARED_STOPS, 
  GET_ROUTES_PATHS,
  GET_ROUTES_PATHS_COLORS
} from "./mutation-types"

Vue.use(Vuex)

const state = {
  routes: {},
  sharedStops: {},
  nonSharedStops: {},
  paths: {},
  pathsColors: {},
  agencyNames: AGENCIES
}

const mutations = {
  [GET_ROUTES](state, routes){
    state.routes = routes;
  },
  [GET_SHARED_STOPS](state, sharedStops){
    state.sharedStops = sharedStops;
  },
  [GET_NON_SHARED_STOPS](state, nonSharedStops){
    state.nonSharedStops = nonSharedStops;
  },
  [GET_ROUTES_PATHS](state, paths){
    state.paths = paths;
  },
  [GET_ROUTES_PATHS_COLORS](state, pathsColors){
    state.pathsColors = pathsColors;
  }
}

const actions = {
  async getRoutesAction({ commit }){
    const routes = await routeServices.getRoutes();
    commit(GET_ROUTES, routes)
  },
  async getSharedStopsAction({ commit }){
    const sharedStops = await stopServices.getSharedStops();
    commit(GET_SHARED_STOPS, sharedStops)
  },
  async getNonSharedStopsAction({ commit }){
    const nonSharedStops = await stopServices.getNonSharedStops();
    commit(GET_NON_SHARED_STOPS, nonSharedStops)
  },
  async getRoutesPathsAction({ commit }){
    const routesPaths = await routeServices.getRoutesPaths();
    commit(GET_ROUTES_PATHS, routesPaths)
  },
  getRoutesPathsColorsAction({ commit, state}){
    const routesPathsColors = helperServices.getRoutesPathsColors(state.routes);
    commit(GET_ROUTES_PATHS_COLORS, routesPathsColors)
  }
}

const getters = {
  getPathById: state => id => state.paths[id] ? state.paths[id] : [],
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
