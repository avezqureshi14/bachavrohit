import React from 'react'
import { Button } from '@mui/material'

const Contact = () => {
    return (
        <>
        <div className='mt-5 container' >
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text"  className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Message</label>
                        <textarea type="text" className="form-control" id="exampleInputEmail1" placeholder="How we can help you ?"></textarea>
                    </div>


                    <Button variant="contained" color="primary" >Send</Button>

                </form>
            </div>
        </>
    )
}

export default Contact