export default {
  subscribe(topic, onMessage){
    // TODO: implement WebSocket/GraphQL subscription; this stub calls onMessage for demo
    // Example: connect to ws://backend/subscriptions and forward messages
    console.warn('subscribe() is a stub, implement GraphQL WS client');
    return { unsubscribe: ()=>{} };
  }
};