# FastMail

**FastMail** is an easy-to-use Node.js package for sending emails using customizable, pre-built, and user-defined templates. It supports both **CommonJS** and **ES Module** environments.

With `FastMail`, you can send professional emails, such as welcome emails, OTPs, password reset emails, and more, by simply using built-in templates or adding your own.

## Features

- Pre-built email templates (e.g., welcome, OTP, password reset).
- Dynamic template rendering with customizable data.
- Support for both CommonJS and ES Module environments.
- Easily add your own custom templates.
- Works with any SMTP service via Nodemailer.
- Type-safe template rendering in TypeScript.

---

## Table of Contents

1. [Installation](#installation)
2. [File Structure](#file-structure)
3. [Pre-built Templates](#pre-built-templates)
4. [Usage](#usage)
   - [Quick Start](#quick-start)
   - [Using Pre-built Templates](#using-pre-built-templates)
   - [Creating Custom Templates](#creating-custom-templates)
5. [API Reference](#api-reference)
6. [Contributing](#contributing)
7. [License](#license)

---

## Installation

### NPM

Install via npm:

```bash
npm install fastmail
```

### Yarn

Install via yarn:

```bash
yarn add fastmail
```

---

## Pre-built Templates

### Welcome Email

The **Welcome** template is used to send a welcome email to new users. It includes the user's name and the date they signed up.
includes the user's name and the date they signed up.

### OTP Email

The **OTP** template is used to send a one-time password (OTP) to users for authentication.
It includes the OTP code and the expiry time.

---

## Usage

### Quick Start

1. **Initialize the mail transport**: You can use any SMTP provider (e.g., Gmail, SendGrid).
2. **Send an email**: You can use pre-built templates or create custom ones.

Here’s a basic example:

```typescript
import { createMailTransport, sendMail, renderTemplate } from "fastmail";

// Create the mail transport (using Nodemailer)
const mailTransport = createMailTransport({
  host: "smtp.yourmailservice.com",
  port: 587,
  auth: {
    user: "your-email@example.com",
    pass: "your-email-password",
  },
});

// Use a pre-built welcome template
const html = renderTemplate("welcome", {
  userName: "John Doe",
  signUpDate: "2024-10-02",
});

// Send the email
await sendMail(mailTransport, {
  from: "your-email@example.com",
  to: "recipient@example.com",
  subject: "Welcome to Our Service!",
  html,
});
```

---

### Using Pre-built Templates

You can use the pre-built templates like **Welcome**, **OTP**, and **Password Reset**. The `renderTemplate` function allows you to pass data for dynamic rendering.

#### Example: Sending a Welcome Email

```typescript
import { renderTemplate, sendMail } from "fastmail";

const html = renderTemplate("welcome", {
  userName: "Jane Doe",
  signUpDate: "2024-10-01",
});

await sendMail(mailTransport, {
  from: "your-email@example.com",
  to: "jane@example.com",
  subject: "Welcome to Our App!",
  html,
});
```

#### Example: Sending an OTP Email

```typescript
import { renderTemplate, sendMail } from "fastmail";

const html = renderTemplate("otp", {
  otpCode: "123456",
  expiryTime: "10 minutes",
});

await sendMail(mailTransport, {
  from: "your-email@example.com",
  to: "john@example.com",
  subject: "Your OTP Code",
  html,
});
```

---

### Creating Custom Templates

You can easily create your own custom templates and render them in the same way.

1. **Create a new template file** in the `templates` folder (e.g., `myCustomTemplate.ts`).

```typescript
// src/templates/myCustomTemplate.ts

export interface MyCustomTemplateParams {
  userName: string;
  customMessage: string;
}

export const myCustomTemplate = ({
  userName,
  customMessage,
}: MyCustomTemplateParams): string => {
  return `
    <html>
      <body>
        <h1>Hello ${userName}!</h1>
        <p>${customMessage}</p>
      </body>
    </html>
  `;
};
```

2. **Render and send the custom template**:

```typescript
import { renderTemplate, sendMail } from "fastmail";

const html = renderTemplate("myCustomTemplate", {
  userName: "Jane Doe",
  customMessage: "This is a special message just for you!",
});

await sendMail(mailTransport, {
  from: "your-email@example.com",
  to: "jane@example.com",
  subject: "A Special Message",
  html,
});
```

---

## API Reference

### `createMailTransport(options)`

- **Description**: Creates a Nodemailer transport for sending emails.
- **Options**: Accepts any Nodemailer transport options.

### `sendMail(transport, options)`

- **Description**: Sends an email using the provided transport.
- **Parameters**:
  - `transport`: The mail transport object created using `createMailTransport`.
  - `options`: The email options (`from`, `to`, `subject`, `html`, etc.).

### `renderTemplate(templateName, data)`

- **Description**: Renders an email template with dynamic data.
- **Parameters**:
  - `templateName`: The name of the template (e.g., `welcome`, `otp`, `passwordReset`).
  - `data`: The dynamic data to render in the template.

---

## Contributing

We welcome contributions to the **FastMail** project! If you have an idea for a new template or feature, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

Please ensure your changes are well-documented and include tests if applicable.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Example Project

To see how **FastMail** can be integrated into a full project, check out the **example** folder in the repository:

```bash
├── example
│   ├── index.ts             # Example usage of FastMail
│   └── .env                 # Example environment variables for SMTP credentials
```

To run the example:

1. Clone the repository.
2. Navigate to the **example** folder.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Add your SMTP credentials to the `.env` file.
5. Run the example:
   ```bash
   node index.ts
   ```

---

This **README** file ensures clarity and provides all the essential information about your package, including examples, installation, and usage instructions.
