import { findValue } from 'src/utils'
import api from './api'
import sidebar from  './sidebar'
import views from  './views'

export default function (value = '', fallback = null) {
  const values = {
    api,
    sidebar,
    views
  };
  return findValue(value, values) || fallback
}
