<template>
  <div id="formContacto" class="q-layout-page">
    <!--Name-->
    <q-field
      :error="$v.form.name.$error" :count="10"
      error-label="Su nombre es requerido"
    >
      <q-input v-model="form.name" clearable
               float-label="Nombre*"/>
    </q-field>
    <!--Email-->
    <q-field
      :error="$v.form.email.$error"
      error-label="Formato de e-mail no valido"
    >
      <q-input v-model="form.email" clearable
               type="email" float-label="Email"/>
    </q-field>
    <!--Phone-->
    <q-field
      :error="$v.form.phone.$error" :count="7"
      error-label="Su teléfono es requerido"
    >
      <q-input v-model="form.phone" clearable
               type="number" float-label="Teléfono*"/>
    </q-field>
    <!--Message-->
    <q-field
      :error="$v.form.message.$error" :count="10"
      error-label="El mensaje es requerido"
    >
      <q-input
        v-model="form.message"
        type="textarea" clearable
        float-label="Mensaje*"
        rows="3" :max-height="72"
      ></q-input>
    </q-field>

    <q-btn label="Enviar" class="q-mt-lg"
           color="secondary" rounded @click="submit"
           icon-right="fas fa-arrow-right"/>
  </div>
</template>
<script>
  //plugins
  import {required, email, numeric, minLength} from 'vuelidate/lib/validators'
  import {alert} from '@imagina/qhelper/_plugins/alert'

  //Services
  import formServices from 'src/services/form'

  export default {
    props: {},
    components: {},
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(5)
        },
        email: {email},
        phone: {
          required,
          minLength: minLength(7)
        },
        message: {
          required,
          minLength: minLength(10)
        }
      }
    },
    methods: {
      submit() {
        this.$v.$touch();//validate all fields from form

        if (!this.$v.$error) {
          let data = {
            name: this.form.name,
            email: this.form.email,
            phone: this.form.phone,
            message: this.form.message,
            'form_id' : 1
          }
          formServices.sendForm(data).then(response => {
            alert.success('Mensaje enviado')
            /*Clear Form*/
            this.form = {
              name: '',
              email: '',
              phone: '',
              message: ''
            }
            this.$v.$reset();
          })
        }
      }
    }

  }
</script>
<style lang="stylus">
  @import "~variables";
</style>
