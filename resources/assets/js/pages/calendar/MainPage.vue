<template>
    <div>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex md12>
                    <router-view></router-view>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from '@/api/axios';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            name: '',
            questions: null,
            show_dialog: false,
            valid: false,
            rules: {
                required: v => !!v || 'This field is required.',
            },
        }
    },
    computed: {
        ...mapGetters('loading', [
            'loadingState',
        ]),
    },
    methods: {
        ...mapActions('loading', [
           'EmitLoading',
        ]),
        confirmation() {
            if (this.$refs.form.validate()) {
                this.show_dialog = true
            }
        },
        save() {
            let vm = this

            vm.EmitLoading(true);
            vm.loading = true

            axios({
                method: 'POST',
                url: '/api/save_answer',
                data: {answer: vm.questions,name: vm.name},
            })
                .then(function (response) {
                    EventBus.$emit('show_snackbar',{
                        show: true,
                        message: response.data.message,
                        type: response.data.status
                    })
                    if (response.data.status == 'success') {
                        vm.show_dialog = false
                    }
                    vm.EmitLoading(false);
                })
                .catch(function (error) {
                    EventBus.$emit('show_snackbar',{
                        show: true,
                        message: 'Something went wrong when saving data',
                        type: 'error'
                    })
                    console.log(error)
                    vm.EmitLoading(false);
                });
        }
    },
    mounted() {

    }
}
</script>