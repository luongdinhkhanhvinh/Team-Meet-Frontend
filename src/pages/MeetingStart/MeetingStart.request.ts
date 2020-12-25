import { History } from 'history'
import routes from '../../routes'
import store from '../../store'
import RequestService from '../../services/RequestService'
import AccessTokenService from '../../services/AccessTokenService'
import {
  AuthState,
  actions as appActions
} from '../../components/App/App.state'

interface SignInCredentials {
  username: string,
  password: string
}

interface UpdateLastMeetingAtHost {
  id: string
}

export default class MeetingStartRequest {
  protected requestService: RequestService

  protected accessTokenService: AccessTokenService

  constructor () {
    this.requestService = new RequestService()
    this.accessTokenService = new AccessTokenService()
  }

  signIn (credentials: SignInCredentials, history: History) {
    this.requestService.post('/host/signIn', credentials, async response => {
      if (response) {
        const { id, accessToken } = response
        await this.accessTokenService.set(accessToken)
        const host: UpdateLastMeetingAtHost = { id }
        this.updateLastMeetingAt(host, () => {
          const auth: AuthState = { type: 'host' }
          store.dispatch(appActions.replaceAuth(auth))
          history.push(routes.meeting.path)
        })
      }
    })
  }

  updateLastMeetingAt (host: UpdateLastMeetingAtHost, callback: () => void) {
    this.requestService.patch('/host/lastMeetingAt', host, response => {
      if (response) callback()
    })
  }
}
