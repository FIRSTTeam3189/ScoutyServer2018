import * as types from '../mutation-types'
import { ScoutyEvent } from '../../js/client/BlueAllianceModels'
import { resolveBAPath } from '../../js/client/BlueAllianceClient'
import axios from 'axios'

const state = {
  events: [],
  year: new Date().getFullYear(),
  selectedEvent: null
}

const getters = {
  allEvents: state => state.events,
  currentYear: state => state.year,
  hasSelectedEvent: state => state.selectedEvent !== null || state.selectedEvent !== undefined,
  currentEventKey: state => state.selectedEvent
}

const actions = {
  async syncEvents({ commit, state }) {
    // Load events for the current year selected
    let axios_config = resolveBAPath(`events/${state.year}`)

    try {
      let baEvents = await this.$http.resolve(axios_config)
      commit(types.EVENTS_SET, baEvents)
    } catch (e) {
      // Failed to get events
      console.log(e)
    }
  },
  async selectEvent({ commit, state }, eventKey) {
    // Load in the teams for the particular event
    let teamsRequest = resolveBAPath(`event/${eventKey}/teams`)
    let eventRequest = resolveBAPath(`event/${eventKey}`)

    try {
      let BAteams = await axios.request(teamsRequest)
      let BAEvent = await axios.request(eventRequest)
      commit(types.TEAMS_SET, BAteams.data)
      commit(types.EVENTS_SET_CURRENT_EVENT, BAEvent.data)
    } catch (e) {
      console.log(e)
      console.log(`Failed to select event ${eventKey}`)
    }
  }
}

const mutations = {
  /**
   * Adds a list of events to the state of the events store.
   * @param {obj} state The state object
   * @param {[ScoutyEvent]} events The array of ScoutyEvents
   */
  [types.EVENTS_SET](state, events) {
    state.events = events.map(baEvent => {
      return new ScoutyEvent(baEvent)
    })
  },
  /**
   * Sets the selectedEvent from the baEvent json
   * @param {state} state
   * @param {BAEvent} selectedEvent 
   */
  [types.EVENTS_SET_CURRENT_EVENT](state, selectedEvent) {
    state.selectedEvent = new ScoutyEvent(selectedEvent)
  }
}
