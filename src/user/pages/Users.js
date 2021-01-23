import React, {useEffect, useState} from 'react'

import UsersList from '../components/UsersList'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

const Users = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [loadedUsers, setLoadedUsers] = useState()

    useEffect(() => {
        const sendReq = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:5000/api/users/')
        
                const resData = await response.json()

                if (!response.ok) {
                    throw new Error(resData.message)
                }
                setLoadedUsers(resData.users)
            } catch (err) {               
              setError(err.message)
            }
            setIsLoading(false)
        }
        sendReq()
    }, [])

    const errorHandler = () => {
        setError(null)
    }

    return (
        <React.Fragment>
        <ErrorModal error={error} onClear={errorHandler} />
        {isLoading && (
            <div className="center">
                <LoadingSpinner />
            </div>
        )} 
            {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
        </React.Fragment>)
}

export default Users