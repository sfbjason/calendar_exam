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
                        <app-event-setter 
                            :days="days" 
                            v-model="day_selected" 
                            :dates="dates"
                            :event_name="saved_name"
                            @update_name="update_event"
                        ></app-event-setter> 
                    </v-flex>
                    <v-flex sm7>
                        <app-calendar 
                            :dates="dates" 
                            :saved_days="saved_days"
                            :saved_dates="saved_dates"
                            :event_name="saved_name"
                        ></app-calendar>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="saveEvent">Save</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
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
            saved_name: null,
            saved_days: [],
            saved_dates: null,
        }
    },
    methods: {
        saveEvent() {
            this.saved_name = this.event_name
            this.saved_days = this.day_selected
            this.saved_dates = {
                from: this.dates.from,
                to: this.dates.to
            }
        },
        update_event(v) {
            this.event_name = v
        }
    }
}
</script>