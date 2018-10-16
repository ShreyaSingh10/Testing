import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//passing new instance of react 16 adapter
Enzyme.configure({ adapter: new Adapter() })
