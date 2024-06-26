import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      hasError:false
    }
  }
  componentDidCatch(error,info)
  {
    this.setState({hasError:true})
    console.log(error,info)
  }
  render() {
    if(this.state.hasError)
        {
          return (
            <div>
              Something Error Happened
            </div>
          ) 
        }
        else
        {
          return this.props.children
        }
  }
}
