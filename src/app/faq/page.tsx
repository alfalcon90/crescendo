import Accordion from '@/components/Accordion'
import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import SectionHeader from '@/components/SectionHeader'

export default function FAQ() {
  return (
    <PageContainer>
      <SectionContainer className="max-w-4xl space-y-4">
        <SectionHeader
          overline="How does this work?"
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions and concerns about my performance consulting services."
        />
        <Accordion title="How can performance psychology help me?">
          <p>Working with a mental performance consultant can benefit your performing ability in many ways. The many topics that I cover with clients include:</p>
          <br/>
          <ul className='list-disc list-inside'>
            <li>performance anxiety</li>
            <li>confidence and “Impostor syndrome”</li>
            <li>audition preparation</li>
            <li>practice skills</li>
            <li>motivation</li>
            <li>managing perfectionism</li>
            <li>the psychological side of injury recovery</li>
            <li>career concerns or transitions</li>
            <li>and much more!</li>
          </ul>
        </Accordion>
        <Accordion title="What does it look like?">
          <p>We will meet one-on-one in a private setting, either in-person or virtually (Zoom or Skype). Usually meetings are 50 minutes, but this can be adjusted. The frequency of meetings varies based on your needs – it can range anywhere from once a week to once a year! <br/><br/> Some people are satisfied with only one or two sessions total, while others want twenty or more…and that’s all completely OK. </p>
        </Accordion>
        <Accordion title="Is it confidential?">
          <p>Yes – everything about our sessions is confidential, including even the fact that you are seeing me. Some small ethical exceptions to confidentiality exist, but we will discuss those in our first appointment together. I follow the confidentiality guidelines of the American Psychological Association (APA) and the Association for Applied Sport Psychology (AASP).</p>
        </Accordion>
        <Accordion title="Is this therapy?">
          <p>No – performance consulting is not therapy. Although we might discuss many personal issues and how they relate to your performance, I may refer you to a therapist for mental health concerns as appropriate. However, I can still see you for performance consulting if you are also seeing a therapist at the same time!</p>
        </Accordion>
        <Accordion title="Do you work with groups?">
          <p>Yes! Contact me and we can discuss if group consulting is the right fit for your organization or ensemble.</p>
        </Accordion>
        <Accordion title="How much does it cost?">
          <p>Please contact me for my current rates. However, I recognize that cost is often a barrier to seeking performance consultation; as a result, I set aside a limited number of appointments each week to be on a sliding scale (discount). In addition, I’m happy to be flexible on the frequency (or length) of sessions to help fit your budget. </p>
        </Accordion>
      </SectionContainer>
    </PageContainer>
  )
}