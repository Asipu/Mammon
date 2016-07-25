import React, { PropTypes } from 'react'

import {KEY_ENTER, KEY_ESC} from '../../constants'
import {amountToText, textToAmount} from '../../selectors'

class EditableInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: this.props.editing || false,
            value: this.props.value,
            old: this.props.value
        }

        this.onEdit = this.onEdit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    render() {
        return (this.state.editing) ? this.getEdit() : this.getView()
    }

    getEdit() {
        switch(this.props.type) {
            case 'date':
                return <input
                    placeholder='YYYY-MM-DD'
                    size='20'
                    defaultValue={this.state.value}
                    autoFocus={true}
                    onBlur={this.onSave}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown} />

            case 'name':
                return <input
                    placeholder='Name'
                    size='20'
                    defaultValue={this.state.value}
                    autoFocus={true}
                    onBlur={this.onSave}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown} />

            case 'amount':
                return <input
                    placeholder='Value'
                    max='1000000000'
                    type='number'
                    style={{width: '100px'}}
                    defaultValue={this.state.value}
                    autoFocus={true}
                    onBlur={this.onSave}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown} />

            default:
                return <div onClick={this.onEdit}>
                    {this.props.value ? this.props.value : <i>Unspecified</i>}
                </div>
        }
    }

    getView() {
        switch(this.props.type) {
            case 'amount' :
                return <div onClick={this.onEdit}>
                    {amountToText(textToAmount(this.props.value))}
                </div>

            default:
                return <div onClick={this.onEdit}>
                    {this.props.value ? this.props.value : <i>Unspecified</i>}
                </div>
        }
    }

    onSave() {
        this.setState({editing: false})
        if(this.props.value == this.state.value) return
        this.props.onChange(
            this.props.id,
            this.props.type === 'amount' ? textToAmount(this.state.value) : this.state.value,
            this.props.type
        )
    }

    onChange(event) {
        this.setState({value: event.target.value})
    }

    onKeyDown(event) {
        if (event.keyCode === KEY_ENTER) {
            this.onSave()
        }
        if (event.keyCode === KEY_ESC) {
            this.setState({
                value: this.state.old,
                editing: false
            })
        }
    }

    onEdit() {
        this.setState({
            editing: true,
            value: this.props.value,
            old: this.props.value
        })
    }
}

EditableInput.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
}

export default EditableInput