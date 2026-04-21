const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const RECEIVER_EMAIL = 'ops@nhmarineglobal.com';
const SUBMISSION_TIMEOUT_MS = 15000;

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

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), SUBMISSION_TIMEOUT_MS);

  let response;

  try {
    response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData,
      signal: controller.signal
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('The form service timed out. Please try again.');
    }

    throw new Error('Unable to reach the form service. Please check your connection and try again.');
  } finally {
    clearTimeout(timeoutId);
  }

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Unable to submit form');
  }

  return data;
};
