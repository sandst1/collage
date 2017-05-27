import Vue from 'vue';
import Router from 'vue-router';
import ImageGrid from '@/components/ImageGrid';
import ImageDetails from '@/components/ImageDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/images',
    },
    {
      path: '/images',
      component: ImageGrid,
    },
    {
      path: '/images/:id',
      component: ImageDetails
    },
  ],
});
