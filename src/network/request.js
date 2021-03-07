import axios from 'axios'

export function Request(config){
  const istance1 = axios.create({
    timeout: 5000
  })
   return istance1(config)
}
