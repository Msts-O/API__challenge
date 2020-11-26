import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'

class FormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: ''
        }
    }

    hundleSubmit = () => {
        this.props.createPost(this.state.post)
        this.setState({post:''})
    }

    onChangetext(e) {
        this.setState({post: e.target.value})
    }


    render(){
        return(
            <div>
                <form>
                    <FormGroup controlId="formBasicText">
                        <FormControl
                            type="text" value={this.state.post}
                            placeholder="Enter text"
                            onChange={ e => this.onChangetext(e)}/>
                    </FormGroup>
                </form>
                <Button type="submit" onClick={this.hundleSubmit}>投稿</Button>
            </div>
        )
    }
}

export default FormContainer