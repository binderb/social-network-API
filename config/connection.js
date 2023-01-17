import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/socialNetworkAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default mongoose.connection;