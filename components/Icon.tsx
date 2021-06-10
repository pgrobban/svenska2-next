import React from 'react';
import { 
  ArrowLeft as ArrowLeftIcon, 
  ArrowRight as ArrowRightIcon,
  Help as HelpIcon,
  VolumeUp as SoundIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  Chat as ChatIcon,
  Search as SearchIcon,
  Stars as StarsIcon,
  ChromeReaderMode as ChromeReaderIcon,
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Close as CloseIcon,
  InfoOutlined as InfoIcon,
  Warning as WarningIcon
} from '@material-ui/icons';
// import FactCheckIcon from '@material-ui/icons/FactCheck';

const icons = {
  close: <CloseIcon />,
  menu: <MenuIcon />,
  collapse: <ExpandLessIcon />,
  expand: <ExpandMoreIcon />,
  book: <ChromeReaderIcon />,
  exercise: <PlaylistAddCheckIcon />, // factcheck is not working
  achievement: <StarsIcon />,
  chat: <ChatIcon />,
  search: <SearchIcon />,
  sound: <SoundIcon />,
  help: <HelpIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  // svg icons
  facebook: <img src="/images/facebook.svg" />,
  instagram: <img src="/images/instagram.svg" />,
  arrowRight: <ArrowRightIcon />,
  arrowLeft: <ArrowLeftIcon />
};

interface Props {
  type: string;
  className?: string;
  color?: string;
  size?: 's' | 'm' | 'l' | 'xl';
  style?: object;
  compact?: boolean;
}

const sizes = {
  s: 12,
  m: 24,
  l: 36,
  xl: 50
};

const Icon: React.FC<Props> = (props) => {
  const { type, color, className, size } = props;
  const resolvedSize = sizes[size || 'm'];

  return React.cloneElement(
    icons[type],
    {
      style: {
        color,
        fontSize: resolvedSize,
        width: resolvedSize
      },
      className
    }
  );
}

export default Icon;
