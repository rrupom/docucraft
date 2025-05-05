import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/docs");

export const getDocuments = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocuments = fileNames
    .map((fileName) => {
      const id = fileName.replace(".md", "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    })
    .sort((a, b) => (a.order > b.order ? 1 : a.order < b.order ? -1 : 0));

  return allDocuments;
};
