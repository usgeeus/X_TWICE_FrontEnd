import GridLayoutSell from '../components/GridLayoutSell';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(nft:any){
    return {
        nft:nft
    }
}
export default connect(mapReduxStateToReactProps)(GridLayoutSell);