/**
 * Config for items in Menu
 */

/*
*{
  title: 'Assignment',
  icon: 'fas fa-users-cog',
  to: 'user.users.assignment',
  can:'user.users.index'
},*/

export default {
  /*home*/
  inicio: {
    title: 'Inicio',
    icon: 'fas fa-home',
    to: 'inicio'
  },
  nosotros: {
    title: 'Nosotros',
    icon: 'fas fa-id-card-alt',
    to: 'nosotros'
  },
  category: {
    title: 'Category',
    icon: 'fas fa-sitemap',
    to: 'category',
    children:[
      {
        title: 'lv2',
        icon: 'fas fa-phone-square',
        to: 'lv2',
        children: [
          {
            title: 'lv3',
            icon: 'fas fa-phone-square',
            to: 'lv3',
          },{
            title: 'lv3.1',
            icon: 'fas fa-phone-square',
            to: 'lv3-1',
          },
        ]
      },
      {
        title: 'lv2.1',
        icon: 'fas fa-phone-square',
        to: 'lv2-1',
        children: [
          {
            title: 'lv3',
            icon: 'fas fa-phone-square',
            to: 'lv3',
          },{
            title: 'lv3.1',
            icon: 'fas fa-phone-square',
            to: 'lv3-1',
          },
        ]
      },
    ]
  },
  contaco: {
    title: 'Contacto',
    icon: 'fas fa-phone-square',
    to: 'contacto'
  },
}
