import Component from '@glimmer/component';
import ENV from 'ember-quickstart/config/environment'

export default class MapComponent extends Component {
    get token() { // declare a getter called 'token' which can be accessed by 'this.token'
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}
