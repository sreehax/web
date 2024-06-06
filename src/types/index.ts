// a child can either be multiple elements, one element, or a string
export type Children = JSX.Element[] | JSX.Element | string;

// use an interface since it's extensible
export interface ReactComponent {
  children?: Children
}

// Markdown Metadata
export type PostMetadataPart = {
  title: string,
  date: Date,
  description: string,
};

export type PostMetadata = PostMetadataPart & {
  id: string
};

export type Post = PostMetadata & {
  content: string
};
