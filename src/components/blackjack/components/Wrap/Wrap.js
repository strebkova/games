import React, {Component} from 'react';
import $ from "jquery";
import styles from './Wrap.module.css';

    
class Wrap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
    
        this.WidthAndHeight()        
      
    }

    WidthAndHeight() {
        const [maxWidth, setMaxWidth] = React.useState(window.innerWidth);
        const [maxHeight, setMaxHeight] = React.useState(window.innerHeight);
        const ratio = 0;
        const [width, setWidth] = React.useState();
        const [height, setHeight] = React.useState();
    
        //React.useEffect(() => {
            window.addEventListener("resize", updateWidthAndHeight);
            //return () => window.removeEventListener("resize", updateWidthAndHeight);
        //});
    
        const updateWidthAndHeight = () => {
            setMaxWidth(window.innerWidth);
            setMaxHeight(window.innerHeight);
        };
    
        this.setState({
            width: maxWidth,
            height: maxHeight
        })
    }

    render() {
        return (
            <div className={styles.containerfull}>
                <div className={styles.container}>
                    <div 
                    className={styles.wrap}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
                    />
                </div>
            </div>
        );
    }
};



export default Wrap