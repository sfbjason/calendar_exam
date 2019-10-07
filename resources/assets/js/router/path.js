
export default [
    {
        path: '/',
        component: () => import(
          `@/pages/calendar/MainPage.vue`
        ),
        children: [
          {
            path: '',
            component: () => import(
              `@/components/calendar_event/CalendarEvent.vue`
            ),
          },
        ],
    },
]

