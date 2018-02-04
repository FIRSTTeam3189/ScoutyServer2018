import { resolveBAPath } from './client/BlueAllianceClient.js'
import { ScoutyTeam } from './client/BlueAllianceModels.js'
// 1. Import quasar components used in .vue file
import {
  QCardMain,
  QCard,
  QCardTitle,
  QCardSeparator,
  QDataTable
} from 'quasar'

const teamsConfig = {
  rowHeight: '50px',
  title: 'Teams',
  pagination: {
    rowsPerPage: 20,
    options: [5, 10, 15, 30, 50, 500]
  }
}

const teamsColumns = [
  {
    label: 'Team Number',
    field: '_teamNumber',
    width: '70px',
    sort: true,
    filter: true,
    type: 'number'
  },
  {
    label: 'Team Name',
    field: '_nickname',
    width: '200px',
    sort: true,
    filter: true,
    type: 'string'
  },
  {
    label: 'Rookie Year',
    field: '_rookieYear',
    width: '70px',
    sort: true,
    filter: true,
    type: 'number',
  }
]

export default {
  // 2. Tell vuejs you're using these components
  components: {
    QCardMain,
    QCard,
    QCardTitle,
    QCardSeparator,
    QDataTable
  },
  data() {
    return {
      teams: [],
      teamsTableConfig: teamsConfig,
      teamsTableColumns: teamsColumns
    }
  },
  methods: {
    refreshTeams() {

    },
    async loadTeams(pageNum) {
      let axios_config = resolveBAPath(`/teams/${pageNum}`)

      try {
        console.log(axios_config)
        let resp = await this.$http.request(axios_config)

        // Convert to ScoutyTeams
        let scoutyTeams = resp.data.map(x => {
          return new ScoutyTeam(x)
        })

        // Push the teams onto the list
        this.teams.push(...scoutyTeams)
        console.log(this.teams)

      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.loadTeams(0)
  }
}
