<template>
  <div class="layout-view">
    <q-card inline="" style="width: 90%">
      <q-card-title>
        Teams
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-data-table
          :data="teams"
          :config="teamsTableConfig"
          :columns="teamsTableColumns"
          @refresh="refreshTeams"
        >
          <template slot="col-teamNumber" slot-scope="cell">
            {{ cell.data }}
          </template>

          <template slot="col-nickname" slot-scope="cell">
            {{ cell.data }}
          </template>

          <template slot="col-rookieYear" slot-scope="cell">
            {{ cell.data }}
          </template>
        </q-data-table>
      </q-card-main>
      <q-card-separator />
      <q-card-actions align="end">
        <q-btn color="secondary" name="Load" @click="loadTeams(++page)" big style="width: 200px;">
          Load
          
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script src="../js/teams.js">
</script>

<style>
</style>
