import * as tuitsService
  from "../services/tuits-service"
import React, {useEffect, useRef, useState} from "react";
import {useAuth} from "../contexts/auth-context";

const TuitsList = () => {
  const [tuits, setTuits] = useState([])
  const {currentUser} = useAuth()
  const email = currentUser.email

  const tuitRef = useRef()

  const getAllTuits = async () => {
    const tuits = await tuitsService.getAllTuits()
    setTuits(tuits)
  }

  const getMyTuits = async () => {
    const tuits = await tuitsService.getMyTuits(email)
    setTuits(tuits)
  }

  useEffect(() => {
    // getAllTuits()
    getMyTuits()
  }, [])

  const handleTuit = async () => {
    let newTuit = {
      tuit: tuitRef.current.value,
      author: email
    }
    const actualInertedTuit = await tuitsService.addTuit(newTuit)
    newTuit.id = actualInertedTuit.id
    setTuits([...tuits, newTuit])
    // alert(tuitRef.current.value)
  }

  const handleDelete = async (tid) => {
    await tuitsService.deleteTuit(tid)
    setTuits(
      tuits.filter(t => t.id !== tid)
    )
  }

  return(
    <div>
      <h2>Tuits
        <button onClick={handleTuit} className="btn btn-primary rounded-pill float-end">Tuit</button>
      </h2>
      <textarea ref={tuitRef} className="form-control"></textarea>
      <ul className="list-group">
        {tuits.map(tuit =>
          <li key={tuit.id}
              className="list-group-item">
            <span onClick={() => handleDelete(tuit.id)} className="float-end">&times;</span>
            {tuit.author} {tuit.id} {tuit.tuit}
          </li>)}
      </ul>

      <pre>
      {JSON.stringify(tuits, null, 2)}
      </pre>
    </div>
  )
}

export default TuitsList