import { reactive } from 'vue';
import { CommentService, PostsService, UserService } from '@/services/api';
import Post from '@/types/post';
import Comment from '@/types/comment';
import User from '@/types/user';

export default reactive({
  posts: [] as Post[],
  isLoading: false,
  async loadAllData() {
    return new Promise((resolve, reject) => (async () => {
      try {
        this.isLoading = true;
        const postService = new PostsService();
        const commentService = new CommentService();
        const userService = new UserService();
        const postsResponse = await postService.getAll();
        const commentsResponse = await commentService.getAll();
        const userResponse = await userService.getAll();

        if (postsResponse.status === 200 && commentsResponse.status === 200 && userResponse.status === 200) {
          this.posts = postsResponse.data.map((post: Post) => {
            const matchedComments = commentsResponse.data.filter((comment: Comment) => (
              comment.postId === post.id ? comment : null
            ));

            const matchedUser = userResponse.data.filter((user: User) => (
              user.id === post.userId ? user : null
            ));

            return { ...post, comments: matchedComments, user: matchedUser[0] };
          });
          resolve(true);
        }
      } catch {
        reject(new Error('Could not fetch the posts.'));
      } finally {
        this.isLoading = false;
      }
    })());
  },
  async loadSinglePost(id: number) {
    return new Promise((resolve, reject) => (async () => {
      try {
        const postService = new PostsService();
        const userService = new UserService();
        const postsResponse = await postService.get(id);
        this.isLoading = true;

        if (postsResponse.status === 200 && postsResponse.data) {
          const userResponse = await userService.get(postsResponse.data.userId);

          const data = {
            ...postsResponse.data,
            user: userResponse.data,
          };
          resolve(data as Post[]);
        } else {
          reject(new Error('Could not fetch the post.'));
        }
      } catch {
        reject(new Error('Could not fetch the post.'));
      } finally {
        this.isLoading = false;
      }
    })());
  },
});
