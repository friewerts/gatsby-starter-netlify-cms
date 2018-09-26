import CMS from 'netlify-cms'

import AboutPagePreview from '../templates/about-page/AboutPagePreview'
import BlogPostPreview from '../templates/blog-post/BlogPostPreview'
import ProductPagePreview from '../templates/product-page/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
