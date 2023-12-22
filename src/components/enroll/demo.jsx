import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { NewProgram } from './enrollDemo'

const myQuery = {
    results: {
        resource: 'programs',
        params: {
            pageSize: 5,
            fields: ['id', 'displayName'],
        },
    },
}

const EnrollPatientForm = () => {
    const { loading, error, data, refetch } = useDataQuery(myQuery)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }
    if (loading) {
        return <span>Loading...</span>
    }

    return (
        <div>
            <h1>Programs</h1>
            <NewProgram refetch={refetch} />
            <ul>
                {data.results.programs.map((prog) => (
                    <li key={prog.id}>{prog.displayName}</li>
                ))}
            </ul>
        </div>
    )
}

export default EnrollPatientForm;
