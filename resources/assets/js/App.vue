<template>
    <v-app id="inspire" class="app grey lighten-4">
        <app-drawer></app-drawer>
        <app-toolbar></app-toolbar>
        <v-content>
            <v-container fluid>
            <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
        <v-snackbar
            v-model="alert.show"
            :multi-line="true"
            :timeout="alert.timeout"
            :top="'top'"
            :right="'right'"
            :color="alert.type"
            >
                {{ alert.message }}
                <v-btn
                dark
                flat
                @click="alert.show = false"
                >
            Close
            </v-btn>
        </v-snackbar>
    </v-app>
</template>
<script>
import Drawer from './components/AppDrawer'
import Toolbar from './components/AppToolbar'

export default {
    components: {
        appDrawer: Drawer,
        appToolbar: Toolbar
    },
    data() { 
        return {
            alert: {
                show: false,
                message: '',
                type: '',
                timeout: 10000
            },
        }
    },
    created() {
        EventBus.$on('show_snackbar', (data) => {
            this.alert = data
        })
    }
}
</script>