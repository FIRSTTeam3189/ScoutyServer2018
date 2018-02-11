import * as types from '../mutation-types'
import { ScoutyTeam } from '../../js/client/BlueAllianceModels'

// Creates state object that keeps track of teams at an event
const state = {
  teams: []
}

const getters = {
  // Simply returns all of the teams at the selected event
  allTeams: state => state.teams,
  // The current event that the user has selected
  currentEvent: state => state.forEvent
}

const actions = {
  
}

const mutations = {
  [types.TEAMS_SET](state, teams) {
    state.teams = teams.map(team => {
      return new ScoutyTeam(team)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
