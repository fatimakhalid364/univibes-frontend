import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
// const getPostSlugs = () => {
//     return fs.readdirSync(postsDirectory).map((file) =>
//         file.replace(/\.md$/, '')
//     );
// }

// export const getAllPostsMeta = () => {
//     const slugs = getPostSlugs();

//     return slugs.map((slug) => {
//         const filePath = path.join(postsDirectory, `${slug}.md`);
//         const fileContents = fs.readFileSync(filePath, 'utf8');
//         const { data, content } = matter(fileContents);

//         return {
//             slug,
//             title: data.title,
//             date: data.date,
//             author: data.author || 'Unknown',
//             featured: data.featured || false,
//             excerpt: content.split(' ').slice(0, 25).join(' '),
//         };
//     });
// }

export const getPostBySlug = (slug) => {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        meta: data,
        content,
    };
}

export function getAllPostsMeta() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '');

        return {
            slug,
            title: data.title,
            date: data.date,
            author: data.author || 'Unknown',
            featured: data.featured || false,
            image: data.image,
            excerpt: content.split(' ').slice(0, 25).join(' '),
        };
    });
}

export const getFeaturedPostsMeta = () => {
    return getAllPostsMeta().filter((post) => post.featured);
};

export function getAllPostsMetaSorted() {
    return getAllPostsMeta().sort((a, b) => new Date(b.date) - new Date(a.date));
}
