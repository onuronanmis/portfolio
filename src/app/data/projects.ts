import { Project } from '../shared/interfaces/project';

export const PROJECT_ITEMS: Project[] = [
  {
    title: 'El Pollo Loco',
    descriptionKey: 'portfolio.projects.polloLoco',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: 'images/portfolio/Pollo-loco.png',
    githubUrl: 'https://github.com/onuronanmis/El_Pollo_Loco',
    liveUrl: 'https://el-pollo-loco.onur-onanmis.de',
  },
  {
    title: 'Join',
    descriptionKey: 'portfolio.projects.join',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    image: 'images/portfolio/Join.png',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: '',
    descriptionKey: '',
    technologies: [],
    image: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Pokédex',
    descriptionKey: 'portfolio.projects.pokedex',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
    image: 'images/portfolio/Pokedex.png',
    githubUrl: 'https://github.com/onuronanmis/Pokedex',
    liveUrl: 'https://pokedex.onur-onanmis.de',
  },
];
