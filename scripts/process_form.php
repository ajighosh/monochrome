<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted email addresses
    $recipient_email = $_POST["recipient_email"];
    $sender_email = $_POST["sender_email"];

    // Validate the email addresses (you can add more validation as needed)
    if (!filter_var($recipient_email, FILTER_VALIDATE_EMAIL) || !filter_var($sender_email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address!";
    } else {
        // Configure sender address and protocol
        $to = $recipient_email;
        $subject = "New Email Submission";
        $message = "Email Address: " . $sender_email;

        $headers = "From: $sender_email\r\n";
        $headers .= "Reply-To: $sender_email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Use the mail() function to send the email with headers
        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    }
} else {
    echo "Invalid request!";
}
?>
