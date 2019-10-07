<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-sheet height="500">
                    <v-calendar
                        ref="calendar"
                        v-model="dates.from"
                        :type="type"
                        :end="dates.to"
                        color="primary"
                    >
                        <template v-slot:day="{ day, present, past, date, weekday }">
                            <v-layout
                            fill-height
                            >
                                <v-sheet
                                color="success"
                                width="100%"
                                height="100%"
                                class="white--text p-2 text-xs-center" 
                                v-if="check_if_exist(weekday,date)"
                                tile
                                >
                                    {{event_name}}
                                </v-sheet>
                                
                            </v-layout>
                        </template>
                    </v-calendar>
                </v-sheet>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        dates: {
            type: Object
        },
        saved_days: {
            type: Array,
        },
        saved_dates: {
            type: Object,
            default: null
        },
        event_name: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            type: 'month',
        }
    },
    methods: {
        check_if_exist(weekday,date) {
            if(this.saved_dates) {
                if(moment(date) >= moment(this.saved_dates.from) && moment(date) <= moment(this.saved_dates.to)){
                    return this.saved_days.length > 0 ? this.saved_days.includes(weekday) : false
                }
            }
            return false
        }
    }
}
</script>