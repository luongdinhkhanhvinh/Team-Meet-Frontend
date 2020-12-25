import { History } from 'history'
import routes from '../../routes'
import RequestService from '../../services/RequestService'

interface CreateAdminData {
  username: string,
  password: string,
  confirmPassword: string
}

export default class InstallRequest {
  protected requestService: RequestService

  constructor () {
    this.requestService = new RequestService()
  }

  createAdmin (admin: CreateAdminData, history: History) {
    this.requestService.post('/admin', admin, response => {
      if (response) history.push(routes.adminSignIn.path)
    })
  }

  validateInstall (history: History) {
    this.requestService.get('/admin', admin => {
      if (admin) history.push(routes.adminSignIn.path)
    })
  }
}
