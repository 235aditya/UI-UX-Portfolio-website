
import CaseStudy from './CaseStudy';

export async function generateStaticParams() {
  return [
    { id: '9' },
  ];
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  return <CaseStudy caseId={params.id} />;
}
