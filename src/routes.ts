import Preload from './pages/Preload/Preload'
import Home from './pages/Home/Home'
import MeetingJoin from './pages/MeetingJoin/MeetingJoin'
import MeetingStart from './pages/MeetingStart/MeetingStart'
import Meeting from './pages/Meeting/Meeting'
import Install from './pages/Install/Install'
import AdminSignIn from './pages/AdminSignIn/AdminSignIn'
import Hosts from './pages/Hosts/Hosts'
import PrivacyEdit from './pages/PrivacyEdit/PrivacyEdit'
import Privacy from './pages/Privacy/Privacy'
import NotFound from './pages/NotFound/NotFound'

export default {
  preload: { path: '/', component: Preload },
  home: { path: '/home', component: Home },
  meetingJoin: { path: '/join', component: MeetingJoin },
  meetingStart: { path: '/start', component: MeetingStart },
  meeting: { path: '/meeting', component: Meeting },
  install: { path: '/install', component: Install },
  adminSignIn: { path: '/admin', component: AdminSignIn },
  hosts: { path: '/hosts', component: Hosts },
  privacyEdit: { path: '/privacy/edit', component: PrivacyEdit },
  privacy: { path: '/privacy', component: Privacy },
  notFound: { path: '*', component: NotFound }
}
