import { resolveBAPath } from './client/BlueAllianceClient.js'
import { ScoutyTeam } from './client/BlueAllianceModels.js'
// 1. Import quasar components used in .vue file
import {
  QCardMain,
  QCard,
  QCardTitle,
  QCardSeparator,
  QDataTable,
  QCardActions,
  QBtn
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
    field: 'teamNumber',
    width: '70px',
    sort: true,
    filter: true,
    type: 'number'
  },
  {
    label: 'Team Name',
    field: 'nickname',
    width: '200px',
    sort: true,
    filter: true,
    type: 'string'
  },
  {
    label: 'Rookie Year',
    field: 'rookieYear',
    width: '70px',
    sort: true,
    filter: true,
    type: 'number',
  }
]

export default {
  // 2. Tell vuejs you're using these components
  // It's THICC
  components: {
    QCardMain,
    QCard,
    QCardTitle,
    QCardSeparator,
    QDataTable,
    QCardActions,
    QBtn
  },
  data() {
    return {
      teams: [],
      teamsTableConfig: teamsConfig,
      teamsTableColumns: teamsColumns,
      page: 0
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
