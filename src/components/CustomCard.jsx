import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './Tooltip.scss'
import colorScheme from './Tooltip.scss'

export class CustomCard extends Component {
    /*
        This is a single Card which contains an image, body, and title. Used to ensure uniform appearance throughout CreatePlan
    */

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            styles: {
                minHeight: '240px',
                //flex:1,
                backgroundColor: colorScheme.backgroundNormal
            }
        }
        this.inputRef = React.createRef();

        this.handleClick = this.handleClick.bind(this);
        if (props.image === undefined) {
            props.image = ""
        }
    }

    handleClick() {
        this.props.pass(this.inputRef, this.props.name);
        if(this.props.category)
            this.props.selected(this.props.category, this.props.name, this);
        else
        this.props.selected(this.props.name, this);
        /*
        // moving to function below
        this.setState((previousState, currentProps) => {
            const selectedNew = !previousState.selected;
            this.styles = {
                backgroundColor: this.state.selected ? colorScheme.backgroundSelected : colorScheme.backgroundNormal
            }
            const newBackground = selectedNew ? colorScheme.backgroundSelected : colorScheme.backgroundNormal;
            return {
                selected: selectedNew,
                styles: {
                    minHeight: '240px',
                    backgroundColor: newBackground
                }
            };
        });
        */
    }

    render() {
        return (
            <Card ref={this.inputRef} title="CustomCard" className="text-center" onClick={this.handleClick} style={this.state.styles}>
                <Card.Img variant='top' src={this.props.image} style={{width:'90%', marginTop:'3px'}}/>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default CustomCard;


export function ensureCorrectNumberSelected(objectOfRefs, nameOfSelected, onlyOneCanBeSelected) {
    // if only 1 Card can be selected at a time, unselect any others currently selected
    if (onlyOneCanBeSelected) {
        for (const [name, ref] of Object.entries(objectOfRefs)) {
            // if this is the object that was selected, we need to flip its color (i.e. select if unselected, deselect if already selected)
            if (name === nameOfSelected) {
                const hexValue=RGBtoHex(objectOfRefs[nameOfSelected].current.style.backgroundColor);
                //console.log('selected',name)
                ref.current.style.backgroundColor = ((hexValue === colorScheme.backgroundNormal) ? colorScheme.backgroundSelected : colorScheme.backgroundNormal);
            }
            // if this is NOT the object that was selected, reset its color
            else {
                ref.current.style.backgroundColor = colorScheme.backgroundNormal;
            }
        }
    }
    // if multiple cards can be selected at once, just flip the color of the object that was selected
    else {
        /*
            We can get the current background color via objectOfRefs[nameOfSelected].current.style.backgroundColor
            That's in a formatted string, so we need to extract the rgb values and then convert them into hex, since that's how colorScheme.backgroundNormal is stored
        */
        
        // 'flip' the color
        const hexValue=RGBtoHex(objectOfRefs[nameOfSelected].current.style.backgroundColor);
        objectOfRefs[nameOfSelected].current.style.backgroundColor = ((hexValue === colorScheme.backgroundNormal) ? colorScheme.backgroundSelected : colorScheme.backgroundNormal);
    }
}

function RGBtoHex(rgbValue){
    //let tempString = objectOfRefs[nameOfSelected].current.style.backgroundColor;
    var a = rgbValue.split("(")[1].split(")")[0];
    a = a.split(",");
    var hexValue = a.map(function(x){       //For each array element
        x = parseInt(x).toString(16);       //Convert to a base16 string
        return (x.length===1) ? "0"+x : x;  //Add zero if we get only one character
    })
    hexValue = "#"+hexValue.join("");
    return hexValue;
}

