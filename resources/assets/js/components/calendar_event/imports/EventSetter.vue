<template>
    <div>
        <v-layout row wrap>
            
            <v-flex xs12>
                <v-text-field
                    name="name"
                    label="Event"
                    id="id"
                    v-model="event_name"
                    :rules="[rules.required]"
                ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
                <v-menu
                    v-model="date_picker.from"
                    :close-on-content-click="false"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="dates.from"
                        label="From"
                        prepend-icon="event"
                        readonly
                        :rules="[rules.required]"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker 
                        v-model="dates.from" 
                        @input="date_picker.from = false"
                        :max="dates.to"
                    ></v-date-picker>
                </v-menu>
            </v-flex>

            <v-flex xs12 sm6>
                <v-menu
                    v-model="date_picker.to"
                    :close-on-content-click="false"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="dates.to"
                        label="From"
                        prepend-icon="event"
                        readonly
                        :rules="[rules.required]"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker 
                        v-model="dates.to" 
                        @input="date_picker.to = false"
                        :min="dates.from"
                    ></v-date-picker>
                </v-menu>
            </v-flex>

            <template v-for="(data, i) in days">
                <v-flex xs6 md4>
                    <v-checkbox 
                        v-model="day_selected" 
                        :label="data.text" 
                        :value="data.val" 
                        :rules="[rules.atLeastOneWeekday]"
                        ></v-checkbox>
                </v-flex>
            </template>

        </v-layout>
    </div>
</template>

<script>
export default {
    props: {
        days: {
            type: Array,
        },
        value: {
            type: Array,
            default: []
        },
        dates: {
            type: Object
        },
    },
    data() {
        return {
            valid: false,
            event_name: '',
            date_picker: {
                from: false,
                to: false
            },
            day_selected: [],
            rules: {
                required: v => !!v || 'This field is required.',
                atLeastOneWeekday: (selected) => selected.length > 0 || 'At least one item should be selected',
            }
        }
    },
    watch: {
        day_selected: function(newValue,OldValue) {
            this.$emit('input',newValue)
        },
        event_name: function(newValue,OldValue) {
            this.$emit('update_name',newValue)
        }
    }
}
</script>