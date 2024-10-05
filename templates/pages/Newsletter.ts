export type TNewletter = {
    userName: String;
    currentMonth: String;
  };
  
  export const Newletter = ({ userName,currentMonth }: TNewletter): string => {
    return `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Monthly Newsletter</title>
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
      background-color: #0073e6;
      padding: 40px 20px;
      text-align: center;
    }

    .email-header h1 {
      color: #ffffff;
      font-size: 28px;
    }

    .email-body {
      padding: 20px;
      text-align: left;
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
        <h1>Your Monthly Newsletter</h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td class="email-body">
        <h2>Hello ${userName},</h2>
        <p>Welcome to our latest newsletter! Here are the updates for ${currentMonth}:</p>
        <ul>
          <li><strong>Feature 1:</strong> New updates on our platform</li>
          <li><strong>Feature 2:</strong> Upcoming webinars and events</li>
          <li><strong>Feature 3:</strong> Tips & tricks to make the most of our services</li>
        </ul>
        <p>We appreciate your continued support! Stay tuned for more updates next month.</p>
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
  