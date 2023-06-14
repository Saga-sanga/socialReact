export type AuthObj = {
  user: UserProp["user"];
  login: null | ((data: any) => Promise<void>);
  logout: null | (() => void);
};

export type UserProp = {
  user: {
    email: string;
    name: {
      first: string;
      last: string;
    };
    _id: string;
    _v: number;
  } | null;
};

export type StateProps = {
  setUser: (a: any) => void;
};

export type PostData = {
  post: {
    content: string;
    image: string;
    likes: {
      name: {
        first: string;
        last: string;
      };
    }[];
    author: {
      name: {
        first: string;
        last: string;
      };
      profileImg: string;
    };
    comments: {
      content: string;
      author: string;
    }[];
    updatedAt: number;
  };
};
