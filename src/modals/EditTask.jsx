import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTsk = ({modal,toggle,updateTask,taskObj}) => {

  const [taskName,setTaskName]=useState('')
  const [description,setDescription]=useState('')

  const handleChange = (e)=>{

    
    const {name,value}=e.target
    
    if(name==='taskName'){
      setTaskName(value)
      }else{
        setDescription(value)
      }
  }

 useEffect(()=> {
    setTaskName(taskObj.Name)
    setDescription(taskObj.Description)
    },[])

 const handleUpdate =(e)=>{
  e.preventDefault()
  let tempObj ={}
  tempObj['Name']=taskName
  tempObj['Description']=description
  updateTask(tempObj)
 }
  


  return (

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label className='form-label'> Update Task:</label>
              <input type="text" className='form-control' value={taskName} onChange={handleChange}  name='taskName'  />

            </div>

            <div className='form-group'>
              <label className='lael-control'> Description:</label>
              <textarea className='form-control' rows={5}  value={description} onChange={handleChange} name='description'></textarea>
            </div>


          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

  )
}

export default EditTsk