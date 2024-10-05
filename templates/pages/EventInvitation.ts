export type TEventInvitation = {
    userName: String;
    eventDate: String;
    eventLink: String;
  };
  
  export const EventInvitation = ({ userName,eventDate,eventLink }: TEventInvitation): string => {
    return `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Event Invitation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }

    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
    }

    .email-header {
      background-color: #ff6f61;
      padding: 40px 20px;
      text-align: center;
    }

    .email-header h1 {
      color: #ffffff;
      font-size: 28px;
    }

    .email-body {
      padding: 20px;
      text-align: center;
    }

    .email-body h2 {
      color: #333333;
      font-size: 22px;
    }

    .email-body p {
      color: #666666;
      font-size: 16px;
      line-height: 1.5;
    }

    .email-button a {
      background-color: #ff6f61;
      color: #ffffff;
      padding: 12px 20px;
      text-decoration: none;
      font-size: 16px;
      border-radius: 5px;
      display: inline-block;
    }

    .email-footer {
      background-color: #f4f4f4;
      padding: 20px;
      text-align: center;
      color: #999999;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <table role="presentation" class="email-container">
    <!-- Header -->
    <tr>
      <td class="email-header">
        <h1>You're Invited!</h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td class="email-body">
        <h2>Hello ${userName},</h2>
        <p>We are excited to invite you to our upcoming event, happening on ${eventDate}. Click the button below for more details and to RSVP:</p>
        <div class="email-button">
          <a href="${eventLink}" target="_blank">RSVP Now</a>
        </div>
        <p>We look forward to seeing you there!</p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td class="email-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>

  `;
  };
  