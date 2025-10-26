import { 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiTailwindcss,
  SiExpress,
  SiDocker,
  SiPostman,
  SiBootstrap,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { DiVisualstudio } from 'react-icons/di'
import { SiCplusplus } from 'react-icons/si'

export const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    color: 'from-primary to-teal-400',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#3776AB', level: 90 },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', level: 88 },
      { name: 'Java', Icon: FaJava, color: '#007396', level: 80 },
      { name: 'C++', Icon: SiCplusplus, color: '#00599C', level: 75 },
    ]
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-400 to-cyan-400',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB', level: 90 },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', level: 95 },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6', level: 90 },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06b6d4', level: 85 },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', level: 82 },
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-green-400 to-emerald-400',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', level: 85 },
      { name: 'Express', Icon: SiExpress, color: '#FFFFFF', level: 88 },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', level: 82 },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1', level: 78 },
    ]
  },
  {
    category: 'ML & AI',
    icon: '🤖',
    color: 'from-purple-400 to-pink-400',
    skills: [
      { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00', level: 75 },
      { name: 'Scikit-learn', Icon: SiScikitlearn, color: '#F7931E', level: 82 },
      { name: 'Pandas', Icon: SiPandas, color: '#150458', level: 85 },
      { name: 'NumPy', Icon: SiNumpy, color: '#013243', level: 88 },
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-orange-400 to-red-400',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#F05032', level: 90 },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF', level: 88 },
      { name: 'VS Code', Icon: DiVisualstudio, color: '#007ACC', level: 95 },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED', level: 72 },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37', level: 85 },
    ]
  }
]

export const softSkills = [
  { name: 'Problem Solving', icon: '🧩', desc: 'Algorithm design & optimization' },
  { name: 'Quick Learner', icon: '⚡', desc: 'Adapt to new technologies' },
  { name: 'Code Quality', icon: '✨', desc: 'Clean, maintainable code' },
  { name: 'Team Collaboration', icon: '👥', desc: 'Agile & Git workflows' },
]
