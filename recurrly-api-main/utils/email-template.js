export const generateEmailTemplate = ({
  userName,
  subscriptionName,
  renewalDate,
  planName,
  price,
  paymentMethod,
  accountSettingsLink,
  supportLink,
  daysLeft,
}) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="background-color: #0b2f5c; padding: 20px 30px; text-align: center;">
                <p style="font-size: 54px; line-height: 54px; font-weight: 800; color: #ffffff;">Calibra</p>
                <p style="font-size: 16px; font-weight: 600; color: #b8d4e3; margin: 0;">CLINIC EQUIPMENT</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px;">                
                <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #0b2f5c;">${userName}</strong>,</p>
                
                <p style="font-size: 16px; margin-bottom: 25px; color: #d9534f; font-weight: bold;">ACTION REQUIRED</p>
                <p style="font-size: 16px; margin-bottom: 25px;">Your <strong>${subscriptionName}</strong> equipment requires mandatory calibration by <strong style="color: #0b2f5c;">${renewalDate}</strong> (${daysLeft} days from today). Operating uncalibrated medical devices violates compliance regulations.</p>
                
                <table cellpadding="15" cellspacing="0" border="0" width="100%" style="background-color: #f0f7ff; border-radius: 10px; margin-bottom: 25px;">
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Equipment:</strong> ${subscriptionName}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Est. Calibration Cost:</strong> ${price}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px;">
                            <strong>Type:</strong> ${planName}
                        </td>
                    </tr>
                </table>
                
                <p style="font-size: 16px; margin-bottom: 25px;">Please schedule a certified technician visit or update your calibration records via your <a href="${accountSettingsLink}" style="color: #0b2f5c; text-decoration: underline; font-weight: bold;">compliance dashboard</a> before the due date.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">Need urgent assistance? <a href="${supportLink}" style="color: #0b2f5c; text-decoration: underline; font-weight: bold;">Contact our biomedical support team</a> 24/7.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">
                    Best regards,<br>
                    <strong>The Calibra Compliance Team</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #e5eef7; padding: 20px; text-align: center; font-size: 14px; color: #555;">
                <p style="margin: 0 0 10px;">
                    Calibra Medical Diagnostics Inc. | Compliance & Regulatory Affairs
                </p>
                <p style="margin: 0;">
                    <a href="#" style="color: #0b2f5c; text-decoration: none; margin: 0 10px;">Security Policy</a> | 
                    <a href="#" style="color: #0b2f5c; text-decoration: none; margin: 0 10px;">FDA Compliance</a> | 
                    <a href="#" style="color: #0b2f5c; text-decoration: none; margin: 0 10px;">Contact Support</a>
                </p>
            </td>
        </tr>
    </table>
</div>
`;

export const emailTemplates = [
  {
    label: "7 days before reminder",
    generateSubject: (data) =>
      `📅 ACTION REQUIRED: ${data.subscriptionName} Calibration Due in 7 Days`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 7 }),
  },
  {
    label: "5 days before reminder",
    generateSubject: (data) =>
      `⏳ 5 Days Left: Schedule Calibration for ${data.subscriptionName}`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 5 }),
  },
  {
    label: "2 days before reminder",
    generateSubject: (data) =>
      `⚠️ URGENT: 2 Days Until ${data.subscriptionName} Calibration Expired`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 2 }),
  },
  {
    label: "1 day before reminder",
    generateSubject: (data) =>
      `🚨 FINAL REMINDER: ${data.subscriptionName} Calibration Due TOMORROW!`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 1 }),
  },
  {
    label: "Final day reminder",
    generateSubject: (data) =>
      `🛑 COMPLIANCE ALERT: ${data.subscriptionName} Calibration Due TODAY!`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 0 }),
  },
];
