import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Haneul's Portfolio | Developer", // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: 'Backend developer | Haneul', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Haneul Jo',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'First Think, Second believe, Third dream. And finally, dare. ',
  paragraphTwo:
    '안녕하세요. 조하늘입니다. 현재 서버개발을 하고 있으며, 하루하루 더 나아가는 사람이 되고자합니다. ',
  paragraphThree: '이력서 링크는 현재 준비중입니다.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'today-i-learend.jpg',
    title: 'Today Haneul Learned',
    info: '또렷한 기억보다 희미한 연필 자국이 낫다.',
    info2: '',
    url: 'http://haneul-jo.github.io/TIL',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jh.neul72@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/haneul-jo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
