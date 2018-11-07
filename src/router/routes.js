import Route from 'vue-routisan'

/*VIEWS*/
import master from 'src/layouts/master'
import blank from 'src/layouts/blank'


/*=============== Route Redirects ===========================*/
Route.redirect('/', '/inicio');

/*===================== Routes ============================*/
/*Pages*/
Route.view('/', master)
  .children(() => {
      Route.view('/inicio', require('../layouts/pages/inicio').default).options({
        name: 'home'
      })
      Route.view('/nosotros', require('../layouts/pages/nosotros').default).options({
        name: 'nosotros'
      })
      Route.view('/contacto', require('../layouts/pages/contacto').default).options({
        name: 'contacto'
      })
      Route.view('/buscar', require('../layouts/pages/buscador').default).options({
        name: 'buscar'
      })
    }
  )

export default Route.all()
