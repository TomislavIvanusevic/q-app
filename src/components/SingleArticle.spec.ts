import { mount, RouterLinkStub } from '@vue/test-utils';
import SingleArticle from '@/components/SingleArticle.vue';

const mockedPost = {
  id: 1,
  userId: 2,
  title: 'Some Title',
  body: 'Body text',
  user: {
    id: 2,
    name: 'Users Name',
    username: 'username',
    email: 'username@username.com',
    website: '',
  },
};

describe('SingleArticle.vue', () => {
  it('renders correctly when prop passed', () => {
    const wrapper = mount(SingleArticle, {
      props: { post: mockedPost },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.html()).toContain('article-card');
  });
});
