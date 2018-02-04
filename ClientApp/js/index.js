import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QTabs,
  QTab,
  QRouteTab
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
    QRouteTab
  },
  mounted() {
    this.$router.replace('teams')
    console.log('Did the thing')
  }
}
