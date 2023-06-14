import kaligPic from "./kalig_smile.jpg";

export const posts = [
  {
    content: "I feel so Happy",
    image:
      "https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    likes: [
      {
        name: {
          first: "Reckson",
          last: "Khiangte",
        },
      },
    ],
    author: {
      name: {
        first: "Reckson",
        last: "Khiangte",
      },
      profileImg: "",
    },
    comments: [
      {
        content: "",
        author: "",
      },
    ],
    updatedAt: Date.now(),
  },
  {
    content: "Travelling around the land. Making Memories!",
    image:
      "https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80",
    likes: [
      {
        name: {
          first: "Reckson",
          last: "Khiangte",
        },
      },
    ],
    author: {
      name: {
        first: "Lewis",
        last: "Joseph",
      },
      profileImg: "https://mui.com/static/images/avatar/2.jpg",
    },
    comments: [
      {
        content: "",
        author: "",
      },
    ],
    updatedAt: Date.now(),
  },
  {
    content: "Fishing in a lake! There's a fist time for everything!",
    image: "https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: [
      {
        name: {
          first: "Reckson",
          last: "Khiangte",
        },
      },
      {
        name: {
          first: "Lewis",
          last: "Joseph",
        },
      },
    ],
    author: {
      name: {
        first: "Calridge",
        last: "Charles",
      },
      profileImg: kaligPic,
    },
    comments: [
      {
        content: "",
        author: "",
      },
    ],
    updatedAt: Date.now(),
  },
];