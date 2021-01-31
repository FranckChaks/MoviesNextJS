import { getHome } from '@api'
import PostLayout from '@layouts/post'

export default function listeOfMovies(props) {
  return <PostLayout title={props.title} content={props.content}/>
}

export async function getStaticProps(context) {
  return {
    props: await getHome()
  }
}
