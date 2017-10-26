import { Meteor } from 'meteor/meteor';
import { EventData } from '../../api/eventdata/eventdata.js';

Meteor.publish('EventData', function publishData() {
  return EventData.find();
});
