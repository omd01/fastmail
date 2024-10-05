export type TVerification = {
    userName: String;
    verificationLink: String;
  };
  
  export const Verification = ({ userName, verificationLink }: TVerification): string => {
    return `
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Account Verification</title>
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
      background-color: #28a745;
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
      background-color: #28a745;
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
        <h1>Verify Your Account</h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td class="email-body">
        <h2>Hello ${userName},</h2>
        <p>Thank you for signing up! Please click the button below to verify your account:</p>
        <div class="email-button">
          <a href="${verificationLink}" target="_blank">Verify Account</a>
        </div>
        <p>If you did not sign up for this account, please ignore this email.</p>
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
  