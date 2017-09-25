import { Observable } from 'rxjs/Observable';

import mastermindServer from 'mastermind-server';

const emitter = payload => {

};

const eventChannel = subscribe => {
  // return new stream with event data
  return Observable.create((subscriber) => {
    // pass function then emits new data to stream
    // end return 'unsubscribe' function
    return subscribe(subscriber.next.bind(subscriber));
  });
};

// Provide your Firebase DB config here
const api = mastermindServer({
  apiKey: 'AIzaSyBi-9FlIyrWG08DSZGJlcx5Ivi7OCor1jo',
  authDomain: 'mastermind-ea220.firebaseapp.com',
  databaseURL: 'https://mastermind-ea220.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '179449371905'
}, eventChannel);

export default api;
