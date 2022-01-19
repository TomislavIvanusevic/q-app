import Comment from './comment';
import User from './user';

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
    comments?: Comment[];
    user?: User;
}

export default Post;
