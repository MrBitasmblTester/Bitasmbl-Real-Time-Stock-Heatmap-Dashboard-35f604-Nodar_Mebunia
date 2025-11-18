const store = { stocks: [] };
const pubsub = require('./pubsub');
module.exports = {
  Query: { stocks: (_, {filter}) => store.stocks },
  Subscription: { stockUpdated: { subscribe: () => pubsub.asyncIterator('STOCK_UPDATED') } }
};
// Use dataFetcher.startPolling(...) in your server bootstrap to populate store and call pubsub.publish('STOCK_UPDATED', payload)