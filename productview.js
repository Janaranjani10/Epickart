
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const messageText = document.getElementById('message-text');
    const sendButton = document.getElementById('send-button');
    const selectedItems = [];

    function updateMessage() {
        selectedItems.length = 0;
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedItems.push(checkbox.value);
            }
        });
        messageText.value = selectedItems;
    }

    function placeOrder() {
        messageText.value = 'Order Placed!';
    }

