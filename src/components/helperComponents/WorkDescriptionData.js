import { FaJs, FaCss3, FaHtml5, FaSass, FaReact } from 'react-icons/fa';

export const tetrisDescription = {
  title: 'tetris',
  description:
    'Known across the world tetris game. I’ve added points system from NES version. Game works also on mobile, I’ve added keyboard to play it, you can even hold button to repeat action, as it is on desktop. Enjoy playing it, points are saving to local storage.',
  technologies: [
    <FaJs className="js" key={0} />,
    <FaHtml5 className="css" key={1} />,
    <FaCss3 className="html" key={2} />,
  ],
  linkCode: 'https://github.com/Haxikowy/tetris',
  linkLive: 'https://haxikowy.github.io/tetris/',
};
