// script.js
// public/script.js
$(document).ready(() => {
    $('#paymentForm').submit((event) => {
        event.preventDefault();

        const userId = $('#userId').val();
        const utilityType = $('#utilityType').val();
        const amount = $('#amount').val();

        $.ajax({
            url: '/api/pay-bill',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ userId, utilityType, amount }),
            success: (response) => {
                $('#responseMessage').text(response).addClass('alert alert-success');
            },
            error: (err) => {
                $('#responseMessage').text('Error processing payment').addClass('alert alert-danger');
            }
        });
    });
});
