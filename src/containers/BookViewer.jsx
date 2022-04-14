import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { toViewModels } from '../services/CardItemAssembler.ts'

export default function BookViewer({ books, editBook, removeBook }) {

    const [cardItems, setCardItems] = useState([])

    useEffect(() => {
        setCardItems(toViewModels(books))
    }, [books]);

    return (
        React.Children.toArray(
            cardItems.map((cardItem) => <Card key={cardItem.key} item={cardItem} edit={editBook} remove={removeBook} />)
        )
    )
}
