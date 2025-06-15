export interface blogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  heroImage: any;
}

export interface article {
  title: string;
  currentSlug: string;
  heroImage: any;
  content: any;
}

export interface blogPost {
  title: string;
  image_url: string;
  is_published: boolean;
  slug: string;
  content: string;
}

export interface serviceInfo {
  title: string;
  icon?: React.ReactNode;
  iconColor?: string;
  description: string;
  destination?: string;
}

export interface course {
  title: string;
  description: string;
  image: File;
  price?: number;
  categoryId: string;
}

export interface playground {
  defaultCode: string;
}
