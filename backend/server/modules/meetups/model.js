import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, '5 characters long least']
  },
  description: {
    type: String,
    required: true,
    minLength: [10, '10 characters long least']
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
