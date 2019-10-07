<template>
    <div>
        <v-toolbar dark app fixed>
            <v-toolbar-side-icon @click="handleDrawerToggle"></v-toolbar-side-icon>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    methods: {
        handleDrawerToggle () {
            EventBus.$emit('APP_DRAWER_TOGGLED');
        },
    }
}
</script>
