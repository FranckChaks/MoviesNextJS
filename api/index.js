import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export async function getHome() {
  const fileContent = await import(`../_pages/home.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    title: meta.data.title, 
    description: meta.data.description,
    content: content
  }
}

export async function getLegalMentions() {
  const fileContent = await import(`../_pages/legalmentions.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    title: meta.data.title, 
    content: content
  }
}

export async function getContacts() {
  const fileContent = await import(`../_pages/contacts.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)
  return {
    title: meta.data.title,
    content: content
  }
}

export async function getAllPosts() {
  const context = require.context('../_posts', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title,
      image: meta.data.image,
    })
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    title: meta.data.title, 
    content: content
  }
}

export async function getConfig() {
  const config = await import(`../config.yml`)
  return yaml.load(config.default)
}
