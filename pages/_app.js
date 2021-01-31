import "../styles/styles.scss";
import { AnimateSharedLayout } from "framer-motion"
import { motion } from "framer-motion"

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../mocks')
}

export default function App({ Component, pageProps, router }) {
    return (
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity:1
            },
        }}>
            <Component {...pageProps} />
        </motion.div>
    )
}
