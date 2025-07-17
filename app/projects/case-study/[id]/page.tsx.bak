
import { notFound } from 'next/navigation';
import CaseStudy from './CaseStudy';

const projects = [
  { id: '1', title: 'E-Commerce Mobile App' },
  { id: '2', title: 'Healthcare Dashboard' },
  { id: '3', title: 'Financial App Redesign' },
  { id: '4', title: 'Restaurant Website' },
  { id: '5', title: 'Learning Platform UI' },
  { id: '6', title: 'Travel App Concept' },
  { id: '7', title: 'Corporate Website' }
];

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' }
  ];
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return <CaseStudy projectId={params.id} />;
}
