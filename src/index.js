function onReady(fn) {
  if (typeof fn !== 'function') return;

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

onReady(() => {
  setInterval(() => {
    
    document.getElementById('time').textContent = new Date()
  }, 1000);
});