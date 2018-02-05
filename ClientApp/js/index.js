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
  mounted() {
    this.$router.replace('teams')
    console.log('Did the thing')
  }
}
