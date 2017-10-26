import { Meteor } from 'meteor/meteor';
import { EventData } from '../../api/eventdata/eventdata';

Meteor.methods({
  // Allows an event to be edited.
  editEvent(event) {  // eslint-disable-line meteor/audit-argument-checks
    try {
      return EventData.update(event._id, { $set: event });
    } catch (exception) {
      throw new Meteor.Error('500', `${exception}`);
    }
  },
});
