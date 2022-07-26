//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  // projects images
  import Project1 from './assets/img/projects/p1.webp';
  import Project2 from './assets/img/projects/p2.webp';
  import Project3 from './assets/img/projects/p3.webp';
  import Project4 from './assets/img/projects/p4.webp';
  import Project5 from './assets/img/projects/p5.webp';
  import Project6 from './assets/img/projects/p6.webp';
  
  // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/css3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/reactjs.png';
  import SkillImg5 from './assets/img/skills/davinci.png'
  import SkillImg6 from './assets/img/skills/nodejs.png';
  import SkillImg7 from './assets/img/skills/git.png';
  import SkillImg8 from './assets/img/skills/figma.png';
  import SkillImg9 from './assets/img/skills/adobe.png';
  import SkillImg10 from './assets/img/skills/blender.png';
  import SkillImg11 from './assets/img/skills/python.png';
  import SkillImg12 from './assets/img/skills/laravel.png';

  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'activities',
      href: 'activities',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: 'https://www.youtube.com/c/danilaudza',
    },
    {
      icon: <FiInstagram />,
      href: 'https://www.instagram.com/dlaudza/',
    },
    {
      icon: <FiGithub />,
      href: 'https://github.com/danilaudza',
    },
  ];

  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: '3D Earth Animation',
      category: '3D',
      desc: 'An earth 3d looping animation created using blender3D',
    },
    {
      id: '2',
      image: Project2,
      name: '2D Animation',
      category: 'video',
      desc: '2d animation that made to fulfill a competition from a course at UGM',
    },
    {
      id: '3',
      image: Project3,
      name: 'Profile Video',
      category: 'video',
      desc: 'Profile video of a student activity unit made with the team and me as editor',
    },
    {
      id: '4',
      image: Project4,
      name: 'Documentary Video',
      category: 'video',
      desc: 'Documentary video about a museum in Bantul, The General Suharto Museum',
    },
    {
      id: '5',
      image: Project5,
      name: 'Website Prototype',
      category: 'design',
      desc: 'Website design prototype used to fulfill college assignments',
    },
    {
      id: '6',
      image: Project6,
      name: 'Poster',
      category: 'design',
      desc: 'A design of a poster which is usually my freelance job',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'Design',
    },
    {
      name: 'Video',
    },
    {
      name: '3D',
    },
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
    {
      image: SkillImg9,
    },
    {
      image: SkillImg10,
    },
    {
      image: SkillImg11,
    },
    {
      image: SkillImg12,
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'Email me at danilaudza@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Yogyakarta, Indonesia',
    },
  ];