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
          <template slot="col-_teamNumber" scope="cell">
            {{ cell.data }}
          </template>

          <template slot="col-_nickname" scope="cell">
            {{ cell.data }}
          </template>

          <template slot="col-_rookieYear" scope="cell">
            {{ cell.data }}
          </template>
        </q-data-table>
      </q-card-main>
    </q-card>
  </div>
</template>

<script src="../js/teams.js">
</script>

<style>
</style>
