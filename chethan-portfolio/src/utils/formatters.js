const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatText = (text) => {
  return text.trim().replace(/\s+/g, ' ');
};

const formatList = (items) => {
  return items.map(item => `• ${item}`).join('\n');
};

const formatSkillLevel = (level) => {
  const levels = {
    beginner: '🌱',
    intermediate: '🌿',
    advanced: '🌳',
  };
  return levels[level] || '🌱';
};

export { formatDate, formatText, formatList, formatSkillLevel };