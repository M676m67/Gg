document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
      duration: 800,
      once: true, 
      offset: 50
  });

  function createSnowflake(initial = false) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";
    
    const duration = 12 + Math.random() * 15;
    const size = 8 + Math.random() * 12; 
    snowflake.style.left = Math.random() * 98 + "vw";
    snowflake.style.fontSize = size + "px";
    snowflake.style.opacity = Math.random() * 0.5 + 0.1; 
    snowflake.style.animation = `fall ${duration}s linear infinite`;
    
    if (initial) {
      snowflake.style.top = Math.random() * 100 + "vh";
    }
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
      snowflake.remove();
    }, duration * 1000);
  }

  
  for (let i = 0; i < 25; i++) { createSnowflake(true); }
  setInterval(() => createSnowflake(false), 600);

  const ruleItems = document.querySelectorAll('.rules li');

  ruleItems.forEach(item => {
    item.addEventListener('click', function() {
      const isActive = this.classList.contains('active');
      
      
      ruleItems.forEach(el => el.classList.remove('active'));
    
      if (!isActive) {
        this.classList.add('active');
        
        if (navigator.vibrate) {
          navigator.vibrate(15);
        }

        setTimeout(() => {
            this.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300); 
      }
    });
  });
});
