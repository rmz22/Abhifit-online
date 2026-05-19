window.initChatbot = function() {
    const container = document.getElementById('chatbot-container');
    if(!container) return;

    // We will create a floating action button
    container.innerHTML = `
        <button class="chatbot-fab" id="chatbot-fab">
            <i class="fas fa-robot"></i>
        </button>

        <div class="chatbot-modal glass" id="chatbot-modal">
            <div class="chatbot-header">
                <h3>AbhiFit AI Coach</h3>
                <i class="fas fa-times" id="close-chatbot"></i>
            </div>
            <div class="chatbot-body">
                <iframe src="https://diet-plan-db50b1.zapier.app/chat" frameborder="0" width="100%" height="100%" allow="clipboard-write"></iframe>
            </div>
        </div>
    `;

    const fab = document.getElementById('chatbot-fab');
    const modal = document.getElementById('chatbot-modal');
    const closeBtn = document.getElementById('close-chatbot');

    fab.addEventListener('click', () => {
        modal.classList.add('open');
        fab.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        fab.style.display = 'flex';
    });
};
