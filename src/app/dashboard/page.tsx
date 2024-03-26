import Container from '@/common/components/elements/Container'
import { getGithubUser } from '@/services/github'
import PageHeading from '@/common/components/elements/PageHeading'
import Dashboard from '@/modules/dashboard'

const DashboardPage = async () => {
  const githubData = await getGithubUser('personal')

  return (
    <>
      <Container data-aos='fade-up'>
        <PageHeading
          title={'Dashboard'}
          description={
            'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.'
          }
        />
        <Dashboard />
      </Container>
    </>
  )
}

export default DashboardPage
