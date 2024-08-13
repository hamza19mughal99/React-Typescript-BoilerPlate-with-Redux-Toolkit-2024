import React from 'react'

interface ISearching {
    value: string
    setValue: (searchValue: string) => void,
    handleClick: () => void
}

const Searching = ({ value, setValue, handleClick }: ISearching) => {
    return (
        <div>Searching</div>
    )
}

export default Searching