import React, {Component} from 'react';
import "./navBar.css";
import fblogo from "../../images/images1/logo.png";
import home from "../../images/images1/home.svg";
import page from "../../images/images1/pages.svg";
import watch from "../../images/images1/watch.svg";
import market from "../../images/images1/market.svg";
import group from "../../images/images1/groups.svg";
import Grid from '@material-ui/core/Grid';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Grid className='main_navbar' container>
                <Grid item xs ={3}>
                    <div className= 'navbar_left_bar'>
                        <img className='navbar_logo' src={fblogo}/>
                        <input className='navbar_search' type='text' placeholder='Tìm kiếm trên Facebook'/>
                    </div>
                </Grid>
                <Grid item xs ={6}>
                    <div className='navbar_container'>
                        <div className='navbar_tabs.active'>
                            <img className='home'width='35px'  src={home} />
                        </div>
                        <div className='navbar_tabs'>
                            <img className='page' width='35px'   src={page} />
                        </div>
                        <div className='navbar_tabs'>
                            <img className='watch' width='35px'   src={watch} />
                        </div>
                        <div className='navbar_tabs'>
                            <img className='market' width='35px'   src={market} />
                        </div>
                        <div className='navbar_tabs'>
                            <img className='group' width='35px'   src={group} />
                        </div>
                    </div>

                </Grid>
                <Grid item xs ={3}>
                    right
                </Grid>
            </Grid>
         );
    }
}
 
export default Navbar;