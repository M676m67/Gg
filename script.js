function createSnowflake(initial = false) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";
    
    const duration = 12 + Math.random() * 10;
    const size = 10 + Math.random() * 10;
    
    snowflake.style.left = Math.random() * 95 + "vw";
    snowflake.style.fontSize = size + "px";
    snowflake.style.opacity = Math.random() * 0.6 + 0.3;
    snowflake.style.animation = `fall ${duration}s linear infinite`;
    
    if (initial) {
        snowflake.style.top = Math.random() * 100 + "vh";
    }
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

for (let i = 0; i < 40; i++) { createSnowflake(true); }
setInterval(() => createSnowflake(false), 450);


// المنطق الجديد للتفاعل السلس
const ruleItems = document.querySelectorAll('.rules li');

ruleItems.forEach(item => {
    item.addEventListener('click', function() {
        // 1. هل العنصر الحالي مفتوح؟
        const isActive = this.classList.contains('active');
        
        // 2. إغلاق الجميع فوراً
        ruleItems.forEach(el => el.classList.remove('active'));
        
        // 3. إذا لم يكن مفتوحاً، افتحه
        if (!isActive) {
            this.classList.add('active');
            
            if (navigator.vibrate) {
                navigator.vibrate(20);
            }
        }
    });
});
