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
          <q-btn flat="">
            <q-icon name="mail"  />
          </q-btn>
      </q-toolbar>

      <q-modal ref="eventsModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
        <q-modal-layout>
          <q-toolbar slot="header">
            <q-btn flat @click="$refs.eventsModal.close()">
              <q-icon name="keyboard_arrow_left" />
            </q-btn>
            <div class="q-toolbar-title">
              Select an Event
            </div>
          </q-toolbar>

          <q-toolbar slot="header">
            <q-search inverted v-model="eventSearch" color="none" />
          </q-toolbar>
        </q-modal-layout>
      </q-modal>

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
