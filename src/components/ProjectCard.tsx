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
        <Image src={project.thumbnail} alt={"Image of " + project.title} className='rounded-md' />
      </CardHeader>
      <Divider />
      <CardBody>
        <h3 className='text-xl text-slate-900 dark:text-neutral-300 font-bold'>{project.title}</h3>
        <p className='text-sm text-slate-900 dark:text-neutral-400 font-semibold mb-2'>{project.duration}</p>
        <p className='text-xs text-slate-600 dark:text-neutral-400 mb-auto'>{project.description}</p>
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
              variant='bordered'
              startContent={getIcon(link.type)}
              onPress={() => openLink(link.url)}
              aria-label={"Link to " + link.title}
              className='text-slate-900 dark:text-neutral-300'
            >
              {link.title}
            </Button>
          ))}
        </div>
      </CardFooter>

    </Card>
  );

}
