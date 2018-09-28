import CMS from "netlify-cms";

import AboutPagePreview from "../templates/about-page/AboutPagePreview";
import BlogPostPreview from "../templates/blog-post/BlogPostPreview";
import ProductPagePreview from "../templates/product-page/ProductPagePreview";
import UnsereWohnungenPreview from "../templates/unsere-wohnungen/UnsereWohnungenPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("unsere-wohnungen", UnsereWohnungenPreview);
