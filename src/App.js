import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';


import chords from './chords'

import './App.css';


// list of items
const list1 = [
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D' },
  { name: 'E' },
  { name: 'F' },
  { name: 'G' },
];

const list2 = [
  { name: 'Major' },
  { name: 'minor' },
  { name: '7' },
  { name: 'm7' },
  { name: 'maj7' },
];

const chordsList = {
  A:{
    Major:{
      name:'A',
      positions:'X02220',
      fingers:'--123-'
    },
    minor:{
      name:'Am',
      positions:'X02210',
      fingers:'--231-'
    }
  },
  B:{

  },
  C:{

  }
}

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};



const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected1 = 'A';
const selected2 = 'Major';

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems1 = Menu(list1, selected1);
    this.menuItems2 = Menu(list2, selected2);

    this.currentChord = chordsList.A.Major

   
  }

  state = {
    selected1,
    selected2,
    currentChord : chordsList.A.minor
  };

  onSelect1 = key => {
    
    this.setState({ selected1: key });
    console.log(key + this.state.selected2)
    this.currentChord = chordsList[key][this.state.selected2]
    console.log(this.currentChord)
    
    setTimeout(this.change, 1)
  }

  onSelect2 = key => {
    
    this.setState({ selected2: key });
    console.log(this.state.selected1 + key)
    this.currentChord = chordsList[this.state.selected1][key]
    console.log(this.currentChord)
    
    
    
    setTimeout(this.change, 1)
  }

  resetCanvas = () => {
    var tmp = document.querySelectorAll('canvas')
    tmp.forEach((item,index)=>{
      item.remove();
    })
  }

  change = () => {
    this.resetCanvas()
    chords.replace()
  }


  componentDidMount(){
    chords.replace()
  }


  render() {
    const { selected1, selected2 } = this.state;
    // Create menu from items
    const menu1 = this.menuItems1;
    const menu2 = this.menuItems2;

    return (
      <div className="App">
        <ScrollMenu
          data={menu1}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected1}
          onSelect={this.onSelect1}
        />
        <ScrollMenu
          data={menu2}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected2}
          onSelect={this.onSelect2}
        />

        
        
        <chord name={this.currentChord.name} positions={this.currentChord.positions} fingers={this.currentChord.fingers} size="10" ></chord>
      </div>
    );
  }
}

export default App;
