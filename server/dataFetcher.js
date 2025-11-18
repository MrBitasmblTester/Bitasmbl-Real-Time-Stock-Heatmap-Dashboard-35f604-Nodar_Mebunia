const RETRY_BASE_MS = 1000;
let backoff = RETRY_BASE_MS;
function startPolling(fetchFn, onUpdate){
  async function tick(){
    try{
      const data = await fetchFn();
      onUpdate(data);
      backoff = RETRY_BASE_MS;
    }catch(e){
      backoff = Math.min(30000, backoff*2);
    }
    setTimeout(tick, backoff);
  }
  tick();
}
module.exports = { startPolling }; 