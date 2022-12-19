import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { BASE_URL } from "#/constants";

import { serialize } from "next-mdx-remote/serialize";
import { BlogView } from "#/components";
import { TPostFrontMatter, TMdxSource } from "#/types";
import Head from "next/head";
export default function Post({
	frontMatter,
	mdxSource,
	similarPosts,
	slug,
}: {
	frontMatter: TPostFrontMatter;
	mdxSource: TMdxSource;
	similarPosts: {
		frontMatter: TPostFrontMatter;
		slug: string;
	}[];
	slug: string;
}) {
	const seo = {
		title: frontMatter?.title || "The David Obodo Blog",
		url: frontMatter?.url ? `${BASE_URL}/${frontMatter?.url}` : `${BASE_URL}/blog`,
		description: frontMatter?.description || "Technical and Life articles written by David Obodo",
		image: frontMatter?.banner || `${BASE_URL}/images/covers/blog.png`,
	};
	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta charSet="utf-8" />
				<meta property="type" content="website" />
				<meta property="url" content={seo.url} />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#e1dfdd" />

				<meta property="title" content={seo.title} />
				<meta name="description" content={seo.description} />
				<meta property="image" content={seo.image} />
				<meta content="image/*" property="og:image:type" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:url" content={seo.url} />
				<meta property="og:image" content={seo.image} />
				<meta property="og:site_name" content={seo.title} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@phitGeek" />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={seo.image} />

				<meta
					name="keywords"
					content="David, Obodo, Software Developer, Frontend, Fullstack, Frontend Developer, Fullstack Developer"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BlogView slug={slug} frontMatter={frontMatter} similarPosts={similarPosts} mdxSource={mdxSource} />
		</>
	);
}

//------------------------------------------------
// GET STATIC PATHS
//------------------------------------------------
export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => {
		return {
			params: {
				slug: filename.replace(".mdx", ""),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

//------------------------------------------------
// GET STATIC PROPS
//------------------------------------------------
export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { slug } = params;

	//Get similar posts
	const files = fs.readdirSync(path.join("posts"));

	const allPosts = files
		.map((filename) => {
			const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
			const { data: frontMatter } = matter(markdownWithMeta);

			return {
				frontMatter,
				slug: filename.split(".")[0],
			};
		})
		.sort((a, b) => {
			return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
		});

	try {
		//Get post details
		const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
		const { data: frontMatter, content } = matter(markdownWithMeta);
		const mdxSource = await serialize(content, {
			mdxOptions: {
				rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
				remarkPlugins: [
					[
						remarkPrism,
						{
							plugins: ["line-numbers"],
						},
					],
				],
			},
		});

		const similarPosts = allPosts
			.filter((post) => {
				const { tags, title } = post.frontMatter as TPostFrontMatter;
				return tags.some((tag) => frontMatter.tags.includes(tag)) && frontMatter.title !== title;
			})
			.slice(0, 3);

		return {
			props: {
				frontMatter,
				slug,
				mdxSource,
				similarPosts,
			},
		};
	} catch (e) {
		return {
			props: {
				frontMatter: null,
				slug,
				mdxSource: null,
				similarPosts: allPosts.slice(0, 3),
			},
		};
	}
}
