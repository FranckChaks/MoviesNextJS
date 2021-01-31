import { getHome, getLegalMentions } from '@api'
import PostLayout from '@layouts/post'

export default function Home(props) {
  return <PostLayout title={props.title} content={props.content}/>
}


export async function getStaticProps(context) {
  return {
    props: await getLegalMentions()
  }
}