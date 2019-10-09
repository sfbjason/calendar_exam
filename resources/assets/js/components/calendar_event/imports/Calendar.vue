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
                                    {{saved_object.name}}
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
        saved_object: {
            type: Object,
            default: {
                name: '',
                days: [],
                dates: {
                    from: moment().format('YYYY-MM-DD'),
                    to: moment().format('YYYY-MM-DD'),
                }, 
            }
        }
    },
    data() {
        return {
            type: 'month',
        }
    },
    methods: {
        check_if_exist(weekday,date) {
            if(this.saved_object.dates) {
                if(moment(date) >= moment(this.saved_object.dates.from) && moment(date) <= moment(this.saved_object.dates.to)){
                    return this.saved_object.days.length > 0 ? this.saved_object.days.includes(weekday) : false
                }
            }
            return false
        }
    }
}
</script>