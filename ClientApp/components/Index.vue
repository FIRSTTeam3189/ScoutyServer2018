<template>
  <div>
    <q-layout
      ref="layout"
      view="HHH lpr fff"
      :left-class="{'bg-grey-2': true}"
    >
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          3189 Scouting App
          <span slot="subtitle">The dankest scouting site on the market</span>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs ref="tabs" slot="navigation">
        <q-route-tab default slot="title" name="teamsTab" icon="contacts" to="/teams" replace />
        <q-route-tab slot="title" name="eventsTab" icon="place" to="/events" replace />
      </q-tabs>
      
      <router-view />
    </q-layout>
  </div>
</template>

<script src="../js/index.js">
</script>

<style>
</style>
