export const about = {
  title: 'Hi, I’m Lauren.',
  introduction: 'I was born in France and grew up in Singapore. I’m studying computer science at Cornell, graduating a year early in 2027, and excited to join Rippling as a software engineer in New York in June 2027.',
  cafeStory: 'I built this little French café as a place to share my work. Like the things I bake, I want what I build to be thoughtful, made with care, and meant to be shared. It’s also a far-off dream of mine to open up a café one day!',
};

type Interest = {
  id: 'tennis' | 'snowboarding' | 'vlogging' | 'cooking' | 'cafes' | 'nails';
  label: string;
  detail: string;
  color: string;
  photo?: { src: string; alt: string; width: number; height: number };
};
export const interests: readonly Interest[] = [
  {
    id: 'tennis', label: 'Tennis', color: 'sage',
    detail: 'I’ve played tennis since I was little and led my varsity team in high school. These days, I play just for the love of the game.',
    photo: { src: '/photos/tennis.webp', alt: 'Lauren preparing a tennis shot on an outdoor court.', width: 1086, height: 724 },
  },
  {
    id: 'snowboarding', label: 'Snowboarding', color: 'blue',
    detail: 'Every winter, I look forward to carving down the slopes. Snowboarding has taken me to beautiful mountaintops around the world and keeps pushing me to try new tricks.',
    photo: { src: '/photos/snowboarding.webp', alt: 'A snowboarder taking a break on a sunny, snow-covered mountain.', width: 768, height: 1024 },
  },
  {
    id: 'vlogging', label: 'Vlogging', color: 'peach',
    detail: 'Vlogging has helped me rediscover my love of making videos. After posting on a few channels over the years, this one is about sharing my life at Cornell and keeping the memories I’m making here.',
  },
  {
    id: 'cooking', label: 'Cooking', color: 'butter',
    detail: 'Since moving into an off-campus apartment, I cook almost every day. I love making good food with good friends.',
    photo: { src: '/photos/cooking.webp', alt: 'Lauren cooking in her apartment kitchen as the sun sets outside.', width: 1200, height: 900 },
  },
  {
    id: 'cafes', label: 'Home cafés', color: 'rose',
    detail: 'My roommates and I love hosting home cafés. Our menus have included Earl Grey matcha, fig-and-honey galettes, and garlic cream cheese buns.',
    photo: { src: '/photos/cafes.webp', alt: 'A home-café spread of homemade galettes, buns, pastries, and focaccia.', width: 1200, height: 900 },
  },
  {
    id: 'nails', label: 'Doing my nails', color: 'lavender',
    detail: 'In my early college years, I ran a small nail business out of my dorm, doing other people’s nails as a side hustle. I still love the creativity of a fresh set.',
    photo: { src: '/photos/nails.webp', alt: 'Blue and white floral nail art with small gold details.', width: 1106, height: 913 },
  },
];
export type InterestId = typeof interests[number]['id'];
