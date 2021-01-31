import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import { motion } from "framer-motion"

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity:0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            },
        }} className="post_layout">
           <h1 className="title-content">{props.title}</h1>
          <div className="post_content_layout" id="post-content" dangerouslySetInnerHTML={{__html:props.content}}/>
        </motion.div>
      </article>
    </DefaultLayout>
  )
}
