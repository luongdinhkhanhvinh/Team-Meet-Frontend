import React, { ChangeEvent, Component, Fragment } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import Request from './MeetingStart.request'
import { actions, MeetingStartActions } from './MeetingStart.state'
import Page from '../../components/Page/Page'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

interface MeetingProps extends MeetingStartActions, RouteComponentProps {}

interface MeetingState {
  username: string
  password: string
}

class MeetingStart extends Component<MeetingProps, MeetingState> {
  protected request: Request

  constructor (props: any) {
    super(props)
    this.request = new Request()
    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStartClick = this.handleStartClick.bind(this)
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
    }
  }

  handleStartClick () {
    const { username, password } = this.state
    const credentials = { username, password }
    this.request.signIn(credentials, this.props.history)
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
              <Button
                text="Start Meeting"
                handleClick={this.handleStartClick} />
            </Fragment>
          </Page>
        </IonContent>
      </IonPage>
    )
  }
}

export default withRouter(connect(null, actions)(MeetingStart))
