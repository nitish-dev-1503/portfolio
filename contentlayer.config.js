import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = {
    url: {
        type: 'string',
        resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
    },
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath,
    },
}

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `./**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: 'string', required: true },
        cover: { type: 'string', required: true },
        category: { type: 'string', required: true },
        date: { type: 'date' },
        discipline: { type: 'string' },
        github: { type: 'string' },
        medium: { type: 'string' },
        website: { type: 'string' }
    },
    computedFields
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    }
})