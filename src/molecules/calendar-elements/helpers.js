import { times } from './defaultEnums';

export const sortEvents = events =>
    events.sort((a, b) => {
        if (a.allDay && !b.allDay) {
            return -1;
        }

        if (b.allDay && !a.allDay) {
            return 1;
        }

        if (a.start && b.start) {
            return times.indexOf(a.start) - times.indexOf(b.start);
        }

        return a.title.length - b.title.length;
    });
