import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SaveFile from '@/features/monaco-editor/SaveFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/save-file',
      name: 'Save File',
      component: SaveFile
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
