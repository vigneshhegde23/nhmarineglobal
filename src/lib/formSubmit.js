const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const RECEIVER_EMAIL = 'ops@nhmarineglobal.com';

export const submitWeb3Form = async ({ subject, fields }) => {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('Form service is not configured');
  }

  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', subject);
  formData.append('from_name', 'NH Marine Services Website');
  formData.append('replyto', fields.email || RECEIVER_EMAIL);

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Unable to submit form');
  }

  return data;
};
