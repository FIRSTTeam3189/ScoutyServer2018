import Vuex from 'vuex'
import teams from './modules/teams'
import events from './modules/events'
import matches from './modules/matches'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    teams,
    events,
    matches
  },
  strict: debug
})
