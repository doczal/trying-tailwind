import Posts from 'components/Posts';
import Users from 'components/Users';
import Comments from 'components/Comments';
import FormPage from 'components/Form';

export const navigation = [
  {
    id: 1,
    title: 'Posts',
    path: '/posts',
    component: Posts,
  },
  {
    id: 2,
    title: 'Users',
    path: '/users',
    component: Users,
  },
  {
    id: 3,
    title: 'Comments',
    path: '/comments',
    component: Comments,
  },
  {
    id: 4,
    title: 'Form',
    path: '/form',
    component: FormPage,
  },
];
