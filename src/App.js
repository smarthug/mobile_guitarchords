import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';


import chords from './chords'
import ChordList from './chordsList'

import './App.css';


// list of items
const list1 = [
  { name: 'A♭' },
  { name: 'A' },
  { name: 'B♭' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D♭' },
  { name: 'D' },
  { name: 'E♭' },
  { name: 'E' },
  { name: 'F' },
  { name: 'F♯' },
  { name: 'G' },
];

const list2 = [
  { name: 'Major' },
  { name: 'minor' },
  { name: '6' },
  { name: '7' },
  { name: '9' },
  { name: 'm6' },
  { name: 'm7' },
  { name: 'maj7' },
  { name: 'dim'},
  { name: '+'},
  { name: 'sus'},

];



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

    this.currentChord = ChordList.A.Major

   
  }

  state = {
    selected1,
    selected2,
    currentChord : ChordList.A.minor
  };

  onSelect1 = key => {
    
    this.setState({ selected1: key });
    console.log(key + this.state.selected2)
    
    console.log(ChordList[key][this.state.selected2])
    
    if(ChordList[key][this.state.selected2] !== null){
      this.currentChord = ChordList[key][this.state.selected2]
      setTimeout(this.change, 1)
    } else {
      console.log('no such chord or not yet updated.')
    }
  }

  onSelect2 = key => {
    
    this.setState({ selected2: key });
    console.log(this.state.selected1 + key)
    
    console.log(this.currentChord)
    
    console.log()
    if(ChordList[this.state.selected1][key] !== null){
      this.currentChord = ChordList[this.state.selected1][key]
      setTimeout(this.change, 1)
    }else {
      console.log('no such chord or not yet updated.')
    }
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

        
        
        <chord name={this.currentChord.name} positions={this.currentChord.positions} fingers={this.currentChord.fingers} size="10" ></chord>
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
      </div>
    );
  }
}

export default App;
