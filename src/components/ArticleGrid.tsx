import { useEffect, useState } from "react";
import ArticleCard from "./Card/ArticleCard";
import ArticleLoader from "./Loader/ArticleLoader";

interface ArticleGridTypes {
  toggleThemeMode: () => void;
}
const ArticleGrid: React.FC<ArticleGridTypes> = ({ toggleThemeMode }) => {
  const [isLoading, setIsLoading] = useState(true);

  type articlesDataType = {
    title: string;
    date: string;
    authorName: string;
    imageUrl: string;
    authorImageUrl: string;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const articles: articlesDataType[] = [
    {
      title: "Article Title 1",
      date: "11/1/19",
      authorName: "Author Name 1",
      imageUrl: "https://picsum.photos/600/400/?random=1",
      authorImageUrl: "https://picsum.photos/32/32/?random=1",
    },
    {
      title: "Article Title 2",
      date: "11/2/19",
      authorName: "Author Name 2",
      imageUrl: "https://picsum.photos/600/400/?random=2",
      authorImageUrl: "https://picsum.photos/32/32/?random=2",
    },
    {
      title: "Article Title 3",
      date: "11/3/19",
      authorName: "Author Name 3",
      imageUrl: "https://picsum.photos/600/400/?random=3",
      authorImageUrl: "https://picsum.photos/32/32/?random=3",
    },
    {
      title: "Article Title 4",
      date: "11/4/19",
      authorName: "Author Name 4",
      imageUrl: "https://picsum.photos/600/400/?random=4",
      authorImageUrl: "https://picsum.photos/32/32/?random=4",
    },
    {
      title: "Article Title 5",
      date: "11/5/19",
      authorName: "Author Name 5",
      imageUrl: "https://picsum.photos/600/400/?random=5",
      authorImageUrl: "https://picsum.photos/32/32/?random=5",
    },
    {
      title: "Article Title 6",
      date: "11/6/19",
      authorName: "Author Name 6",
      imageUrl: "https://picsum.photos/600/400/?random=6",
      authorImageUrl: "https://picsum.photos/32/32/?random=6",
    },
    {
      title: "Article Title 7",
      date: "11/1/19",
      authorName: "Author Name 1",
      imageUrl: "https://picsum.photos/600/400/?random=1",
      authorImageUrl: "https://picsum.photos/32/32/?random=1",
    },
    {
      title: "Article Title 8",
      date: "11/2/19",
      authorName: "Author Name 2",
      imageUrl: "https://picsum.photos/600/400/?random=2",
      authorImageUrl: "https://picsum.photos/32/32/?random=2",
    },
    {
      title: "Article Title 9",
      date: "11/3/19",
      authorName: "Author Name 3",
      imageUrl: "https://picsum.photos/600/400/?random=3",
      authorImageUrl: "https://picsum.photos/32/32/?random=3",
    },
    {
      title: "Article Title 10",
      date: "11/4/19",
      authorName: "Author Name 4",
      imageUrl: "https://picsum.photos/600/400/?random=4",
      authorImageUrl: "https://picsum.photos/32/32/?random=4",
    },
    {
      title: "Article Title 11",
      date: "11/5/19",
      authorName: "Author Name 5",
      imageUrl: "https://picsum.photos/600/400/?random=5",
      authorImageUrl: "https://picsum.photos/32/32/?random=5",
    },
    {
      title: "Article Title 12",
      date: "11/6/19",
      authorName: "Author Name 6",
      imageUrl: "https://picsum.photos/600/400/?random=6",
      authorImageUrl: "https://picsum.photos/32/32/?random=6",
    },
  ];

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-y-3 md:gap-y-0">
        {isLoading
          ? articles.map((_, index) => <ArticleLoader key={index} />)
          : articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                date={article.date}
                authorName={article.authorName}
                imageUrl={article.imageUrl}
                authorImageUrl={article.authorImageUrl}
              />
            ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
