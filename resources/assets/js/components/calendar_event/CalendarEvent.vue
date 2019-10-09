<template>
    <div>
        <v-card>
            <v-card-title>
                <div class="display-1 bold">Calendar</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex sm5>
                        <v-form ref="form" v-model="valid">
                            <app-event-setter 
                                :days="days" 
                                v-model="day_selected" 
                                :dates="dates"
                                @update_name="update_event"
                            ></app-event-setter> 
                        </v-form>
                    </v-flex>
                    <v-flex sm7>
                        <app-calendar 
                            :dates="dates" 
                            :saved_object="return_saved"
                        ></app-calendar>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="saveEvent" :loading="loadingState">Save</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from '@/api/axios';
import { mapActions, mapGetters } from 'vuex';
import EventSetter from './imports/EventSetter'
import Calendar from './imports/Calendar'
import moment from 'moment'

export default {
    components: {
        appEventSetter: EventSetter,
        appCalendar: Calendar,
    },
    data() {
        return {
            valid: false,
            event_name: '',
            days: [
                {text: 'Monday', val : 1},
                {text: 'Tuesday', val : 2},
                {text: 'Wednesday', val : 3},
                {text: 'Thursday', val : 4},
                {text: 'Friday', val : 5},
                {text: 'Saturday', val : 6},
                {text: 'Sunday', val : 0},
            ],
            day_selected: [],
            dates: {
                from: moment().format('YYYY-MM-DD'),
                to: moment().format('YYYY-MM-DD'),
            },
            
            return_saved: {
                name: null,
                days: [],
                dates: null,
            }
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
        saveEvent() {
            let vm = this,
                data = {}

            if (vm.$refs.form.validate()) {
                // vm.saved_name = vm.event_name
                // vm.saved_days = vm.day_selected
                // vm.saved_dates = {
                //     from: vm.dates.from,
                //     to: vm.dates.to
                // }

                data = {
                    name: vm.event_name,
                    from: moment(vm.dates.from).format('YYYY-MM-DD'),
                    to: moment(vm.dates.to).format('YYYY-MM-DD'),
                    day_selected: vm.day_selected,
                }

                vm.EmitLoading(true);

                axios({
                    method: 'POST',
                    url: '/api/store_event',
                    data: data,
                })
                    .then(function (response) {
                        EventBus.$emit('show_snackbar',{
                            show: true,
                            message: response.data.message,
                            type: response.data.status
                        })
                        if (response.data.status == 'success') {
                            vm.return_saved = response.data.data
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
        update_event(v) {
            this.event_name = v
        }
    }
}
</script>