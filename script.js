//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('btn');
    const output = document.getElementById('output');

    button.addEventListener('click', async function() {
        const text = document.getElementById('text').value;
        const delay = parseInt(document.getElementById('delay').value, 10);

        // Clear previous message
        output.textContent = '';

        // If delay is not a number, handle it gracefully
        if (!isNaN(delay)) {
            await displayAfterDelay(text, delay);
        } else {
            output.textContent = 'Please enter a valid delay.';
        }
    });

    async function displayAfterDelay(message, delay) {
        function delayMessage() {
            return new Promise(resolve => setTimeout(() => resolve(message), delay));
        }

        const result = await delayMessage();
        output.textContent = result;
    }
});
