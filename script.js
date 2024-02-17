window.addEventListener('load', function() {
    // Your script code here
    (function() {
        const form = document.querySelector("#Message-form");
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var message = document.querySelector("#Message");
            var feedback = document.querySelector(".feedback");
            var messageContent = document.querySelector(".Message-content");

            if (message.value === '') {
                feedback.classList.add('show');
                setTimeout(function() {
                    feedback.classList.remove('show');
                }, 4000);
            } else {
                messageContent.textContent = message.value;
                message.value = '';
            }
        })
    })();
});
