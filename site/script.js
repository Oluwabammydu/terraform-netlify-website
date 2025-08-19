document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializeTimestamp();
    generateMissionCode();
    generateBuildId();
    startDeploymentTimer();
    addInteractiveEffects();
    startTypingAnimation();
});

function initializeTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    timestampElement.textContent = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    });
}

function generateMissionCode() {
    const missionCodeElement = document.getElementById('mission-code');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'TF-';
    
    // Generate random mission code
    for (let i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    missionCodeElement.textContent = code;
}

function generateBuildId() {
    const buildIdElement = document.getElementById('build-id');
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    buildIdElement.textContent = `TF-BUILD-${timestamp}-${randomPart}`;
}

function startDeploymentTimer() {
    const deploySpeedElement = document.getElementById('deploy-speed');
    const targetTime = Math.floor(Math.random() * 45) + 15; // Random time between 15-60 seconds
    let currentTime = targetTime;
    
    const timer = setInterval(() => {
        deploySpeedElement.textContent = currentTime;
        currentTime--;
        
        if (currentTime < 0) {
            clearInterval(timer);
            deploySpeedElement.textContent = targetTime;
        }
    }, 100);
}

function addInteractiveEffects() {
    // Make title clickable with rainbow effect
    const title = document.getElementById('site-title');
    title.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'gradientShift 1s ease-in-out infinite';
        }, 10);
    });
    
    // Add hover effects to status cards
    const statusCards = document.querySelectorAll('.status-card');
    statusCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to achievements
    const achievements = document.querySelectorAll('.achievement');
    achievements.forEach(achievement => {
        achievement.addEventListener('click', function() {
            const medal = this.querySelector('.medal');
            medal.style.transform = 'rotate(360deg) scale(1.2)';
            medal.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                medal.style.transform = 'rotate(0deg) scale(1)';
            }, 500);
        });
    });
    
    // Add parallax effect to the page
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        const twinkling = document.querySelector('.twinkling');
        
        if (stars) stars.style.transform = `translateY(${scrolled * 0.5}px)`;
        if (twinkling) twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
}

function startTypingAnimation() {
    const commands = [
        'terraform init',
        'terraform plan',
        'terraform apply -auto-approve',
        'terraform output site_url',
        'curl -I $(terraform output -raw site_url)'
    ];
    
    const commandElement = document.getElementById('typing-command');
    let commandIndex = 0;
    
    function typeCommand() {
        commandElement.textContent = commands[commandIndex];
        commandIndex = (commandIndex + 1) % commands.length;
    }
    
    // Change command every 4 seconds
    setInterval(typeCommand, 4000);
}

// Add some Easter eggs
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    
    // Easter egg after 10 clicks
    if (clickCount === 10) {
        showEasterEgg();
    }
});

function showEasterEgg() {
    // Create temporary message
    const easterEgg = document.createElement('div');
    easterEgg.innerHTML = '🎉 Easter Egg Unlocked! You found the secret Terraform magic! ✨';
    easterEgg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 212, 255, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        animation: bounce 0.5s ease-in-out;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
    `;
    
    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
            40% { transform: translate(-50%, -50%) translateY(-20px); }
            60% { transform: translate(-50%, -50%) translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(easterEgg);
    
    // Remove after 3 seconds
    setTimeout(() => {
        easterEgg.remove();
        style.remove();
        clickCount = 0; // Reset counter
    }, 3000);
}

// Console message for developers
console.log(`
🚀 TerraVerse Explorer Console 🚀
====================================
Welcome, fellow developer! 
You've discovered the secret developer console.

Fun facts about this deployment:
- Deployed with Terraform ⚡
- State managed by HCP Terraform ☁️
- Hosted on Netlify 🌐
- Built with vanilla JavaScript 💫

Try clicking around the page to discover hidden features!
Type 'terraverse.help()' for more commands.
`);

// Add console commands
window.terraverse = {
    help: () => {
        console.log(`
TerraVerse Console Commands:
============================
terraverse.launch()     - Trigger rocket launch animation
terraverse.matrix()     - Enable matrix mode
terraverse.stats()      - Show deployment statistics
terraverse.credits()    - Show credits
        `);
    },
    
    launch: () => {
        const title = document.getElementById('site-title');
        title.style.animation = 'none';
        title.style.transform = 'translateY(-100vh) rotate(360deg)';
        title.style.transition = 'all 2s ease-in-out';
        
        setTimeout(() => {
            title.style.transform = 'translateY(0) rotate(0deg)';
            title.style.animation = 'gradientShift 4s ease-in-out infinite';
        }, 2000);
        
        console.log('🚀 Rocket launched successfully!');
    },
    
    matrix: () => {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#00ff00';
        document.body.style.fontFamily = 'monospace';
        console.log('🕶️ Matrix mode activated. Welcome to the machine.');
    },
    
    stats: () => {
        console.log(`
📊 Deployment Statistics:
========================
Resources Created: 3
State Location: HCP Terraform
Deploy Time: ${Math.floor(Math.random() * 45) + 15}s
Success Rate: 100%
Developer Happiness: 9000+ 😊
        `);
    },
    
    credits: () => {
        console.log(`
🌟 TerraVerse Explorer Credits:
===============================
Infrastructure: Terraform
State Management: HCP Terraform  
Hosting: Netlify
Design: Space-inspired CSS Magic
Animations: Pure JavaScript Wonder
Easter Eggs: Developer Love ❤️

Built with passion for Infrastructure as Code!
        `);
    }
};