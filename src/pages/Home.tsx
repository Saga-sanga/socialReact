import { Link } from "react-router-dom";

type UserProp = {
  user: {
    email: string,
    name: {
      first: string,
      last: string,
    },
    _id: string,
    _v: number
  } | null
}

export default function Home({user}: UserProp) {
  return(
    <div>
      <div>Welcome! {user?.name.first}</div>
      <Link to="/login">Login</Link>

    </div>
  )
}