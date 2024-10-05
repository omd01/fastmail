export type ResetPasswordParams = {
  userName: String;
  requestTime: String;
  resetLink: String;
};

export const resetPasswordTemplet = ({
  userName,
  requestTime,
  resetLink,
}: ResetPasswordParams): string => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Password Reset Request</title>
  <style>
    /* General styling */
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }

    table {
      border-spacing: 0;
      width: 100%;
    }

    td {
      padding: 0;
    }

    img {
      border: 0;
      display: block;
      width: 100%;
      max-width: 600px;
      height: auto;
    }

    /* Container */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
    }

    /* Header */
    .email-header {
      background-color: #0073e6;
      padding: 40px 20px;
      text-align: center;
    }

    .email-header h1 {
      color: #ffffff;
      font-size: 28px;
      margin: 0;
    }

    .email-header p {
      color: #b3d4fc;
      font-size: 16px;
      margin: 5px 0 0;
    }

    /* Main content */
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

    /* Button */
    .email-button {
      margin-top: 20px;
    }

    .email-button a {
      background-color: #0073e6;
      color: #ffffff;
      padding: 12px 20px;
      text-decoration: none;
      font-size: 16px;
      border-radius: 5px;
      display: inline-block;
    }

    /* Footer */
    .email-footer {
      background-color: #f4f4f4;
      padding: 20px;
      text-align: center;
      color: #999999;
      font-size: 14px;
    }

    /* Media Queries for responsiveness */
    @media screen and (max-width: 600px) {
      .email-body h2 {
        font-size: 20px;
      }

      .email-body p {
        font-size: 14px;
      }

      .email-button a {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <table role="presentation" class="email-container">
    <!-- Header -->
    <tr>
      <td class="email-header">
        <h1>Password Reset Request</h1>
        <p>We received a request to reset your password</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td class="email-body">
        <h2>Hello ${userName},</h2>
        <p>
          We received a request to reset your password on ${requestTime}. If this was you, click the link below to reset your password:
        </p>
        <p>
          <a href="${resetLink}" class="email-button">Reset Password</a>
        </p>
        <p>
          If you did not request a password reset, you can ignore this email.
        </p>
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
