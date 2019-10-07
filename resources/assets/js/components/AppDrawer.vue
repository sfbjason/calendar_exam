<template>
    <div>
        <v-navigation-drawer 
        app 
        dark 
        width="200"
        v-model="drawer">
            <v-toolbar flat>
            <v-list>
                <v-list-tile>
                <v-list-tile-title class="title">
                    Coding Challenge
                </v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-toolbar>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data () {
      return {
        drawer: true,
      }
    },
    created () {
        EventBus.$on('APP_DRAWER_TOGGLED', () => {
            this.drawer = (!this.drawer);
        });
    },
}
</script>