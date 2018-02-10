import * as types from '../mutation-types'

// Creates state object that keeps track of teams at an event
const state = {
  teams: [],
  forEvent: null
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
  [types.TEAMS_ADD](state, team) {
    // Validate that the team has a key property
    if (team.key === undefined || team.key === null) {
      throw Error('Team has no key or it is null')
    }
    // Try and find the existing team, and throw an Error if it does exist
    let existTeam = state.teams.find(t => t.key === team.key)

    if (existTeam !== undefined) {
      throw Error(`Team ${team.teamNumber} already exists!`)
    }

    // add the team
    state.teams.push(team)
  },
  [types.TEAMS_SET](state, teams) {
    // Validate each team has a key property
    let undefTeams = teams.find(t => t.key === undefined || t.key === null);
    if (undefTeams !== undefined) {
      // Invalid teams found in teams array
      throw Error()
    }
  }
}


