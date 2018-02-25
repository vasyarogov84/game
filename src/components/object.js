import React, {
  Component
} from 'react';
export default class Obj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '50px',
      height: '50px',
      color: 'green',
      marginTop: '50px',
      marginLeft: '50px',
      borderRadius: '25px'
      
    }
    //this.hello = this.hello.bind(this);
  }
 hello = () => {
  let top = Math.floor(Math.random()*600 + 150);
  this.setState({marginTop: top + 'px'});

  let left = Math.floor(Math.random()*screen.width + 50);
  this.setState({marginLeft: left + 'px'});

  let color = "#";
  let symbols = "ABCDEF1234567890";
  for(var i = 0; i < 6; i++) {
   color += symbols[Math.floor(Math.random()*15 + 1)];
  }
  console.log(color);
  this.setState({color});
};



  render() {
    let style = {
      width: this.state.width,
      height:this.state.height,
      backgroundColor:this.state.color,
      marginTop: this.state.marginTop,
      marginLeft: this.state.marginLeft,
      borderRadius:  this.state.borderRadius
    }
    return(
      <div>
      Timer: 
      <div style={style}
      onClick={this.hello}
      >
      </div>  
      </div>  
    );
  }
}
