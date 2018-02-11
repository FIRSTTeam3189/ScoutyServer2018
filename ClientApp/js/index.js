import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QTabs,
  QTab,
  QRouteTab,
  QCard
} from 'quasar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QTabs,
    QTab,
    QRouteTab,
    QCard
  },
  data() {
    return {
      eventSearch: ""
    }
  },
  computed: {
    ...mapGetters({
      events: 'allEvents',
      hasSelectedEvent: 'hasSelectedEvent'
    })
  },
  methods: {
    ...mapActions([
      'syncEvents',
      'selectEvent'
    ])
  },
  mounted() {
    this.$router.replace('teams')
  }
}
