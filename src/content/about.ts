export const about = {
  title: 'Hi, I’m Lauren.',
  introduction: 'I was born in France and grew up in Singapore. These days, I’m studying computer science at Cornell, graduating a year early in 2027, and getting ready to join Rippling as a software engineer in New York that June.',
  cafeStory: 'I made this little French café as a place to share my work. Like the things I bake, I want what I build to be thoughtful, made with care, and meant to be shared. It’s also a little glimpse of a far-off dream: opening a café of my own.',
};

export const interests = [
  { id: 'tennis', label: 'Tennis', title: 'More soon.', detail: 'Description coming soon.', color: 'sage' },
  { id: 'snowboarding', label: 'Snowboarding', title: 'More soon.', detail: 'Description coming soon.', color: 'blue' },
  { id: 'vlogging', label: 'Vlogging', title: 'More soon.', detail: 'Description coming soon.', color: 'peach' },
  { id: 'cooking', label: 'Cooking', title: 'More soon.', detail: 'Description coming soon.', color: 'butter' },
  { id: 'cafes', label: 'Home cafés', title: 'More soon.', detail: 'Description coming soon.', color: 'rose' },
  { id: 'nails', label: 'Doing my nails', title: 'More soon.', detail: 'Description coming soon.', color: 'lavender' },
] as const;
export type InterestId = typeof interests[number]['id'];
