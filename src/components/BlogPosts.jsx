import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import PropTypes from "prop-types"

const blogPosts = [
  {
    id: 1,
    title: "I Can’t Believe This Model Is Open-Sourced!!!! A Small Open-Source Model That’s on Par with OpenAI’s O1",
    excerpt:
      "If you’ve been following the AI space, you know that the race to build the most ...",
    image: "/public/llm.webp",
    author: "Pranesh Nikhar",
    date: "Jan 28, 2025",
    readTime: "5 min read",
    link: "https://medium.com/@praneshnikhar/i-cant-believe-this-model-is-open-sourced-0102d0c56637",
  },
  {
    id: 2,
    title: "The Power of Machine Learning: Transforming the Future",
    excerpt:
      "Machine Learning (ML) is no longer just a buzzword; it is a revolutionary technology that is shaping industries and redefining how we interact with data..",
    image: "/public/ml.avif",
    author: "Siya Mulge",
    date: "Jan 27, 2025",
    readTime: "4 min read",
    link: "https://medium.com/@praneshnikhar/the-power-of-machine-learning-transforming-the-future-4456f29610e0",
  },
  {
    id: 3,
    title: "Understanding Machine Learning Algorithms: The Building Blocks of AI",
    excerpt:
      "Machine learning algorithms are the backbone of artificial intelligence, powering systems to analyze data, recognize patterns, and make decisions. These algorithms are designed to mimic human learning.",
    image: "/public/algo.png",
    author: "Aarohi Manchanda",
    date: "Jan 26, 205",
    readTime: "4 min read",
    link: "https://medium.com/@praneshnikhar/understanding-machine-learning-algorithms-the-building-blocks-of-ai-39f68c407760",
  },
]

const BlogCard = ({ post }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {post.date} • {post.readTime}
          </div>
          <motion.a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="text-ieee-blue dark:text-[#B2A5FF] hover:underline flex items-center"
          >
            Read more
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

function BlogPosts() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">Blogs</h2>
          <p className="text-gray-600 dark:text-[#B2A5FF]">Exploring AI Insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="https://medium.com/@praneshnikhar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-ieee-blue text-white px-8 py-3 rounded-md hover:bg-[#B2A5FF]  transition-colors shadow-md"
          >
            More Blogs
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
