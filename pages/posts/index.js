import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import { motion } from "framer-motion"

export default function Blog(props) {
    return (
        <DefaultLayout title={props.title} description={props.description} image={props.image}>
            <h1 className="title-content">Films</h1>
            <div className="film_list_display" >
                {props.posts.map(function(post, idx) {
                    return (
                        <motion.div whileHover={{
                            scale: [1, 1.1, 1.05],
                            zIndex: 1,
                            position:'relative',
                            transition: {
                                duration: .2
                            }
                        }} key={idx} id="list-movies">
                            <Link href={'/posts/'+post.slug}>
                                <img  className="img_card" src={post.image}/>
                            </Link>
                            <div className="title-movie">{post.title}</div>
                        </motion.div>
                    )
                })}

            </div>
        </DefaultLayout>

    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    return {
        props: {
            posts: allPosts,
            title: config.title,
            image: config.image
        }
    }
}
