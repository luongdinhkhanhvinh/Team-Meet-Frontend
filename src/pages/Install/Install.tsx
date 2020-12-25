import React, { ChangeEvent, Component, Fragment } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { RouteComponentProps, withRouter } from 'react-router'
import Request from './Install.request'
import Page from '../../components/Page/Page'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

interface InstallProps extends RouteComponentProps {}

interface InstallState {
  username: string
  password: string
  confirmPassword: string
}

class Install extends Component<InstallProps, InstallState> {
  protected request: Request

  constructor (props: any) {
    super(props)
    this.request = new Request()
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCreateClick = this.handleCreateClick.bind(this)
    this.validateIntall()
  }

  handleInputChange (event: ChangeEvent) {
    const target = event.target as HTMLInputElement
    const { value, name } = target
    switch (name) {
      case 'username':
        this.setState({ username: value })
        break
      case 'password':
        this.setState({ password: value })
        break
      case 'confirmPassword':
        this.setState({ confirmPassword: value })
        break
    }
  }

  handleCreateClick () {
    const { username, password, confirmPassword } = this.state
    const admin = { username, password, confirmPassword }
    this.request.createAdmin(admin, this.props.history)
  }

  validateIntall () {
    this.request.validateInstall(this.props.history)
  }

  render () {
    return (
      <IonPage>
        <IonContent fullscreen>
          <Page flip={false} container="small">
            <Fragment>
              <Input
                name="username"
                type="text"
                value={this.state.username}
                placeholder="Username"
                handleChange={this.handleInputChange} />
              <Input
                name="password"
                type="password"
                value={this.state.password}
                placeholder="Password"
                handleChange={this.handleInputChange} />
              <Input
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                placeholder="Confirm password"
                handleChange={this.handleInputChange} />
              <Button
                text="Create Admin"
                handleClick={this.handleCreateClick} />
            </Fragment>
          </Page>
        </IonContent>
      </IonPage>
    )
  }
}

export default withRouter(Install)
