import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react';
import { Project } from '../types';
import { FaExternalLinkSquareAlt, FaFirefox, FaGithub, FaGlobeAmericas } from 'react-icons/fa';
import { TechChip } from './TechChip';

export interface IProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {

  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <FaGithub />;
      case 'website':
        return <FaGlobeAmericas />
      case 'app':
        return <FaExternalLinkSquareAlt />;
      case 'firefox':
        return <FaFirefox />
      default:
        return <FaExternalLinkSquareAlt />;
    }
  }

  const openLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Card className='w-full h-full'>
      <CardHeader>
        <Image src={project.thumbnailUrl} alt={"Image of " + project.title} />
      </CardHeader>
      <Divider />
      <CardBody>
        <h3 className='text-xl font-bold'>{project.title}</h3>
        <p className='text-sm font-semibold mb-2'>{project.duration}</p>
        <p className='text-xs text-slate-600'>{project.description}</p>
        <div className='flex flex-row h-auto pt-2 gap-1 flex-wrap'>
          {project.technologies.map((technology, index) => (
            <TechChip key={index + technology} title={technology} />
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <div className='flex gap-2'>
          {project.links?.map((link, index) => (
            <Button
              key={index + link.url}
              variant='flat'
              startContent={getIcon(link.type)}
              onPress={() => openLink(link.url)}
              aria-label={"Link to " + link.title}
            >
              {link.title}
            </Button>
          ))}
        </div>
      </CardFooter>

    </Card>
  );

}
