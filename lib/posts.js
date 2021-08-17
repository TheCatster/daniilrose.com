import fs from "fs";
import path from "path";
import matter from "gray-matter";
import stream from "unified-stream";
import reorg from "@orgajs/reorg";
import mutate from "@orgajs/reorg-rehype";
import html from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".org" from file name to get id
    const id = fileName.replace(/\.org$/, "");

    // Read org file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.org$/, ""),
      },
    };
  });
}

export function getAllPostTags() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsTags = fileNames.map((fileName) => {
    // Read org file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Return just tags
    return {
      ...matterResult.data.tags,
    };
  });

  let allPostsSortedTags = [];
  for (let tags of allPostsTags) {
    allPostsSortedTags.push(Object.values(tags));
  }

  allPostsSortedTags = [...new Set(allPostsSortedTags.flat(1))];

  return allPostsSortedTags.map((postTag) => {
    return {
      params: {
        category: postTag,
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.org`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await reorg()
    .use(mutate)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
