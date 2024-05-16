import Button from '@/components/Button'
import Heading2 from '@/components/Heading2'
import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'

export default function NotFound() {
  return <PageContainer>
      <SectionContainer>
        <Heading2 >Page not found – 404!</Heading2>
        <Button href="/">Go back Home</Button>
      </SectionContainer>
      
  </PageContainer>
}