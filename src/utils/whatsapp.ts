// WhatsApp direct redirection utility for Jefferin Sequeira
export const PRACTITIONER_PHONE_DISPLAY = "+91 77988 88407";
export const PRACTITIONER_PHONE_NUMBER = "917798888407";

export const getWhatsAppUrl = (topicOrService?: string, customNote?: string): string => {
  let text = "Hello Jefferin, I would love to connect with you regarding Heal Your Trauma.";

  if (topicOrService) {
    text = `Hello Jefferin, I would love to connect with you and book a session for: ${topicOrService}.`;
  }

  if (customNote && customNote.trim().length > 0) {
    text += `\n\nA little about what brings me here: ${customNote.trim()}`;
  }

  return `https://wa.me/${PRACTITIONER_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const openWhatsApp = (topicOrService?: string, customNote?: string): void => {
  const url = getWhatsAppUrl(topicOrService, customNote);
  window.open(url, "_blank", "noopener,noreferrer");
};
