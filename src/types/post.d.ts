declare type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
  };
  
  declare type PostWithContent = Post & {
    content: string;
  };
  